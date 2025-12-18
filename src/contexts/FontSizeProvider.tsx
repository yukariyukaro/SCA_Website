import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type FontSizeContextType = {
  fontSize: string;
  setFontSize: (fontSize: string) => void;
};

const FontSizeContext = createContext<FontSizeContextType | undefined>(undefined);

export const FontSizeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [fontSize, setFontSizeState] = useState<string>(() => {
    const savedFontSize = localStorage.getItem('rootFontSize');
    return savedFontSize || '18px'; // 默认字体大小
  });

  useEffect(() => {
    document.documentElement.style.fontSize = fontSize;
    localStorage.setItem('rootFontSize', fontSize);
  }, [fontSize]);

  const setFontSize = (newFontSize: string) => {
    setFontSizeState(newFontSize);
  };

  return (
    <FontSizeContext.Provider value={{ fontSize, setFontSize }}>
      {children}
    </FontSizeContext.Provider>
  );
};

export const useFontSize = (): FontSizeContextType => {
  const context = useContext(FontSizeContext);
  if (context === undefined) {
    throw new Error('useFontSize must be used within a FontSizeProvider');
  }
  return context;
};