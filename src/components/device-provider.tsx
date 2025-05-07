"use client";

import { createContext, useContext, useEffect, useState } from "react";

// Define device context type
type DeviceContextType = {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isReducedMotion: boolean;
  isHighContrastMode: boolean;
};

// Create context with default values
const DeviceContext = createContext<DeviceContextType>({
  isMobile: false,
  isTablet: false,
  isDesktop: true,
  isReducedMotion: false,
  isHighContrastMode: false,
});

// Provider component
export function DeviceContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // Default to desktop to avoid hydration mismatch
  const [deviceInfo, setDeviceInfo] = useState<DeviceContextType>({
    isMobile: false,
    isTablet: false,
    isDesktop: true,
    isReducedMotion: false,
    isHighContrastMode: false,
  });

  useEffect(() => {
    // Function to determine device type based on window width
    const handleResize = () => {
      const width = window.innerWidth;
      const isMobile = width < 768;
      const isTablet = width >= 768 && width < 1024;
      const isDesktop = width >= 1024;

      // Check for reduced motion preference
      const isReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      // Check for high contrast mode
      const isHighContrastMode = window.matchMedia(
        "(prefers-contrast: more)"
      ).matches;

      setDeviceInfo({
        isMobile,
        isTablet,
        isDesktop,
        isReducedMotion,
        isHighContrastMode,
      });

      // Add appropriate data attributes to body for CSS targeting
      document.body.dataset.device = isMobile
        ? "mobile"
        : isTablet
        ? "tablet"
        : "desktop";
        
      // Apply class for reduced motion if needed
      if (isReducedMotion) {
        document.documentElement.classList.add("motion-reduce");
      } else {
        document.documentElement.classList.remove("motion-reduce");
      }
      
      // Apply class for high contrast if needed
      if (isHighContrastMode) {
        document.documentElement.classList.add("high-contrast");
      } else {
        document.documentElement.classList.remove("high-contrast");
      }
    };

    // Set initial device type
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Listen for changes in motion preference
    const motionMediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    motionMediaQuery.addEventListener("change", handleResize);

    // Listen for changes in contrast preference
    const contrastMediaQuery = window.matchMedia("(prefers-contrast: more)");
    contrastMediaQuery.addEventListener("change", handleResize);

    // Clean up event listeners
    return () => {
      window.removeEventListener("resize", handleResize);
      motionMediaQuery.removeEventListener("change", handleResize);
      contrastMediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  return (
    <DeviceContext.Provider value={deviceInfo}>
      {children}
    </DeviceContext.Provider>
  );
}

// Custom hook to use device context
export const useDevice = () => useContext(DeviceContext);
