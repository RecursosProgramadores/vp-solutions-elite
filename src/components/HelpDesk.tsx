import { useState } from 'react';
import { Send, Headphones, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const WhatsAppIcon = ({ className, forceGreen = false }: { className?: string; forceGreen?: boolean }) => (
  <img
    src="/wstp.svg"
    alt="WhatsApp"
    className={className}
    style={forceGreen ? { filter: 'invert(58%) sepia(90%) saturate(400%) hue-rotate(92deg) brightness(95%) contrast(90%)' } : undefined}
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
      icon: (props: any) => <WhatsAppIcon {...props} forceGreen={true} />,
      title: 'WhatsApp',
      value: '+51 938 152 389',
      action: () => window.open('https://wa.me/51938152389', '_blank'),
      primary: true,
    },
    {
      icon: Mail,
      title: 'Email Soporte',
      value: 'victor.portocarrero@vpsolutions.com.pe',
      action: () => window.location.href = 'mailto:victor.portocarrero@vpsolutions.com.pe',
      primary: false,
    },
    {
      icon: Phone,
      title: 'Teléfono',
      value: '+51 (01) 123-4567',
      action: () => window.location.href = 'tel:+5101234567',
      primary: false,
    },
  ];

  return (
    <section id="mesa-de-ayuda" className="section-padding bg-secondary">
      <div className="container-vp">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-vp-green/10 px-4 py-1.5 text-sm font-semibold text-accent">
            <Headphones className="h-4 w-4" />
            Mesa de Ayuda
          </span>
          <h2 className="mb-6 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            ¿Necesitas{' '}
            <span className="text-primary">asistencia técnica</span>?
          </h2>
          <p className="text-lg text-muted-foreground">
            Nuestro equipo de soporte está listo para ayudarte. Completa el formulario o contáctanos directamente.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Methods */}
          <div>
            <h3 className="mb-8 text-2xl font-bold text-foreground">
              Canales de atención
            </h3>
            <div className="space-y-4">
              {contactMethods.map((method) => (
                <button
                  key={method.title}
                  onClick={method.action}
                  className={`group flex w-full items-center gap-4 rounded-xl border p-6 text-left transition-all ${method.primary
                    ? 'border-whatsapp/30 bg-whatsapp/5 hover:border-whatsapp/50 hover:bg-whatsapp/10'
                    : 'border-border bg-card hover:border-primary/30 hover:bg-primary/5'
                    }`}
                >
                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl transition-colors ${method.primary
                      ? 'bg-whatsapp/20 text-whatsapp'
                      : 'bg-primary/10 text-primary group-hover:bg-accent/20 group-hover:text-accent'
                      }`}
                  >
                    <method.icon className="h-7 w-7" />
                  </div>
                  <div>
                    <span className="block text-sm text-muted-foreground">{method.title}</span>
                    <span className="text-lg font-semibold text-foreground">{method.value}</span>
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
            <h3 className="mb-6 text-xl font-bold text-foreground">
              Formulario de soporte
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nombre" className="mb-2 block text-sm font-medium text-foreground">
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
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
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
                  <label htmlFor="telefono" className="mb-2 block text-sm font-medium text-foreground">
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
                <label htmlFor="detalle" className="mb-2 block text-sm font-medium text-foreground">
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
