import { useState } from "react";

export default function useBookingSearch() {
  const [form, setForm] = useState({
    checkIn: "",
    checkOut: "",
    room: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return {
    form,
    handleChange,
  };
}