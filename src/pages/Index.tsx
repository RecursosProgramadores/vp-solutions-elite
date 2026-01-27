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
