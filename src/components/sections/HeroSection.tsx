 import { motion } from 'framer-motion';
 import CurtainScene from '../3d/CurtainScene';
import AnimatedText from '../effects/AnimatedText';
 
 const HeroSection = () => {
   return (
     <section className="relative h-screen overflow-hidden">
       {/* 3D Background */}
       <CurtainScene />
       
       {/* Grain Overlay */}
       <div className="grain absolute inset-0 z-10" />
       
      {/* Vignette effect */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, hsl(30 15% 8% / 0.4) 100%)',
        }}
      />
      
       {/* Content */}
       <div className="relative z-20 h-full flex flex-col items-center justify-center px-6">
         <motion.div
           initial={{ opacity: 0, y: 60 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1.2, delay: 0.3 }}
           className="text-center max-w-4xl"
         >
           <motion.p
             initial={{ opacity: 0, letterSpacing: '0.5em' }}
             animate={{ opacity: 1, letterSpacing: '0.3em' }}
             transition={{ duration: 1, delay: 0.5 }}
             className="text-sm font-body font-light text-primary mb-6 uppercase"
           >
             Luxury Interior Materials
           </motion.p>
           
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-tight mb-8">
            <span className="block">
              <AnimatedText text="Where Fabric" delay={0.7} />
            </span>
            <span className="block text-gradient-gold italic">
              <AnimatedText text="Becomes Art" delay={1.2} />
            </span>
          </h1>
           
           <motion.p
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.8 }}
             className="font-body font-extralight text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto mb-12"
           >
             Immerse yourself in the world of exquisite textiles, where every thread 
             tells a story of craftsmanship and elegance
           </motion.p>
           
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.2 }}
             className="flex flex-col sm:flex-row gap-4 justify-center"
           >
             <motion.button
              whileHover={{ 
                scale: 1.05, 
                boxShadow: '0 0 60px hsl(38 65% 55% / 0.5)',
                y: -2 
              }}
               whileTap={{ scale: 0.95 }}
              className="relative px-10 py-4 bg-primary text-primary-foreground font-body text-sm tracking-widest uppercase transition-all duration-300 overflow-hidden group"
             >
              <span className="relative z-10">Begin Experience</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-gold-light to-primary"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
             </motion.button>
             <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
               whileTap={{ scale: 0.95 }}
               className="px-10 py-4 border border-foreground/20 text-foreground font-body text-sm tracking-widest uppercase hover:border-primary hover:text-primary transition-all duration-300"
             >
               View Collections
             </motion.button>
           </motion.div>
         </motion.div>
         
         {/* Scroll Indicator */}
         <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
           className="absolute bottom-10 left-1/2 -translate-x-1/2"
         >
           <motion.div
             animate={{ y: [0, 10, 0] }}
             transition={{ duration: 2, repeat: Infinity }}
             className="flex flex-col items-center gap-3"
           >
             <span className="text-xs font-body tracking-widest text-foreground/40 uppercase">
               Scroll to Explore
             </span>
            <motion.div 
              className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent"
              animate={{ scaleY: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
           </motion.div>
         </motion.div>
       </div>
      
      {/* Animated corner decorations */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.5, duration: 0.8 }}
        className="absolute top-20 left-6 w-20 h-20 border-l border-t border-primary/30"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.7, duration: 0.8 }}
        className="absolute top-20 right-6 w-20 h-20 border-r border-t border-primary/30"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.9, duration: 0.8 }}
        className="absolute bottom-20 left-6 w-20 h-20 border-l border-b border-primary/30"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 3.1, duration: 0.8 }}
        className="absolute bottom-20 right-6 w-20 h-20 border-r border-b border-primary/30"
      />
     </section>
   );
 };
 
 export default HeroSection;