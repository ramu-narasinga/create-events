import { useRecoilState } from 'recoil';
import { eventFormState } from '../../atoms';

export const NewSectionField = () => {
  const [eventForm, setEventForm] = useRecoilState(eventFormState);
  const data = (eventForm.featureData['new-section'] as { title?: string; content?: string }) || {};

  const handleChange = (field: 'title' | 'content', value: string) => {
    setEventForm((prev) => ({
      ...prev,
      featureData: {
        ...prev.featureData,
        'new-section': {
          ...(prev.featureData['new-section'] as object || {}),
          [field]: value,
        },
      },
    }));
  };

  return (
      <div className="glass rounded-2xl p-6">
        <label className="block text-white/80 text-sm font-medium mb-4">
          Custom Section
        </label>

      <input
        type="text"
        value={data.title || ''}
        onChange={(e) => handleChange('title', e.target.value)}
        placeholder="Section title..."
        className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/40 mb-3"
      />

      <textarea
        value={data.content || ''}
        onChange={(e) => handleChange('content', e.target.value)}
        placeholder="Section content..."
        className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/40 resize-none"
        rows={4}
      />
    </div>
  );
};
