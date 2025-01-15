'use client'
import { useState, useEffect } from 'react';

export default function Page745x640() {
  const items = [
    { src: "/bet20.png", type: "image", duration: 10000 },
    { src: "https://iframe.fresh8.co/index.html?id=678656f801d3a51276650568", type: "iframe", duration: 30000 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const duration = items[currentIndex].duration;
    const timer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, duration);

    return () => clearTimeout(timer);
  }, [currentIndex, items]);

  const currentItem = items[currentIndex];

  return (
    <div>
      <iframe
        key={currentIndex}
        src={currentItem.src}
        width="745"
        height="640"
        style={{ border: "none" }}
      ></iframe>
    </div>
  );
}