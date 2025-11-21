
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { eventFormState } from '../atoms';
import { LinkOutlineIcon } from '../icons';

export const LinksField = () => {
  const [formData, setFormData] = useRecoilState(eventFormState);
  const [newLink, setNewLink] = useState('');

  const handleAddLink = () => {
    if (newLink.trim()) {
      setFormData({ 
        ...formData, 
        links: [...formData.links, newLink.trim()] 
      });
      setNewLink('');
    }
  };

  const handleRemoveLink = (index: number) => {
    const newLinks = formData.links.filter((_, i) => i !== index);
    setFormData({ ...formData, links: newLinks });
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddLink();
    }
  };

  return (
      <div className="glass rounded-2xl px-6 py-4">
        <div className="flex items-center gap-3 mb-3">
          <LinkOutlineIcon />
          <input 
            type="url" 
            placeholder="Add link"
            value={newLink}
            onChange={(e) => setNewLink(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1 bg-transparent text-white placeholder-white/70 outline-none text-base"
          />
        </div>
        
        <button 
          onClick={handleAddLink}
          className="w-full flex items-center justify-center gap-2 text-white/80 text-base py-2"
        >
          <span className="text-xl">+</span>
          <span>Add another link</span>
        </button>

        {formData.links.length > 0 && (
          <div className="space-y-2 mt-4">
            {formData.links.map((link, index) => (
              <div key={index} className="flex items-center justify-between bg-white/5 rounded-lg px-3 py-2">
                <a 
                  href={link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/80 text-sm truncate flex-1 hover:text-white transition-colors"
                >
                  {link}
                </a>
                <button
                  onClick={() => handleRemoveLink(index)}
                  className="ml-2 text-red-400 hover:text-red-300 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
  );
};
