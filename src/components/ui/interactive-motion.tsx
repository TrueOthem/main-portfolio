'use client';

import { motion, useMotionValue, useTransform, useInView, useSpring } from 'framer-motion';
import { useRef, ReactNode, useState } from 'react';

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

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    setRotateX(-yPct * tiltFactor); // Inverted for correct tilt direction
    setRotateY(xPct * tiltFactor);
  };

  const handleMouseEnter = () => {
    setMouseOver(true);
  };

  const handleMouseLeave = () => {
    setMouseOver(false);
    setRotateX(0);
    setRotateY(0);
  };

  const xSpring = useSpring(rotateX, {
    stiffness: 400,
    damping: 25,
  });

  const ySpring = useSpring(rotateY, {
    stiffness: 400,
    damping: 25,
  });

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
        scale: mouseOver ? scale : 1,
        transition: `transform ${transitionDuration}s ease-out`,
      }}
    >
      {children}

      {/* Optional glare effect */}
      {glareEffect && mouseOver && (
        <motion.div
          className="absolute inset-0 rounded-[inherit] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 80%)',
            mixBlendMode: 'overlay',
            transform: 'translateZ(1px)', // Place slightly above content
            opacity: useTransform(
              useMotionValue(Math.sqrt(rotateX * rotateX + rotateY * rotateY)),
              [0, 10],
              [0, 0.15]
            ),
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
    }, 1000);

    if (onClick) onClick();
  };

  return (
    <motion.button
      className={`relative overflow-hidden ${className}`}
      onClick={handleClick}
      whileTap={{ scale: 0.98 }}
    >
      {/* The ripple elements */}
      {ripples.map(ripple => (
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
            width: 500,
            height: 500,
            opacity: 0,
          }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
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

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 300 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const calculateDistance = (x1: number, y1: number, x2: number, y2: number) => {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distance = calculateDistance(e.clientX, e.clientY, centerX, centerY);

    if (distance < distanceThreshold) {
      const distancePercentage = 1 - Math.max(0, distance / distanceThreshold);
      const moveX = (e.clientX - centerX) * magnetStrength * distancePercentage;
      const moveY = (e.clientY - centerY) * magnetStrength * distancePercentage;

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

  // Update element center position on mount and resize
  const updateElementCenter = () => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    setElementCenter({
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    });
  };

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
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 origin-left z-50"
      style={{
        scaleX,
        height,
        backgroundColor: color
      }}
    />
  );
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
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const count = useMotionValue(from);
  const roundedCount = useTransform(count, value => formatter(value));

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
            transition={{ duration: 0.2, delay: duration }}
          >
            {formatter(to)}
          </motion.span>

          {/* Show animated number during the transition */}
          <motion.span
            style={{ position: 'absolute', opacity: 1 }}
            animate={{
              opacity: 0
            }}
            transition={{ duration: 0.2, delay: duration }}
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
                  transition={{ delay: duration }}
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
