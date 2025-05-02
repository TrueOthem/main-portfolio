'use client';

import React, { useState, useEffect } from 'react';
import { Puck } from '@measured/puck';
import '@measured/puck/puck.css';
import config from './config';

// Default initial data
const defaultData = {
  content: [],
  root: { props: {} },
  zones: {},
};

export function Editor() {
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

  // Save data to localStorage
  const handlePublish = (data: any) => {
    try {
      localStorage.setItem('puck-portfolio-data', JSON.stringify(data));
      alert('Content published successfully!');
    } catch (error) {
      console.error('Error saving data:', error);
      alert('Error publishing content. Please try again.');
    }
  };

  if (isLoading) {
    return <div className="flex items-center justify-center h-screen">Loading editor...</div>;
  }

  return (
    <div className="puck-editor-container">
      <Puck 
        config={config} 
        data={data} 
        onPublish={handlePublish}
        onChange={(newData) => setData(newData)}
      />
    </div>
  );
}
