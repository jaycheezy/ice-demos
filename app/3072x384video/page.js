'use client'
import { useState, useEffect } from 'react';
import '../globals.css'; // or relative path to your CSS file

export default function Page3072x384() {
  const items = [
    { src: "/whowillwin.png", type: "image", duration: 10000 },
    { src: "/betnow.png", type: "image", duration: 10000 },
    { src: "/yourbrand.png", type: "image", duration: 10000 },
    { src: "https://iframe.fresh8.co/index.html?id=678686c7684b50193ddcd882", type: "iframe", duration: 30000 },
    { src: "/video2.mp4", type: "video", duration: 52000 },
    { src: "/whowillwin.png", type: "image", duration: 10000 },
    { src: "/betnow.png", type: "image", duration: 10000 },
    { src: "/yourbrand.png", type: "image", duration: 10000 },
    { src: "https://iframe.fresh8.co/index.html?id=678686c7684b50193ddcd882", type: "iframe", duration: 30000 },
    { src: "/video.mp4", type: "video", duration: 30000 }
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
    <div className="background-blue" style={{ width: "3072px", height: "384px" }}>
      {currentItem.type === "video" ? (
        <video
          key={currentIndex}
          src={currentItem.src}
          width="3072"
          height="384"
          style={{ border: "none" }}
          autoPlay
          muted
          loop
        />
      ) : (
        <iframe
          key={currentIndex}
          src={currentItem.src}
          width="3072"
          height="384"
          style={{ border: "none" }}
        />
      )}
    </div>
  );
}
