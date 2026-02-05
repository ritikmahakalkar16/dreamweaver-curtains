 import { Canvas } from '@react-three/fiber';
 import { Suspense } from 'react';
 import { Environment, Float, PerspectiveCamera } from '@react-three/drei';
 import AnimatedCurtain from './AnimatedCurtain';
 import FloatingParticles from './FloatingParticles';
 
 const CurtainScene = () => {
   return (
     <div className="absolute inset-0 z-0">
       <Canvas>
         <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={45} />
         <ambientLight intensity={0.3} />
         <directionalLight position={[10, 10, 5]} intensity={0.8} color="#d4a574" />
         <directionalLight position={[-10, 5, -5]} intensity={0.4} color="#e8d5c4" />
         <pointLight position={[0, 0, 5]} intensity={0.5} color="#c9a86c" />
         
         <Suspense fallback={null}>
           <Float
             speed={1.5}
             rotationIntensity={0.2}
             floatIntensity={0.3}
           >
             <AnimatedCurtain position={[-2.5, 0, 0]} color="#2a2219" />
             <AnimatedCurtain position={[2.5, 0, 0]} color="#3d2f21" mirror />
           </Float>
           <FloatingParticles count={50} />
           <Environment preset="studio" />
         </Suspense>
       </Canvas>
     </div>
   );
 };
 
 export default CurtainScene;