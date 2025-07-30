// components/ParticlesBackground.jsx

"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      background: {
        color: { value: "transparent" },
      },
      fpsLimit: 60,
      particles: {
        color: { value: "#FFD700" },
        twinkle: {
          particles: {
            enable: true,
            frequency: 0.05,
            opacity: 1,
          },
        },
        move: {
          direction: "top",
          enable: true,
          outModes: { default: "out" },
          random: true,
          speed: 0.5,
          straight: false,
        },
        number: {
          density: { enable: true, area: 800 },
          value: 80,
        },
        opacity: {
          value: { min: 0.5, max: 0.9 },
        },
        shape: { type: "circle" },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      // КЛЮЧОВА ЗМІНА: Вимикаємо інтерактивність, щоб вона не конфліктувала
      interactivity: {
        events: {
          onHover: {
            enable: false, // Вимикаємо реакцію на ховер
          },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (init) {
    return (
      <div className="absolute inset-0 z-5 pointer-events-none">
        <Particles id="tsparticles" options={options} />
      </div>
    );
  }

  return null;
};
export default ParticlesBackground;
