'use client'
import { useState, useEffect } from 'react';

export default function Page745x640() {
  const items = [
    { src: "/pick.png", type: "image", duration: 10000 },
    { src: "https://iframe.fresh8.co/index.html?id=678656f801d3a51276650568", type: "iframe", duration: 30000 },
    { src: "/pickQR.png", type: "image", duration: 15000 },
    { src: "https://iframe.fresh8.co/index.html?id=6789371901d3a5127665cbbf", type: "iframe", duration: 20000 },
    { src: "https://iframe.fresh8.co/index.html?id=6789052b01d3a51276657396", type: "iframe", duration: 20000 },
    { src: "https://iframe.fresh8.co/index.html?id=678a142201d3a5127665e29d", type: "iframe", duration: 20000 },
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
    <div className="background-blue" style={{ width: "745px", height: "640px" }}>
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