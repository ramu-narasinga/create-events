import { useRecoilState } from 'recoil';
import { eventFormState } from '../../atoms';
import { useState } from 'react';

export const AnnouncementsField = () => {
  const [eventForm, setEventForm] = useRecoilState(eventFormState);
  const data = (eventForm.featureData['announcements'] as { announcements?: string[] }) || {};
  const announcements = data.announcements || [];
  const [newAnnouncement, setNewAnnouncement] = useState('');

  const addAnnouncement = () => {
    if (!newAnnouncement.trim()) return;

    setEventForm((prev) => ({
      ...prev,
      featureData: {
        ...prev.featureData,
        announcements: {
          announcements: [...announcements, newAnnouncement],
        },
      },
    }));

    setNewAnnouncement('');
  };

  const removeAnnouncement = (index: number) => {
    setEventForm((prev) => ({
      ...prev,
      featureData: {
        ...prev.featureData,
        announcements: {
          announcements: announcements.filter((_, i) => i !== index),
        },
      },
    }));
  };

  return (
    // <div className="rounded-2xl p-[1px]" style={{
    //   background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.2) 41%, rgba(255, 255, 255, 0.2) 58%, rgba(255, 255, 255, 0.3) 100%)'
    // }}>
      <div className="bg-[#2525258C] backdrop-blur-sm rounded-2xl p-6">
        <label className="block text-white text-sm font-medium mb-4">
          Event Announcements
        </label>

      {announcements.length > 0 && (
        <div className="space-y-2 mb-4">
          {announcements.map((announcement, index) => (
            <div
              key={index}
              className="flex items-start gap-2 bg-white/5 rounded-lg p-3"
            >
              <span className="flex-1 text-white text-sm">{announcement}</span>
              <button
                onClick={() => removeAnnouncement(index)}
                className="text-red-300 hover:text-red-200 flex-shrink-0 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="space-y-2">
        <textarea
          value={newAnnouncement}
          onChange={(e) => setNewAnnouncement(e.target.value)}
          placeholder="Add an announcement..."
          className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/40 resize-none"
          rows={3}
        />
        <button
          onClick={addAnnouncement}
          className="bg-white/20 hover:bg-white/30 text-white rounded-xl px-4 py-2 text-sm font-medium transition-colors"
        >
          Add Announcement
        </button>
      </div>
    </div>
    // </div>
  );
};
