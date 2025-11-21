import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { eventFormState, showAdditionalFieldsState } from '../atoms';
import { getFeatures, type Feature } from '../api/features';

export const ActionButtons = () => {
  const [features, setFeatures] = useState<Feature[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const [eventForm, setEventForm] = useRecoilState(eventFormState);
  const [showFields, setShowFields] = useRecoilState(showAdditionalFieldsState);

  useEffect(() => {
    const fetchFeatures = async () => {
      try {
        const { features: fetchedFeatures } = await getFeatures();
        setFeatures(fetchedFeatures);
      } catch (error) {
        console.error('Failed to fetch features:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeatures();
  }, []);

  const handleToggleFeature = (featureId: string) => {
    // Handle legacy fields that have their own state
    if (featureId === 'capacity') {
      setShowFields((prev) => ({ ...prev, capacity: !prev.capacity }));
      return;
    }
    if (featureId === 'photo-gallery') {
      setShowFields((prev) => ({ ...prev, photoGallery: !prev.photoGallery }));
      return;
    }
    if (featureId === 'links') {
      setShowFields((prev) => ({ ...prev, links: !prev.links }));
      return;
    }

    // Handle new features with selectedFeatures state
    setEventForm((prev) => {
      const isSelected = prev.selectedFeatures.includes(featureId);
      
      if (isSelected) {
        // Remove feature
        return {
          ...prev,
          selectedFeatures: prev.selectedFeatures.filter((id) => id !== featureId),
        };
      } else {
        // Add feature
        return {
          ...prev,
          selectedFeatures: [...prev.selectedFeatures, featureId],
        };
      }
    });
  };

  const isFeatureSelected = (featureId: string) => {
    if (featureId === 'capacity') return showFields.capacity;
    if (featureId === 'photo-gallery') return showFields.photoGallery;
    if (featureId === 'links') return showFields.links;
    return eventForm.selectedFeatures.includes(featureId);
  };

  if (loading) {
    return (
      <div className="flex items-center gap-3">
        <span className="text-white/60 text-sm">Loading features...</span>
      </div>
    );
  }

  // Filter out selected features
  const unselectedFeatures = features.filter(feature => !isFeatureSelected(feature.id));
  
  // Show 3 features at a time
  const displayedFeatures = showAll ? unselectedFeatures : unselectedFeatures.slice(0, 3);
  const hasMore = unselectedFeatures.length > 3;

  return (
    <div className="flex items-center gap-3 flex-wrap">
      {displayedFeatures.map((feature) => {
        return (
          <button
            key={feature.id}
            onClick={() => handleToggleFeature(feature.id)}
            className="arrow gap-3 h-[43px] rounded-2xl px-5 py-3 flex items-center gap-3 text-white text-base font-medium transition-colors border border-white/20 hover:bg-white/20"
          >
            <span className="text-lg">+</span>
            {feature.name}
          </button>
        );
      })}
      
      {hasMore && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-white/60 text-sm hover:text-white/80 transition-colors px-4 py-2 rounded-xl"
        >
          {showAll ? 'Show less' : `Show more`}
        </button>
      )}
    </div>
  );
};
