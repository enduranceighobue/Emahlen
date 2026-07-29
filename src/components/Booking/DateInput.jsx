import { CalendarDays } from "lucide-react";

export default function DateInput({
  label,
  name,
  value,
  onChange,
  min,
}) {
  return (
    <div
      className="
        border border-[#C8A44D]
        rounded-md
        px-4
        py-3
        h-[74px]
        flex
        flex-col
        justify-center
      "
    >
      <p className="text-sm text-gray-400 mb-2">
        {label}
      </p>

      <div className="flex items-center gap-2">
        <CalendarDays
          size={18}
          className="text-[#C8A44D]"
        />

        <input
          type="date"
          name={name}
          value={value}
          min={min}
          onChange={onChange}
          className="
            w-full
            bg-transparent
            text-white
            outline-none
            appearance-none
            [&::-webkit-calendar-picker-indicator]:invert
            [&::-webkit-calendar-picker-indicator]:cursor-pointer
          "
        />
      </div>
    </div>
  );
}