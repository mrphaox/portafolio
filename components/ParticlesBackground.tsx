'use client'
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: "transparent",
        },
        particles: {
          color: { value: "#08a892" },
          move: {
            enable: true,
            speed: 1.5,
          },
          number: {
            value: 50,
          },
          opacity: {
            value: 0.7,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 2, max: 4 },
          },
        },
        detectRetina: true,
      }}
      className="absolute top-0 left-0 w-full h-full"
    />
  );
};

export default ParticlesBackground;
