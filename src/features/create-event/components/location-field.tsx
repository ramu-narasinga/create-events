import { useRecoilState } from 'recoil';
import { eventFormState } from '../atoms';

export const LocationField = () => {
  const [formData, setFormData] = useRecoilState(eventFormState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      location: e.target.value,
    }));
  };

  return (
    <div className="px-6 py-4 flex items-center gap-3 w-full border-b-1 border-[#7f7f7f66]">
      <span className="text-2xl min-w-[32px] flex items-center" role="img" aria-label="location">📍</span>
      <input
        type="text"
        value={formData.location}
        onChange={handleChange}
        placeholder="Location"
        className="flex-1 bg-transparent text-white/80 text-base placeholder-white/40 focus:outline-none"
      />
    </div>
  );
};
