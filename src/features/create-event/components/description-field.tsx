import { useRecoilState } from 'recoil';
import { eventFormState } from '../atoms';

export const DescriptionField = () => {
  const [formData, setFormData] = useRecoilState(eventFormState);

  return (
    // <div className="rounded-2xl p-[1px]" style={{
    //   background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.2) 41%, rgba(255, 255, 255, 0.2) 58%, rgba(255, 255, 255, 0.3) 100%)'
    // }}>
      <div className="glass rounded-2xl px-6 py-4">
        <textarea 
          placeholder="Describe your event"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="w-full bg-transparent text-white placeholder-white/40 outline-none text-base resize-none h-[75px]"
        />
      </div>
    // </div>
  );
};
