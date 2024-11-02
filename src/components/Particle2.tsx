import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import particlesOption2 from "../data/particles2.json";
import { ISourceOptions } from "@tsparticles/engine";

const Particle: React.FC = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <>
      {init && (
        <Particles options={particlesOption2 as unknown as ISourceOptions} />
      )}
    </>
  );
};

export default Particle;
