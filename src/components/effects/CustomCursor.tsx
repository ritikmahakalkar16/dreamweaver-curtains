 import { motion, useMotionValue, useSpring } from 'framer-motion';
 import { useEffect, useState } from 'react';
 
 const CustomCursor = () => {
   const [isHovering, setIsHovering] = useState(false);
   const cursorX = useMotionValue(-100);
   const cursorY = useMotionValue(-100);
   
   const springConfig = { damping: 25, stiffness: 300 };
   const cursorXSpring = useSpring(cursorX, springConfig);
   const cursorYSpring = useSpring(cursorY, springConfig);
 
   useEffect(() => {
     const moveCursor = (e: MouseEvent) => {
       cursorX.set(e.clientX);
       cursorY.set(e.clientY);
     };
     
     const handleHoverStart = () => setIsHovering(true);
     const handleHoverEnd = () => setIsHovering(false);
     
     window.addEventListener('mousemove', moveCursor);
     
     // Add hover detection for interactive elements
     const interactiveElements = document.querySelectorAll('button, a, [role="button"]');
     interactiveElements.forEach(el => {
       el.addEventListener('mouseenter', handleHoverStart);
       el.addEventListener('mouseleave', handleHoverEnd);
     });
     
     return () => {
       window.removeEventListener('mousemove', moveCursor);
       interactiveElements.forEach(el => {
         el.removeEventListener('mouseenter', handleHoverStart);
         el.removeEventListener('mouseleave', handleHoverEnd);
       });
     };
   }, [cursorX, cursorY]);
 
   return (
     <>
       {/* Main cursor */}
       <motion.div
         className="fixed top-0 left-0 pointer-events-none z-[100] mix-blend-difference hidden md:block"
         style={{
           x: cursorXSpring,
           y: cursorYSpring,
         }}
       >
         <motion.div
           animate={{
             scale: isHovering ? 2 : 1,
             opacity: isHovering ? 0.8 : 1,
           }}
           transition={{ duration: 0.2 }}
           className="w-4 h-4 -ml-2 -mt-2 rounded-full bg-cream"
         />
       </motion.div>
       
       {/* Trailing cursor */}
       <motion.div
         className="fixed top-0 left-0 pointer-events-none z-[99] hidden md:block"
         style={{
           x: useSpring(cursorX, { damping: 40, stiffness: 150 }),
           y: useSpring(cursorY, { damping: 40, stiffness: 150 }),
         }}
       >
         <motion.div
           animate={{
             scale: isHovering ? 3 : 1.5,
             opacity: isHovering ? 0.3 : 0.2,
           }}
           transition={{ duration: 0.3 }}
           className="w-8 h-8 -ml-4 -mt-4 rounded-full border border-primary"
         />
       </motion.div>
     </>
   );
 };
 
 export default CustomCursor;