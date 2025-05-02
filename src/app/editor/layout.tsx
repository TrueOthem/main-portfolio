import React from 'react';
import { DeviceContextProvider } from '@/components/device-provider';

export default function EditorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <DeviceContextProvider>
      <div className="editor-layout w-full">
        {children}
      </div>
    </DeviceContextProvider>
  );
}
