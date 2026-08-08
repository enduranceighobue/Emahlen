import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  ref,
  onValue,
  push,
  update,
} from "firebase/database";

import {
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import {
  Plus,
  BriefcaseBusiness,
  MapPin,
  Clock3,
  Power,
  LogOut,
  X,
  CheckCircle2,
  AlertCircle,
  Users,
} from "lucide-react";

import { db, auth } from "../firebase";

export default function CareerManagement() {
  const navigate = useNavigate();

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showAddJob, setShowAddJob] = useState(false);

  const ADMIN_UID = "bsIndQhSVpd0Tz9INQ0RVaDGq1Y2";

 const [form, setForm] = useState({
  title: "",
  department: "",
  type: "Full Time",
  location: "",
  isActive: true,
});

  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("success");

  // ==================================================
  // AUTH CHECK
  // ==================================================

  useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (!user) {
      navigate("/career-login");
      return;
    }

    if (user.uid !== ADMIN_UID) {
      navigate("/career");
    }
  });

  return () => unsubscribe();
}, [navigate]);

  // ==================================================
  // LOAD JOBS
  // ==================================================

  useEffect(() => {
    const jobsRef = ref(db, "careerPositions");

    const unsubscribe = onValue(
      jobsRef,
      (snapshot) => {
        const data = snapshot.val();

        if (!data) {
          setJobs([]);
          setLoading(false);
          return;
        }

        const jobsList = Object.entries(data)
          .map(([id, job]) => ({
            id,
            ...job,
          }))
          .sort((a, b) => {
            const aTime = a.createdAt || 0;
            const bTime = b.createdAt || 0;

            return bTime - aTime;
          });

        setJobs(jobsList);
        setLoading(false);
      },
      (error) => {
        console.error("Firebase jobs error:", error);

        showMessage(
          "Unable to load career positions.",
          "error"
        );

        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  // ==================================================
  // MESSAGE
  // ==================================================

  const showMessage = (
    text,
    type = "success"
  ) => {
    setMessage(text);
    setMessageType(type);

    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  // ==================================================
  // FORM CHANGE
  // ==================================================

  const handleChange = (e) => {
  const { name, value, type, checked } = e.target;

  setForm((prev) => ({
    ...prev,
    [name]: type === "checkbox" ? checked : value,
  }));
};

  // ==================================================
  // ADD JOB
  // ==================================================

  const handleAddJob = async (e) => {
    e.preventDefault();

    if (!form.title.trim()) {
      showMessage(
        "Please enter a job title.",
        "error"
      );
      return;
    }

    if (!form.department.trim()) {
      showMessage(
        "Please enter a department.",
        "error"
      );
      return;
    }

    if (!form.location.trim()) {
      showMessage(
        "Please enter a location.",
        "error"
      );
      return;
    }

    setSaving(true);

    try {
      const jobsRef = ref(db, "careerPositions");

     const newJob = {
  title: form.title.trim(),
  department: form.department.trim(),
  type: form.type,
  location: form.location.trim(),
  isActive: form.isActive,
  createdAt: Date.now(),
};

      await push(jobsRef, newJob);

      showMessage(
        "Career position added successfully."
      );

     setForm({
  title: "",
  department: "",
  type: "Full Time",
  location: "",
  isActive: true,
});

      setShowAddJob(false);

    } catch (error) {
      console.error(
        "Error adding job:",
        error
      );

      showMessage(
        "Unable to add career position.",
        "error"
      );
    } finally {
      setSaving(false);
    }
  };

  // ==================================================
  // TOGGLE JOB STATUS
  // ==================================================

  const toggleJobStatus = async (job) => {
    try {
      const jobRef = ref(
        db,
        `careerPositions/${job.id}`
      );

      await update(jobRef, {
        isActive: !job.isActive,
      });

      showMessage(
        job.isActive
          ? "Position deactivated."
          : "Position reactivated."
      );

    } catch (error) {
      console.error(
        "Error updating job:",
        error
      );

      showMessage(
        "Unable to update position.",
        "error"
      );
    }
  };

  // ==================================================
  // LOGOUT
  // ==================================================

  const handleLogout = async () => {
    try {
      await signOut(auth);

      navigate("/career-login");

    } catch (error) {
      console.error(
        "Logout error:",
        error
      );
    }
  };

  useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    console.log("CURRENT USER:", user);

    if (!user) {
      navigate("/career-login");
      return;
    }

    console.log("USER EMAIL:", user.email);
    console.log("USER UID:", user.uid);
  });

  return () => unsubscribe();
}, [navigate]);

  // ==================================================
  // STATS
  // ==================================================

  const activeJobs = jobs.filter(
    (job) => job.isActive === true
  ).length;

  const inactiveJobs = jobs.filter(
    (job) => job.isActive === false
  ).length;

  // ==================================================
  // UI
  // ==================================================

  return (
    <div className="min-h-screen bg-[#f7f5ef] mt-20">

      {/* ================================================
          HEADER
      ================================================= */}

      <header className="bg-black text-white border-b border-white/10">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-5">

          <div className="flex items-center justify-between">

            {/* BRAND */}

            <div>
              <p className="text-[#C8A44D] text-[10px] uppercase tracking-[4px]">
                Emahlen Hotel
              </p>

              <h1 className="text-xl sm:text-2xl font-serif mt-1">
                Career Management
              </h1>
            </div>

            {/* LOGOUT */}

            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-white/10 text-white/70 hover:text-white hover:bg-white/5 transition text-sm"
            >
              <LogOut size={16} />

              <span className="hidden sm:block">
                Logout
              </span>
            </button>

          </div>

        </div>

      </header>


      {/* ================================================
          MAIN
      ================================================= */}

      <main className="max-w-7xl mx-auto px-5 sm:px-8 py-8">

        {/* ================================================
            PAGE HEADER
        ================================================= */}

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">

          <div>

            <p className="text-[#C8A44D] text-xs uppercase tracking-[3px] font-medium">
              Administration
            </p>

            <h2 className="text-3xl sm:text-4xl font-serif text-black mt-2">
              Career Positions
            </h2>

            <p className="text-gray-500 mt-2 text-sm">
              Manage the positions displayed on the
              public career page.
            </p>

          </div>

          <button
            onClick={() => setShowAddJob(true)}
            className="inline-flex items-center justify-center gap-2 bg-black text-white px-5 py-3 rounded-xl hover:bg-[#C8A44D] transition"
          >
            <Plus size={18} />

            Add Position
          </button>

        </div>


        {/* ================================================
            STATS
        ================================================= */}

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">

          {/* TOTAL */}

          <div className="bg-white border border-gray-200 rounded-2xl p-5">

            <div className="flex items-center justify-between">

              <div>
                <p className="text-xs uppercase tracking-wider text-gray-400">
                  Total Positions
                </p>

                <p className="text-3xl font-semibold mt-2">
                  {jobs.length}
                </p>
              </div>

              <div className="w-11 h-11 rounded-xl bg-black text-white flex items-center justify-center">
                <BriefcaseBusiness size={20} />
              </div>

            </div>

          </div>


          {/* ACTIVE */}

          <div className="bg-white border border-gray-200 rounded-2xl p-5">

            <div className="flex items-center justify-between">

              <div>
                <p className="text-xs uppercase tracking-wider text-gray-400">
                  Active
                </p>

                <p className="text-3xl font-semibold mt-2 text-green-600">
                  {activeJobs}
                </p>
              </div>

              <div className="w-11 h-11 rounded-xl bg-green-50 text-green-600 flex items-center justify-center">
                <CheckCircle2 size={20} />
              </div>

            </div>

          </div>


          {/* INACTIVE */}

          <div className="bg-white border border-gray-200 rounded-2xl p-5">

            <div className="flex items-center justify-between">

              <div>
                <p className="text-xs uppercase tracking-wider text-gray-400">
                  Inactive
                </p>

                <p className="text-3xl font-semibold mt-2 text-gray-500">
                  {inactiveJobs}
                </p>
              </div>

              <div className="w-11 h-11 rounded-xl bg-gray-100 text-gray-500 flex items-center justify-center">
                <Power size={20} />
              </div>

            </div>

          </div>

        </div>


        {/* ================================================
            POSITIONS
        ================================================= */}

        <div className="mt-8">

          <div className="flex items-center justify-between mb-4">

            <h3 className="font-semibold text-lg">
              All Positions
            </h3>

            <span className="text-xs text-gray-400">
              {jobs.length} position
              {jobs.length !== 1 ? "s" : ""}
            </span>

          </div>


          {/* LOADING */}

          {loading && (
            <div className="bg-white rounded-2xl border border-gray-200 p-10 text-center">

              <div className="w-7 h-7 border-2 border-gray-200 border-t-[#C8A44D] rounded-full animate-spin mx-auto" />

              <p className="text-sm text-gray-400 mt-3">
                Loading positions...
              </p>

            </div>
          )}


          {/* EMPTY */}

          {!loading && jobs.length === 0 && (
            <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center">

              <BriefcaseBusiness
                size={35}
                className="mx-auto text-gray-300"
              />

              <h3 className="font-semibold mt-4">
                No career positions
              </h3>

              <p className="text-sm text-gray-400 mt-2">
                Add your first position to make it
                available on the career page.
              </p>

            </div>
          )}


          {/* JOB LIST */}

          {!loading && jobs.length > 0 && (
            <div className="space-y-3">

              {jobs.map((job) => (

                <div
                  key={job.id}
                  className={`bg-white border rounded-2xl p-5 transition ${
                    job.isActive
                      ? "border-gray-200"
                      : "border-gray-200 opacity-70"
                  }`}
                >

                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">

                    {/* JOB INFO */}

                    <div className="flex items-start gap-4">

                      <div
                        className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${
                          job.isActive
                            ? "bg-[#C8A44D]/10 text-[#C8A44D]"
                            : "bg-gray-100 text-gray-400"
                        }`}
                      >
                        <BriefcaseBusiness size={20} />
                      </div>

                      <div>

                        <div className="flex flex-wrap items-center gap-2">

                          <h4 className="font-semibold text-black">
                            {job.title}
                          </h4>

                          {job.isActive ? (
                            <span className="text-[10px] uppercase tracking-wider bg-green-50 text-green-600 px-2 py-1 rounded-full">
                              Active
                            </span>
                          ) : (
                            <span className="text-[10px] uppercase tracking-wider bg-gray-100 text-gray-500 px-2 py-1 rounded-full">
                              Inactive
                            </span>
                          )}

                        </div>

                        <p className="text-sm text-gray-500 mt-1">
                          {job.department}
                        </p>

                        <div className="flex flex-wrap gap-4 mt-3 text-xs text-gray-400">

                          <span className="flex items-center gap-1.5">
                            <MapPin size={14} />
                            {job.location}
                          </span>

                          <span className="flex items-center gap-1.5">
                            <Clock3 size={14} />
                            {job.type}
                          </span>

                        </div>

                      </div>

                    </div>


                    {/* ACTION */}

                    <button
                      onClick={() =>
                        toggleJobStatus(job)
                      }
                      className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition ${
                        job.isActive
                          ? "bg-red-50 text-red-600 hover:bg-red-100"
                          : "bg-green-50 text-green-600 hover:bg-green-100"
                      }`}
                    >

                      <Power size={16} />

                      {job.isActive
                        ? "Deactivate"
                        : "Reactivate"}

                    </button>

                  </div>

                </div>

              ))}

            </div>
          )}

        </div>

      </main>


      {/* ================================================
          ADD POSITION MODAL
      ================================================= */}

     {/* ================================================
    ADD POSITION MODAL
================================================= */}

{showAddJob && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">

    {/* MODAL */}
    <div className="w-full max-w-md bg-white rounded-xl shadow-2xl overflow-hidden">

      {/* ================================
          MODAL HEADER
      ================================= */}

      <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">

        <div>
          <h3 className="text-lg font-semibold text-black">
            Add Position
          </h3>

          <p className="text-xs text-gray-400 mt-0.5">
            Create a new career opportunity
          </p>
        </div>

        {/* CLOSE BUTTON */}

        <button
          type="button"
          onClick={() => setShowAddJob(false)}
          className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-black hover:bg-gray-100 transition"
        >
          <X size={18} />
        </button>

      </div>


      {/* ================================
          FORM
      ================================= */}

      <form
        onSubmit={handleAddJob}
        className="px-5 py-5"
      >

        <div className="space-y-3.5">

          {/* JOB TITLE */}

          <div>

            <label className="block text-xs font-medium text-gray-700 mb-1.5">
              Job Title
            </label>

            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="e.g. Front Desk Officer"
              className="w-full h-10 px-3 text-sm text-black rounded-lg border border-gray-200 bg-white outline-none transition focus:border-[#C8A44D] focus:ring-1 focus:ring-[#C8A44D]/20"
            />

          </div>


          {/* DEPARTMENT */}

          <div>

            <label className="block text-xs font-medium text-gray-700 mb-1.5">
              Department
            </label>

            <input
              type="text"
              name="department"
              value={form.department}
              onChange={handleChange}
              placeholder="e.g. Guest Services"
              className="w-full h-10 px-3 text-sm text-black rounded-lg border border-gray-200 bg-white outline-none transition focus:border-[#C8A44D] focus:ring-1 focus:ring-[#C8A44D]/20"
            />

          </div>


          {/* TYPE + LOCATION */}

          <div className="grid grid-cols-2 gap-3">

            {/* TYPE */}

            <div>

              <label className="block text-xs font-medium text-gray-700 mb-1.5">
                Employment Type
              </label>

              <select
                name="type"
                value={form.type}
                onChange={handleChange}
                className="w-full h-10 px-3 text-sm text-black rounded-lg border border-gray-200 bg-white outline-none transition focus:border-[#C8A44D] focus:ring-1 focus:ring-[#C8A44D]/20"
              >
                <option value="Full Time">
                  Full Time
                </option>

                <option value="Part Time">
                  Part Time
                </option>

                <option value="Contract">
                  Contract
                </option>

                <option value="Internship">
                  Internship
                </option>
              </select>

            </div>


            {/* LOCATION */}

            <div>

              <label className="block text-xs font-medium text-gray-700 mb-1.5">
                Location
              </label>

              <input
                type="text"
                name="location"
                value={form.location}
                onChange={handleChange}
                placeholder="e.g. Awka"
                className="w-full h-10 px-3 text-black text-sm rounded-lg border border-gray-200 bg-white outline-none transition focus:border-[#C8A44D] focus:ring-1 focus:ring-[#C8A44D]/20"
              />

            </div>

          </div>


          {/* ACTIVE STATUS */}

          <div className="flex items-center justify-between rounded-lg bg-gray-50 border border-gray-100 px-3.5 py-3">

            <div>

              <p className="text-xs font-medium text-gray-800">
                Position Status
              </p>

              <p className="text-[11px] text-gray-400 mt-0.5">
                Active positions appear on the public career page.
              </p>

            </div>

            <label className="flex items-center gap-2 cursor-pointer">

              <input
                type="checkbox"
                name="isActive"
                checked={form.isActive}
                onChange={handleChange}
                className="w-4 h-4 accent-[#C8A44D] cursor-pointer"
              />

              <span
                className={`text-xs font-medium ${
                  form.isActive
                    ? "text-green-600"
                    : "text-gray-400"
                }`}
              >
                {form.isActive ? "Active" : "Inactive"}
              </span>

            </label>

          </div>

        </div>


        {/* ================================
            BUTTONS
        ================================= */}

        <div className="flex items-center justify-end gap-2 mt-5 pt-4 border-t border-gray-100">

          <button
            type="button"
            onClick={() => setShowAddJob(false)}
            className="px-4 py-2 rounded-lg border border-gray-200 text-xs font-medium text-gray-600 hover:bg-gray-50 transition"
          >
            Cancel
          </button>

          <button
            type="submit"
            disabled={saving}
            className="px-4 py-2 rounded-lg bg-black text-white text-xs font-medium hover:bg-[#C8A44D] hover:text-black transition disabled:opacity-50 flex items-center gap-2"
          >

            {saving ? (
              <>
                <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Adding...
              </>
            ) : (
              <>
                <Plus size={14} />
                Add Position
              </>
            )}

          </button>

        </div>

      </form>

    </div>

  </div>
)}

      {/* ================================================
          MESSAGE
      ================================================= */}

      {message && (

        <div className="fixed bottom-5 right-5 z-[100]">

          <div
            className={`flex items-center gap-3 px-5 py-3.5 rounded-xl shadow-xl text-sm ${
              messageType === "error"
                ? "bg-red-600 text-white"
                : "bg-green-600 text-white"
            }`}
          >

            {messageType === "error" ? (
              <AlertCircle size={18} />
            ) : (
              <CheckCircle2 size={18} />
            )}

            {message}

          </div>

        </div>

      )}

    </div>
  );
}