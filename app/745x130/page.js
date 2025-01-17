'use client'
import { useState, useEffect } from 'react';

export default function Page745x130() {
  const items = [
    { src: "/picksmall.png", type: "image", duration: 10000 },
    { src: "https://iframe.fresh8.co/index.html?id=6786911601d3a51276653b49", type: "iframe", duration: 20000 },
    { src: "/ads.png", type: "image", duration: 10000 },
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
    <div className="background-blue" style={{ width: "745px", height: "130px" }}>
      <iframe
        key={currentIndex}
        src={currentItem.src}
        width="745"
        height="130"
        style={{ border: "none" }}
      ></iframe>
    </div>
  );
}