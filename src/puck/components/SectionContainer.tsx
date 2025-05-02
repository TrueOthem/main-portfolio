import React from 'react';
import { FadeIn, RevealText } from '@/components/ui/motion';
import { DropZone } from '@measured/puck';

type SectionContainerProps = {
  title: string;
  subtitle?: string;
  description?: string;
  className?: string;
};

export const SectionContainer: React.FC<SectionContainerProps> = ({ 
  title, 
  subtitle, 
  description, 
  className = "" 
}) => {
  return (
    <section className={`section-container ${className}`}>
      <div className="section-sidebar">
        <RevealText>
          <h2 className="section-title">{title}</h2>
          {subtitle && <h3 className="section-subtitle">{subtitle}</h3>}
          {description && (
            <p className="section-description">
              {description}
            </p>
          )}
        </RevealText>
      </div>
      <div className="section-content">
        <FadeIn>
          <DropZone zone={title} />
        </FadeIn>
      </div>
    </section>
  );
};

export default SectionContainer;
