import { useRecoilState } from 'recoil';
import { eventFormState } from '../../atoms';

export const TextBlastsField = () => {
  const [eventForm, setEventForm] = useRecoilState(eventFormState);
  const data = (eventForm.featureData['text-blasts'] as { message?: string }) || {};

  const handleChange = (message: string) => {
    setEventForm((prev) => ({
      ...prev,
      featureData: {
        ...prev.featureData,
        'text-blasts': { message },
      },
    }));
  };

  return (
      <div className="glass rounded-2xl p-6">
        <label className="block text-white/80 text-sm font-medium mb-2">
          Text Blast Message
        </label>
        <textarea
          value={data.message || ''}
          onChange={(e) => handleChange(e.target.value)}
          placeholder="Enter the message you want to send to your guests..."
          className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/40 resize-none"
          rows={4}
        />
        <p className="text-white/60 text-xs mt-2">
          This message will be sent via SMS to all your guests
        </p>
      </div>
  );
};
