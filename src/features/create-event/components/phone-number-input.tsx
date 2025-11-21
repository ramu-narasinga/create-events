import { useRecoilState } from "recoil";
import { eventFormState } from "../atoms";
import { saveDraft } from "../api";
import { PhoneIcon, ArrowRightIcon } from "../icons";

export const PhoneNumberInput = () => {
  const [formData, setFormData] = useRecoilState(eventFormState);

  const handleSubmit = async () => {
    if (!formData.phoneNumber) {
      alert("Please enter a phone number");
      return;
    }

    try {
      const result = await saveDraft(formData);
      console.log("Draft saved:", result);
      alert("Draft saved successfully!");
    } catch (error) {
      console.error("Failed to save draft:", error);
      alert("Failed to save draft. Please try again.");
    }
  };

  return (
    <div className="glass h-[64px] rounded-2xl px-6 py-4 flex items-center gap-3">
      <PhoneIcon />
      <input
        type="text"
        placeholder="Enter phone number to save the draft"
        value={formData.phoneNumber}
        onChange={(e) =>
          setFormData({ ...formData, phoneNumber: e.target.value })
        }
        className="flex-1 bg-transparent text-white placeholder-white outline-none text-base"
      />
      <button
        onClick={handleSubmit}
        className="w-8 h-8 arrow border border-white/20 hover:bg-white/20 rounded-xl flex items-center justify-center transition-colors"
      >
        <ArrowRightIcon />
      </button>
    </div>
  );
};
