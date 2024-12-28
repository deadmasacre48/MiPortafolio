import React, { useState, useEffect, useCallback } from "react";
import { FaBox } from "react-icons/fa";

const ShootingGame = () => {
  const [targets, setTargets] = useState([]);
  const [score, setScore] = useState(0);
  const [gameArea, setGameArea] = useState({ width: 0, height: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));

    const updateGameArea = () => {
      setGameArea({
        width: Math.min(window.innerWidth - 40, 800),
        height: Math.min(window.innerHeight - 100, 600),
      });
    };

    updateGameArea();
    window.addEventListener("resize", updateGameArea);
    return () => window.removeEventListener("resize", updateGameArea);
  }, []);

  const spawnTarget = useCallback(() => {
    const newTarget = {
      id: Date.now(),
      x: Math.random() * (gameArea.width - 50),
      y: Math.random() * (gameArea.height - 50),
      size: 30 + Math.random() * 20,
    };
    setTargets((prev) => [...prev, newTarget]);
  }, [gameArea]);

  // Iniciar el juego
  useEffect(() => {
    if (gameArea.width === 0) return;

    const spawnInterval = setInterval(spawnTarget, 2000);
    return () => clearInterval(spawnInterval);
  }, [spawnTarget, gameArea]);

  // Manejar disparos
  const handleShoot = (e) => {
    if (!isMobile) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      checkHit(x, y);
    }
  };

  // Manejar toques en móvil
  const handleTouch = (e) => {
    if (isMobile) {
      const rect = e.currentTarget.getBoundingClientRect();
      const touch = e.touches[0];
      const x = touch.clientX - rect.left;
      const y = touch.clientY - rect.top;
      checkHit(x, y);
    }
  };

  // Verificar impactos
  const checkHit = (x, y) => {
    setTargets((prev) =>
      prev.filter((target) => {
        const hit =
          Math.hypot(
            x - (target.x + target.size / 2),
            y - (target.y + target.size / 2)
          ) <
          target.size / 2;
        if (hit) setScore((s) => s + 1);
        return !hit;
      })
    );
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div className="mb-4 text-xl">Puntuación: {score}</div>
      <div
        className="relative bg-gray-100 rounded-lg cursor-crosshair overflow-hidden"
        style={{ width: gameArea.width, height: gameArea.height }}
        onClick={handleShoot}
        onTouchStart={handleTouch}
      >
        {targets.map((target) => (
          <div
            key={target.id}
            className="absolute bg-red-500 rounded-lg transition-transform"
            style={{
              left: target.x,
              top: target.y,
              width: target.size,
              height: target.size,
            }}
          />
        ))}
      </div>
      <div className="mt-4 text-sm text-gray-600">
        {isMobile ? "Toca los objetivos" : "Haz clic para disparar"}
      </div>
    </div>
  );
};

export default ShootingGame;
