 import { motion, useScroll, useTransform } from 'framer-motion';
 import { useRef } from 'react';
 
 const experiences = [
   {
     number: '01',
     title: 'Velvet Dreams',
     subtitle: 'Luxurious Touch',
     description: 'Experience the unparalleled softness of our hand-woven velvet collection, crafted with centuries-old techniques.',
   },
   {
     number: '02',
     title: 'Silk Whispers',
     subtitle: 'Ethereal Elegance',
     description: 'Pure mulberry silk curtains that dance with light, creating an atmosphere of refined sophistication.',
   },
   {
     number: '03',
     title: 'Linen Stories',
     subtitle: 'Natural Beauty',
     description: 'Organic linen drapes that breathe life into your space with their raw, authentic texture.',
   },
 ];
 
 const ExperienceSection = () => {
   const containerRef = useRef<HTMLElement>(null);
   const { scrollYProgress } = useScroll({
     target: containerRef,
     offset: ['start end', 'end start'],
   });
 
   const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
 
   return (
     <section ref={containerRef} id="experience" className="relative py-32 overflow-hidden">
       {/* Background gradient */}
       <div className="absolute inset-0 bg-gradient-to-b from-background via-charcoal to-background" />
       
       <div className="relative z-10 container mx-auto px-6">
         <motion.div
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
           className="text-center mb-20"
         >
           <p className="text-primary text-sm tracking-widest uppercase font-body mb-4">
             The Experience
           </p>
           <h2 className="font-display text-4xl md:text-6xl font-light">
             Feel the <span className="italic text-gradient-gold">Difference</span>
           </h2>
         </motion.div>
 
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
               <div className="p-8 border border-border/30 bg-card/30 backdrop-blur-sm transition-all duration-500 hover:border-primary/50 hover:bg-card/50">
                 <span className="text-6xl font-display font-light text-primary/20 group-hover:text-primary/40 transition-colors">
                   {exp.number}
                 </span>
                 <h3 className="font-display text-2xl mt-4 mb-2 group-hover:text-primary transition-colors">
                   {exp.title}
                 </h3>
                 <p className="text-sm text-primary/70 tracking-widest uppercase mb-4">
                   {exp.subtitle}
                 </p>
                 <p className="font-body font-light text-foreground/60 leading-relaxed">
                   {exp.description}
                 </p>
                 
                 {/* Animated line */}
                 <div className="absolute bottom-0 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-700" />
               </div>
             </motion.div>
           ))}
         </div>
       </div>
     </section>
   );
 };
 
 export default ExperienceSection;