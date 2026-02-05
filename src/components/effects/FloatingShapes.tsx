 import { motion } from 'framer-motion';
 
 const shapes = [
   { size: 200, x: '10%', y: '20%', duration: 20, delay: 0 },
   { size: 150, x: '80%', y: '30%', duration: 25, delay: 2 },
   { size: 100, x: '20%', y: '70%', duration: 18, delay: 4 },
   { size: 180, x: '70%', y: '80%', duration: 22, delay: 1 },
   { size: 120, x: '50%', y: '50%', duration: 30, delay: 3 },
 ];
 
 const FloatingShapes = () => {
   return (
     <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
       {shapes.map((shape, i) => (
         <motion.div
           key={i}
           className="absolute rounded-full"
           style={{
             width: shape.size,
             height: shape.size,
             left: shape.x,
             top: shape.y,
             background: `radial-gradient(circle, hsl(38 65% 55% / 0.05) 0%, transparent 70%)`,
           }}
           animate={{
             x: [0, 50, -30, 20, 0],
             y: [0, -40, 30, -20, 0],
             scale: [1, 1.2, 0.9, 1.1, 1],
             rotate: [0, 180, 360],
           }}
           transition={{
             duration: shape.duration,
             delay: shape.delay,
             repeat: Infinity,
             ease: 'linear',
           }}
         />
       ))}
       
       {/* Animated gradient orbs */}
       <motion.div
         className="absolute w-96 h-96 rounded-full blur-3xl"
         style={{
           background: 'radial-gradient(circle, hsl(38 65% 55% / 0.08) 0%, transparent 70%)',
           left: '60%',
           top: '40%',
         }}
         animate={{
           x: [-100, 100, -50, 100, -100],
           y: [-50, 100, -100, 50, -50],
           scale: [1, 1.3, 0.8, 1.2, 1],
         }}
         transition={{
           duration: 30,
           repeat: Infinity,
           ease: 'easeInOut',
         }}
       />
       
       <motion.div
         className="absolute w-80 h-80 rounded-full blur-3xl"
         style={{
           background: 'radial-gradient(circle, hsl(15 45% 65% / 0.06) 0%, transparent 70%)',
           left: '20%',
           top: '60%',
         }}
         animate={{
           x: [0, -80, 60, -40, 0],
           y: [0, 60, -40, 80, 0],
           scale: [1, 0.9, 1.2, 0.95, 1],
         }}
         transition={{
           duration: 25,
           repeat: Infinity,
           ease: 'easeInOut',
         }}
       />
     </div>
   );
 };
 
 export default FloatingShapes;