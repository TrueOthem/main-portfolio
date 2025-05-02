"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef, ReactNode, useEffect, useState } from "react";
import Image from "next/image";
import { useDeviceDetection, shouldReduceMotion } from "@/lib/utils";

interface ParallaxProps {
  children?: ReactNode;
  baseVelocity?: number;
  className?: string;
}

export const ParallaxText = ({
  children,
  baseVelocity = 100,
  className = "",
}: ParallaxProps) => {
  const baseX = useRef<MotionValue<number>>(motion.useMotionValue(0));
  const [optimizedVelocity, setOptimizedVelocity] = useState(baseVelocity);
  const [duration, setDuration] = useState(20);
  const [isMounted, setIsMounted] = useState(false);
  const [shouldDisable, setShouldDisable] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    if (isMounted) {
      const { isMobile, isTablet, isReducedMotion } = useDeviceDetection();

      // Optimize performance on mobile devices by reducing motion
      if (isMobile) {
        setOptimizedVelocity(baseVelocity * 0.7);
        setDuration(25); // Slower is less CPU intensive
      } else if (isTablet) {
        setOptimizedVelocity(baseVelocity * 0.85);
        setDuration(22);
      }

      // Respect reduced motion preferences
      if (isReducedMotion || shouldReduceMotion()) {
        setShouldDisable(true);
      }
    }
  }, [baseVelocity, isMounted]);

  // Static render for reduced motion or SSR
  if (shouldDisable) {
    return (
      <div
        className={`whitespace-nowrap flex flex-nowrap ${className}`}
        data-oid="_ib_-7d"
      >
        <div className="flex whitespace-nowrap flex-nowrap" data-oid="98y9eea">
          <span className="block mr-4" data-oid="ftk-cup">
            {children}
          </span>
          <span className="block mr-4" data-oid="ro.j9c3">
            {children}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`overflow-hidden whitespace-nowrap flex flex-nowrap ${className}`}
      data-oid="jqn5w43"
    >
      <motion.div
        className="flex whitespace-nowrap flex-nowrap"
        style={{ x: baseX.current }}
        animate={{ x: [`0%`, `-50%`] }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        data-oid="tf8ls41"
      >
        <span className="block mr-4" data-oid="6i:nb.0">
          {children}
        </span>
        <span className="block mr-4" data-oid="kh88qqf">
          {children}
        </span>
        <span className="block mr-4" data-oid="au574.q">
          {children}
        </span>
        <span className="block mr-4" data-oid="zg0.chm">
          {children}
        </span>
      </motion.div>
    </div>
  );
};

interface ParallaxScrollProps {
  children: ReactNode;
  speed?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
}

// Create a separate component for the parallax effect to avoid conditional hook calls
const ParallaxScrollEffect = ({
  children,
  speed,
  direction,
  className,
  disabled,
}: {
  children: ReactNode;
  speed: number;
  direction: "up" | "down" | "left" | "right";
  className: string;
  disabled: boolean;
}) => {
  // Always call all hooks unconditionally
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Create transform values for all directions
  const upTransform = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${speed * 100}%`],
  );
  const downTransform = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `${speed * 100}%`],
  );
  const leftTransform = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${speed * 100}%`],
  );
  const rightTransform = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `${speed * 100}%`],
  );

  // Select the appropriate transform based on direction
  let transformValue;
  let transformProperty;

  switch (direction) {
    case "up":
      transformValue = upTransform;
      transformProperty = "y";
      break;
    case "down":
      transformValue = downTransform;
      transformProperty = "y";
      break;
    case "left":
      transformValue = leftTransform;
      transformProperty = "x";
      break;
    case "right":
      transformValue = rightTransform;
      transformProperty = "x";
      break;
    default:
      transformValue = upTransform;
      transformProperty = "y";
  }

  // If disabled, render static version
  if (disabled) {
    return (
      <div className={`relative ${className}`} data-oid="xf_cgh2">
        <div className="relative" data-oid="0ry44eb">
          {children}
        </div>
      </div>
    );
  }

  // Otherwise render with parallax effect
  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      data-oid=":emj:bn"
    >
      <motion.div
        style={{ [transformProperty]: transformValue }}
        className="relative"
        data-oid="hty9rs7"
      >
        {children}
      </motion.div>
    </div>
  );
};

// Main component that handles device detection and mounting logic
export const ParallaxScroll = ({
  children,
  speed = 0.5,
  className = "",
  direction = "up",
}: ParallaxScrollProps) => {
  const [optimizedSpeed, setOptimizedSpeed] = useState(speed);
  const [isMounted, setIsMounted] = useState(false);
  const [shouldDisable, setShouldDisable] = useState(false);

  // Handle device detection and reduced motion preferences
  useEffect(() => {
    setIsMounted(true);

    // Only run client-side code after mounting
    if (typeof window !== "undefined") {
      const { isMobile, isTablet, isReducedMotion } = useDeviceDetection();

      // Reduce parallax effect on mobile
      if (isMobile) {
        setOptimizedSpeed(speed * 0.5);
      } else if (isTablet) {
        setOptimizedSpeed(speed * 0.7);
      }

      // Respect reduced motion preferences
      if (isReducedMotion || shouldReduceMotion()) {
        setShouldDisable(true);
      }
    }
  }, [speed]);

  // For SSR or when not mounted yet, render static version
  if (!isMounted) {
    return (
      <div className={`relative ${className}`} data-oid="m72hylj">
        <div className="relative" data-oid="y7m8fe:">
          {children}
        </div>
      </div>
    );
  }

  // Use the effect component for client-side rendering
  return (
    <ParallaxScrollEffect
      speed={optimizedSpeed}
      direction={direction}
      className={className}
      disabled={shouldDisable}
      data-oid="zxky6py"
    >
      {children}
    </ParallaxScrollEffect>
  );
};

