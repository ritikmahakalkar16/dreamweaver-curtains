 import { motion } from 'framer-motion';
 
 interface AnimatedTextProps {
   text: string;
   className?: string;
   delay?: number;
   staggerDelay?: number;
 }
 
 const AnimatedText = ({ text, className = '', delay = 0, staggerDelay = 0.03 }: AnimatedTextProps) => {
   const words = text.split(' ');
   
   return (
     <motion.span className={className}>
       {words.map((word, wordIndex) => (
         <span key={wordIndex} className="inline-block mr-[0.25em]">
           {word.split('').map((char, charIndex) => (
             <motion.span
               key={charIndex}
               className="inline-block"
               initial={{ opacity: 0, y: 50, rotateX: -90 }}
               animate={{ opacity: 1, y: 0, rotateX: 0 }}
               transition={{
                 duration: 0.5,
                 delay: delay + (wordIndex * word.length + charIndex) * staggerDelay,
                 ease: [0.215, 0.61, 0.355, 1],
               }}
             >
               {char}
             </motion.span>
           ))}
         </span>
       ))}
     </motion.span>
   );
 };
 
 export default AnimatedText;