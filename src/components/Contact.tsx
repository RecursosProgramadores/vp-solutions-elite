import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/51938152389?text=Hola,%20quisiera%20solicitar%20una%20cotización', '_blank');
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Comercial',
      value: 'ventas@vpsolutions.com.pe',
      action: () => window.location.href = 'mailto:ventas@vpsolutions.com.pe',
    },
    {
      icon: Mail,
      title: 'Email Director',
      value: 'victor.portocarrero@vpsolutions.com.pe',
      action: () => window.location.href = 'mailto:victor.portocarrero@vpsolutions.com.pe',
    },
    {
      icon: Phone,
      title: 'Teléfono',
      value: '+51 938 152 389',
      action: () => window.location.href = 'tel:+51938152389',
    },
    {
      icon: MapPin,
      title: 'Ubicación',
      value: 'Lima, Perú',
      action: undefined,
    },
  ];

  return (
    <section id="contacto" className="section-padding bg-background">
      <div className="container-vp">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Column */}
          <div>
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-5 py-2 text-base font-bold text-primary">
              Contacto
            </span>
            <h2 className="mb-6 font-outfit text-4xl font-black text-foreground sm:text-5xl lg:text-6xl tracking-tighter">
              Conversemos sobre{' '}
              <span className="text-primary">su proyecto</span>
            </h2>
            <p className="mb-8 text-xl sm:text-2xl text-muted-foreground leading-relaxed font-medium">
              Estamos listos para ayudarle a encontrar la solución perfecta para las necesidades tecnológicas de su organización.
            </p>

            {/* WhatsApp CTA */}
            <div className="flex justify-center sm:justify-start">
              <Button
                onClick={handleWhatsApp}
                size="lg"
                className="mb-12 h-14 w-full sm:w-auto bg-whatsapp px-6 sm:px-8 text-base sm:text-lg font-black text-white hover:bg-whatsapp/90 shadow-xl shadow-whatsapp/30 transition-all hover:scale-105"
              >
                <img src="/wstp.svg" alt="WhatsApp" className="mr-2 h-6 w-6 brightness-0 invert" />
                CONTÁCTANOS POR WHATSAPP
              </Button>
            </div>

            {/* Contact Info */}
            <div className="grid gap-6 grid-cols-1 xs:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
              {contactInfo.map((info) => (
                <div
                  key={info.title}
                  className={`flex items-start gap-4 p-4 rounded-2xl bg-card/50 border border-transparent transition-all sm:p-0 sm:bg-transparent sm:border-0 ${info.action ? 'cursor-pointer hover:bg-primary/5 hover:border-primary/20 sm:hover:bg-transparent' : ''}`}
                  onClick={info.action}
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <info.icon className="h-6 w-6" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-sm font-black uppercase tracking-widest text-muted-foreground mb-1">{info.title}</span>
                    <span className={`block text-base sm:text-lg font-black text-foreground break-all sm:break-normal ${info.action ? 'group-hover:text-primary transition-colors' : ''}`}>
                      {info.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Office Hours & Map Placeholder */}
          <div className="space-y-8 max-w-md lg:ml-auto">
            {/* Office Hours */}
            <div className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-lg">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="font-outfit text-xl font-black text-foreground uppercase tracking-tight">Horario de atención</h3>
              </div>
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:justify-between border-b border-border pb-4 gap-1">
                  <span className="text-base font-bold text-muted-foreground uppercase tracking-wider">Lunes - Viernes</span>
                  <span className="text-lg font-black text-foreground">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between border-b border-border pb-4 gap-1">
                  <span className="text-base font-bold text-muted-foreground uppercase tracking-wider">Sábados</span>
                  <span className="text-lg font-black text-foreground">9:00 AM - 1:00 PM</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between pt-2 gap-1">
                  <span className="text-base font-bold text-muted-foreground uppercase tracking-wider">Soporte emergencia</span>
                  <span className="text-xl font-black text-vp-green tracking-tighter">DISPONIBLE 24/7</span>
                </div>
              </div>
            </div>

            {/* Quote Request Box */}
            <div className="rounded-2xl p-6 md:p-8 shadow-xl relative overflow-hidden group" style={{ backgroundColor: '#77787b' }}>
              <div className="absolute top-0 right-0 h-24 w-24 bg-white/5 rounded-full -mr-12 -mt-12 transition-transform duration-500 group-hover:scale-150" />
              <h3 className="font-outfit mb-4 text-2xl font-black text-white tracking-tighter uppercase">Solicite una cotización</h3>
              <p className="mb-8 text-white/90 text-lg font-medium leading-relaxed">
                Envíenos los detalles de su proyecto y le prepararemos una propuesta personalizada en <span className="text-vp-green font-black">menos de 24 horas.</span>
              </p>
              <Button
                onClick={handleWhatsApp}
                variant="secondary"
                size="lg"
                className="w-full bg-white h-14 font-black text-primary hover:bg-white/90 text-lg uppercase tracking-tighter shadow-lg transition-all hover:-translate-y-1"
              >
                Solicitar cotización ahora
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
