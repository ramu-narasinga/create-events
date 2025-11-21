import { useRecoilState } from 'recoil';
import { eventFormState } from '../../atoms';
import { useState } from 'react';

export const InviteField = () => {
  const [eventForm, setEventForm] = useRecoilState(eventFormState);
  const data = (eventForm.featureData['invite'] as { guestList?: string[] }) || {};
  const guestList = data.guestList || [];
  const [newGuest, setNewGuest] = useState('');

  const addGuest = () => {
    if (!newGuest.trim()) return;

    setEventForm((prev) => ({
      ...prev,
      featureData: {
        ...prev.featureData,
        invite: {
          guestList: [...guestList, newGuest],
        },
      },
    }));

    setNewGuest('');
  };

  const removeGuest = (index: number) => {
    setEventForm((prev) => ({
      ...prev,
      featureData: {
        ...prev.featureData,
        invite: {
          guestList: guestList.filter((_, i) => i !== index),
        },
      },
    }));
  };

  return (
      <div className="glass rounded-2xl p-6">
        <div className="flex items-center justify-between mb-4">
          <label className="block text-white/60 text-sm font-medium">
            Personal Invites
          </label>
          <span className="text-yellow-300 text-xs bg-yellow-300/20 px-2 py-1 rounded-full">
            Paid Feature
          </span>
        </div>

      {guestList.length > 0 && (
        <div className="space-y-2 mb-4">
          {guestList.map((guest, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-white/5 rounded-lg p-3"
            >
              <span className="flex-1 text-white text-sm">{guest}</span>
              <button
                onClick={() => removeGuest(index)}
                className="text-red-300 hover:text-red-200 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="flex gap-2">
        <input
          type="text"
          value={newGuest}
          onChange={(e) => setNewGuest(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addGuest()}
          placeholder="Add guest email or phone..."
          className="flex-1 bg-white/5 border border-white/20 rounded-xl px-4 py-2 text-white placeholder-white/40 focus:outline-none focus:border-white/40"
        />
        <button
          onClick={addGuest}
          className="bg-white/20 hover:bg-white/30 text-white rounded-xl px-4 py-2 text-sm font-medium transition-colors"
        >
          Add
        </button>
      </div>
    </div>
  );
};
