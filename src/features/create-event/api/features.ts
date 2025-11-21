export interface Feature {
  id: string;
  name: string;
  description: string;
  pricing: 'Free' | 'Paid';
  eventCount: number;
  likes: number;
}

export interface FeaturesResponse {
  features: Feature[];
}

// Mock API implementation
export const getFeatures = async (): Promise<FeaturesResponse> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  const mockFeatures: Feature[] = [
    {
      id: 'capacity',
      name: 'Capacity',
      description: 'Set a maximum number of guests for your event.',
      pricing: 'Free',
      eventCount: 1250,
      likes: 890,
    },
    {
      id: 'photo-gallery',
      name: 'Photo Gallery',
      description: 'Add photos for guests to view and relive the vibe.',
      pricing: 'Free',
      eventCount: 342,
      likes: 302,
    },
    {
      id: 'links',
      name: 'Links',
      description: 'Share links to event guides, menus, playlists, and more.',
      pricing: 'Free',
      eventCount: 832,
      likes: 292,
    },
    {
      id: 'text-blasts',
      name: 'Text blasts',
      description: "Send text messages directly to your guest's phone number to keep your guests informed.",
      pricing: 'Free',
      eventCount: 565,
      likes: 25,
    },
    {
      id: 'questionnaires',
      name: 'Questionnaires',
      description: 'Create questionnaires for your event. Hosts can create questions and view responses.',
      pricing: 'Free',
      eventCount: 446,
      likes: 406,
    },
    {
      id: 'new-section',
      name: 'New section',
      description: 'Add a custom section to showcase anything you want on your event page.',
      pricing: 'Free',
      eventCount: 817,
      likes: 277,
    },
    {
      id: 'invite',
      name: 'Invite',
      description: 'Personally invite each and every guest within seconds',
      pricing: 'Paid',
      eventCount: 340000,
      likes: 150000,
    },
    {
      id: 'announcements',
      name: 'Announcements',
      description: 'Post updates & messages to keep your guests informed.',
      pricing: 'Free',
      eventCount: 686,
      likes: 146,
    },
  ];

  console.log('Mock API: Fetching features', { count: mockFeatures.length });

  return { features: mockFeatures };
};
