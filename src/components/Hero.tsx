import { FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/51938152389?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20sus%20servicios', '_blank');
  };

  return (
    <section id="inicio" className="relative min-h-screen w-full overflow-hidden bg-[#0075bf]">
      {/* Background Video - Visible on laptop and mobile */}
      <div className="absolute inset-0 z-0 opacity-100 md:opacity-40 overflow-hidden">
        <div className="relative h-full w-full pointer-events-none">
          <iframe
            src="https://player.vimeo.com/video/1154827490?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&background=1"
            className="absolute top-1/2 left-1/2 min-h-full min-w-full h-[56.25vw] w-[177.77vh] -translate-x-1/2 -translate-y-1/2 scale-[2] md:scale-100 object-cover"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            title="0_Globe_Earth_1920x1080"
          />
        </div>
      </div>

      {/* Uniform Overlay Capa - #0075bf with higher opacity on mobile to ensure corporate color dominance */}
      <div
        className="absolute inset-0 z-10 w-full bg-[#0075bf]/80 md:bg-[#0075bf]/60"
      />

      <div className="container-vp relative z-20 flex min-h-screen flex-col items-center justify-center py-20 text-center">
        <div className="mx-auto flex max-w-5xl flex-col items-center">

          {/* Main Title */}
          <h1 className="mb-6 animate-fade-in-up font-outfit text-3xl font-black tracking-tighter text-white sm:text-6xl lg:text-8xl px-4 sm:px-0">
            Experto en Soporte de <span className="text-[#8ec955] drop-shadow-[0_0_20px_rgba(142,201,85,0.3)]">Infraestructura Tecnológica</span>
          </h1>

          {/* Subtitle */}
          <p className="mb-10 animate-fade-in-up font-outfit text-lg text-white/90 sm:text-2xl md:text-3xl font-semibold tracking-tight uppercase md:whitespace-nowrap px-4 sm:px-0" style={{ animationDelay: '0.1s' }}>
            Tu aliado estratégico en tecnología desde hace 13 años
          </p>

          {/* Services highlight bullets */}
          <div className="mb-12 flex flex-wrap items-center justify-center gap-6 text-base font-black text-white sm:gap-4 animate-fade-in-up group" style={{ animationDelay: '0.2s' }}>
            {[
              "Infraestructura Tecnológica",
              "Soporte Enterprise 24x7",
              "Servicios de Hardware IT",
              "Equipamiento Tecnológico"
            ].map((service, i) => (
              <div key={service} className="flex items-center gap-3">
                <span className="flex items-center gap-3 rounded-full bg-white/10 px-6 py-3 font-outfit text-sm font-black uppercase tracking-widest text-white backdrop-blur-md border border-white/20 transition-all hover:bg-[#8ec955] hover:text-[#001524] hover:scale-105 hover:border-transparent cursor-default shadow-lg">
                  <span className="h-2 w-2 rounded-full bg-[#8ec955] transition-colors group-hover:bg-white" />
                  {service}
                </span>
                {i < 3 && <span className="hidden lg:inline text-white/20 text-2xl font-thin mx-2">|</span>}
              </div>
            ))}
          </div>

          {/* CTA Buttons - Using VP Green #8ec955 */}
          <div className="flex animate-fade-in-up flex-col items-center gap-4 sm:flex-row sm:justify-center" style={{ animationDelay: '0.3s' }}>
            <Button
              onClick={handleWhatsApp}
              size="lg"
              className="h-14 w-full sm:w-auto bg-[#8ec955] px-8 sm:px-10 text-base sm:text-lg font-bold text-white shadow-xl transition-all hover:scale-105 hover:bg-[#8ec955]/90"
            >
              <img src="/wstp.svg" alt="WhatsApp" className="mr-2 h-6 w-6" />
              Solicitar Cotización
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="h-14 w-full sm:w-auto border-2 border-white/20 bg-white/10 px-8 sm:px-10 text-base sm:text-lg font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20"
            >
              <a href="#servicios">Nuestros Servicios</a>
            </Button>
          </div>
        </div>

        {/* ISO Badges Section */}
        <div className="mt-16 animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <div className="mb-8">
            <h2 className="text-2xl font-black text-white">Certificaciones Internacionales</h2>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {[
              { img: "/iso9001.jpg", title: "ISO 9001", label: "Calidad" },
              { img: "/iso37001.jpg", title: "ISO 37001", label: "Antisoborno" },
              { img: "/iso14001.png", title: "ISO 14001", label: "Ambiental" }
            ].map((iso, index) => (
              <div
                key={index}
                className="flex items-center gap-4 sm:gap-5 rounded-2xl border-2 border-white/10 bg-white/10 p-4 sm:p-5 backdrop-blur-md transition-all hover:bg-white/15 hover:border-[#8ec955]/30 hover:scale-105 shadow-lg w-[280px] sm:w-auto"
              >
                <div className="overflow-hidden rounded-xl bg-white p-2 sm:p-3 shadow-inner shrink-0">
                  <img src={iso.img} alt={iso.title} className="h-10 sm:h-14 w-auto object-contain" />
                </div>
                <div className="text-left">
                  <p className="text-base sm:text-lg font-black text-white leading-tight tracking-tight">{iso.title}</p>
                  <p className="text-xs sm:text-base uppercase tracking-[0.1em] sm:tracking-[0.15em] text-[#8ec955] font-black">{iso.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wave transition */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="h-16 w-full fill-background">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C58.34,65.34,136.67,52.33,212.43,60.11c31.62,3.24,63.14,9.2,95.66,12.62a368.52,368.52,0,0,0,13.3,0Z" className="shape-fill"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
