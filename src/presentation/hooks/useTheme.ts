/**
 * useTheme Hook
 * Custom hook for theme management with system preference detection
 */

'use client';

import { useTheme as useNextTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export const useTheme = () => {
  const { theme, setTheme, systemTheme, resolvedTheme } = useNextTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Return system theme if not mounted (prevents hydration mismatch)
  const currentTheme = !mounted ? undefined : resolvedTheme;

  const toggleTheme = () => {
    if (mounted) {
      setTheme(currentTheme === 'dark' ? 'light' : 'dark');
    }
  };

  const isDark = mounted && currentTheme === 'dark';

  return {
    theme,
    setTheme,
    systemTheme,
    resolvedTheme: currentTheme,
    isDark,
    toggleTheme,
    mounted,
  };
};
