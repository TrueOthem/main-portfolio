import React from 'react';
import Image from 'next/image';
import { FadeIn } from '@/components/ui/motion';

type ImageBlockProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority: boolean;
};

export const ImageBlock: React.FC<ImageBlockProps> = ({ 
  src, 
  alt, 
  width = 500, 
  height = 500, 
  priority = false 
}) => {
  return (
    <FadeIn>
      <div className="flex justify-center mb-6">
        <div className="relative overflow-hidden rounded-md">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="object-cover"
            priority={priority}
          />
        </div>
      </div>
    </FadeIn>
  );
};

export default ImageBlock;
