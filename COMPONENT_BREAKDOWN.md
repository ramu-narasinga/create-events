# Component Breakdown - Create Event UI

## Overview

The Create Event UI has been successfully broken down into **13 reusable components** organized in a feature-based architecture.

## Component Hierarchy

```
CreateEvent (Route Component)
├── InvitationCard
│   ├── Invitation Preview
│   └── Change Background Button
│
└── Event Form
    ├── PhoneNumberInput (with save draft)
    ├── DateTimeField
    ├── LocationField
    ├── CostField
    ├── DescriptionField
    ├── ActionButtons
    │   ├── Capacity Button (toggles CapacityField)
    │   ├── Photo Gallery Button (toggles PhotoGalleryField)
    │   └── Links Button (toggles LinksField)
    ├── CapacityField (conditional)
    ├── PhotoGalleryField (conditional)
    ├── LinksField (conditional)
    ├── CustomizeSection
    └── GoLiveButton
```

## Component Details

### 1. **InvitationCard** (`invitation-card.tsx`)
- **Purpose**: Display invitation preview
- **State**: None (prepared for future customization)
- **Features**: 
  - Edit button (opens editor modal - to be implemented)
  - Change background button (opens theme picker - to be implemented)

### 2. **PhoneNumberInput** (`phone-number-input.tsx`)
- **Purpose**: Capture phone number and save drafts
- **State**: `eventFormState.phoneNumber`
- **API**: Calls `saveDraft()` on submit
- **Features**: Input field with submit button

### 3. **DateTimeField** (`date-time-field.tsx`)
- **Purpose**: Select event date and time
- **State**: `eventFormState.dateTime` (read-only display)
- **Features**: Clickable field (opens picker modal - to be implemented)

### 4. **LocationField** (`location-field.tsx`)
- **Purpose**: Select event location
- **State**: `eventFormState.location` (read-only display)
- **Features**: Clickable field (opens location picker - to be implemented)

### 5. **CostField** (`cost-field.tsx`)
- **Purpose**: Set cost per person
- **State**: `eventFormState.costPerPerson` (read-only display)
- **Features**: Clickable field (opens cost input - to be implemented)

### 6. **DescriptionField** (`description-field.tsx`)
- **Purpose**: Event description textarea
- **State**: `eventFormState.description`
- **Features**: Direct text input

### 7. **ActionButtons** (`action-buttons.tsx`)
- **Purpose**: Toggle visibility of optional fields
- **State**: `showAdditionalFieldsState`
- **Features**: 
  - Capacity button
  - Photo Gallery button
  - Links button
  - Show more button (placeholder)

### 8. **CapacityField** (`capacity-field.tsx`) *[Conditional]*
- **Purpose**: Set maximum attendees
- **State**: `eventFormState.capacity`
- **Features**: Number input
- **Visibility**: Shown when `showFields.capacity === true`

### 9. **PhotoGalleryField** (`photo-gallery-field.tsx`) *[Conditional]*
- **Purpose**: Upload and manage event photos
- **State**: `eventFormState.photoGallery`
- **Features**: 
  - File upload
  - Photo grid preview
  - Remove photo button
- **Visibility**: Shown when `showFields.photoGallery === true`

### 10. **LinksField** (`links-field.tsx`) *[Conditional]*
- **Purpose**: Add multiple links (registration, menu, etc.)
- **State**: `eventFormState.links`
- **Features**: 
  - Add link input with submit
  - Link list with remove buttons
  - Open links in new tab
- **Visibility**: Shown when `showFields.links === true`

### 11. **CustomizeSection** (`customize-section.tsx`)
- **Purpose**: Access advanced customization options
- **State**: None
- **Features**: Customize button (opens modal - to be implemented)

### 12. **GoLiveButton** (`go-live-button.tsx`)
- **Purpose**: Publish the event
- **State**: `isSubmittingState`
- **API**: Calls `createEvent()` on click
- **Features**: 
  - Loading state
  - Success/error alerts
  - Disabled while submitting

## State Management (Recoil)

### Atoms

1. **`eventFormState`** - Main form data
   ```typescript
   {
     phoneNumber: string,
     dateTime: string,
     location: string,
     costPerPerson: string,
     description: string,
     capacity: number | null,
     photoGallery: string[],
     links: string[],
     customizations: { invitationBackground, template }
   }
   ```

2. **`showAdditionalFieldsState`** - Toggle optional fields
   ```typescript
   {
     capacity: boolean,
     photoGallery: boolean,
     links: boolean
   }
   ```

3. **`isSubmittingState`** - Track submission
   ```typescript
   boolean
   ```

4. **`eventFormErrorsState`** - Form validation errors
   ```typescript
   Partial<Record<keyof EventFormData, string>>
   ```

## API Layer

### Functions

1. **`createEvent(data: EventFormData)`**
   - Creates and publishes event
   - Mock implementation with 1s delay
   - Returns: `{ id, status, createdAt, eventUrl }`

2. **`saveDraft(data: Partial<EventFormData>)`**
   - Saves draft to backend
   - Mock implementation with 500ms delay
   - Returns: `{ success, draftId }`

3. **`getDraft(phoneNumber: string)`**
   - Retrieves saved draft
   - Mock implementation with 500ms delay
   - Returns: `EventFormData | null`

## Benefits

✅ **Separation of Concerns**: Each component has one job
✅ **Reusability**: Components can be used independently
✅ **Testability**: Easy to test each component in isolation
✅ **Maintainability**: Easy to find and update specific features
✅ **Scalability**: Add new fields without touching existing code
✅ **Type Safety**: Full TypeScript support with Recoil

## Future Implementations

The following features have placeholders and are ready for implementation:

- [ ] Date/Time picker modal
- [ ] Location search/autocomplete
- [ ] Cost input modal
- [ ] Invitation text editor
- [ ] Background/theme picker
- [ ] Customize modal with advanced options
- [ ] Form validation with error display
- [ ] Draft recovery on phone number input
- [ ] Image optimization for photos
- [ ] Event preview before going live
- [ ] Success page after publishing

## Testing the Implementation

1. Run the development server:
   ```bash
   npm run dev
   ```

2. Navigate to the Create Event page

3. Test interactions:
   - Fill in phone number and click save draft
   - Type in description field
   - Click action buttons to show/hide additional fields
   - Add capacity, photos, and links
   - Click "Go live" button to see mock API response

All components are working with mock APIs and Recoil state management!
