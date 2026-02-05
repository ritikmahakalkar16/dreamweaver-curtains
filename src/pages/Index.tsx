import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Navigation from '@/components/layout/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import MaterialShowcase from '@/components/sections/MaterialShowcase';
import CraftsmanshipSection from '@/components/sections/CraftsmanshipSection';
import ContactSection from '@/components/sections/ContactSection';
import CustomCursor from '@/components/effects/CustomCursor';
import FloatingShapes from '@/components/effects/FloatingShapes';
import LoadingScreen from '@/components/effects/LoadingScreen';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.8 }}
        className="relative min-h-screen bg-background overflow-x-hidden smooth-scroll"
      >
        {/* Custom cursor effect */}
        <CustomCursor />
        
        {/* Floating background shapes */}
        <FloatingShapes />
        
        {/* Fixed grain overlay */}
        <div className="fixed inset-0 grain z-50 pointer-events-none" />
        
        <Navigation />
        <HeroSection />
        <ExperienceSection />
        <MaterialShowcase />
        <CraftsmanshipSection />
        <ContactSection />
      </motion.div>
    </>
  );
};

export default Index;
