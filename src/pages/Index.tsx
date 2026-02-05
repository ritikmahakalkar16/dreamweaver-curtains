import { motion } from 'framer-motion';
import Navigation from '@/components/layout/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import MaterialShowcase from '@/components/sections/MaterialShowcase';
import CraftsmanshipSection from '@/components/sections/CraftsmanshipSection';
import ContactSection from '@/components/sections/ContactSection';

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative min-h-screen bg-background overflow-x-hidden smooth-scroll"
    >
      {/* Fixed grain overlay */}
      <div className="fixed inset-0 grain z-50 pointer-events-none" />
      
      <Navigation />
      <HeroSection />
      <ExperienceSection />
      <MaterialShowcase />
      <CraftsmanshipSection />
      <ContactSection />
    </motion.div>
  );
};

export default Index;
