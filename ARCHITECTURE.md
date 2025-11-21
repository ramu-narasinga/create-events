# Architecture Diagram

## Feature-Based Architecture

```
design-to-ui/
│
├── src/
│   ├── app/
│   │   └── routes/
│   │       └── create-event/
│   │           └── index.tsx           # Main route - composes all components
│   │
│   └── features/                       # Feature-based organization
│       └── create-event/               # All create-event related code
│           │
│           ├── atoms.ts                # Recoil state atoms
│           │   ├── eventFormState
│           │   ├── showAdditionalFieldsState
│           │   ├── isSubmittingState
│           │   └── eventFormErrorsState
│           │
│           ├── api/                    # API layer
│           │   ├── create-event.ts     # Mock API implementations
│           │   │   ├── createEvent()
│           │   │   ├── saveDraft()
│           │   │   └── getDraft()
│           │   └── index.ts
│           │
│           ├── components/             # UI components
│           │   ├── invitation-card.tsx
│           │   ├── phone-number-input.tsx
│           │   ├── date-time-field.tsx
│           │   ├── location-field.tsx
│           │   ├── cost-field.tsx
│           │   ├── description-field.tsx
│           │   ├── action-buttons.tsx
│           │   ├── capacity-field.tsx
│           │   ├── photo-gallery-field.tsx
│           │   ├── links-field.tsx
│           │   ├── customize-section.tsx
│           │   ├── go-live-button.tsx
│           │   └── index.ts
│           │
│           ├── index.ts                # Feature barrel export
│           └── README.md               # Feature documentation
```

## Data Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                         User Interaction                         │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│                      UI Components                               │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐         │
│  │ Input Fields │  │Action Buttons│  │ Go Live Btn  │         │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘         │
└─────────┼──────────────────┼──────────────────┼─────────────────┘
          │                  │                  │
          ▼                  ▼                  ▼
┌─────────────────────────────────────────────────────────────────┐
│                    Recoil State (Atoms)                          │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │ eventFormState: { phone, date, location, cost, ...}     │  │
│  │ showAdditionalFieldsState: { capacity, photos, links }  │  │
│  │ isSubmittingState: boolean                               │  │
│  │ eventFormErrorsState: { field: errorMessage }            │  │
│  └──────────────────────────────────────────────────────────┘  │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│                         API Layer                                │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐         │
│  │createEvent() │  │ saveDraft()  │  │  getDraft()  │         │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘         │
└─────────┼──────────────────┼──────────────────┼─────────────────┘
          │                  │                  │
          └──────────────────┴──────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│                    Backend (Mock for now)                        │
└─────────────────────────────────────────────────────────────────┘
```

## Component Communication

```
Route (index.tsx)
│
├─ Reads: showAdditionalFieldsState
│  └─ Conditionally renders: CapacityField, PhotoGalleryField, LinksField
│
└─ Renders all components:
   │
   ├─ InvitationCard
   │  └─ Future: Will read eventFormState for custom invitation text
   │
   ├─ PhoneNumberInput
   │  ├─ Reads/Writes: eventFormState.phoneNumber
   │  └─ Calls: saveDraft() API
   │
   ├─ DateTimeField
   │  └─ Reads: eventFormState.dateTime
   │
   ├─ LocationField
   │  └─ Reads: eventFormState.location
   │
   ├─ CostField
   │  └─ Reads: eventFormState.costPerPerson
   │
   ├─ DescriptionField
   │  └─ Reads/Writes: eventFormState.description
   │
   ├─ ActionButtons
   │  └─ Reads/Writes: showAdditionalFieldsState
   │
   ├─ CapacityField (conditional)
   │  └─ Reads/Writes: eventFormState.capacity
   │
   ├─ PhotoGalleryField (conditional)
   │  └─ Reads/Writes: eventFormState.photoGallery
   │
   ├─ LinksField (conditional)
   │  └─ Reads/Writes: eventFormState.links
   │
   ├─ CustomizeSection
   │  └─ Future: Will modify eventFormState.customizations
   │
   └─ GoLiveButton
      ├─ Reads: eventFormState
      ├─ Reads/Writes: isSubmittingState
      └─ Calls: createEvent() API
```

## Comparison with Bulletproof React Pattern

### Bulletproof React Example:
```typescript
features/discussions/
├── api/
│   ├── get-discussions.ts    // Query
│   └── create-discussion.ts   // Mutation with React Query
├── components/
│   ├── discussions-list.tsx
│   └── create-discussion.tsx
└── index.tsx                   // Route using React Query
```

### Our Implementation (with Recoil):
```typescript
features/create-event/
├── atoms.ts                    // Recoil state (replaces React Query cache)
├── api/
│   └── create-event.ts         // Mock API functions
├── components/                 // Atomic UI components
│   ├── invitation-card.tsx
│   ├── phone-number-input.tsx
│   └── ...
└── index.tsx                   // Feature barrel export
```

### Key Differences:

| Aspect | Bulletproof React | Our Implementation |
|--------|-------------------|-------------------|
| **State Management** | React Query (server state) | Recoil (global state) |
| **Data Fetching** | useQuery, useMutation hooks | Direct API calls with Recoil |
| **Component Size** | Larger, feature components | Smaller, atomic components |
| **State Location** | React Query cache | Recoil atoms |
| **API Layer** | Returns hooks | Returns promises |

### Why Recoil for this Feature?

1. ✅ **Form State**: Complex form with many fields
2. ✅ **Client State**: Most state is client-side (draft)
3. ✅ **Real-time Updates**: Changes reflected immediately
4. ✅ **Conditional Rendering**: Easy state-based UI updates
5. ✅ **No Server Polling**: Event creation is a one-time action

### When to Use React Query Instead:

- Fetching lists of data (events, users)
- Server-side pagination
- Automatic refetching/revalidation
- Caching server responses
- Optimistic updates with rollback

## Next Steps

To migrate to a full bulletproof pattern:

1. Replace mock APIs with real endpoints
2. Consider React Query for:
   - Fetching existing events
   - User authentication state
   - Server-side validation
3. Keep Recoil for:
   - Complex form state
   - UI toggle states
   - Draft management
4. Add proper error boundaries
5. Implement loading states
6. Add form validation library (Zod, Yup)
