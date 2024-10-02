import React from "react";
import "../style.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import { Scene } from "./Scene";
import { Bloom, EffectComposer, ToneMapping } from "@react-three/postprocessing";

const ProjectAnimation = () => {
  return (
    <Canvas flat camera={{ fov: 35 }} >
      <OrbitControls minDistance={4.2} />
      <ambientLight intensity={2.4} />
      <directionalLight intensity={1.8} position={[8, 8, 8]} />
      {/* <pointLight position={[10, 10, 10]} intensity={5.5} /> */}
      <Scene />
      <EffectComposer>
        <Bloom
          intensity={1.2} // Balanced bloom intensity
          luminanceThreshold={0} // Control which parts of the scene glow
          luminanceSmoothing={1.9} // The bloom intensity.
        />
        {/* <ToneMapping adaptive /> */}
      </EffectComposer>
    </Canvas>
  );
};

export default ProjectAnimation;
