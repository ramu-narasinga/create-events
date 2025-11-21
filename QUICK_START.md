# Quick Start Guide - Create Event Feature

## 🎯 What Was Built

Your Create Event UI has been **fully decomposed** into **13 reusable components** following feature-based architecture with Recoil state management and mock API integration.

## 📁 File Structure Created

```
src/features/create-event/
├── atoms.ts                           # Recoil state atoms
├── index.ts                           # Feature exports
├── README.md                          # Feature documentation
├── api/
│   ├── create-event.ts               # Mock API implementations
│   └── index.ts
└── components/
    ├── action-buttons.tsx            # Toggle optional fields
    ├── capacity-field.tsx            # Max attendees (conditional)
    ├── cost-field.tsx                # Cost per person
    ├── customize-section.tsx         # Customization options
    ├── date-time-field.tsx           # Date/time picker
    ├── description-field.tsx         # Event description
    ├── go-live-button.tsx            # Publish event
    ├── invitation-card.tsx           # Invitation preview
    ├── links-field.tsx               # Add links (conditional)
    ├── location-field.tsx            # Location picker
    ├── phone-number-input.tsx        # Phone + save draft
    ├── photo-gallery-field.tsx       # Photo upload (conditional)
    └── index.ts
```

## 🚀 How to Test

### 1. Start the Development Server

```bash
npm run dev
```

### 2. Navigate to Create Event Page

The route component at `/src/app/routes/create-event/index.tsx` now uses all the new components.

### 3. Test Features

#### ✅ Basic Form Fields
- Type in the **Description** field → State updates in Recoil
- Enter **Phone Number** and click submit → Mock API saves draft (check console)

#### ✅ Toggle Optional Fields
Click the action buttons:
- **+ Capacity** → Shows capacity input field
- **+ Photo gallery** → Shows photo upload component
- **+ Links** → Shows link management component

#### ✅ Add Optional Data
- **Capacity**: Enter max number of attendees
- **Photos**: Click "Upload photos" → Select images → See preview grid
- **Links**: Type URL and press Enter → See link list with remove option

#### ✅ Publish Event
- Click **"Go live"** button
- Mock API processes for 1 second
- Alert shows success with event URL
- Check console for API response

### 4. Check Console Logs

Open browser DevTools → Console tab to see:
- Draft save operations
- Event creation responses
- State changes (if Recoil DevTools installed)

## 🔍 Component Interaction Flow

```
User types in Description Field
    ↓
Updates eventFormState.description (Recoil)
    ↓
All components reading this state see the update
```

```
User clicks "+ Capacity" button
    ↓
ActionButtons updates showAdditionalFieldsState.capacity = true
    ↓
Route component sees state change
    ↓
Conditionally renders CapacityField component
```

```
User clicks "Go live"
    ↓
GoLiveButton reads eventFormState
    ↓
Calls createEvent(formData) API
    ↓
Mock API simulates 1s delay
    ↓
Returns { id, status, createdAt, eventUrl }
    ↓
Alert shows success message
```

## 🎨 What Each Component Does

| Component | Purpose | Interactive? |
|-----------|---------|-------------|
| **InvitationCard** | Preview invitation design | Yes (edit/change bg) |
| **PhoneNumberInput** | Capture phone + save draft | Yes (input + submit) |
| **DateTimeField** | Show/select date & time | Yes (clickable) |
| **LocationField** | Show/select location | Yes (clickable) |
| **CostField** | Show/set cost per person | Yes (clickable) |
| **DescriptionField** | Event description text | Yes (textarea) |
| **ActionButtons** | Toggle optional fields | Yes (3 buttons) |
| **CapacityField** | Set max attendees | Yes (number input) |
| **PhotoGalleryField** | Upload/manage photos | Yes (file upload + grid) |
| **LinksField** | Add/remove links | Yes (input + list) |
| **CustomizeSection** | Advanced customization | Yes (button) |
| **GoLiveButton** | Publish the event | Yes (submit) |

## 🔧 Making Changes

### Add a New Field

1. Create component in `src/features/create-event/components/new-field.tsx`
2. Add state to `atoms.ts` if needed
3. Export from `components/index.ts`
4. Import and render in route `index.tsx`

Example:
```tsx
// 1. Create component
export const NewField = () => {
  const [formData, setFormData] = useRecoilState(eventFormState);
  return <input onChange={(e) => setFormData({...formData, newField: e.target.value})} />;
};

// 2. Update atoms.ts
export interface EventFormData {
  // ... existing fields
  newField: string; // Add this
}

// 3. Use in route
import { NewField } from '@/features/create-event/components';
// ...
<NewField />
```

### Connect Real API

Replace mock implementations in `src/features/create-event/api/create-event.ts`:

```typescript
// Before (mock):
export const createEvent = async (data: EventFormData) => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return { id: 'mock-id', status: 'live', ... };
};

// After (real):
export const createEvent = async (data: EventFormData) => {
  const response = await fetch('/api/events', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return response.json();
};
```

### Add Form Validation

Update `go-live-button.tsx`:

```typescript
const handleGoLive = async () => {
  // Add validation
  if (!formData.phoneNumber) {
    alert('Phone number is required');
    return;
  }
  if (!formData.dateTime) {
    alert('Date and time is required');
    return;
  }
  
  // ... proceed with API call
};
```

## 📚 Documentation Files

- **`COMPONENT_BREAKDOWN.md`** - Detailed component list with features
- **`ARCHITECTURE.md`** - Architecture diagrams and patterns
- **`src/features/create-event/README.md`** - Feature-specific documentation

## 🎯 Key Benefits

✅ **Modular**: Each component is independent and reusable
✅ **Type-Safe**: Full TypeScript support
✅ **Testable**: Easy to unit test individual components
✅ **Scalable**: Add new features without touching existing code
✅ **Maintainable**: Clear structure and organization
✅ **State Management**: Centralized with Recoil
✅ **Mock API**: Ready for development and testing

## 🚦 Next Steps

1. ✅ Test the current implementation
2. 🔨 Implement modal dialogs for date, location, cost pickers
3. 🔨 Add form validation with error messages
4. 🔨 Connect to real backend API
5. 🔨 Add loading states and animations
6. 🔨 Implement image optimization
7. 🔨 Add success page after publishing
8. 🔨 Implement draft recovery by phone number

## 💡 Tips

- **Recoil DevTools**: Install browser extension to inspect state
- **Console Logging**: Check browser console for API mock responses
- **Component Isolation**: Test each component independently
- **State Debugging**: Use React DevTools to inspect Recoil atoms

## 🐛 Troubleshooting

**Components not showing?**
- Check that route file is importing correctly
- Verify Recoil Provider is set up in app root

**State not updating?**
- Ensure using `useRecoilState` or `useSetRecoilState`
- Check atom keys are unique

**API not working?**
- Mock APIs log to console - check for errors
- Verify async/await syntax is correct

## 📞 Support

All components are working with:
- ✅ No TypeScript errors
- ✅ No ESLint warnings
- ✅ Full Recoil integration
- ✅ Mock API responses
- ✅ Conditional rendering

Happy coding! 🎉
