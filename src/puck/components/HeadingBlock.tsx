import React from 'react';
import { RevealText } from '@/components/ui/motion';

type HeadingBlockProps = {
  title: string;
  level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  alignment: "left" | "center" | "right";
};

export const HeadingBlock: React.FC<HeadingBlockProps> = ({ 
  title, 
  level = "h2", 
  alignment = "left" 
}) => {
  const alignmentClass = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  }[alignment];

  const sizeClass = {
    h1: "text-5xl md:text-6xl lg:text-7xl font-medium mb-6",
    h2: "text-4xl md:text-5xl lg:text-6xl font-medium mb-5",
    h3: "text-3xl md:text-4xl lg:text-5xl font-medium mb-4",
    h4: "text-2xl md:text-3xl lg:text-4xl font-medium mb-3",
    h5: "text-xl md:text-2xl lg:text-3xl font-medium mb-2",
    h6: "text-lg md:text-xl lg:text-2xl font-medium mb-2",
  }[level];

  const className = `${sizeClass} ${alignmentClass}`;

  const HeadingTag = level as keyof JSX.IntrinsicElements;

  return (
    <RevealText>
      <HeadingTag className={className}>
        {title}
      </HeadingTag>
    </RevealText>
  );
};

export default HeadingBlock;
