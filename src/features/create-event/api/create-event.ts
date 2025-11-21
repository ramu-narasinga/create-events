import type { EventFormData } from '../atoms';

export interface CreateEventResponse {
  id: string;
  status: 'draft' | 'live';
  createdAt: string;
  eventUrl: string;
}

// Mock API implementation
// In a real app, this would call your backend API
export const createEvent = async (data: EventFormData): Promise<CreateEventResponse> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Mock validation
  if (!data.phoneNumber) {
    throw new Error('Phone number is required');
  }

  // Prepare FormData for multipart/form-data submission
  const formData = new FormData();
  
  // Add all form fields
  formData.append('phoneNumber', data.phoneNumber);
  formData.append('dateTime', data.dateTime);
  formData.append('location', data.location);
  formData.append('costPerPerson', data.costPerPerson);
  formData.append('description', data.description);
  
  if (data.capacity !== null) {
    formData.append('capacity', data.capacity.toString());
  }
  
  // Add arrays as JSON strings or individual entries
  formData.append('photoGallery', JSON.stringify(data.photoGallery));
  formData.append('links', JSON.stringify(data.links));
  
  // Add flyer image file if present
  if (data.flyerImage) {
    formData.append('flyerImage', data.flyerImage, data.flyerImage.name);
  }
  
  // Add background image file if present
  if (data.backgroundImage) {
    formData.append('backgroundImage', data.backgroundImage, data.backgroundImage.name);
  }
  
  // Add selected features
  formData.append('selectedFeatures', JSON.stringify(data.selectedFeatures));
  
  // Add feature-specific data
  formData.append('featureData', JSON.stringify(data.featureData));
  
  // Add customizations
  formData.append('customizations', JSON.stringify(data.customizations));

  // In a real implementation, you would send formData to your API:
  // const response = await fetch('/api/events', {
  //   method: 'POST',
  //   body: formData,
  // });
  // return response.json();

  // Mock successful response
  const mockResponse: CreateEventResponse = {
    id: `evt_${Math.random().toString(36).substring(7)}`,
    status: 'live',
    createdAt: new Date().toISOString(),
    eventUrl: `https://letshang.app/event/${Math.random().toString(36).substring(7)}`,
  };

  console.log('Mock API: Creating event with FormData', { 
    data, 
    flyerImageName: data.flyerImage?.name,
    flyerImageSize: data.flyerImage?.size,
    backgroundImageName: data.backgroundImage?.name,
    backgroundImageSize: data.backgroundImage?.size,
    selectedFeatures: data.selectedFeatures,
    featureDataKeys: Object.keys(data.featureData),
    response: mockResponse 
  });

  return mockResponse;
};

export const saveDraft = async (data: Partial<EventFormData>): Promise<{ success: boolean; draftId: string }> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  const draftId = `draft_${Math.random().toString(36).substring(7)}`;
  
  console.log('Mock API: Saving draft', { data, draftId });

  return {
    success: true,
    draftId,
  };
};

export const getDraft = async (phoneNumber: string): Promise<EventFormData | null> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  // Mock: return null if no draft found
  console.log('Mock API: Getting draft for', phoneNumber);
  
  return null;
};
