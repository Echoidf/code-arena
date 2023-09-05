'use client';
import React, { useState, useEffect } from 'react';

interface LayoutProps {
  text: string;
  delay?: number;
}

const TypeWriter:React.FC<LayoutProps> = ({ text, delay }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [currentIndex, delay, text]);

  return <code className="font-mono font-bold text-center">{displayText}</code>;
};

export default TypeWriter;
