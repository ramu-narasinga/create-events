# Create Event Feature

This feature follows a feature-based architecture pattern, organizing code by functionality rather than file type.

## Structure

```
src/features/create-event/
├── atoms.ts                    # Recoil state management
├── api/
│   ├── create-event.ts        # API functions with mock implementation
│   └── index.ts               # API exports
├── components/
│   ├── action-buttons.tsx     # Toggle buttons for capacity, photos, links
│   ├── capacity-field.tsx     # Max attendees input
│   ├── cost-field.tsx         # Cost per person field
│   ├── customize-section.tsx  # Event customization section
│   ├── date-time-field.tsx    # Date/time picker field
│   ├── description-field.tsx  # Event description textarea
│   ├── go-live-button.tsx     # Publish event button
│   ├── invitation-card.tsx    # Left column invitation preview
│   ├── links-field.tsx        # Add/manage event links
│   ├── location-field.tsx     # Location picker field
│   ├── phone-number-input.tsx # Phone number + save draft
│   ├── photo-gallery-field.tsx# Photo upload and gallery
│   └── index.ts               # Component exports
└── index.ts                   # Feature exports
```

## State Management

The feature uses **Recoil** for state management with the following atoms:

### `eventFormState`
Stores all form data for the event:
- `phoneNumber`: string
- `dateTime`: string
- `location`: string
- `costPerPerson`: string
- `description`: string
- `capacity`: number | null
- `photoGallery`: string[]
- `links`: string[]
- `customizations`: object with background and template settings

### `showAdditionalFieldsState`
Controls visibility of optional fields:
- `capacity`: boolean
- `photoGallery`: boolean
- `links`: boolean

### `isSubmittingState`
Tracks form submission state (boolean)

### `eventFormErrorsState`
Stores validation errors for form fields

## Components

### Core Components

#### `InvitationCard`
- Displays the visual invitation preview
- Shows customizable invitation design
- "Change background" button for theme selection
- Edit button for invitation text

#### `PhoneNumberInput`
- Phone number input with draft save functionality
- Calls `saveDraft` API on submit
- Used for recovering draft events later

#### Field Components
- `DateTimeField` - Date/time selection
- `LocationField` - Location picker
- `CostField` - Cost per person input
- `DescriptionField` - Event description textarea

### Conditional Components

#### `ActionButtons`
- Toggle buttons for showing additional fields
- Updates `showAdditionalFieldsState` on click
- Fields: Capacity, Photo Gallery, Links

#### Additional Fields (shown when toggled)
- `CapacityField` - Max attendees input
- `PhotoGalleryField` - Image upload with preview grid
- `LinksField` - Add/remove multiple links

#### `CustomizeSection`
- Opens customization modal for advanced options
- Icons representing different customization features
- "Customize" button

#### `GoLiveButton`
- Publishes the event
- Calls `createEvent` API
- Shows loading state while submitting
- Displays success/error alerts

## API Layer

### Mock Implementation
The API functions include mock implementations for development:

#### `createEvent(data: EventFormData)`
- Creates and publishes an event
- Returns: `{ id, status, createdAt, eventUrl }`
- Mock delay: 1000ms

#### `saveDraft(data: Partial<EventFormData>)`
- Saves event as draft
- Returns: `{ success, draftId }`
- Mock delay: 500ms

#### `getDraft(phoneNumber: string)`
- Retrieves saved draft by phone number
- Returns: `EventFormData | null`
- Mock delay: 500ms

### Replacing Mock API
To connect to a real backend:

1. Update `/src/features/create-event/api/create-event.ts`
2. Replace mock implementations with actual HTTP calls
3. Consider using `fetch`, `axios`, or similar
4. Update return types if backend schema differs

Example:
```typescript
export const createEvent = async (data: EventFormData): Promise<CreateEventResponse> => {
  const response = await fetch('/api/events', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return response.json();
};
```

## Usage in Route

The main route component (`/src/app/routes/create-event/index.tsx`) composes all components:

```tsx
function CreateEvent() {
  const showFields = useRecoilValue(showAdditionalFieldsState);

  return (
    <div>
      <InvitationCard />
      <PhoneNumberInput />
      <DateTimeField />
      <LocationField />
      <CostField />
      <DescriptionField />
      <ActionButtons />
      
      {/* Conditional rendering based on state */}
      {showFields.capacity && <CapacityField />}
      {showFields.photoGallery && <PhotoGalleryField />}
      {showFields.links && <LinksField />}
      
      <CustomizeSection />
      <GoLiveButton />
    </div>
  );
}
```

## Benefits of This Architecture

1. **Separation of Concerns**: Each component has a single responsibility
2. **Reusability**: Components can be easily reused or tested independently
3. **Maintainability**: Easy to locate and update specific functionality
4. **Scalability**: Can add new fields/features without modifying existing code
5. **Feature Isolation**: All related code is colocated in one feature folder

## Future Enhancements

- Add form validation with error messages
- Implement date/time picker modal
- Add location search/autocomplete
- Create background/theme picker modal
- Add image optimization for photo gallery
- Implement event preview before going live
- Add analytics tracking for user interactions
