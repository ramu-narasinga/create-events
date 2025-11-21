import { useRecoilState } from 'recoil';
import { eventFormState } from '../atoms';

export const PhotoGalleryField = () => {
  const [formData, setFormData] = useRecoilState(eventFormState);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      // In a real app, you would upload these files to a server
      const fileUrls = Array.from(files).map(file => URL.createObjectURL(file));
      setFormData({ 
        ...formData, 
        photoGallery: [...formData.photoGallery, ...fileUrls] 
      });
    }
  };

  const handleRemovePhoto = (index: number) => {
    const newGallery = formData.photoGallery.filter((_, i) => i !== index);
    setFormData({ ...formData, photoGallery: newGallery });
  };

  return (
      <div className="glass rounded-2xl px-6 py-4">
        <div className="flex items-center gap-3 mb-4">
        <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
        </svg>
        <label className="flex-1 cursor-pointer">
          <span className="text-white/80 text-base">Upload photos</span>
          <input 
            type="file" 
            multiple 
            accept="image/*"
            onChange={handleFileUpload}
            className="hidden"
          />
        </label>
      </div>
      
      {formData.photoGallery.length > 0 && (
        <div className="grid grid-cols-4 gap-2">
          {formData.photoGallery.map((url, index) => (
            <div key={index} className="relative group">
              <img src={url} alt={`Photo ${index + 1}`} className="w-full h-20 object-cover rounded-lg" />
              <button
                onClick={() => handleRemovePhoto(index)}
                className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
