import React, { useEffect, useState } from 'react';

function Background() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [elementPositions, setElementPositions] = useState([]);

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    // Generate random positions for each element when the component mounts
    const generateRandomPositions = (count) => {
      return Array.from({ length: count }, () => ({
        top: Math.random() * window.innerHeight, // Random position within the viewport height
        left: Math.random() * window.innerWidth, // Random position within the viewport width
      }));
    };

    // Generate positions for 100 dots (or any number you want)
    setElementPositions(generateRandomPositions(100));

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const elementsCount = 100; // Number of dots you want to generate
  const speedBase = 2; // Adjust base speed for all dots

  return (
    <div className="container">
      {Array.from({ length: elementsCount }, (_, index) => {
        const position = elementPositions[index] || { top: 0, left: 0 };
        const speed = (index % 10) + speedBase; // Create a variety of speeds for different dots
        const xOffset = (mousePosition.x * speed) / 100;
        const yOffset = (mousePosition.y * speed) / 100;

        return (
          <div
            key={index}
            className="element"
            style={{
              position: 'absolute',
              top: `${position.top}px`, // Set random initial top position
              left: `${position.left}px`, // Set random initial left position
              transform: `translate(${xOffset}px, ${yOffset}px)`,
              fontSize: '1rem', // Adjust the size as needed
              color: 'white',
            }}
          >
            .
          </div>
        );
      })}

      <div
        className="cursor-circle"
        style={{
          position: 'absolute',
          top: mousePosition.y - 15 + 'px', // Adjust to center circle on cursor
          left: mousePosition.x - 15 + 'px', // Adjust to center circle on cursor
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          border: '2px solid white',
          boxShadow: '0 0 5px white, 0 0 12px cyan, 0 0 20px cyan',
          pointerEvents: 'none', // So it doesn't interfere with cursor events
          zIndex: 1000, // Keep the circle on top
        }}
      />
    </div>
  );
}

export default Background;


