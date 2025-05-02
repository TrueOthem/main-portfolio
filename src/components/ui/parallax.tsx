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
        data-oid="qva1v-q"
      >
        <div className="flex whitespace-nowrap flex-nowrap" data-oid="zeu1bx_">
          <span className="block mr-4" data-oid="31t:t5c">
            {children}
          </span>
          <span className="block mr-4" data-oid="x4x61or">
            {children}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`overflow-hidden whitespace-nowrap flex flex-nowrap ${className}`}
      data-oid="l0ppcfa"
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
        data-oid="gd8:vjr"
      >
        <span className="block mr-4" data-oid="ews3rh1">
          {children}
        </span>
        <span className="block mr-4" data-oid="1zoplm-">
          {children}
        </span>
        <span className="block mr-4" data-oid="frbic5_">
          {children}
        </span>
        <span className="block mr-4" data-oid="qzq2..1">
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
      <div className={`relative ${className}`} data-oid="p30kird">
        <div className="relative" data-oid="4cdwupa">
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
      data-oid="19cb.zw"
    >
      <motion.div
        style={{ [transformProperty]: transformValue }}
        className="relative"
        data-oid="gtux3xe"
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
      <div className={`relative ${className}`} data-oid="o6xmql2">
        <div className="relative" data-oid="o_q5al_">
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
      data-oid="zyf06x1"
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
        data-oid="11krtb5"
      >
        <div className="relative h-full w-full" data-oid="j-n0z_d">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="object-cover h-full w-full"
            priority={priority}
            data-oid="0-kpiqp"
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
      data-oid="jf310w3"
    >
      <motion.div
        style={{ y }}
        className="relative h-full w-full"
        data-oid="9pxv2o0"
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="object-cover h-full w-full"
          priority={priority}
          data-oid="qbtfh1_"
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
        data-oid="xyd-c-o"
      >
        <div className="relative h-full w-full" data-oid="noi4sm8">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="object-cover h-full w-full"
            priority={priority}
            data-oid="h9y43xx"
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
      data-oid="owy9u-1"
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
      <div className={className} data-oid="m7cp7_.">
        <div className="w-full h-full" data-oid="eomuub6">
          {children}
        </div>
      </div>
    );
  }

  // Otherwise render with rotation effect
  return <div ref={ref} className={className} data-oid="pm04zdq"></div>;
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
      <div className={className} data-oid="cq4d:yv">
        <div className="w-full h-full" data-oid="8-s6oce">
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
      data-oid="6jpxodz"
    >
      {children}
    </ParallaxRotateEffect>
  );
};
