import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function themeClass(theme: string, className: string) {
  return theme ? `${theme} ${className}` : className;
}

// Device detection function (client-side only)
export function useDeviceDetection() {
  if (typeof window !== 'undefined') {
    // Check for touch capability as primary indicator of mobile
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    // Check viewport size for additional context
    const isSmallScreen = window.innerWidth < 768;

    // Check for mobile specific browser characteristics
    const isMobileBrowser = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    return {
      isMobile: isTouchDevice && (isSmallScreen || isMobileBrowser),
      isTablet: isTouchDevice && !isSmallScreen && window.innerWidth < 1024,
      isDesktop: !isTouchDevice || window.innerWidth >= 1024,
      isReducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches
    };
  }

  // Default to desktop for SSR
  return {
    isMobile: false,
    isTablet: false,
    isDesktop: true,
    isReducedMotion: false
  };
}

// Animation intensity scaling based on device
export function getAnimationConfig(baseConfig: any, deviceType: string = 'desktop') {
  if (deviceType === 'mobile') {
    // Reduce animation intensity for mobile
    return {
      ...baseConfig,
      // Reduce duration by 30% for mobile
      duration: baseConfig.duration ? baseConfig.duration * 0.7 : 0.3,
      // Simplify easing for performance
      ease: 'easeOut',
      // Reduce movement distance
      distance: baseConfig.distance ? baseConfig.distance * 0.6 : 10,
      // Reduce scale effects
      scale: baseConfig.scale ?
        Math.min(1 + (baseConfig.scale - 1) * 0.5, 1.05) :
        1.02
    };
  }

  if (deviceType === 'tablet') {
    // Slightly reduce animation intensity for tablets
    return {
      ...baseConfig,
      duration: baseConfig.duration ? baseConfig.duration * 0.85 : 0.4,
      distance: baseConfig.distance ? baseConfig.distance * 0.8 : 15,
      scale: baseConfig.scale ?
        Math.min(1 + (baseConfig.scale - 1) * 0.7, 1.08) :
        1.03
    };
  }

  // Return original config for desktop
  return baseConfig;
}

// Check for reduced motion preference
export function shouldReduceMotion() {
  if (typeof window !== 'undefined') {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }
  return false;
}

// Get optimal animation values based on device and user preferences
export function getOptimalAnimationValues({
  property,
  desktopValue,
  tabletValue,
  mobileValue,
  reducedValue
}: {
  property: string;
  desktopValue: any;
  tabletValue?: any;
  mobileValue?: any;
  reducedValue?: any;
}) {
  // Client-side only
  if (typeof window === 'undefined') return desktopValue;

  // Check reduced motion preference first
  if (shouldReduceMotion() && reducedValue !== undefined) {
    return reducedValue;
  }

  const { isMobile, isTablet } = useDeviceDetection();

  if (isMobile && mobileValue !== undefined) {
    return mobileValue;
  }

  if (isTablet && tabletValue !== undefined) {
    return tabletValue;
  }

  return desktopValue;
}
