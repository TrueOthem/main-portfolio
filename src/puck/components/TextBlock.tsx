import React from 'react';
import { FadeIn } from '@/components/ui/motion';

type TextBlockProps = {
  content: string;
  alignment: "left" | "center" | "right";
};

export const TextBlock: React.FC<TextBlockProps> = ({ 
  content, 
  alignment = "left" 
}) => {
  const alignmentClass = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  }[alignment];

  return (
    <FadeIn>
      <div className={`text-base md:text-lg leading-relaxed mb-6 ${alignmentClass}`}>
        {content.split('\n').map((paragraph, index) => (
          <p key={index} className="mb-4">
            {paragraph}
          </p>
        ))}
      </div>
    </FadeIn>
  );
};

export default TextBlock;
