import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // Change to loadSlim

export default function Particle() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    if (init) return;
    console.time("ParticlesLoad");
    console.log("Starting particle engine initialization");
    initParticlesEngine(async (engine) => {
      console.time("LoadFull");
      await loadSlim(engine); // Change to loadSlim
      console.timeEnd("LoadFull");
    }).then(() => {
      console.log("Particle engine initialized");
      setInit(true);
      console.timeEnd("ParticlesLoad");
    });

    return () => {
      console.log("Cleaning up particle engine");
    };
  }, [init]);

  const particlesLoaded = (container) => {
    console.log("Particles loaded:", container);
  };

  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          style={{
            zIndex: 1,
          }}
          options={{
            background: {
              color: "#ffffff",
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "grab",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 2,
                },
                grab: {
                  distance: 100,
                },
              },
            },
            particles: {
              color: {
                value: "#001E48",
              },
              links: {
                color: "#001E48",
                distance: 100,
                enable: true,
                opacity: 0.3,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "out",
                },
                random: false,
                speed: 1.5,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 200,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 1 },
              },
            },
            detectRetina: true,
          }}
        />
      )}
    </>
  );
}