 import { motion } from 'framer-motion';
 import { useState, useEffect } from 'react';
 
 const Navigation = () => {
   const [scrolled, setScrolled] = useState(false);
 
   useEffect(() => {
     const handleScroll = () => {
       setScrolled(window.scrollY > 50);
     };
     window.addEventListener('scroll', handleScroll);
     return () => window.removeEventListener('scroll', handleScroll);
   }, []);
 
   return (
     <motion.nav
       initial={{ y: -100, opacity: 0 }}
       animate={{ y: 0, opacity: 1 }}
       transition={{ duration: 0.8, delay: 0.5 }}
       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
         scrolled ? 'bg-background/80 backdrop-blur-lg border-b border-border' : ''
       }`}
     >
       <div className="container mx-auto px-6 py-4">
         <div className="flex items-center justify-between">
           <motion.div
             whileHover={{ scale: 1.05 }}
             className="font-display text-2xl font-semibold tracking-wide text-gradient-gold cursor-pointer"
           >
             MATERIAL PALLET
           </motion.div>
           
           <div className="hidden md:flex items-center gap-8">
             {['Experience', 'Collections', 'Craftsmanship', 'Contact'].map((item, i) => (
               <motion.a
                 key={item}
                 href={`#${item.toLowerCase()}`}
                 initial={{ opacity: 0, y: -20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.7 + i * 0.1 }}
                 whileHover={{ y: -2 }}
                 className="text-sm font-body font-light tracking-widest text-foreground/70 hover:text-primary transition-colors uppercase"
               >
                 {item}
               </motion.a>
             ))}
           </div>
 
           <motion.button
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             className="px-6 py-2 border border-primary/50 text-primary text-sm tracking-widest uppercase font-body font-light hover:bg-primary hover:text-primary-foreground transition-all duration-300"
           >
             Explore
           </motion.button>
         </div>
       </div>
     </motion.nav>
   );
 };
 
 export default Navigation;