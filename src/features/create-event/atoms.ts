import { atom } from 'recoil';

export interface FeatureData {
  [featureId: string]: unknown;
}

export interface EventFormData {
  phoneNumber: string;
  dateTime: string;
  location: string;
  costPerPerson: string;
  description: string;
  capacity: number | null;
  photoGallery: string[];
  links: string[];
  flyerImage: File | null;
  backgroundImage: File | null;
  selectedFeatures: string[];
  featureData: FeatureData;
  customizations: {
    invitationBackground: string;
    template: string;
  };
}

export const eventFormState = atom<EventFormData>({
  key: 'eventFormState',
  default: {
    phoneNumber: '',
    dateTime: '',
    location: '',
    costPerPerson: '',
    description: '',
    capacity: null,
    photoGallery: [],
    links: [],
    flyerImage: null,
    backgroundImage: null,
    selectedFeatures: [],
    featureData: {},
    customizations: {
      invitationBackground: 'gradient-1',
      template: 'default',
    },
  },
});

export const eventFormErrorsState = atom<Partial<Record<keyof EventFormData, string>>>({
  key: 'eventFormErrorsState',
  default: {},
});

export const isSubmittingState = atom<boolean>({
  key: 'isSubmittingState',
  default: false,
});

export const showAdditionalFieldsState = atom({
  key: 'showAdditionalFieldsState',
  default: {
    capacity: false,
    photoGallery: false,
    links: false,
  },
});
