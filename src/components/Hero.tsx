import { MessageCircle, Headphones, FileText, Shield, Award, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const isoBadges = [
    { icon: Shield, label: 'ISO 9001', description: 'Gestión de Calidad' },
    { icon: Award, label: 'ISO 37001', description: 'Antisoborno' },
    { icon: Leaf, label: 'ISO 14001', description: 'Gestión Ambiental' },
  ];

  const handleWhatsApp = () => {
    window.open('https://wa.me/51999999999?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20sus%20servicios', '_blank');
  };

  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0"
        style={{ background: 'var(--gradient-hero)' }}
      >
        {/* Tech pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, hsl(200 100% 50% / 0.3) 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, hsl(195 100% 45% / 0.2) 0%, transparent 50%)`,
          }} />
        </div>
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `linear-gradient(hsl(200 100% 60%) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(200 100% 60%) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }} />
      </div>

      <div className="container-vp relative z-10 flex min-h-screen flex-col justify-center pb-20 pt-32">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm animate-fade-up">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse-subtle" />
            <span className="text-sm font-medium text-white/90">+13 años de experiencia en el Perú</span>
          </div>

          {/* Main Headline */}
          <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl animate-fade-up delay-100">
            Soluciones TI de{' '}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, hsl(91 52% 56%) 0%, hsl(91 52% 70%) 100%)' }}>Alta Calidad</span>{' '}
            para el Perú
          </h1>

          {/* Subheadline */}
          <p className="mb-8 text-lg text-white/80 sm:text-xl md:text-2xl animate-fade-up delay-200">
            Tu aliado estratégico en tecnología desde hace 13 años
          </p>

          {/* Services highlight */}
          <div className="mb-10 flex flex-wrap items-center justify-center gap-3 text-sm text-white/70 animate-fade-up delay-300">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-vp-green" />
              Soporte experto en servidores y storage
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-vp-green" />
              Venta y alquiler de hardware
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-vp-green" />
              Mantenimiento preventivo y correctivo
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-up delay-400">
            <Button
              size="lg"
              onClick={handleWhatsApp}
              className="group flex items-center gap-2 bg-whatsapp px-8 py-6 text-lg font-semibold text-white shadow-lg transition-all hover:bg-whatsapp/90 hover:shadow-xl"
            >
              <MessageCircle className="h-5 w-5 transition-transform group-hover:scale-110" />
              Contáctanos por WhatsApp
            </Button>
            <Button
              size="lg"
              asChild
              className="flex items-center gap-2 bg-accent px-8 py-6 text-lg font-semibold text-white shadow-lg transition-all hover:bg-accent/90 hover:shadow-xl"
            >
              <a href="#mesa-de-ayuda">
                <Headphones className="h-5 w-5" />
                Mesa de Ayuda
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="flex items-center gap-2 border-white/30 bg-white/10 px-8 py-6 text-lg font-semibold text-white backdrop-blur-sm hover:bg-white/20"
            >
              <a href="#contacto">
                <FileText className="h-5 w-5" />
                Solicitar Cotización
              </a>
            </Button>
          </div>

          {/* ISO Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.5s' }}>
            {isoBadges.map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-3 rounded-xl border border-white/20 bg-white/10 px-5 py-3 backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-white/15"
              >
                <badge.icon className="h-8 w-8 text-vp-green" />
                <div className="text-left">
                  <span className="block text-sm font-bold text-white">{badge.label}</span>
                  <span className="text-xs text-white/60">{badge.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full fill-background">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
