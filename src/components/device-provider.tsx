'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { shouldReduceMotion } from '@/lib/utils';

type DeviceContextType = {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isReducedMotion: boolean;
  deviceType: 'mobile' | 'tablet' | 'desktop';
  performanceLevel: 'low' | 'medium' | 'high';
};

const DeviceContext = createContext<DeviceContextType>({
  isMobile: false,
  isTablet: false,
  isDesktop: true,
  isReducedMotion: false,
  deviceType: 'desktop',
  performanceLevel: 'high',
});

export const useDevice = () => useContext(DeviceContext);

export function DeviceContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [deviceInfo, setDeviceInfo] = useState<DeviceContextType>({
    isMobile: false,
    isTablet: false,
    isDesktop: true,
    isReducedMotion: false,
    deviceType: 'desktop',
    performanceLevel: 'high',
  });

  const [hasInitialized, setHasInitialized] = useState(false);

  const updateDeviceInfo = () => {
    // For Playwright tests, we need to rely more on viewport size than touch detection
    // since Playwright emulates different devices primarily through viewport changes

    // Get the current viewport width
    const viewportWidth = window.innerWidth;

    // Determine device type primarily based on viewport width for better test compatibility
    const isMobile = viewportWidth < 768;
    const isTablet = viewportWidth >= 768 && viewportWidth < 1024;
    const isDesktop = viewportWidth >= 1024;

    // Check for reduced motion preference
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Determine device type
    let deviceType: 'mobile' | 'tablet' | 'desktop' = 'desktop';
    if (isMobile) deviceType = 'mobile';
    else if (isTablet) deviceType = 'tablet';

    // Determine performance level based on device characteristics
    let performanceLevel: 'low' | 'medium' | 'high' = 'high';

    // Check hardware concurrency (CPU cores) if available
    if (window.navigator.hardwareConcurrency) {
      if (window.navigator.hardwareConcurrency <= 2) {
        performanceLevel = 'low';
      } else if (window.navigator.hardwareConcurrency <= 4) {
        performanceLevel = 'medium';
      }
    }

    // Check device memory if available
    if ('deviceMemory' in navigator) {
      // @ts-ignore - deviceMemory is not in standard navigator type
      const memory = navigator.deviceMemory as number;
      if (memory && memory <= 2) {
        performanceLevel = 'low';
      } else if (memory && memory <= 4) {
        performanceLevel = 'medium';
      }
    }

    // On mobile, downgrade performance estimate
    if (isMobile && performanceLevel === 'high') {
      performanceLevel = 'medium';
    }

    // If reduced motion is requested, assume performance concerns
    if (isReducedMotion || shouldReduceMotion()) {
      performanceLevel = 'low';
    }

    // Expose device info to window for testing purposes
    if (typeof window !== 'undefined') {
      (window as any).__DEVICE_INFO__ = {
        isMobile,
        isTablet,
        isDesktop,
        isReducedMotion,
        deviceType,
        performanceLevel,
      };

      // Add data attributes to document for testing
      document.documentElement.setAttribute('data-device-type', deviceType);
      document.documentElement.setAttribute('data-reduced-motion', isReducedMotion.toString());
    }

    setDeviceInfo({
      isMobile,
      isTablet,
      isDesktop,
      isReducedMotion: isReducedMotion || shouldReduceMotion(),
      deviceType,
      performanceLevel,
    });
  };

  useEffect(() => {
    // Only execute once on client side
    if (typeof window === 'undefined' || hasInitialized) return;

    // Initial detection
    updateDeviceInfo();
    setHasInitialized(true);

    // Update on resize
    const handleResize = () => {
      updateDeviceInfo();
    };

    window.addEventListener('resize', handleResize);

    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [hasInitialized]);

  return (
    <DeviceContext.Provider value={deviceInfo}>
      {children}
    </DeviceContext.Provider>
  );
}
