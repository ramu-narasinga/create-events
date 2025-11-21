import { useRecoilState } from 'recoil';
import { eventFormState } from '../atoms';

export const CostField = () => {
  const [formData, setFormData] = useRecoilState(eventFormState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      costPerPerson: e.target.value,
    }));
  };

  return (
    <div className="px-6 py-4 flex items-center gap-3 w-full">
      <span className="text-2xl mr-3 flex-shrink-0 flex items-center h-full" role="img" aria-label="ticket">💵</span> 
      <input
        type="number"
        value={formData.costPerPerson}
        onChange={handleChange}
        min="0"
        step="1"
        placeholder="Cost per person"
        className="flex-1 bg-transparent text-white/80 text-base placeholder-white/40 focus:outline-none"
      />
    </div>
  );
};
