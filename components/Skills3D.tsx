import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { SKILLS } from '../constants';

const Word = ({ children, position }: { children: string; position: THREE.Vector3 }) => {
  const ref = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  
  useFrame(({ camera }) => {
    if (ref.current) {
      // Make text always face the camera (Billboard effect)
      ref.current.quaternion.copy(camera.quaternion);
      // Smooth color transition on hover
      (ref.current.material as THREE.MeshStandardMaterial).color.lerp(
        new THREE.Color(hovered ? '#a855f7' : '#e2e8f0'), 
        0.1
      );
      // Subtle scaling on hover
      const targetScale = hovered ? 1.2 : 1;
      ref.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }
  });

  return (
    <Text
      ref={ref}
      position={position}
      fontSize={1.2}
      // Using default font to ensure loading
      color="#e2e8f0"
      anchorX="center"
      anchorY="middle"
      onPointerOver={(e) => { e.stopPropagation(); setHovered(true); document.body.style.cursor = 'pointer'; }}
      onPointerOut={() => { setHovered(false); document.body.style.cursor = 'auto'; }}
    >
      {children}
    </Text>
  );
};

const Cloud = ({ radius = 15 }: { radius: number }) => {
  // Distribute skills evenly on a sphere using Fibonacci Sphere algorithm
  const words = useMemo(() => {
    const temp: [THREE.Vector3, string][] = [];
    const count = SKILLS.length;
    const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle

    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2; // y goes from 1 to -1
      const radiusAtY = Math.sqrt(1 - y * y); // radius at y
      const theta = phi * i; // golden angle increment

      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;

      const vector = new THREE.Vector3(x * radius, y * radius, z * radius);
      temp.push([vector, SKILLS[i].name]);
    }
    return temp;
  }, [radius]);

  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state, delta) => {
      // Continuous slow rotation independent of user interaction
      if (groupRef.current) {
          groupRef.current.rotation.y += delta * 0.05;
      }
  })

  return (
    <group ref={groupRef}>
      {words.map(([pos, word], index) => (
        <Word key={index} position={pos}>
          {word}
        </Word>
      ))}
    </group>
  );
};

const Skills3D: React.FC = () => {
  return (
    <div className="w-full h-full min-h-[500px]">
      <Canvas camera={{ position: [0, 0, 30], fov: 50 }}>
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        
        <Cloud radius={14} />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate={true}
          autoRotateSpeed={0.8}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
    </div>
  );
};

export default Skills3D;