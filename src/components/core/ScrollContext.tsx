import React, { createContext, useContext, useRef, ReactNode } from "react";

interface ScrollContextType {
  aboutRef: React.RefObject<HTMLDivElement> | null;
  mainRef: React.RefObject<HTMLDivElement> | null;
  casesRef: React.RefObject<HTMLDivElement> | null;
  faqRef: React.RefObject<HTMLDivElement> | null;
  contactsRef: React.RefObject<HTMLDivElement> | null;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useScroll = (): ScrollContextType => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error("useScroll must be used within a ScrollProvider");
  }
  return context;
};

interface ScrollProviderProps {
  children: ReactNode;
}

export const ScrollProvider: React.FC<ScrollProviderProps> = ({ children }) => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  const casesRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const contactsRef = useRef<HTMLDivElement>(null);

  return (
    <ScrollContext.Provider
      value={{ aboutRef, mainRef, casesRef, faqRef, contactsRef }}
    >
      {children}
    </ScrollContext.Provider>
  );
};
