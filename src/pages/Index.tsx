import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import TrustSection from '@/components/TrustSection';
import HelpDesk from '@/components/HelpDesk';
import Contact from '@/components/Contact';
import UpgradeCTA from '@/components/UpgradeCTA';
import ClientLogos from '@/components/ClientLogos';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [hash]);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <TrustSection />
        <Contact />
        <UpgradeCTA />
        <ClientLogos />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
