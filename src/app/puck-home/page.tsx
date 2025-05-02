'use client';

import React from 'react';
import { Renderer } from '@/puck/Renderer';
import ClientBody from '../ClientBody';

export default function PuckHomePage() {
  return (
    <ClientBody>
      <div className="w-full">
        <Renderer />
      </div>
    </ClientBody>
  );
}
