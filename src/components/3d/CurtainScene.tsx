 import { Canvas } from '@react-three/fiber';
import { Suspense, useRef } from 'react';
import { Environment, Float, PerspectiveCamera, Stars, Sparkles } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
 import AnimatedCurtain from './AnimatedCurtain';
 import FloatingParticles from './FloatingParticles';
 
// Animated light component
const AnimatedLights = () => {
  const light1 = useRef<THREE.PointLight>(null);
  const light2 = useRef<THREE.PointLight>(null);
  
  useFrame((state) => {
    const time = state.clock.elapsedTime;
    if (light1.current) {
      light1.current.position.x = Math.sin(time * 0.3) * 5;
      light1.current.position.y = Math.cos(time * 0.2) * 3 + 2;
      light1.current.intensity = 0.6 + Math.sin(time * 0.5) * 0.2;
    }
    if (light2.current) {
      light2.current.position.x = Math.cos(time * 0.4) * 4;
      light2.current.position.z = Math.sin(time * 0.3) * 3;
      light2.current.intensity = 0.4 + Math.cos(time * 0.7) * 0.15;
    }
  });
  
  return (
    <>
      <pointLight ref={light1} position={[0, 0, 5]} intensity={0.6} color="#c9a86c" />
      <pointLight ref={light2} position={[-3, 2, 3]} intensity={0.4} color="#e8d5c4" />
    </>
  );
};

// Floating fabric ribbon
const FloatingRibbon = ({ position, color, delay = 0 }: { position: [number, number, number], color: string, delay?: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.elapsedTime + delay;
    meshRef.current.rotation.x = Math.sin(time * 0.5) * 0.3;
    meshRef.current.rotation.y = time * 0.2;
    meshRef.current.rotation.z = Math.cos(time * 0.4) * 0.2;
    meshRef.current.position.y = position[1] + Math.sin(time * 0.6) * 0.5;
  });
  
  return (
    <mesh ref={meshRef} position={position}>
      <torusGeometry args={[0.5, 0.02, 16, 100, Math.PI * 1.5]} />
      <meshStandardMaterial 
        color={color} 
        roughness={0.4} 
        metalness={0.3}
        emissive={color}
        emissiveIntensity={0.1}
      />
    </mesh>
  );
};

 const CurtainScene = () => {
   return (
     <div className="absolute inset-0 z-0">
      <Canvas gl={{ antialias: true, alpha: true }}>
         <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={45} />
         <ambientLight intensity={0.3} />
         <directionalLight position={[10, 10, 5]} intensity={0.8} color="#d4a574" />
         <directionalLight position={[-10, 5, -5]} intensity={0.4} color="#e8d5c4" />
         
         <Suspense fallback={null}>
          <AnimatedLights />
          
          {/* Stars background */}
          <Stars 
            radius={50} 
            depth={50} 
            count={1000} 
            factor={2} 
            saturation={0.5} 
            fade 
            speed={0.5} 
          />
          
          {/* Sparkles */}
          <Sparkles 
            count={100} 
            scale={15} 
            size={2} 
            speed={0.3} 
            color="#c9a86c" 
          />
          
           <Float
            speed={1.2}
             rotationIntensity={0.2}
             floatIntensity={0.3}
           >
            {/* Main curtains */}
            <AnimatedCurtain position={[-3, 0, 0]} color="#2a2219" intensity={1.2} />
            <AnimatedCurtain position={[3, 0, 0]} color="#3d2f21" mirror intensity={1.2} />
            
            {/* Back curtains */}
            <AnimatedCurtain position={[-4.5, 0.5, -2]} color="#1a1510" intensity={0.8} />
            <AnimatedCurtain position={[4.5, 0.5, -2]} color="#251d15" mirror intensity={0.8} />
            
            {/* Center sheer curtain */}
            <AnimatedCurtain position={[0, 0, -1]} color="#c9a86c" metallic intensity={0.6} />
           </Float>
          
          {/* Floating ribbons */}
          <FloatingRibbon position={[-5, 2, 1]} color="#c9a86c" delay={0} />
          <FloatingRibbon position={[5, -1, 2]} color="#d4a574" delay={1} />
          <FloatingRibbon position={[-3, -2, 3]} color="#e8d5c4" delay={2} />
          <FloatingRibbon position={[4, 3, 0]} color="#8B7355" delay={3} />
          
          <FloatingParticles count={80} />
           <Environment preset="studio" />
         </Suspense>
       </Canvas>
     </div>
   );
 };
 
 export default CurtainScene;