import { useRecoilValue } from 'recoil';
import { useMemo } from 'react';
import {
  FlyerUpload,
  PhoneNumberInput,
  DateTimeField,
  LocationField,
  CostField,
  DescriptionField,
  ActionButtons,
  CustomizeSection,
  GoLiveButton,
  CapacityField,
  PhotoGalleryField,
  LinksField,
  TextBlastsField,
  QuestionnairesField,
  NewSectionField,
  InviteField,
  AnnouncementsField,
} from '@/features/create-event/components';
import { showAdditionalFieldsState, eventFormState } from '@/features/create-event/atoms';
import { Header } from '@/components/header';

function CreateEvent() {
  const showFields = useRecoilValue(showAdditionalFieldsState);
  const eventForm = useRecoilValue(eventFormState);

  const backgroundUrl = useMemo(() => {
    return eventForm.backgroundImage ? URL.createObjectURL(eventForm.backgroundImage) : null;
  }, [eventForm.backgroundImage]);

  // Map of feature IDs to their respective components
  const featureComponents: Record<string, JSX.Element> = {
    'capacity': <CapacityField key="capacity" />,
    'photo-gallery': <PhotoGalleryField key="photo-gallery" />,
    'links': <LinksField key="links" />,
    'text-blasts': <TextBlastsField key="text-blasts" />,
    'questionnaires': <QuestionnairesField key="questionnaires" />,
    'new-section': <NewSectionField key="new-section" />,
    'invite': <InviteField key="invite" />,
    'announcements': <AnnouncementsField key="announcements" />,
  };

  return (
    <div 
      className="min-h-screen flex items-start justify-center p-8 relative"
      style={{
        background: backgroundUrl 
          ? `url(${backgroundUrl}) center/cover no-repeat`
          : 'linear-gradient(180deg, #F1C2DB 0%, #46497C 100%)'
      }}
    >
      {backgroundUrl && (
        <div className="absolute inset-0 bg-black/20" />
      )}
      
      <div className="w-full max-w-7xl relative z-10">
        <Header />
        
        <div className="flex gap-12">

          <FlyerUpload />

          
          <div className="flex-1 space-y-6">
            
            <h2 className="text-[#7f7f7f80] text-[48px] font-semibold mb-8 leading-[100%] [font-family:'SF_Pro_Display',system-ui,sans-serif] [mix-blend-mode:luminosity]">
              Name your event
            </h2>

            <PhoneNumberInput />

            <div className='glass rounded-2xl py-4 flex flex-col items-center gap-3'>

              <DateTimeField />

              <LocationField />

              <CostField />
            </div>
            
            <DescriptionField />

            {/* Render Selected Feature Components */}
            {showFields.capacity && featureComponents['capacity']}
            {showFields.photoGallery && featureComponents['photo-gallery']}
            {showFields.links && featureComponents['links']}
            {eventForm.selectedFeatures.map((featureId) => 
              featureComponents[featureId] || null
            )}

            <ActionButtons />

            <CustomizeSection />

            <GoLiveButton />

          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateEvent

