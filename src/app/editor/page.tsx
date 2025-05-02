'use client';

import React from 'react';
import { Editor } from '@/puck/Editor';
import ClientBody from '../ClientBody';

export default function EditorPage() {
  return (
    <ClientBody>
      <div className="w-full min-h-screen">
        <Editor />
      </div>
    </ClientBody>
  );
}
