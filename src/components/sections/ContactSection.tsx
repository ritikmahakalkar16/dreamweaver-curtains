 import { motion } from 'framer-motion';
import { useState } from 'react';
 
 const ContactSection = () => {
  const [isHovered, setIsHovered] = useState<string | null>(null);
  
   return (
     <section id="contact" className="relative py-32 overflow-hidden">
       {/* Background gradient */}
       <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-background to-background" />
       
      {/* Animated mesh gradient */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, hsl(38 65% 55% / 0.15) 0%, transparent 70%)',
            left: '20%',
            top: '30%',
          }}
          animate={{
            x: [-50, 50, -50],
            y: [-30, 30, -30],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, hsl(15 45% 65% / 0.1) 0%, transparent 70%)',
            right: '10%',
            bottom: '20%',
          }}
          animate={{
            x: [30, -30, 30],
            y: [20, -40, 20],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>
      
       <div className="relative z-10 container mx-auto px-6 text-center">
         <motion.div
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
           className="max-w-3xl mx-auto"
         >
          <motion.p 
            className="text-primary text-sm tracking-widest uppercase font-body mb-4"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
             Begin Your Journey
          </motion.p>
           <h2 className="font-display text-4xl md:text-6xl font-light mb-6">
            Transform Your <motion.span 
              className="italic text-gradient-gold inline-block"
              animate={{ rotate: [-1, 1, -1] }}
              transition={{ duration: 5, repeat: Infinity }}
            >Space</motion.span>
           </h2>
           <p className="font-body font-light text-foreground/60 leading-relaxed mb-12">
             Let our experts guide you through our collections and help you find 
             the perfect materials to bring your vision to life.
           </p>
           
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.2 }}
             viewport={{ once: true }}
             className="flex flex-col sm:flex-row gap-4 justify-center"
           >
             <motion.button
              onHoverStart={() => setIsHovered('consultation')}
              onHoverEnd={() => setIsHovered(null)}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: '0 0 60px hsl(38 65% 55% / 0.5)',
                y: -3,
              }}
               whileTap={{ scale: 0.95 }}
              className="relative px-12 py-5 bg-primary text-primary-foreground font-body text-sm tracking-widest uppercase transition-all duration-300 overflow-hidden"
             >
              <span className="relative z-10">Schedule Consultation</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-gold-light via-primary to-gold-light"
                animate={{
                  x: isHovered === 'consultation' ? ['0%', '100%'] : '0%',
                }}
                transition={{ duration: 0.5 }}
              />
             </motion.button>
             <motion.button
              onHoverStart={() => setIsHovered('showroom')}
              onHoverEnd={() => setIsHovered(null)}
              whileHover={{ scale: 1.05, y: -3 }}
               whileTap={{ scale: 0.95 }}
              className="relative px-12 py-5 border border-foreground/20 text-foreground font-body text-sm tracking-widest uppercase hover:border-primary hover:text-primary transition-all duration-300 overflow-hidden group"
             >
              <span className="relative z-10">Visit Showroom</span>
              <motion.div
                className="absolute inset-0 bg-primary/10"
                initial={{ y: '100%' }}
                whileHover={{ y: 0 }}
                transition={{ duration: 0.3 }}
              />
             </motion.button>
           </motion.div>
         </motion.div>
         
         {/* Footer */}
         <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           transition={{ duration: 0.8, delay: 0.4 }}
           viewport={{ once: true }}
           className="mt-32 pt-8 border-t border-border/30"
         >
           <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <motion.p 
              className="font-display text-xl text-gradient-gold"
              whileHover={{ scale: 1.05 }}
            >
              MATERIAL PALLET
            </motion.p>
             <p className="font-body text-sm text-foreground/40">
               © 2025 Material Pallet. All rights reserved.
             </p>
             <div className="flex gap-6">
               {['Instagram', 'Pinterest', 'LinkedIn'].map((social) => (
                 <motion.a
                   key={social}
                   href="#"
                  whileHover={{ y: -3, scale: 1.1 }}
                   className="text-sm text-foreground/40 hover:text-primary transition-colors"
                 >
                   {social}
                 </motion.a>
               ))}
             </div>
           </div>
         </motion.div>
       </div>
      
      {/* Animated decorative elements */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
     </section>
   );
 };
 
 export default ContactSection;