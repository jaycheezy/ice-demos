'use client'
import { useState, useEffect } from 'react';

export default function Page3072x384() {
  const adUrls = [
    "https://iframe.fresh8.co/index.html?id=675c0f8967f4ed0456136b35",
    "/video.mp4"
  ];
  
  const [currentAdIndex, setCurrentAdIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAdIndex((prev) => (prev + 1) % adUrls.length);
    }, 30000);
    return () => clearInterval(interval);
  }, [adUrls.length]);

  const currentItem = adUrls[currentAdIndex];
  const isVideo = currentItem.endsWith(".mp4");

  return (
    <div style={{ width: "3072px", height: "384px" }}>
      {isVideo ? (
        <video
          key={currentAdIndex}
          src={currentItem}
          width="3072"
          height="384"
          style={{ border: "none" }}
          autoPlay
          muted
          loop
        />
      ) : (
        <iframe
          key={currentAdIndex}
          src={currentItem}
          width="3072"
          height="384"
          style={{ border: "none" }}
        ></iframe>
      )}
    </div>
  );
}