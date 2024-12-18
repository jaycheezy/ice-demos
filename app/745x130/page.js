'use client'
import { useState, useEffect } from 'react';

export default function Page745x130() {
  const adUrls = [
    "https://iframe.fresh8.co/index.html?id=676283b567f4ed0456155413",
    "https://iframe.fresh8.co/index.html?id=676283d167f4ed045615578c"
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
        width="745"
        height="130"
        style={{ border: "none" }}
      ></iframe>
    </div>
  );
}