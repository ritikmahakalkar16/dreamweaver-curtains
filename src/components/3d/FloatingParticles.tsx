 import { useRef, useMemo } from 'react';
 import { useFrame } from '@react-three/fiber';
 import * as THREE from 'three';
 
 interface FloatingParticlesProps {
   count?: number;
 }
 
const FloatingParticles = ({ count = 80 }: FloatingParticlesProps) => {
   const meshRef = useRef<THREE.InstancedMesh>(null);
   
   const particles = useMemo(() => {
     return Array.from({ length: count }, () => ({
       position: [
        (Math.random() - 0.5) * 25,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 12 - 3,
       ] as [number, number, number],
      speed: Math.random() * 0.8 + 0.3,
       offset: Math.random() * Math.PI * 2,
      scale: Math.random() * 0.05 + 0.015,
      rotationSpeed: (Math.random() - 0.5) * 2,
     }));
   }, [count]);
 
   useFrame((state) => {
     if (!meshRef.current) return;
     
     const time = state.clock.elapsedTime;
     const matrix = new THREE.Matrix4();
    const rotation = new THREE.Euler();
    const quaternion = new THREE.Quaternion();
     
     particles.forEach((particle, i) => {
      const x = particle.position[0] + Math.sin(time * particle.speed + particle.offset) * 1;
      const y = particle.position[1] + Math.cos(time * particle.speed * 0.8 + particle.offset) * 0.6;
      const z = particle.position[2] + Math.sin(time * particle.speed * 0.5 + particle.offset) * 0.5;
      
      rotation.set(
        time * particle.rotationSpeed,
        time * particle.rotationSpeed * 0.7,
        time * particle.rotationSpeed * 0.5
      );
      quaternion.setFromEuler(rotation);
       
      matrix.compose(
        new THREE.Vector3(x, y, z),
        quaternion,
        new THREE.Vector3(particle.scale, particle.scale, particle.scale)
      );
       meshRef.current!.setMatrixAt(i, matrix);
     });
     
     meshRef.current.instanceMatrix.needsUpdate = true;
   });
 
   return (
     <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <icosahedronGeometry args={[1, 0]} />
       <meshStandardMaterial
         color="#c9a86c"
         emissive="#c9a86c"
        emissiveIntensity={0.6}
         transparent
        opacity={0.7}
        roughness={0.3}
        metalness={0.5}
       />
     </instancedMesh>
   );
 };
 
 export default FloatingParticles;