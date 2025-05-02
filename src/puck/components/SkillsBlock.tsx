import React from 'react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/motion';

type SkillsBlockProps = {
  title: string;
  skills: string[];
  category: string;
};

export const SkillsBlock: React.FC<SkillsBlockProps> = ({ 
  title, 
  skills, 
  category 
}) => {
  return (
    <FadeIn>
      <div className="mb-12">
        <h3 className="text-xl font-medium mb-6 pb-2 border-b border-[#d1d1c7]">{category}</h3>
        <StaggerContainer className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <StaggerItem key={skill}>
              <span className="px-4 py-2 bg-[#f4f4f0] rounded-full text-sm">
                {skill}
              </span>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </FadeIn>
  );
};

export default SkillsBlock;
