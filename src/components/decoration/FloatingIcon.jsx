import React, { useCallback, useEffect, useState, useMemo } from "react";
import { FaTimes, FaGamepad } from "react-icons/fa";

const ICON_COUNT = 25;
const UPDATE_INTERVAL = 50;
const BOUNDARY_PADDING = 50;

const FloatingIcons = () => {
  const getRandomPosition = useCallback(
    () => ({
      x: Math.random() * (window.innerWidth - BOUNDARY_PADDING),
      y: Math.random() * (window.innerHeight - BOUNDARY_PADDING),
      dx: (Math.random() - 0.5) * 2,
      dy: (Math.random() - 0.5) * 2,
      angle: Math.random() * 360,
      dAngle: (Math.random() - 0.5) * 2,
    }),
    []
  );

  const initialPositions = useMemo(
    () => Array.from({ length: ICON_COUNT }, getRandomPosition),
    [getRandomPosition]
  );

  const [positions, setPositions] = useState(initialPositions);

  const updatePosition = useCallback((pos) => {
    const newX = pos.x + pos.dx;
    const newY = pos.y + pos.dy;
    const newAngle = pos.angle + pos.dAngle;

    return {
      x:
        newX <= 0 || newX >= window.innerWidth - BOUNDARY_PADDING
          ? pos.x - pos.dx
          : newX,
      y:
        newY <= 0 || newY >= window.innerHeight - BOUNDARY_PADDING
          ? pos.y - pos.dy
          : newY,
      dx:
        newX <= 0 || newX >= window.innerWidth - BOUNDARY_PADDING
          ? -pos.dx
          : pos.dx,
      dy:
        newY <= 0 || newY >= window.innerHeight - BOUNDARY_PADDING
          ? -pos.dy
          : pos.dy,
      angle: newAngle,
      dAngle: pos.dAngle,
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPositions((positions) => positions.map(updatePosition));
    }, UPDATE_INTERVAL);

    return () => clearInterval(interval);
  }, [updatePosition]);

  return (
    <div className="fixed inset-0 pointer-events-none">
      {positions.map((pos, index) => (
        <div
          key={index}
          className="absolute transition-all duration-300 ease-linear opacity-60 hover:opacity-100"
          style={{
            transform: `translate(${pos.x}px, ${pos.y}px) rotate(${pos.angle}deg)`,
          }}
        >
          {index % 2 === 0 ? (
            <FaTimes size={16} className="text-purpletoy2" />
          ) : (
            <FaGamepad size={16} className="text-purpletoy3" />
          )}
        </div>
      ))}
    </div>
  );
};

export default FloatingIcons;
