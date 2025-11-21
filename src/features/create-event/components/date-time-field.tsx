import { useRecoilState } from "recoil";
import { eventFormState } from "../atoms";
import { useRef } from "react";

export const DateTimeField = () => {
  const [formData, setFormData] = useRecoilState(eventFormState);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDateTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      dateTime: e.target.value,
    }));
  };

  const handleClick = () => {
    inputRef.current?.showPicker();
  };

  // Format the date time for display
  const formatDateTime = (dateTimeStr: string) => {
    if (!dateTimeStr) return "";
    const date = new Date(dateTimeStr);
    return date.toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <div
      onClick={handleClick}
      className="px-6 py-4 flex items-center gap-3 cursor-pointer border-b-1 border-[#7f7f7f66] w-full"
    >
      <span className="text-2xl " role="img" aria-label="calendar">
        🗓️
      </span>
      <input
        ref={inputRef}
        type="datetime-local"
        value={formData.dateTime}
        onChange={handleDateTimeChange}
        className="sr-only"
      />
      {formData.dateTime ? (
        <span className="text-white text-base">
          {formatDateTime(formData.dateTime)}
        </span>
      ) : (
        <span className="text-white/40 text-base">Date and time</span>
      )}
    </div>
  );
};
