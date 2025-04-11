'use client';

import { motion, useMotionValue, useTransform, useInView, useSpring, useScroll } from 'framer-motion';
import { useRef, ReactNode, useState, useEffect } from 'react';
import { useDeviceDetection, shouldReduceMotion } from '@/lib/utils';

// Card that tilts in the direction of the mouse hover
export const TiltCard = ({
  children,
  className = '',
  tiltFactor = 7, // Higher value = more tilt
  scale = 1.05,
  perspective = 800,
  transitionDuration = 0.5,
  glareEffect = false,
}: {
  children: ReactNode;
  className?: string;
  tiltFactor?: number;
  scale?: number;
  perspective?: number;
  transitionDuration?: number;
  glareEffect?: boolean;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [mouseOver, setMouseOver] = useState(false);

  // Device-specific optimizations
  const [isMounted, setIsMounted] = useState(false);
  const [optimizedTiltFactor, setOptimizedTiltFactor] = useState(tiltFactor);
  const [optimizedScale, setOptimizedScale] = useState(scale);
  const [optimizedDuration, setOptimizedDuration] = useState(transitionDuration);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    if (isMounted) {
      const { isMobile, isTablet, isReducedMotion } = useDeviceDetection();

      if (isMobile) {
        // Reduce tilt effect significantly on mobile
        setOptimizedTiltFactor(tiltFactor * 0.4);
        setOptimizedScale(1 + (scale - 1) * 0.5);
        setOptimizedDuration(transitionDuration * 0.7);
        // Disable glare effect on mobile for performance
        if (glareEffect) glareEffect = false;
      } else if (isTablet) {
        setOptimizedTiltFactor(tiltFactor * 0.6);
        setOptimizedScale(1 + (scale - 1) * 0.7);
        setOptimizedDuration(transitionDuration * 0.8);
      }

      // Disable tilt for reduced motion
      if (isReducedMotion || shouldReduceMotion()) {
        setIsDisabled(true);
      }
    }
  }, [glareEffect, isMounted, scale, tiltFactor, transitionDuration]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || isDisabled) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    setRotateX(-yPct * optimizedTiltFactor); // Inverted for correct tilt direction
    setRotateY(xPct * optimizedTiltFactor);
  };

  const handleMouseEnter = () => {
    if (!isDisabled) setMouseOver(true);
  };

  const handleMouseLeave = () => {
    setMouseOver(false);
    setRotateX(0);
    setRotateY(0);
  };

  // Use lighter spring config on mobile
  const springConfig = isMounted && useDeviceDetection().isMobile
    ? { stiffness: 300, damping: 20 }
    : { stiffness: 400, damping: 25 };

  const xSpring = useSpring(rotateX, springConfig);
  const ySpring = useSpring(rotateY, springConfig);

  // Create motion values for glare effect regardless of whether it's used
  const glareIntensity = useMotionValue(Math.sqrt(rotateX * rotateX + rotateY * rotateY));
  const glareOpacity = useTransform(glareIntensity, [0, 10], [0, 0.15]);

  // If reduced motion is enabled, render without effects
  if (isDisabled) {
    return (
      <div className={className}>
        {children}
      </div>
    );
  }

  // Check if glare effect should be shown
  const showGlareEffect = glareEffect && mouseOver && isMounted && !useDeviceDetection().isMobile;

  return (
    <motion.div
      ref={ref}
      className={`relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        perspective,
        rotateX: xSpring,
        rotateY: ySpring,
        scale: mouseOver ? optimizedScale : 1,
        transition: `transform ${optimizedDuration}s ease-out`,
      }}
    >
      {children}

      {/* Optional glare effect - disabled on mobile */}
      {showGlareEffect && (
        <motion.div
          className="absolute inset-0 rounded-[inherit] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 80%)',
            mixBlendMode: 'overlay',
            transform: 'translateZ(1px)', // Place slightly above content
            opacity: glareOpacity,
          }}
        />
      )}
    </motion.div>
  );
};

// Interactive button that responds to clicks with a ripple effect
export const RippleButton = ({
  children,
  onClick,
  className = '',
  rippleColor = 'rgba(255, 255, 255, 0.4)',
}: {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  rippleColor?: string;
}) => {
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);
  const nextId = useRef(0);
  const [isMounted, setIsMounted] = useState(false);
  const [isOptimized, setIsOptimized] = useState(false);
  const [rippleDuration, setRippleDuration] = useState(0.8);
  const [rippleSize, setRippleSize] = useState(500);

  useEffect(() => {
    setIsMounted(true);

    if (isMounted) {
      const { isMobile, isTablet, isReducedMotion } = useDeviceDetection();

      if (isMobile) {
        // Smaller, faster ripples on mobile for better performance
        setIsOptimized(true);
        setRippleDuration(0.6);
        setRippleSize(300);
      } else if (isTablet) {
        setRippleDuration(0.7);
        setRippleSize(400);
      }

      // Minimal ripple for reduced motion
      if (isReducedMotion) {
        setRippleDuration(0.4);
        setRippleSize(200);
      }
    }
  }, [isMounted]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();

    // Get click position relative to the button
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Add a new ripple
    const id = nextId.current;
    nextId.current += 1;

    setRipples([...ripples, { x, y, id }]);

    // Remove the ripple after animation
    setTimeout(() => {
      setRipples(ripples => ripples.filter(ripple => ripple.id !== id));
    }, rippleDuration * 1000);

    if (onClick) onClick();
  };

  // For mobile devices, limit the number of concurrent ripples for performance
  const displayRipples = isOptimized ? ripples.slice(-2) : ripples;

  return (
    <motion.button
      className={`relative overflow-hidden ${className}`}
      onClick={handleClick}
      whileTap={{ scale: isOptimized ? 0.99 : 0.98 }}
    >
      {/* The ripple elements */}
      {displayRipples.map(ripple => (
        <motion.span
          key={ripple.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: ripple.x,
            top: ripple.y,
            backgroundColor: rippleColor,
            transform: 'translate(-50%, -50%)',
          }}
          initial={{ width: 0, height: 0, opacity: 0.5 }}
          animate={{
            width: rippleSize,
            height: rippleSize,
            opacity: 0,
          }}
          transition={{ duration: rippleDuration, ease: 'easeOut' }}
        />
      ))}
      {children}
    </motion.button>
  );
};

// Magnetic element that attracts to cursor
export const MagneticElement = ({
  children,
  className = '',
  distanceThreshold = 100, // Distance at which element starts to be affected
  magnetStrength = 0.5, // Higher = stronger magnetic effect
}: {
  children: ReactNode;
  className?: string;
  distanceThreshold?: number;
  magnetStrength?: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [elementCenter, setElementCenter] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);
  const [optimizedThreshold, setOptimizedThreshold] = useState(distanceThreshold);
  const [optimizedStrength, setOptimizedStrength] = useState(magnetStrength);
  const [isDisabled, setIsDisabled] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    setIsMounted(true);

    if (isMounted) {
      const { isMobile, isTablet, isReducedMotion } = useDeviceDetection();

      if (isMobile) {
        // Reduce magnetic effect on mobile
        setOptimizedThreshold(distanceThreshold * 0.7);
        setOptimizedStrength(magnetStrength * 0.4);
      } else if (isTablet) {
        setOptimizedThreshold(distanceThreshold * 0.85);
        setOptimizedStrength(magnetStrength * 0.6);
      }

      // Disable for reduced motion
      if (isReducedMotion || shouldReduceMotion()) {
        setIsDisabled(true);
      }
    }
  }, [distanceThreshold, isMounted, magnetStrength]);

  // Use lighter spring config on mobile
  const springConfig = isMounted && useDeviceDetection().isMobile
    ? { damping: 15, stiffness: 200 }
    : { damping: 20, stiffness: 300 };

  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const calculateDistance = (x1: number, y1: number, x2: number, y2: number) => {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current || isDisabled) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distance = calculateDistance(e.clientX, e.clientY, centerX, centerY);

    if (distance < optimizedThreshold) {
      const distancePercentage = 1 - Math.max(0, distance / optimizedThreshold);
      const moveX = (e.clientX - centerX) * optimizedStrength * distancePercentage;
      const moveY = (e.clientY - centerY) * optimizedStrength * distancePercentage;

      x.set(moveX);
      y.set(moveY);
    } else {
      x.set(0);
      y.set(0);
    }
  };

  const resetPosition = () => {
    x.set(0);
    y.set(0);
  };

  // Disable effect for reduced motion
  if (isDisabled) {
    return (
      <div className={className}>
        {children}
      </div>
    );
  }

  return (
    <div className="relative" onMouseMove={handleMouseMove} onMouseLeave={resetPosition}>
      <motion.div
        ref={ref}
        className={className}
        style={{
          x: springX,
          y: springY,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

// A progress bar that fills up as you scroll down
export const ScrollProgressBar = ({ height = 4, color = '#000' }) => {
  const ref = useRef(null);
  const [isMounted, setIsMounted] = useState(false);
  const [optimizedHeight, setOptimizedHeight] = useState(height);
  const [optimizedConfig, setOptimizedConfig] = useState({ stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    setIsMounted(true);

    if (isMounted) {
      const { isMobile, isTablet } = useDeviceDetection();

      if (isMobile) {
        // Slightly thicker progress bar on mobile for better visibility
        setOptimizedHeight(height * 1.25);
        // Lighter spring config for better performance
        setOptimizedConfig({ stiffness: 80, damping: 25, restDelta: 0.005 });
      } else if (isTablet) {
        setOptimizedHeight(height * 1.1);
        setOptimizedConfig({ stiffness: 90, damping: 28, restDelta: 0.002 });
      }
    }
  }, [height, isMounted]);

  // Use try-catch to handle environments where useScroll isn't available (SSG)
  try {
    const { scrollYProgress } = useScroll();

    const scaleX = useSpring(scrollYProgress, optimizedConfig);

    return (
      <motion.div
        className="fixed top-0 left-0 right-0 origin-left z-50"
        style={{
          scaleX,
          height: optimizedHeight,
          backgroundColor: color
        }}
      />
    );
  } catch (error) {
    // Fallback for static generation
    return (
      <div
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          height: optimizedHeight,
          backgroundColor: color,
          transform: 'scaleX(0)',
          transformOrigin: 'left'
        }}
      />
    );
  }
};

// Component that animates numbers counting up
export const CountUp = ({
  from = 0,
  to,
  duration = 2,
  delay = 0,
  className = '',
  formatter = (value: number) => Math.round(value).toString()
}: {
  from?: number;
  to: number;
  duration?: number;
  delay?: number;
  className?: string;
  formatter?: (value: number) => string;
}) => {
  const ref = useRef(null);
  const [isMounted, setIsMounted] = useState(false);
  const [optimizedDuration, setOptimizedDuration] = useState(duration);
  const [optimizedDelay, setOptimizedDelay] = useState(delay);
  const [isSimplified, setIsSimplified] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    if (isMounted) {
      const { isMobile, isTablet, isReducedMotion } = useDeviceDetection();

      if (isMobile) {
        // Faster animations on mobile
        setOptimizedDuration(duration * 0.7);
        setOptimizedDelay(delay * 0.7);

        // On low-end devices, use simplified animation
        if (window.navigator.hardwareConcurrency && window.navigator.hardwareConcurrency < 4) {
          setIsSimplified(true);
        }
      } else if (isTablet) {
        setOptimizedDuration(duration * 0.85);
        setOptimizedDelay(delay * 0.85);
      }

      // Simplified animation for reduced motion
      if (isReducedMotion || shouldReduceMotion()) {
        setIsSimplified(true);
        setOptimizedDuration(duration * 0.5);
      }
    }
  }, [delay, duration, isMounted]);

  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const count = useMotionValue(from);
  const roundedCount = useTransform(count, value => formatter(value));

  // Simplified version for mobile or reduced motion
  if (isSimplified) {
    return (
      <motion.span
        ref={ref}
        className={className}
        initial={{ opacity: 0.7 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.3, delay: optimizedDelay }}
      >
        {isInView ? formatter(to) : formatter(from)}
      </motion.span>
    );
  }

  return (
    <motion.span
      ref={ref}
      className={className}
    >
      {isInView ? (
        <motion.span
          onAnimationComplete={() => {
            count.set(to);
          }}
          animate={{
            transitionEnd: {
              opacity: 1
            }
          }}
        >
          {/* Show final number directly if animation is complete */}
          <motion.span
            animate={{
              opacity: 1
            }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.2, delay: optimizedDuration }}
          >
            {formatter(to)}
          </motion.span>

          {/* Show animated number during the transition */}
          <motion.span
            style={{ position: 'absolute', opacity: 1 }}
            animate={{
              opacity: 0
            }}
            transition={{ duration: 0.2, delay: optimizedDuration }}
          >
            <motion.span
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
            >
              {isInView && (
                <motion.span
                  style={{ opacity: 1 }}
                  animate={{ opacity: 0 }}
                  transition={{ delay: optimizedDuration }}
                >
                  <motion.span
                    animate={{ y: 0 }}
                    initial={{ y: 0 }}
                  >
                    {roundedCount}
                  </motion.span>
                </motion.span>
              )}
            </motion.span>
          </motion.span>
        </motion.span>
      ) : (
        formatter(from)
      )}
    </motion.span>
  );
};
