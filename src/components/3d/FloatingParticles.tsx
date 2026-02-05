 import { useRef, useMemo } from 'react';
 import { useFrame } from '@react-three/fiber';
 import * as THREE from 'three';
 
 interface FloatingParticlesProps {
   count?: number;
 }
 
 const FloatingParticles = ({ count = 50 }: FloatingParticlesProps) => {
   const meshRef = useRef<THREE.InstancedMesh>(null);
   
   const particles = useMemo(() => {
     return Array.from({ length: count }, () => ({
       position: [
         (Math.random() - 0.5) * 20,
         (Math.random() - 0.5) * 12,
         (Math.random() - 0.5) * 10 - 2,
       ] as [number, number, number],
       speed: Math.random() * 0.5 + 0.2,
       offset: Math.random() * Math.PI * 2,
       scale: Math.random() * 0.03 + 0.01,
     }));
   }, [count]);
 
   useFrame((state) => {
     if (!meshRef.current) return;
     
     const time = state.clock.elapsedTime;
     const matrix = new THREE.Matrix4();
     
     particles.forEach((particle, i) => {
       const x = particle.position[0] + Math.sin(time * particle.speed + particle.offset) * 0.5;
       const y = particle.position[1] + Math.cos(time * particle.speed * 0.8 + particle.offset) * 0.3;
       const z = particle.position[2];
       
       matrix.setPosition(x, y, z);
       matrix.scale(new THREE.Vector3(particle.scale, particle.scale, particle.scale));
       meshRef.current!.setMatrixAt(i, matrix);
     });
     
     meshRef.current.instanceMatrix.needsUpdate = true;
   });
 
   return (
     <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
       <sphereGeometry args={[1, 8, 8]} />
       <meshStandardMaterial
         color="#c9a86c"
         emissive="#c9a86c"
         emissiveIntensity={0.5}
         transparent
         opacity={0.6}
       />
     </instancedMesh>
   );
 };
 
 export default FloatingParticles;