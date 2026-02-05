 import { motion } from 'framer-motion';
 import { useState, useEffect } from 'react';
 
 const Navigation = () => {
   const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
 
   useEffect(() => {
     const handleScroll = () => {
       setScrolled(window.scrollY > 50);
      
      // Detect active section
      const sections = ['experience', 'collections', 'craftsmanship', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
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
            <motion.span
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              MATERIAL PALLET
            </motion.span>
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
                className={`relative text-sm font-body font-light tracking-widest transition-colors uppercase ${
                  activeSection === item.toLowerCase() 
                    ? 'text-primary' 
                    : 'text-foreground/70 hover:text-primary'
                }`}
               >
                 {item}
                {activeSection === item.toLowerCase() && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-primary"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
               </motion.a>
             ))}
           </div>
 
           <motion.button
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
            className="relative px-6 py-2 border border-primary/50 text-primary text-sm tracking-widest uppercase font-body font-light hover:bg-primary hover:text-primary-foreground transition-all duration-300 overflow-hidden group"
           >
            <span className="relative z-10">Explore</span>
            <motion.div
              className="absolute inset-0 bg-primary"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
           </motion.button>
         </div>
       </div>
     </motion.nav>
   );
 };
 
 export default Navigation;