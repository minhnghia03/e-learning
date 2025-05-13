import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AppSettingsContextType {
  fontSize: number;
  setFontSize: (size: number) => void;
  favoriteCourses: number[];
  setFavoriteCourses: (ids: number[]) => void;
}

const AppSettingsContext = createContext<AppSettingsContextType | undefined>(undefined);

export function AppSettingsProvider({ children }: { children: ReactNode }) {
  const [fontSize, setFontSize] = useState<number>(16);
  const [favoriteCourses, setFavoriteCourses] = useState<number[]>([]);
  return (
    <AppSettingsContext.Provider
      value={{ fontSize, setFontSize, favoriteCourses, setFavoriteCourses }}>
      {children}
    </AppSettingsContext.Provider>
  );
}

export function useAppSettings() {
  const context = useContext(AppSettingsContext);
  if (!context) {
    throw new Error('useAppSettings must be used within an AppSettingsProvider');
  }
  return context;
}
