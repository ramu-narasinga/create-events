import { useRecoilState } from 'recoil';
import { eventFormState } from '../atoms';
import { CapacityIcon } from '../icons';

export const CapacityField = () => {
  const [formData, setFormData] = useRecoilState(eventFormState);

  return (
      <div className="glass rounded-2xl px-6 py-4 h-[68px] flex items-center gap-3">
        <CapacityIcon />
        <input 
          type="number" 
          placeholder="Add capacity"
          value={formData.capacity || ''}
          onChange={(e) => setFormData({ ...formData, capacity: e.target.value ? parseInt(e.target.value) : null })}
          className="flex-1 bg-transparent text-white placeholder-white/70 outline-none text-base"
          min="1"
        />
      </div>
    // </div>
  );
};
