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
      setCurrentAdIndex(prev => (prev + 1) % adUrls.length);
    }, 30000);
    return () => clearInterval(interval);
  }, [adUrls.length]);

  return (
    <div>
      <iframe
        key={currentAdIndex} // This key changes every 30s causing a re-mount
        src={adUrls[currentAdIndex]}
        width="3072"
        height="384"
        style={{ border: "none" }}
      ></iframe>
    </div>
  );
}