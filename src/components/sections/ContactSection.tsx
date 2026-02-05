 import { motion } from 'framer-motion';
 
 const ContactSection = () => {
   return (
     <section id="contact" className="relative py-32 overflow-hidden">
       {/* Background gradient */}
       <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-background to-background" />
       
       <div className="relative z-10 container mx-auto px-6 text-center">
         <motion.div
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
           className="max-w-3xl mx-auto"
         >
           <p className="text-primary text-sm tracking-widest uppercase font-body mb-4">
             Begin Your Journey
           </p>
           <h2 className="font-display text-4xl md:text-6xl font-light mb-6">
             Transform Your <span className="italic text-gradient-gold">Space</span>
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
               whileHover={{ scale: 1.05, boxShadow: '0 0 50px hsl(38 65% 55% / 0.4)' }}
               whileTap={{ scale: 0.95 }}
               className="px-12 py-5 bg-primary text-primary-foreground font-body text-sm tracking-widest uppercase transition-all duration-300"
             >
               Schedule Consultation
             </motion.button>
             <motion.button
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               className="px-12 py-5 border border-foreground/20 text-foreground font-body text-sm tracking-widest uppercase hover:border-primary hover:text-primary transition-all duration-300"
             >
               Visit Showroom
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
             <p className="font-display text-xl text-gradient-gold">MATERIAL PALLET</p>
             <p className="font-body text-sm text-foreground/40">
               © 2025 Material Pallet. All rights reserved.
             </p>
             <div className="flex gap-6">
               {['Instagram', 'Pinterest', 'LinkedIn'].map((social) => (
                 <motion.a
                   key={social}
                   href="#"
                   whileHover={{ y: -2, color: 'hsl(38 65% 55%)' }}
                   className="text-sm text-foreground/40 hover:text-primary transition-colors"
                 >
                   {social}
                 </motion.a>
               ))}
             </div>
           </div>
         </motion.div>
       </div>
     </section>
   );
 };
 
 export default ContactSection;