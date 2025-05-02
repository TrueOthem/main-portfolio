import React from 'react';
import { FadeIn } from '@/components/ui/motion';

type ExperienceBlockProps = {
  title: string;
  company: string;
  period: string;
  description: string;
};

export const ExperienceBlock: React.FC<ExperienceBlockProps> = ({ 
  title, 
  company, 
  period, 
  description 
}) => {
  return (
    <FadeIn>
      <div className="experience-card mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
          <h3 className="card-title">{title}</h3>
          <span className="text-sm text-muted-foreground">{period}</span>
        </div>
        <p className="text-base font-medium mb-2">{company}</p>
        <p className="card-text">
          {description}
        </p>
      </div>
    </FadeIn>
  );
};

export default ExperienceBlock;
