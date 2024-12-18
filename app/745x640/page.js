'use client'
import { useState, useEffect } from 'react';

export default function Page745x640() {
  const adUrls = [
    "https://iframe.fresh8.co/index.html?id=67627b5a67f4ed0456154b59",
    "https://iframe.fresh8.co/index.html?id=67627b8067f4ed0456155092"
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
        height="640"
        style={{ border: "none" }}
      ></iframe>
    </div>
  );
}