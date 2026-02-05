 import { motion, useScroll, useTransform } from 'framer-motion';
 import { useRef } from 'react';
import ParallaxSection from '../effects/ParallaxSection';
 
 const experiences = [
   {
     number: '01',
     title: 'Velvet Dreams',
     subtitle: 'Luxurious Touch',
     description: 'Experience the unparalleled softness of our hand-woven velvet collection, crafted with centuries-old techniques.',
    gradient: 'from-amber-900/20 to-transparent',
   },
   {
     number: '02',
     title: 'Silk Whispers',
     subtitle: 'Ethereal Elegance',
     description: 'Pure mulberry silk curtains that dance with light, creating an atmosphere of refined sophistication.',
    gradient: 'from-rose-900/20 to-transparent',
   },
   {
     number: '03',
     title: 'Linen Stories',
     subtitle: 'Natural Beauty',
     description: 'Organic linen drapes that breathe life into your space with their raw, authentic texture.',
    gradient: 'from-emerald-900/20 to-transparent',
   },
 ];
 
 const ExperienceSection = () => {
   const containerRef = useRef<HTMLElement>(null);
   const { scrollYProgress } = useScroll({
     target: containerRef,
     offset: ['start end', 'end start'],
   });
 
   const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, -5]);
 
   return (
     <section ref={containerRef} id="experience" className="relative py-32 overflow-hidden">
       {/* Background gradient */}
       <div className="absolute inset-0 bg-gradient-to-b from-background via-charcoal to-background" />
       
      {/* Animated background lines */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
            style={{
              top: `${20 + i * 15}%`,
              left: 0,
              right: 0,
            }}
            animate={{
              x: ['-100%', '100%'],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 8 + i * 2,
              delay: i * 0.5,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>
      
       <div className="relative z-10 container mx-auto px-6">
        <ParallaxSection speed={0.3}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.p 
              className="text-primary text-sm tracking-widest uppercase font-body mb-4"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              The Experience
            </motion.p>
            <h2 className="font-display text-4xl md:text-6xl font-light">
              Feel the <span className="italic text-gradient-gold">Difference</span>
            </h2>
          </motion.div>
        </ParallaxSection>
 
         <div className="grid md:grid-cols-3 gap-8 md:gap-12">
           {experiences.map((exp, index) => (
             <motion.div
               key={exp.number}
               initial={{ opacity: 0, y: 60 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: index * 0.2 }}
               viewport={{ once: true }}
               whileHover={{ y: -10 }}
               className="group relative"
             >
              <motion.div 
                className="p-8 border border-border/30 bg-card/30 backdrop-blur-sm transition-all duration-500 hover:border-primary/50 hover:bg-card/50 relative overflow-hidden"
                whileHover={{ 
                  boxShadow: '0 20px 60px -20px hsl(38 65% 55% / 0.3)',
                }}
              >
                {/* Animated gradient background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
                
                 <span className="text-6xl font-display font-light text-primary/20 group-hover:text-primary/40 transition-colors">
                   {exp.number}
                 </span>
                <motion.h3 
                  className="font-display text-2xl mt-4 mb-2 group-hover:text-primary transition-colors relative z-10"
                  whileHover={{ x: 5 }}
                >
                   {exp.title}
                </motion.h3>
                 <p className="text-sm text-primary/70 tracking-widest uppercase mb-4">
                   {exp.subtitle}
                 </p>
                <p className="font-body font-light text-foreground/60 leading-relaxed relative z-10">
                   {exp.description}
                 </p>
                 
                 {/* Animated line */}
                <motion.div 
                  className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-primary to-gold-light"
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                  viewport={{ once: true }}
                />
                
                {/* Corner accent */}
                <motion.div
                  className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-l-[40px] border-t-primary/0 border-l-transparent group-hover:border-t-primary/20 transition-colors duration-500"
                />
              </motion.div>
             </motion.div>
           ))}
         </div>
       </div>
     </section>
   );
 };
 
 export default ExperienceSection;