import React, { useRef } from "react";
import { useTexture } from "@react-three/drei";
import * as THREE from "three"
import chattingkaroimg from './chattingkaroimg.png';
import { useFrame } from "@react-three/fiber";


export const Scene = () => {
  let tex = useTexture(chattingkaroimg);
  let cyl = useRef(null);
  useFrame((state, delta)=>{
    cyl.current.rotation.y += delta;
  })

  return (
    <group rotation={[-1, 1.9, 0.5]} >
    <mesh ref={cyl} position={[0, -0.2, 0.4]} >
      <cylinderGeometry args={[1.1, 1.1, 1.1, 60, 60, true]} />
      <meshStandardMaterial map={tex} side={THREE.DoubleSide} />
    </mesh>
    </group>
  );
};