interface ParallaxImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  speed?: number;
  className?: string;
  priority?: boolean;
  direction?: "up" | "down";
}

// Create a separate component for the parallax image effect
const ParallaxImageEffect = ({
  src,
  alt,
  width,
  height,
  speed,
  direction,
  className,
  priority,
  disabled,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  speed: number;
  direction: "up" | "down";
  className: string;
  priority: boolean;
  disabled: boolean;
}) => {
  // Always call all hooks unconditionally
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Create transform values for both directions
  const upTransform = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${speed * 50}%`],
  );
  const downTransform = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `${speed * 50}%`],
  );

  // Select the appropriate transform based on direction
  const y = direction === "up" ? upTransform : downTransform;

  // If disabled, render static version
  if (disabled) {
    return (
      <div
        className={`relative overflow-hidden ${className}`}
        data-oid="eq7ms99"
      >
        <div className="relative h-full w-full" data-oid="y8ew2c3">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="object-cover h-full w-full"
            priority={priority}
            data-oid="4zsn3wx"
          />
        </div>
      </div>
    );
  }

  // Otherwise render with parallax effect
  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      data-oid="r:4nqjm"
    >
      <motion.div
        style={{ y }}
        className="relative h-full w-full"
        data-oid="_r949v:"
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="object-cover h-full w-full"
          priority={priority}
          data-oid="dbzwsg:"
        />
      </motion.div>
    </div>
  );
};

// Main component that handles device detection and mounting logic
export const ParallaxImage = ({
  src,
  alt,
  width,
  height,
  speed = 0.5,
  className = "",
  priority = false,
  direction = "up",
}: ParallaxImageProps) => {
  const [optimizedSpeed, setOptimizedSpeed] = useState(speed);
  const [isMounted, setIsMounted] = useState(false);
  const [shouldDisable, setShouldDisable] = useState(false);

  // Handle device detection and reduced motion preferences
  useEffect(() => {
    setIsMounted(true);

    // Only run client-side code after mounting
    if (typeof window !== "undefined") {
      const { isMobile, isTablet, isReducedMotion } = useDeviceDetection();

      // Reduce parallax effect on mobile
      if (isMobile) {
        setOptimizedSpeed(speed * 0.4);
      } else if (isTablet) {
        setOptimizedSpeed(speed * 0.6);
      }

      // Respect reduced motion preferences
      if (isReducedMotion || shouldReduceMotion()) {
        setShouldDisable(true);
      }
    }
  }, [speed]);

  // For SSR or when not mounted yet, render static version
  if (!isMounted) {
    return (
      <div
        className={`relative overflow-hidden ${className}`}
        data-oid="magc6:z"
      >
        <div className="relative h-full w-full" data-oid="1sn1ay0">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="object-cover h-full w-full"
            priority={priority}
            data-oid="nmjae0z"
          />
        </div>
      </div>
    );
  }

  // Use the effect component for client-side rendering
  return (
    <ParallaxImageEffect
      src={src}
      alt={alt}
      width={width}
      height={height}
      speed={optimizedSpeed}
      direction={direction}
      className={className}
      priority={priority}
      disabled={shouldDisable}
      data-oid="u76xgo3"
    />
  );
};

// Create a separate component for the parallax rotation effect
const ParallaxRotateEffect = ({
  children,
  className,
  rotation,
  disabled,
}: {
  children: ReactNode;
  className: string;
  rotation: number;
  disabled: boolean;
}) => {
  // Always call all hooks unconditionally
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Create transform value for rotation
  const rotate = useTransform(scrollYProgress, [0, 1], [0, rotation]);

  // If disabled, render static version
  if (disabled) {
    return (
      <div className={className} data-oid="7tf5lw4">
        <div className="w-full h-full" data-oid="c.m7e06">
          {children}
        </div>
      </div>
    );
  }

  // Otherwise render with rotation effect
  return <div ref={ref} className={className} data-oid="e-ijtb8"></div>;
};

// Main component that handles device detection and mounting logic
export const ParallaxRotate = ({
  children,
  className = "",
  maxRotation = 180,
}: {
  children: ReactNode;
  className?: string;
  maxRotation?: number;
}) => {
  const [optimizedRotation, setOptimizedRotation] = useState(maxRotation);
  const [isMounted, setIsMounted] = useState(false);
  const [shouldDisable, setShouldDisable] = useState(false);

  // Handle device detection and reduced motion preferences
  useEffect(() => {
    setIsMounted(true);

    // Only run client-side code after mounting
    if (typeof window !== "undefined") {
      const { isMobile, isTablet, isReducedMotion } = useDeviceDetection();

      // Reduce rotation intensity on mobile
      if (isMobile) {
        setOptimizedRotation(maxRotation * 0.5);
      } else if (isTablet) {
        setOptimizedRotation(maxRotation * 0.7);
      }

      // Respect reduced motion preferences
      if (isReducedMotion || shouldReduceMotion()) {
        setShouldDisable(true);
      }
    }
  }, [maxRotation]);

  // For SSR or when not mounted yet, render static version
  if (!isMounted) {
    return (
      <div className={className} data-oid="4eejfhg">
        <div className="w-full h-full" data-oid="u1275s-">
          {children}
        </div>
      </div>
    );
  }

  // Use the effect component for client-side rendering
  return (
    <ParallaxRotateEffect
      rotation={optimizedRotation}
      className={className}
      disabled={shouldDisable}
      data-oid="7wbmrkr"
    >
      {children}
    </ParallaxRotateEffect>
  );
};
