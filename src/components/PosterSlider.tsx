import React, { useState, useEffect } from 'react';

const posters = [
  "https://i.ibb.co/Pzc82WVY/1771954802701.jpg",
  "https://i.ibb.co/3yKjdNf4/1772363377386.jpg",
  "https://i.ibb.co/p6JXLxtJ/643365926-4161093790870603-4235336497568717550-n.jpg"
];

interface PosterSliderProps {
  className?: string;
}

export default function PosterSlider({ className = "object-cover w-full h-full" }: PosterSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % posters.length);
    }, 3000); // 3 seconds apart

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {posters.map((src, idx) => (
        <img
          key={src}
          alt={`Event Poster ${idx + 1}`}
          className={`${className} absolute inset-0 transition-opacity duration-500 ease-in-out ${
            idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
          src={src}
          referrerPolicy="no-referrer"
        />
      ))}
    </div>
  );
}
