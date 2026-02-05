 import { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
 import * as THREE from 'three';
 
 interface AnimatedCurtainProps {
   position?: [number, number, number];
   color?: string;
   mirror?: boolean;
  intensity?: number;
  metallic?: boolean;
 }
 
const AnimatedCurtain = ({ 
  position = [0, 0, 0], 
  color = '#2a2219', 
  mirror = false,
  intensity = 1,
  metallic = false 
}: AnimatedCurtainProps) => {
   const meshRef = useRef<THREE.Mesh>(null);
   const materialRef = useRef<THREE.MeshStandardMaterial>(null);
  const { pointer } = useThree();
   
   const geometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(3, 7, 48, 96);
     return geo;
   }, []);
 
   useFrame((state) => {
     if (!meshRef.current) return;
     
     const time = state.clock.elapsedTime;
     const positions = meshRef.current.geometry.attributes.position;
     const initialPositions = geometry.attributes.position;
     
    // Mouse influence
    const mouseInfluence = pointer.x * 0.3;
    
     for (let i = 0; i < positions.count; i++) {
       const x = initialPositions.getX(i);
       const y = initialPositions.getY(i);
       
      // Enhanced flowing wave effect with multiple frequencies
      const waveX = Math.sin(y * 2 + time * 0.8) * 0.15 * intensity;
      const waveX2 = Math.sin(y * 4 + time * 1.2) * 0.05 * intensity;
      const waveZ = Math.sin(y * 1.5 + time * 0.6 + x) * 0.25 * intensity;
      const waveZ2 = Math.cos(y * 3 + time * 0.9) * 0.1 * intensity;
       
      // Add gentle fold effect at bottom  
      const foldEffect = Math.max(0, (y + 3.5) / 7) * 0.4;
       const fold = Math.sin(x * 3 + time * 0.4) * foldEffect;
       
      // Mouse interaction ripple
      const ripple = Math.sin(y * 2 + x + time * 2) * mouseInfluence * 0.1;
      
      positions.setX(i, x + (waveX + waveX2) * (mirror ? -1 : 1) + ripple);
      positions.setZ(i, waveZ + waveZ2 + fold);
     }
     
     positions.needsUpdate = true;
     meshRef.current.geometry.computeVertexNormals();
    
    // Animate material
    if (materialRef.current) {
      materialRef.current.emissiveIntensity = 0.02 + Math.sin(time * 0.5) * 0.01;
    }
   });
 
   return (
     <mesh 
       ref={meshRef} 
       position={position}
       rotation={[0, mirror ? 0.2 : -0.2, 0]}
     >
      <planeGeometry args={[3, 7, 48, 96]} />
       <meshStandardMaterial
         ref={materialRef}
         color={color}
         side={THREE.DoubleSide}
        roughness={metallic ? 0.3 : 0.6}
        metalness={metallic ? 0.4 : 0.1}
        envMapIntensity={metallic ? 1.5 : 0.5}
        emissive={color}
        emissiveIntensity={0.02}
       />
     </mesh>
   );
 };
 
 export default AnimatedCurtain;