import { Server, HardDrive, Wrench, ShoppingCart, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Server,
      title: 'Soporte de Servidores y Storage',
      description: 'Mantenimiento preventivo y correctivo de servidores, storage y equipos de red. Respuesta rápida y técnicos certificados para mantener su infraestructura funcionando 24/7.',
      features: ['Mantenimiento preventivo', 'Soporte correctivo', 'Monitoreo continuo', 'Técnicos certificados'],
      highlight: true,
    },
    {
      icon: HardDrive,
      title: 'Venta de Partes y Piezas',
      description: 'Discos duros, memorias RAM, procesadores y componentes originales de las mejores marcas. Stock disponible para entrega inmediata.',
      features: ['Componentes originales', 'Garantía incluida', 'Entrega rápida', 'Asesoría técnica'],
      highlight: false,
    },
    {
      icon: Wrench,
      title: 'Alquiler de Servidores',
      description: 'Servidores en alquiler con mantenimiento incluido. Solución ideal para proyectos temporales o mientras planifica su inversión definitiva.',
      features: ['Mantenimiento incluido', 'Contratos flexibles', 'Soporte técnico', 'Actualización de equipos'],
      highlight: false,
    },
    {
      icon: ShoppingCart,
      title: 'Venta de Hardware Empresarial',
      description: 'Servidores, storage y equipamiento de red de marcas líderes. Configuramos la solución perfecta para las necesidades de su organización.',
      features: ['Marcas líderes', 'Configuración a medida', 'Instalación incluida', 'Capacitación'],
      highlight: false,
    },
  ];

  return (
    <section id="servicios" className="section-padding bg-background">
      <div className="container-vp">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            Nuestros Servicios
          </span>
          <h2 className="mb-6 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Soluciones integrales para su{' '}
            <span className="text-primary">infraestructura TI</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Más de 13 años brindando servicios de calidad al sector público y privado del Perú
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative overflow-hidden rounded-2xl border bg-card p-8 transition-all duration-300 card-hover ${
                service.highlight
                  ? 'border-primary/30 shadow-lg'
                  : 'border-border hover:border-primary/20'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {service.highlight && (
                <div className="absolute right-4 top-4">
                  <span className="rounded-full bg-vp-red/10 px-3 py-1 text-xs font-semibold text-destructive">
                    Más solicitado
                  </span>
                </div>
              )}
              
              <div className="mb-6 flex items-start gap-5">
                <div className="service-icon shrink-0">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-bold text-foreground lg:text-2xl">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Features */}
              <div className="mb-6 grid grid-cols-2 gap-3">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-vp-green" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                variant="ghost"
                className="group/btn flex items-center gap-2 p-0 text-primary hover:bg-transparent hover:text-primary/80"
                asChild
              >
                <a href="#contacto">
                  Solicitar información
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
