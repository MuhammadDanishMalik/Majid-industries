'use client';

import { ReactNode } from 'react';

interface ThemeProviderProps {
  children: ReactNode;
  attribute?: string;
  defaultTheme?: string;
  enableSystem?: boolean;
  disableTransitionOnChange?: boolean;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  // Simple placeholder - will be replaced with next-themes later
  return <>{children}</>;
}
