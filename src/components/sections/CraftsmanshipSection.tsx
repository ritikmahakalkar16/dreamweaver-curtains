 import { motion, useScroll, useTransform } from 'framer-motion';
 import { useRef } from 'react';
 
 const CraftsmanshipSection = () => {
   const containerRef = useRef<HTMLElement>(null);
   const { scrollYProgress } = useScroll({
     target: containerRef,
     offset: ['start end', 'end start'],
   });
 
   const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
   const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
 
   return (
     <section ref={containerRef} id="craftsmanship" className="relative py-32 overflow-hidden">
       {/* Large background text */}
       <motion.div
         style={{ x: useTransform(scrollYProgress, [0, 1], ['-20%', '20%']) }}
         className="absolute top-1/2 -translate-y-1/2 left-0 whitespace-nowrap pointer-events-none select-none"
       >
         <span className="text-[15vw] font-display font-light text-foreground/[0.02] tracking-wider">
           CRAFTSMANSHIP
         </span>
       </motion.div>
 
       <div className="relative z-10 container mx-auto px-6">
         <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
           <motion.div
             initial={{ opacity: 0, x: -60 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8 }}
             viewport={{ once: true }}
           >
             <p className="text-primary text-sm tracking-widest uppercase font-body mb-4">
               Our Heritage
             </p>
             <h2 className="font-display text-4xl md:text-5xl font-light mb-6">
               Artistry in Every <span className="italic text-gradient-gold">Thread</span>
             </h2>
             <p className="font-body font-light text-foreground/60 leading-relaxed mb-8">
               For over three generations, our master weavers have perfected the art of 
               creating textiles that transcend mere fabric. Each piece is a testament to 
               patience, precision, and an unwavering commitment to excellence.
             </p>
             <p className="font-body font-light text-foreground/60 leading-relaxed mb-8">
               From the selection of the finest raw materials to the final finishing touches, 
               every step is guided by centuries-old traditions combined with innovative techniques.
             </p>
             
             <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border/30">
               {[
                 { value: '75+', label: 'Years Heritage' },
                 { value: '40+', label: 'Master Artisans' },
                 { value: '200+', label: 'Unique Patterns' },
               ].map((stat, i) => (
                 <motion.div
                   key={stat.label}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.5, delay: i * 0.1 }}
                   viewport={{ once: true }}
                 >
                   <p className="font-display text-3xl md:text-4xl text-primary mb-1">
                     {stat.value}
                   </p>
                   <p className="text-xs text-foreground/50 tracking-widest uppercase">
                     {stat.label}
                   </p>
                 </motion.div>
               ))}
             </div>
           </motion.div>
 
           <motion.div
             style={{ scale, opacity }}
             className="relative"
           >
             {/* Decorative frame */}
             <div className="relative aspect-[3/4] overflow-hidden">
               {/* Animated gradient background */}
               <motion.div
                 className="absolute inset-0 bg-gradient-to-br from-charcoal via-muted to-charcoal"
                 animate={{
                   background: [
                     'linear-gradient(135deg, hsl(30 15% 12%) 0%, hsl(30 10% 18%) 50%, hsl(30 15% 12%) 100%)',
                     'linear-gradient(135deg, hsl(30 10% 18%) 0%, hsl(30 15% 12%) 50%, hsl(30 10% 18%) 100%)',
                   ],
                 }}
                 transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse' }}
               />
               
               {/* Curtain fold simulation */}
               <div className="absolute inset-0 flex">
                 {[...Array(8)].map((_, i) => (
                   <motion.div
                     key={i}
                     className="flex-1 border-r border-foreground/5"
                     animate={{
                       opacity: [0.3, 0.6, 0.3],
                       scaleY: [1, 1.02, 1],
                     }}
                     transition={{
                       duration: 3,
                       delay: i * 0.2,
                       repeat: Infinity,
                     }}
                     style={{
                       background: `linear-gradient(180deg, transparent 0%, hsl(38 65% 55% / ${0.02 + i * 0.01}) 50%, transparent 100%)`,
                     }}
                   />
                 ))}
               </div>
               
               {/* Overlay text */}
               <div className="absolute inset-0 flex items-center justify-center">
                 <motion.div
                   initial={{ opacity: 0 }}
                   whileInView={{ opacity: 1 }}
                   transition={{ delay: 0.5 }}
                   className="text-center"
                 >
                   <p className="font-display text-6xl md:text-7xl italic text-primary/30">
                     Est.
                   </p>
                   <p className="font-display text-8xl md:text-9xl font-light text-primary/20">
                     1949
                   </p>
                 </motion.div>
               </div>
               
               {/* Corner accents */}
               <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-primary/30" />
               <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-primary/30" />
             </div>
           </motion.div>
         </div>
       </div>
     </section>
   );
 };
 
 export default CraftsmanshipSection;