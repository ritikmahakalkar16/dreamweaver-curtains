 import { useRef, useMemo } from 'react';
 import { useFrame } from '@react-three/fiber';
 import * as THREE from 'three';
 
 interface AnimatedCurtainProps {
   position?: [number, number, number];
   color?: string;
   mirror?: boolean;
 }
 
 const AnimatedCurtain = ({ position = [0, 0, 0], color = '#2a2219', mirror = false }: AnimatedCurtainProps) => {
   const meshRef = useRef<THREE.Mesh>(null);
   const materialRef = useRef<THREE.MeshStandardMaterial>(null);
   
   const geometry = useMemo(() => {
     const geo = new THREE.PlaneGeometry(3, 6, 32, 64);
     return geo;
   }, []);
 
   useFrame((state) => {
     if (!meshRef.current) return;
     
     const time = state.clock.elapsedTime;
     const positions = meshRef.current.geometry.attributes.position;
     const initialPositions = geometry.attributes.position;
     
     for (let i = 0; i < positions.count; i++) {
       const x = initialPositions.getX(i);
       const y = initialPositions.getY(i);
       
       // Create flowing wave effect
       const waveX = Math.sin(y * 2 + time * 0.8) * 0.15;
       const waveZ = Math.sin(y * 1.5 + time * 0.6 + x) * 0.2;
       
       // Add gentle fold effect at bottom
       const foldEffect = Math.max(0, (y + 3) / 6) * 0.3;
       const fold = Math.sin(x * 3 + time * 0.4) * foldEffect;
       
       positions.setX(i, x + waveX * (mirror ? -1 : 1));
       positions.setZ(i, waveZ + fold);
     }
     
     positions.needsUpdate = true;
     meshRef.current.geometry.computeVertexNormals();
   });
 
   return (
     <mesh 
       ref={meshRef} 
       position={position}
       rotation={[0, mirror ? 0.2 : -0.2, 0]}
     >
       <planeGeometry args={[3, 6, 32, 64]} />
       <meshStandardMaterial
         ref={materialRef}
         color={color}
         side={THREE.DoubleSide}
         roughness={0.6}
         metalness={0.1}
         envMapIntensity={0.5}
       />
     </mesh>
   );
 };
 
 export default AnimatedCurtain;