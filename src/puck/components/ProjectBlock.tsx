import React from 'react';
import { FadeIn } from '@/components/ui/motion';
import { TiltCard } from '@/components/ui/interactive-motion';

type ProjectBlockProps = {
  title: string;
  category: string;
  company: string;
  year: string;
  description: string;
  imageClass: string;
};

export const ProjectBlock: React.FC<ProjectBlockProps> = ({ 
  title, 
  category, 
  company, 
  year, 
  description, 
  imageClass 
}) => {
  return (
    <FadeIn>
      <TiltCard glareEffect={true} className="h-full">
        <div className="content-card">
          <div className={`w-full h-40 mb-4 rounded-sm ${imageClass}`}></div>
          <div className="flex justify-between items-start mb-2">
            <h3 className="card-title">{title}</h3>
            <span className="text-sm text-muted-foreground">{year}</span>
          </div>
          <p className="text-sm font-medium mb-2">{company}</p>
          <p className="card-text">
            {description}
          </p>
        </div>
      </TiltCard>
    </FadeIn>
  );
};

export default ProjectBlock;
