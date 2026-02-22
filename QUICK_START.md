# Quick Start Guide

## Project Overview
A professional freelancer portfolio with clean layered architecture, dark/light theme support, TanStack Query integration, and fully responsive design.

## Getting Started

### 1. Install Dependencies
```bash
npm install
# or
pnpm install
```

### 2. Run Development Server
```bash
npm run dev
# or
pnpm dev
```

Visit `http://localhost:3000` to see your application.

## Key Features at a Glance

### Dark/Light Theme Toggle
- Located in the header (top-right)
- Automatically detects system preference
- Saves preference to localStorage
- Click to toggle between light and dark modes

### Responsive Design
- Mobile-optimized (works great on phones)
- Tablet-friendly (2-column layouts)
- Desktop-enhanced (3+ column layouts)
- All text and spacing responsive

### Professional Service Categories
Six generic service categories instead of specific technical skills:
1. Web Development
2. App Development
3. Cloud Services
4. Performance Optimization
5. UI/UX Design
6. Tech Consulting

### Hero Section
- Shows 6 generic skills (Web, App, Mobile, Cloud, etc.)
- Clean, professional appearance
- Responsive typography and spacing

## Project Structure

```
src/
├── domain/         → Business logic & types
├── infrastructure/ → API & config
├── application/    → Custom hooks
└── presentation/   → UI components

components/        → Page components
app/              → Next.js app routes
locales/          → Translation files
```

## Common Tasks

### Add a New Service
1. Update `src/domain/constants/services.ts`
2. Add translations to `locales/en.json` and `locales/vi.json`
3. Services component automatically picks up the change

### Add API Integration
1. Add type to `src/domain/types/index.ts`
2. Create method in `src/infrastructure/api/client.ts`
3. Create hook in `src/application/queries/` or `mutations/`
4. Use hook in your component

### Update Colors
Edit CSS variables in `app/globals.css`:
- `:root` for light mode
- `.dark` for dark mode

### Update Responsive Breakpoints
Tailwind breakpoints in `components/`:
- `sm:` (640px) - Tablets
- `md:` (768px) - Small desktop
- `lg:` (1024px) - Desktop
- `xl:` (1280px) - Large desktop

## Key Files

| File | Purpose |
|------|---------|
| `app/layout.tsx` | Root layout with providers |
| `app/[locale]/page.tsx` | Main page |
| `src/presentation/providers.tsx` | Theme & Query providers |
| `src/presentation/hooks/useTheme.ts` | Theme management |
| `components/header.tsx` | Navigation with theme toggle |
| `components/hero.tsx` | Hero section |
| `components/services.tsx` | Services showcase |
| `app/globals.css` | Global styles & theme colors |

## Useful Commands

```bash
# Development
npm run dev                 # Start dev server
npm run build              # Build for production
npm start                  # Run production build

# Linting
npm run lint               # Run ESLint
```

## Theme System

### How It Works
1. `next-themes` library manages theme state
2. System preference detection (prefers-color-scheme)
3. CSS variables switch between light/dark
4. User preference saved to localStorage

### CSS Variables
Colors are defined as CSS variables for easy customization:
```css
--background: #ffffff;          /* Light mode background */
--foreground: #1a1a2e;          /* Light mode text */
--accent: #3b82f6;              /* Primary accent color */
--border: #e2e8f0;              /* Border color */
```

## Responsive Design Approach

All components use **mobile-first design**:
1. Start with mobile styles (no prefix)
2. Add tablet styles with `md:`
3. Add desktop styles with `lg:`

Example:
```jsx
<div className="px-4 md:px-6 lg:px-8 text-sm md:text-base lg:text-lg">
  Responsive spacing and typography
</div>
```

## TanStack Query Usage

### Query Hook Example
```typescript
// In components
import { useServices } from '@/src/application/queries/useServices';

function MyComponent() {
  const { data, isLoading, error } = useServices();
  
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;
  
  return <div>{data?.map(s => s.name)}</div>;
}
```

### Mutation Hook Example
```typescript
// For form submissions
import { useContactSubmit } from '@/src/application/mutations/useContactSubmit';

function ContactForm() {
  const { mutate, isPending } = useContactSubmit();
  
  const handleSubmit = (data) => {
    mutate(data);
  };
}
```

## Localization

Translations are in `locales/`:
- `locales/en.json` - English
- `locales/vi.json` - Vietnamese

Add new translation keys and they're automatically available in components:
```jsx
<h1>{t('your.key.here')}</h1>
```

## Performance Tips

- Images use `loading="lazy"` for better performance
- TanStack Query caches data automatically
- CSS variables enable instant theme switching
- Responsive design prevents unnecessary API calls

## Troubleshooting

### Theme doesn't persist
- Check if localStorage is enabled
- Clear browser cache and try again
- Verify `ThemeProvider` is in root layout

### Components not responsive
- Check that Tailwind classes are used (sm:, md:, lg:)
- Verify breakpoint values in Tailwind config
- Test in browser DevTools responsive mode

### Theme toggle button not showing
- Ensure `useTheme()` is used in a client component (`'use client'`)
- Check that `ThemeProvider` wraps the application

## Resources

- [Architecture Documentation](./ARCHITECTURE.md)
- [Refactoring Summary](./REFACTORING_SUMMARY.md)
- [TanStack Query Docs](https://tanstack.com/query)
- [Next.js Docs](https://nextjs.org)
- [Tailwind CSS Docs](https://tailwindcss.com)

## Support

For detailed architecture information, see `ARCHITECTURE.md`
For a complete list of changes, see `REFACTORING_SUMMARY.md`

---

**Last Updated**: 2025-02-21
**Version**: 1.0
