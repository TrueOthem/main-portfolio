import React from 'react';
import Image from 'next/image';
import { RevealText, ParallaxScroll } from '@/components/ui/motion';

type HeroSectionProps = {
  title: string;
  subtitle: string;
  profileImage: string;
};

export const HeroSection: React.FC<HeroSectionProps> = ({ 
  title, 
  subtitle, 
  profileImage 
}) => {
  return (
    <section id="hero-section" className="section-container hero-section relative w-full" data-testid="hero-section">
      <div className="col-span-1 md:border-r border-[#d1d1c7] flex items-center justify-center p-0 md:p-0 lg:p-0 relative overflow-visible">
        <div className="profile-image-container">
          <Image
            src={profileImage}
            alt={title}
            width={500}
            height={500}
            className="profile-image"
            priority
          />
        </div>
      </div>
      <div className="col-span-2 flex items-center p-1 md:p-1 lg:p-1 relative w-full">
        <ParallaxScroll speed={0.1} direction="up">
          <RevealText>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium p-10 md:p-10 lg:p-10">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground p-10 md:p-10 lg:p-10 pt-0 md:pt-0 lg:pt-0">
              {subtitle}
            </p>
          </RevealText>
        </ParallaxScroll>
      </div>
    </section>
  );
};

export default HeroSection;
