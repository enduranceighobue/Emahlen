import { useState, useRef, useEffect } from "react";

import {
  ref,
  onValue,
} from "firebase/database";


import {
  MapPin,
  Clock3,
  ChevronRight,
  CheckCircle2,
  Upload,
} from "lucide-react";

import { db } from "../firebase";

import { useNavigate } from "react-router-dom";

export default function CareerPage() {

  const navigate = useNavigate();

  const [selectedJob, setSelectedJob] = useState("");
  const [cvFile, setCvFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [cvSubmitted, setCvSubmitted] = useState(false);
  const [applying, setApplying] = useState(false);
  const [toast, setToast] = useState(null);

  const fileInputRef = useRef(null);

  // Your actual Formspree endpoint
  const FORMSPREE_URL = "https://formspree.io/f/xnpajvzq";

  const CLOUDINARY_CLOUD_NAME = "wa0qqnnc";
  const CLOUDINARY_UPLOAD_PRESET = "emahlen_cv_upload";

  const [jobs, setJobs] = useState([]);
  const [loadingJobs, setLoadingJobs] = useState(true);

//   const jobsRef = ref(db, "careerPositions");

// onValue(jobsRef, (snapshot) => {
//   const data = snapshot.val();

//   if (!data) {
//     setJobs([]);
//     return;
//   }

//   const availableJobs = Object.entries(data)
//     .map(([id, job]) => ({
//       id,
//       ...job,
//     }))
//     .filter((job) => job.isActive);

//   setJobs(availableJobs);
// });


  const showToast = (message, type = "success") => {
    setToast({
      message,
      type,
    });

    setTimeout(() => {
      setToast(null);
    }, 3000);
  };

  // --------------------------------------------------
  // JOB SELECTION
  // --------------------------------------------------

  const handleJobChange = (e) => {
    const job = e.target.value;

    setSelectedJob(job);
    setCvFile(null);
    setCvSubmitted(false);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // --------------------------------------------------
  // SUBMIT CV BUTTON
  // --------------------------------------------------

  const handleSubmitCV = () => {
    if (!selectedJob) {
      showToast("Please select an available job.", "error");
      return;
    }

    if (cvSubmitted || uploading) {
      return;
    }

    fileInputRef.current?.click();
  };

  // --------------------------------------------------
  // FILE SELECTED
  // --------------------------------------------------

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    // Check file type
    if (!allowedTypes.includes(file.type)) {
      showToast(
        "Please upload a PDF, DOC or DOCX file.",
        "error"
      );

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }

      return;
    }

    // Check file size
    if (file.size > 5 * 1024 * 1024) {
      showToast(
        "CV must not be larger than 5MB.",
        "error"
      );

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }

      return;
    }

    setCvFile(file);
    setUploading(true);

    try {
      // ==========================================
      // 1. UPLOAD CV TO CLOUDINARY
      // ==========================================

      const cloudinaryData = new FormData();

      cloudinaryData.append("file", file);

      cloudinaryData.append(
        "upload_preset",
        CLOUDINARY_UPLOAD_PRESET
      );

      const cloudinaryResponse = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/auto/upload`,
        {
          method: "POST",
          body: cloudinaryData,
        }
      );

      const cloudinaryResult =
        await cloudinaryResponse.json();

      console.log(
        "Cloudinary response:",
        cloudinaryResult
      );

      if (!cloudinaryResponse.ok) {
        throw new Error(
          cloudinaryResult?.error?.message ||
          "CV upload failed."
        );
      }

      // Cloudinary URL
      const cvUrl = cloudinaryResult.secure_url;

      console.log("CV URL:", cvUrl);

      // ==========================================
      // 2. SEND CV URL TO FORMSPREE
      // ==========================================

      const formData = new FormData();

      formData.append(
        "position",
        selectedJob
      );

      formData.append(
        "cv_url",
        cvUrl
      );

      formData.append(
        "cv_filename",
        file.name
      );

      formData.append(
        "_subject",
        `Career Application - ${selectedJob}`
      );

      const formspreeResponse = await fetch(
        FORMSPREE_URL,
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      const formspreeResult =
        await formspreeResponse.json();

      console.log(
        "Formspree response:",
        formspreeResult
      );

      if (!formspreeResponse.ok) {
        throw new Error(
          formspreeResult?.errors?.[0]?.message ||
          formspreeResult?.error ||
          "Unable to send application."
        );
      }

      // ==========================================
      // 3. SUCCESS
      // ==========================================

      setCvSubmitted(true);

      showToast(
        "CV submitted successfully."
      );

    } catch (error) {
      console.error(
        "Application submission error:",
        error
      );

      setCvFile(null);
      setCvSubmitted(false);

      showToast(
        error.message ||
        "Unable to submit CV.",
        "error"
      );

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }

    } finally {
      setUploading(false);
    }
  };

  // --------------------------------------------------
  // APPLY NOW
  // --------------------------------------------------

  const handleApply = () => {
    if (!selectedJob) {
      showToast(
        "Please select an available job.",
        "error"
      );
      return;
    }

    if (!cvSubmitted) {
      showToast(
        "Please submit your CV first.",
        "error"
      );
      return;
    }

    setApplying(true);

    setTimeout(() => {
      setApplying(false);

      showToast(
        `Application for ${selectedJob} submitted successfully.`
      );

      // Reset everything
      setTimeout(() => {
        setSelectedJob("");
        setCvFile(null);
        setCvSubmitted(false);

        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
      }, 1500);
    }, 700);
  };

  useEffect(() => {
  const jobsRef = ref(db, "careerPositions");

  const unsubscribe = onValue(
    jobsRef,
    (snapshot) => {
      const data = snapshot.val();

      if (!data) {
        setJobs([]);
        setLoadingJobs(false);
        return;
      }

      const availableJobs = Object.entries(data)
        .map(([id, job]) => ({
          id,
          ...job,
        }))
        .filter(
          (job) => job.isActive === true
        );

      setJobs(availableJobs);
      setLoadingJobs(false);
    },
    (error) => {
      console.error(
        "Error loading jobs:",
        error
      );

      showToast(
        "Unable to load available positions.",
        "error"
      );

      setLoadingJobs(false);
    }
  );

  return () => unsubscribe();
}, []);

  return (
    <main>
      {/* ================================================
          HERO
      ================================================= */}

      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <img
          src="/learnmoreimg.jpg"
          alt="Emahlen Hotel"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-white text-3xl md:text-5xl font-serif leading-tight">
            Build Your Future
            <br />
            With Emahlen Hotel
          </h1>

          <p className="mt-8 text-white/90 text-lg leading-8">
            Join a passionate team dedicated to delivering
            unforgettable hospitality experiences while building
            a rewarding career.
          </p>

          <a
            href="#jobs"
            className="inline-flex items-center gap-3 mt-10 bg-[#C8A44D] hover:bg-[#b99538] transition px-6 py-3 rounded-xl text-white"
          >
            View Open Positions
            <ChevronRight size={20} />
          </a>
        </div>
      </section>

      {/* ================================================
          CAREERS
      ================================================= */}

      <section
        id="jobs"
        className="bg-black py-24"
      >
        <div className="max-w-5xl mx-auto px-6">

          <div className="text-center">
            <p className="uppercase tracking-[6px] text-[#C8A44D]">
              Careers
            </p>

            <h2 className="text-white text-4xl md:text-5xl font-serif mt-4">
              Join Our Team
            </h2>

            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              Explore available opportunities and take the next
              step towards building your career with Emahlen Hotel.
            </p>
          </div>

          {/* APPLICATION BAR */}

          <div className="mt-16 bg-[#161616] border border-[#C8A44D]/30 rounded-2xl p-6">

            <div className="flex flex-col md:flex-row gap-3 items-end">

              {/* AVAILABLE JOBS */}

              <div className="flex-1 w-full">
                <label className="block text-sm text-gray-400 mb-2">
                  Available Jobs
                </label>

                <select
                  value={selectedJob}
                  onChange={handleJobChange}
                  className="w-full bg-[#222] border border-[#C8A44D]/30 text-white rounded-xl px-5 py-4 outline-none focus:border-[#C8A44D] transition"
                >
                  <option value="">
                    {loadingJobs
                      ? "Loading available positions..."
                      : jobs.length === 0
                        ? "No positions available"
                        : "Select a position"}
                  </option>

                  {jobs.map((job) => (
                    <option
                      key={job.id}
                      value={job.title}
                    >
                      {job.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* HIDDEN FILE INPUT */}

              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="hidden"
              />

              {/* SUBMIT CV */}

              <button
                type="button"
                onClick={handleSubmitCV}
                disabled={
                  !selectedJob ||
                  uploading ||
                  cvSubmitted
                }
                className={`w-full md:w-auto min-w-[150px] px-6 py-4 rounded-xl font-medium transition flex items-center justify-center gap-2 ${cvSubmitted
                  ? "bg-green-600 text-white"
                  : uploading
                    ? "bg-[#C8A44D] text-white"
                    : !selectedJob
                      ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                      : "bg-white text-black hover:bg-gray-200"
                  }`}
              >
                {uploading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Uploading...
                  </>
                ) : cvSubmitted ? (
                  <>
                    <CheckCircle2 size={18} />
                    CV Submitted
                  </>
                ) : (
                  <>
                    <Upload size={18} />
                    Submit CV
                  </>
                )}
              </button>

              {/* APPLY NOW */}

              <button
                type="button"
                onClick={handleApply}
                disabled={!cvSubmitted || applying}
                className={`w-full md:w-auto min-w-[130px] px-7 py-4 rounded-xl font-medium transition ${cvSubmitted && !applying
                  ? "bg-[#C8A44D] hover:bg-[#b99538] text-white"
                  : "bg-[#333] text-gray-500 cursor-not-allowed"
                  }`}
              >
                {applying
                  ? "Applying..."
                  : "Apply Now"}
              </button>
            </div>

            {/* SELECTED JOB / FILE */}

            {selectedJob && (
              <div className="mt-4 text-sm text-gray-400">
                Applying for:{" "}
                <span className="text-white font-medium">
                  {selectedJob}
                </span>

                {cvFile && (
                  <span className="ml-3 text-green-400">
                    • {cvFile.name}
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ================================================
          HIRING PROCESS
      ================================================= */}

      <section className="py-24 max-w-7xl mx-auto px-6 bg-[#fcfaf4]">
        <div className="text-center">
          <p className="uppercase tracking-[6px] text-[#C8A44D]">
            Hiring Process
          </p>

          <h2 className="text-3xl font-serif mt-4 text-black">
            Your Journey Starts Here
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-4 mt-20 text-black">
          {[
            "Submit Application",
            "HR Review",
            "Interview",
            "Welcome To Emahlen",
          ].map((step, index) => (
            <div
              key={index}
              className="text-center"
            >
              <div className="w-14 h-14 rounded-full bg-[#C8A44D] text-white flex items-center justify-center mx-auto text-xl font-bold">
                {index + 1}
              </div>

              <h3 className="font-serif text-2xl mt-8">
                {step}
              </h3>

              <CheckCircle2
                className="mx-auto mt-6 text-[#C8A44D]"
                size={30}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ================================================
          TOAST
      ================================================= */}

      {toast && (
        <div className="fixed bottom-6 right-6 z-[9999]">
          <div
            className={`flex items-center gap-3 px-5 py-4 rounded-xl shadow-xl text-sm font-medium ${toast.type === "error"
              ? "bg-red-600 text-white"
              : "bg-green-600 text-white"
              }`}
          >
            <CheckCircle2 size={18} />

            <span>{toast.message}</span>
          </div>
        </div>
      )}
    </main>
  );
}