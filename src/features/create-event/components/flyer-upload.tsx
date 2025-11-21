import { useRecoilState } from 'recoil';
import { eventFormState } from '../atoms';
import { useRef } from 'react';

export const FlyerUpload = () => {
  const [eventForm, setEventForm] = useRecoilState(eventFormState);
  const flyerInputRef = useRef<HTMLInputElement>(null);
  const backgroundInputRef = useRef<HTMLInputElement>(null);

  const handleFlyerUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        alert('Please upload an image file');
        return;
      }

      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('Image size should be less than 5MB');
        return;
      }

      // Store the file object in state
      setEventForm((prev) => ({
        ...prev,
        flyerImage: file,
      }));
    }
  };

  const handleBackgroundUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        alert('Please upload an image file');
        return;
      }

      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('Image size should be less than 5MB');
        return;
      }

      // Store the background image file in state
      setEventForm((prev) => ({
        ...prev,
        backgroundImage: file,
      }));
    }
  };

  const handleFlyerClick = () => {
    flyerInputRef.current?.click();
  };

  const handleBackgroundClick = () => {
    backgroundInputRef.current?.click();
  };

  const flyerPreviewUrl = eventForm.flyerImage 
    ? URL.createObjectURL(eventForm.flyerImage)
    : '/img/default-flyer.png';

  return (
    <div className="w-[520px] h-[520px] flex-shrink-0">
      <div className="h-full w-full bg-gradient-to-br from-[#e8a8c8] via-[#b8a0e0] to-[#8890e8] rounded-3xl p-8 aspect-[3/4] relative overflow-hidden shadow-xl">
        <img 
          src={flyerPreviewUrl}
          alt="Event flyer"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Pencil Edit Icon */}
        <button 
          onClick={handleFlyerClick}
          className="absolute bottom-6 right-6 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors z-10"
        >
          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
        </button>
      </div>
      
      {/* Hidden file inputs */}
      <input
        ref={flyerInputRef}
        type="file"
        accept="image/*"
        onChange={handleFlyerUpload}
        className="hidden"
      />
      <input
        ref={backgroundInputRef}
        type="file"
        accept="image/*"
        onChange={handleBackgroundUpload}
        className="hidden"
      />
      
      {/* Change Background Button */}
      <button 
        onClick={handleBackgroundClick}
        className="w-full mt-6 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-colors text-white rounded-2xl py-4 px-6 flex items-center justify-center gap-2 text-base font-medium"
      >
        <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
          <rect x="3" y="3" width="14" height="14" rx="2" />
        </svg>
        Change background
      </button>
    </div>
  );
};
