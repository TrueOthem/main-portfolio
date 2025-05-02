'use client';

import React, { useState, useEffect } from 'react';
import { Render } from '@measured/puck';
import config from './config';

// Default data
const defaultData = {
  content: [],
  root: { props: {} },
  zones: {},
};

export function Renderer() {
  const [data, setData] = useState(defaultData);
  const [isLoading, setIsLoading] = useState(true);

  // Load data from localStorage on component mount
  useEffect(() => {
    setIsLoading(true);
    try {
      const savedData = localStorage.getItem('puck-portfolio-data');
      if (savedData) {
        setData(JSON.parse(savedData));
      }
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    return <div className="flex items-center justify-center h-screen">Loading content...</div>;
  }

  // If no content is available, show a message
  if (!data.content || data.content.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] p-8 text-center">
        <h2 className="text-2xl font-medium mb-4">No content available</h2>
        <p className="text-muted-foreground mb-6">
          Use the editor to create and publish content for your portfolio.
        </p>
        <a 
          href="/editor" 
          className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
        >
          Go to Editor
        </a>
      </div>
    );
  }

  return <Render config={config} data={data} />;
}
