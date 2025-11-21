import { useRecoilState } from 'recoil';
import { eventFormState, isSubmittingState } from '../atoms';
import { createEvent } from '../api';

export const GoLiveButton = () => {
  const [formData] = useRecoilState(eventFormState);
  const [isSubmitting, setIsSubmitting] = useRecoilState(isSubmittingState);

  const handleGoLive = async () => {
    setIsSubmitting(true);
    try {
      const response = await createEvent(formData);
      console.log('Event created successfully:', response);
      // TODO: Navigate to success page or show success message
      alert(`Event is live! URL: ${response.eventUrl}`);
    } catch (error) {
      console.error('Failed to create event:', error);
      alert('Failed to create event. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <button 
      onClick={handleGoLive}
      disabled={isSubmitting}
      className="w-full golive border border-white/20 hover:bg-white/20 rounded-2xl px-5 py-2 flex flex-col items-center justify-center text-white text-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <span>🚀</span>
      <span className="text-[#30D158] font-semibold text-base">
        {isSubmitting ? 'Publishing...' : 'Go live'}
      </span>
    </button>
  );
};
