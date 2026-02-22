/**
 * ThemeToggle Component
 * Button to toggle between light and dark themes
 */

'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/src/presentation/hooks/useTheme';

export function ThemeToggle() {
  const { isDark, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    // Return placeholder with same dimensions to prevent layout shift
    return <div className="w-10 h-10" />;
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex items-center justify-center p-2 rounded-md text-foreground hover:bg-card/50 transition-colors duration-200"
      aria-label="Toggle theme"
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? (
        <Sun size={20} className="text-yellow-500" />
      ) : (
        <Moon size={20} className="text-slate-400" />
      )}
    </button>
  );
}
