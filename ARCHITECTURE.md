# Project Architecture Documentation

## Overview

This project implements a clean, professional layered architecture with TanStack Query for state management and a responsive design approach. The structure follows best practices for scalability, maintainability, and code organization.

## Project Structure

```
src/
├── domain/                    # Business logic & data definitions
│   ├── types/                # TypeScript type definitions
│   │   └── index.ts          # Centralized type exports
│   └── constants/            # Domain constants
│       └── services.ts       # Service category definitions
│
├── infrastructure/           # External services & utilities
│   ├── api/
│   │   └── client.ts         # API client singleton
│   └── config/
│       └── query-client.ts   # TanStack Query configuration
│
├── application/              # State management & business operations
│   ├── queries/              # TanStack Query hooks for data fetching
│   │   └── useServices.ts    # Services query hook
│   └── mutations/            # TanStack Query mutations
│       └── useContactSubmit.ts # Contact form submission
│
└── presentation/             # UI Components & Layout
    ├── components/           # Reusable UI components
    │   └── ThemeToggle.tsx   # Dark/Light theme toggle
    ├── hooks/                # Custom React hooks
    │   └── useTheme.ts       # Theme management hook
    └── providers.tsx         # Provider wrappers (TanStack, Theme)

components/                   # Shadcn UI & page components
├── header.tsx               # Navigation header with theme toggle
├── hero.tsx                 # Hero section with generic skills
├── services.tsx             # Professional services showcase (6 categories)
├── about.tsx                # About section with stats
├── contact.tsx              # Contact form & information
├── footer.tsx               # Footer with links
└── ui/*                     # Shadcn UI component library

app/
├── layout.tsx               # Root layout with providers
├── [locale]/
│   ├── layout.tsx          # Locale-specific layout
│   └── page.tsx            # Main page component
└── globals.css              # Global styles with CSS variables
```

## Layered Architecture Explanation

### 1. **Domain Layer** (`src/domain/`)
- Contains business logic and type definitions
- **Not** dependent on frameworks or external libraries
- Defines contracts and data structures
- Examples: Service types, Contact form types, API response types

### 2. **Infrastructure Layer** (`src/infrastructure/`)
- Manages external services and technical implementations
- API client with centralized configuration
- TanStack Query client setup with caching strategies
- Single responsibility: handle technical details

### 3. **Application Layer** (`src/application/`)
- Business operations through custom hooks
- Query hooks for data fetching (useServices)
- Mutation hooks for data modification (useContactSubmit)
- Bridges domain types with infrastructure

### 4. **Presentation Layer** (`src/presentation/`)
- Pure UI components
- Theme management (useTheme hook)
- Provider setup and composition
- No business logic, only rendering

## Key Features

### Dark/Light Theme
- **Implementation**: `next-themes` library
- **System Preference Detection**: Respects browser `prefers-color-scheme`
- **Persistence**: localStorage for user preference
- **Toggle Location**: Header (top-right)
- **Colors**: 
  - Light Mode: Clean white background with dark text
  - Dark Mode: Professional dark theme with light text

### TanStack Query Integration
- **Query Hooks**: `useServices()` for fetching services data
- **Mutation Hooks**: `useContactSubmit()` for form submissions
- **Caching Strategy**: 
  - Services cache: 1 hour
  - Default stale time: 5 minutes
  - Default cache time: 10 minutes
- **Retry Logic**: Configured to retry once on failure

### Responsive Design
- **Mobile-First Approach**: Designed for mobile, then enhanced for larger screens
- **Breakpoints**:
  - sm: 640px (tablets)
  - md: 768px (desktop)
  - lg: 1024px (large desktop)
  - xl: 1280px (extra large)
  - 2xl: 1536px (ultra-wide)

- **Component Optimizations**:
  - Typography: Responsive text sizes (text-xs → md:text-sm → lg:text-lg)
  - Spacing: Dynamic padding/margins (p-4 → md:p-6 → lg:p-8)
  - Grid Layouts: 1 column mobile → 2 columns tablet → 3+ columns desktop
  - Images & Icons: Responsive sizing

### Professional Service Categories
Generic, non-specific categories for broader appeal:
1. **Web Development** - Modern web applications
2. **App Development** - Full-featured applications
3. **Cloud Services** - Cloud infrastructure & scalability
4. **Performance Optimization** - Speed & efficiency
5. **UI/UX Design** - User-centered design
6. **Tech Consulting** - Strategic guidance

## Type Safety

All data structures are defined in `src/domain/types/index.ts`:
- `Service`, `Skill` - Service category definitions
- `ContactFormData`, `ContactResponse` - Form handling
- `DevTool`, `ProgrammingLanguage` - Tech stack items
- `ApiResponse<T>` - Standardized API responses

## API Integration

The API client (`src/infrastructure/api/client.ts`) provides:
- Singleton pattern for centralized configuration
- Type-safe request/response handling
- Standardized error handling
- Base URL configuration via environment variables

**Example Usage**:
```typescript
const { data, error } = await apiClient.post<ContactResponse>('/contact', formData);
```

## Localization

- Supports multiple languages (English & Vietnamese)
- Localization strings in `locales/*.json`
- Service messages updated with new categories
- Consistent key structure for translation management

## Styling

**Design System**:
- Color tokens via CSS variables (--color-*)
- Consistent spacing scale (Tailwind defaults)
- Typography hierarchy with line-height optimization
- Professional color scheme supporting both light and dark modes

**Light Mode Palette**:
- Background: #ffffff
- Foreground: #1a1a2e
- Accent: #3b82f6 (Blue)
- Muted: #e2e8f0 (Light Gray)

**Dark Mode Palette**:
- Background: #0a0e27 (Navy)
- Foreground: #e8eef8 (Off-white)
- Accent: #60a5fa (Light Blue)
- Muted: #9ca3af (Medium Gray)

## Development Workflow

### Adding a New Service
1. Add type to `src/domain/types/index.ts`
2. Update `src/domain/constants/services.ts`
3. Add localization in `locales/en.json` and `locales/vi.json`
4. Update `components/services.tsx` if needed

### Adding API Integration
1. Define type in `src/domain/types/index.ts`
2. Create API method in `src/infrastructure/api/client.ts`
3. Create query/mutation hook in `src/application/`
4. Use hook in presentation components

### Adding New Pages
1. Create page component in `app/[locale]/` directory
2. Follow responsive design patterns
3. Use TanStack Query for data fetching
4. Apply theme-aware styles

## Next Steps & Improvements

- Implement API contact form submission
- Add error boundaries and error handling
- Create unit tests for custom hooks
- Add form validation with Zod
- Implement analytics tracking
- Add SEO optimizations
- Create storybook for component documentation

## Dependencies

- **next**: 16.1.6 (React framework)
- **@tanstack/react-query**: ^5.28.0 (State management)
- **next-themes**: ^0.4.6 (Theme management)
- **react-hook-form**: ^7.54.1 (Form handling)
- **tailwindcss**: ^4.2.0 (Styling)
- **lucide-react**: ^0.564.0 (Icons)
- **zod**: ^3.24.1 (Schema validation)

## Performance Considerations

- Code splitting via dynamic imports
- Image optimization with Next.js Image component
- CSS-in-JS optimized with Tailwind
- Query caching reduces redundant API calls
- Lazy loading of icons and images
- Responsive images with srcset attributes

---

**Last Updated**: 2025
**Version**: 1.0
