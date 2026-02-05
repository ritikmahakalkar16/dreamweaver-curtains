 import { motion, useScroll, useTransform } from 'framer-motion';
 import { useRef, useState } from 'react';
 
 const materials = [
   {
     id: 1,
     name: 'Royal Velvet',
     color: 'bg-gradient-to-br from-amber-900/80 to-amber-950/90',
     accent: '#8B4513',
     description: 'Deep, rich texture that captures light beautifully',
   },
   {
     id: 2,
     name: 'Pearl Silk',
     color: 'bg-gradient-to-br from-stone-200/80 to-stone-300/90',
     accent: '#E8E4DF',
     description: 'Luminous sheen with ethereal draping qualities',
   },
   {
     id: 3,
     name: 'Forest Linen',
     color: 'bg-gradient-to-br from-emerald-900/80 to-emerald-950/90',
     accent: '#2D5A3D',
     description: 'Natural elegance with sustainable origins',
   },
   {
     id: 4,
     name: 'Midnight Brocade',
     color: 'bg-gradient-to-br from-slate-800/80 to-slate-900/90',
     accent: '#1E293B',
     description: 'Intricate patterns woven with metallic threads',
   },
 ];
 
 const MaterialShowcase = () => {
   const containerRef = useRef<HTMLElement>(null);
   const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
   
   const { scrollYProgress } = useScroll({
     target: containerRef,
     offset: ['start end', 'end start'],
   });
 
   const x = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);
  
  const handleMouseMove = (e: React.MouseEvent, id: number) => {
    if (hoveredId !== id) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  };
 
   return (
     <section ref={containerRef} id="collections" className="relative py-32 overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(hsl(38 65% 55% / 0.1) 1px, transparent 1px),
              linear-gradient(90deg, hsl(38 65% 55% / 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '60px 60px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>
      
       <div className="container mx-auto px-6">
         <motion.div
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
           className="text-center mb-20"
         >
          <motion.p 
            className="text-primary text-sm tracking-widest uppercase font-body mb-4"
            animate={{ letterSpacing: ['0.2em', '0.3em', '0.2em'] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
             Our Collections
          </motion.p>
           <h2 className="font-display text-4xl md:text-6xl font-light">
             Curated <span className="italic text-gradient-gold">Excellence</span>
           </h2>
         </motion.div>
 
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           {materials.map((material, index) => (
             <motion.div
               key={material.id}
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.6, delay: index * 0.15 }}
               viewport={{ once: true }}
               onHoverStart={() => setHoveredId(material.id)}
               onHoverEnd={() => setHoveredId(null)}
              onMouseMove={(e) => handleMouseMove(e, material.id)}
               className="group relative aspect-[4/3] cursor-pointer overflow-hidden"
             >
               {/* Animated Background */}
               <motion.div
                 className={`absolute inset-0 ${material.color}`}
                 animate={{
                   scale: hoveredId === material.id ? 1.1 : 1,
                 }}
                 transition={{ duration: 0.7 }}
               />
               
              {/* 3D perspective effect based on mouse position */}
              <motion.div
                className="absolute inset-0"
                style={{
                  background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, transparent 0%, rgba(0,0,0,0.4) 100%)`,
                }}
              />
              
               {/* Shimmer Effect */}
               <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
               
               {/* Animated curtain folds */}
               <div className="absolute inset-0 opacity-30">
                {[...Array(8)].map((_, i) => (
                   <motion.div
                     key={i}
                    className="absolute h-full w-6 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    style={{ left: `${i * 12.5}%` }}
                     animate={{
                      x: hoveredId === material.id ? [0, 30, 0] : 0,
                       opacity: hoveredId === material.id ? [0.1, 0.3, 0.1] : 0.1,
                      scaleY: hoveredId === material.id ? [1, 1.05, 1] : 1,
                     }}
                     transition={{
                      duration: 2,
                       delay: i * 0.2,
                       repeat: Infinity,
                     }}
                   />
                 ))}
               </div>
               
               {/* Content */}
               <div className="relative z-10 h-full p-8 flex flex-col justify-end">
                 <motion.div
                   animate={{
                     y: hoveredId === material.id ? 0 : 20,
                     opacity: hoveredId === material.id ? 1 : 0.8,
                   }}
                   transition={{ duration: 0.4 }}
                 >
                  <motion.h3 
                    className="font-display text-3xl md:text-4xl text-white mb-2"
                    animate={{
                      textShadow: hoveredId === material.id 
                        ? '0 0 30px rgba(255,255,255,0.3)' 
                        : '0 0 0px transparent',
                    }}
                  >
                     {material.name}
                  </motion.h3>
                   <p className="font-body font-light text-white/70 max-w-xs">
                     {material.description}
                   </p>
                   
                   <motion.div
                     initial={{ width: 0 }}
                     animate={{ width: hoveredId === material.id ? '100%' : 0 }}
                     transition={{ duration: 0.5 }}
                    className="h-px bg-gradient-to-r from-white/80 to-transparent mt-4"
                   />
                   
                   <motion.button
                     animate={{
                       opacity: hoveredId === material.id ? 1 : 0,
                       y: hoveredId === material.id ? 0 : 10,
                     }}
                     className="mt-4 text-sm tracking-widest uppercase text-white/90 flex items-center gap-2"
                   >
                     Explore Collection
                     <motion.span
                       animate={{ x: hoveredId === material.id ? [0, 5, 0] : 0 }}
                       transition={{ duration: 1, repeat: Infinity }}
                     >
                       →
                     </motion.span>
                   </motion.button>
                 </motion.div>
               </div>
               
               {/* Border glow */}
               <motion.div
                 className="absolute inset-0 border border-primary/0 group-hover:border-primary/30 transition-colors duration-500"
                 animate={{
                   boxShadow: hoveredId === material.id 
                    ? 'inset 0 0 80px hsl(38 65% 55% / 0.15), 0 0 40px hsl(38 65% 55% / 0.1)' 
                     : 'inset 0 0 0px transparent',
                 }}
               />
              
              {/* Corner indicators */}
              <motion.div
                className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-white/0 group-hover:border-white/30 transition-colors duration-500"
                animate={{
                  scale: hoveredId === material.id ? [1, 1.1, 1] : 1,
                }}
                transition={{ duration: 1, repeat: Infinity }}
              />
              <motion.div
                className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-white/0 group-hover:border-white/30 transition-colors duration-500"
                animate={{
                  scale: hoveredId === material.id ? [1, 1.1, 1] : 1,
                }}
                transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
              />
             </motion.div>
           ))}
         </div>
       </div>
     </section>
   );
 };
 
 export default MaterialShowcase;