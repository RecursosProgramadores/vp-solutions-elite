import { Mail, Phone, MapPin, MessageCircle, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/51999999999?text=Hola,%20quisiera%20solicitar%20una%20cotización', '_blank');
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
      value: '+51 (01) 123-4567',
      action: () => window.location.href = 'tel:+5101234567',
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
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
              Contacto
            </span>
            <h2 className="mb-6 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
              Conversemos sobre{' '}
              <span className="text-primary">su proyecto</span>
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Estamos listos para ayudarle a encontrar la solución perfecta para las necesidades tecnológicas de su organización.
            </p>

            {/* WhatsApp CTA */}
            <Button
              onClick={handleWhatsApp}
              size="lg"
              className="mb-12 h-14 bg-whatsapp px-8 text-lg font-semibold text-white hover:bg-whatsapp/90"
            >
              <MessageCircle className="mr-2 h-6 w-6" />
              Contáctanos por WhatsApp
            </Button>

            {/* Contact Info */}
            <div className="grid gap-6 sm:grid-cols-2">
              {contactInfo.map((info) => (
                <div
                  key={info.title}
                  className={`flex items-start gap-4 ${info.action ? 'cursor-pointer' : ''}`}
                  onClick={info.action}
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <span className="block text-sm text-muted-foreground">{info.title}</span>
                    <span className={`font-medium text-foreground ${info.action ? 'hover:text-primary' : ''}`}>
                      {info.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Office Hours & Map Placeholder */}
          <div className="space-y-8">
            {/* Office Hours */}
            <div className="rounded-2xl border border-border bg-card p-8">
              <div className="mb-6 flex items-center gap-3">
                <Clock className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-bold text-foreground">Horario de atención</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between border-b border-border pb-3">
                  <span className="text-muted-foreground">Lunes - Viernes</span>
                  <span className="font-semibold text-foreground">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between border-b border-border pb-3">
                  <span className="text-muted-foreground">Sábados</span>
                  <span className="font-semibold text-foreground">9:00 AM - 1:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Soporte de emergencia</span>
                  <span className="font-semibold text-vp-green">24/7</span>
                </div>
              </div>
            </div>

            {/* Quote Request Box */}
            <div className="rounded-2xl p-8" style={{ background: 'var(--gradient-hero)' }}>
              <h3 className="mb-4 text-xl font-bold text-white">Solicite una cotización</h3>
              <p className="mb-6 text-white/80">
                Envíenos los detalles de su proyecto y le prepararemos una propuesta personalizada en menos de 24 horas.
              </p>
              <Button
                onClick={handleWhatsApp}
                variant="secondary"
                size="lg"
                className="w-full bg-white font-semibold text-primary hover:bg-white/90"
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
