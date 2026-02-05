import { useState } from 'react';
import { Send, Headphones, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const WhatsAppIcon = ({ className, forceGreen = false, white = false }: { className?: string; forceGreen?: boolean; white?: boolean }) => (
  <img
    src="/wstp.svg"
    alt="WhatsApp"
    className={className}
    style={
      white ? { filter: 'brightness(0) invert(1)' } :
        forceGreen ? { filter: 'invert(58%) sepia(90%) saturate(400%) hue-rotate(92deg) brightness(95%) contrast(90%)' } :
          undefined
    }
  />
);

const HelpDesk = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    detalle: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: '¡Solicitud enviada!',
      description: 'Nuestro equipo se pondrá en contacto contigo pronto.',
    });

    setFormData({ nombre: '', email: '', telefono: '', detalle: '' });
    setIsSubmitting(false);
  };

  const contactMethods = [
    {
      icon: (props: any) => <WhatsAppIcon {...props} white={true} />,
      title: 'WhatsApp Soporte',
      value: '+51 938 152 389',
      action: () => window.open('https://wa.me/51938152389', '_blank'),
      primary: true,
    },
    {
      icon: Mail,
      title: 'Email Soporte',
      value: 'ventas@vpsolutions.com.pe',
      action: () => window.location.href = 'mailto:ventas@vpsolutions.com.pe',
      primary: false,
    },
    {
      icon: Phone,
      title: 'Teléfono Directo',
      value: '+51 938 152 389',
      action: () => window.location.href = 'tel:+51938152389',
      primary: false,
    },
  ];

  return (
    <section id="mesa-de-ayuda" className="section-padding bg-secondary">
      <div className="container-vp">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-vp-green/10 px-5 py-2 text-base font-black text-accent">
            <Headphones className="h-5 w-5" />
            Mesa de Ayuda
          </span>
          <h2 className="mb-6 text-4xl font-black text-foreground sm:text-5xl lg:text-6xl">
            ¿Necesitas{' '}
            <span className="text-primary tracking-tighter">asistencia técnica</span>?
          </h2>
          <p className="text-2xl text-muted-foreground font-medium leading-relaxed">
            Nuestro equipo de soporte está listo para ayudarte. Completa el formulario o contáctanos directamente.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Methods */}
          <div>
            <h3 className="mb-8 text-3xl font-black text-foreground tracking-tight">
              Canales de atención
            </h3>
            <div className="space-y-4">
              {contactMethods.map((method) => (
                <button
                  key={method.title}
                  onClick={method.action}
                  className={`group flex w-full items-center gap-4 sm:gap-6 rounded-xl border p-4 sm:p-6 text-left transition-all ${method.primary
                    ? 'border-whatsapp/30 bg-whatsapp/5 hover:border-whatsapp/50 hover:bg-whatsapp/10'
                    : 'border-border bg-card hover:border-primary/30 hover:bg-primary/5'
                    }`}
                >
                  <div
                    className={`flex shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${method.primary
                      ? 'h-14 w-14 sm:h-16 sm:w-16 bg-whatsapp text-white shadow-md'
                      : 'h-12 w-12 sm:h-14 sm:w-14 bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white shadow-sm'
                      }`}
                  >
                    <method.icon className={method.primary ? "h-7 w-7 sm:h-9 sm:w-9" : "h-6 w-6 sm:h-7 sm:w-7"} />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-xs sm:text-sm font-black uppercase tracking-widest text-muted-foreground mb-1">{method.title}</span>
                    <span className="block text-lg sm:text-2xl font-black text-foreground tracking-tight break-all sm:break-normal">{method.value}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Response Time */}
            <div className="mt-8 rounded-xl border border-vp-green/20 bg-vp-green/5 p-6">
              <h4 className="mb-2 font-semibold text-foreground">Tiempo de respuesta</h4>
              <p className="text-muted-foreground">
                Respondemos en menos de <strong className="text-vp-green">2 horas</strong> durante horario laboral (Lun-Vie 8am-6pm).
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl border border-border bg-card p-8 shadow-lg">
            <h3 className="mb-6 text-2xl font-black text-foreground tracking-tight">
              Formulario de soporte
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nombre" className="mb-2 block text-lg font-black text-foreground">
                  Nombres y apellidos *
                </label>
                <Input
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  placeholder="Ingrese su nombre completo"
                  className="h-12"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="mb-2 block text-lg font-black text-foreground">
                    Correo electrónico *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="correo@ejemplo.com"
                    className="h-12"
                  />
                </div>
                <div>
                  <label htmlFor="telefono" className="mb-2 block text-lg font-black text-foreground">
                    Teléfono *
                  </label>
                  <Input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    value={formData.telefono}
                    onChange={handleChange}
                    required
                    placeholder="+51 938 152 389"
                    className="h-12"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="detalle" className="mb-2 block text-lg font-black text-foreground">
                  Detalle del problema / consulta *
                </label>
                <Textarea
                  id="detalle"
                  name="detalle"
                  value={formData.detalle}
                  onChange={handleChange}
                  required
                  placeholder="Describa su consulta o problema con el mayor detalle posible..."
                  rows={5}
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="h-12 w-full bg-primary text-primary-foreground hover:bg-primary/90"
                size="lg"
              >
                {isSubmitting ? (
                  'Enviando...'
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Enviar solicitud
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpDesk;
