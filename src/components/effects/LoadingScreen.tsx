 import { motion, AnimatePresence } from 'framer-motion';
 import { useState, useEffect } from 'react';
 
 interface LoadingScreenProps {
   onComplete: () => void;
 }
 
 const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
   const [progress, setProgress] = useState(0);
   const [isComplete, setIsComplete] = useState(false);
 
   useEffect(() => {
     const interval = setInterval(() => {
       setProgress((prev) => {
         if (prev >= 100) {
           clearInterval(interval);
           setTimeout(() => {
             setIsComplete(true);
             setTimeout(onComplete, 800);
           }, 500);
           return 100;
         }
         return prev + Math.random() * 15;
       });
     }, 100);
 
     return () => clearInterval(interval);
   }, [onComplete]);
 
   return (
     <AnimatePresence>
       {!isComplete && (
         <motion.div
           initial={{ opacity: 1 }}
           exit={{ opacity: 0 }}
           transition={{ duration: 0.8 }}
           className="fixed inset-0 z-[200] bg-background flex flex-col items-center justify-center"
         >
           {/* Animated curtain folds */}
           <div className="absolute inset-0 flex overflow-hidden">
             {[...Array(12)].map((_, i) => (
               <motion.div
                 key={i}
                 className="flex-1 bg-charcoal"
                 initial={{ scaleY: 0 }}
                 animate={{ scaleY: 1 }}
                 transition={{
                   duration: 0.8,
                   delay: i * 0.05,
                   ease: [0.22, 1, 0.36, 1],
                 }}
                 style={{
                   originY: 0,
                   borderRight: '1px solid hsl(35 15% 20%)',
                 }}
               />
             ))}
           </div>
 
           {/* Content */}
           <div className="relative z-10 text-center">
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.5, duration: 0.6 }}
             >
               <motion.h1
                 className="font-display text-4xl md:text-5xl font-light text-gradient-gold mb-8"
                 animate={{ opacity: [0.5, 1, 0.5] }}
                 transition={{ duration: 2, repeat: Infinity }}
               >
                 MATERIAL PALLET
               </motion.h1>
 
               {/* Progress bar */}
               <div className="w-48 h-px bg-foreground/10 mx-auto relative overflow-hidden">
                 <motion.div
                   className="absolute inset-y-0 left-0 bg-primary"
                   initial={{ width: 0 }}
                   animate={{ width: `${Math.min(progress, 100)}%` }}
                   transition={{ duration: 0.3 }}
                 />
               </div>
 
               <motion.p
                 className="mt-4 text-sm font-body text-foreground/40 tracking-widest"
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 0.8 }}
               >
                 {Math.min(Math.round(progress), 100)}%
               </motion.p>
             </motion.div>
           </div>
 
           {/* Animated decorative elements */}
           <motion.div
             className="absolute bottom-20 left-1/2 -translate-x-1/2"
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 1, duration: 0.6 }}
           >
             <p className="text-xs font-body tracking-widest text-foreground/30 uppercase">
               Luxury Interior Materials
             </p>
           </motion.div>
         </motion.div>
       )}
     </AnimatePresence>
   );
 };
 
 export default LoadingScreen;