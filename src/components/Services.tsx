import { Server, HardDrive, Wrench, ShoppingCart, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Server,
      image: '/Soporte.jpg',
      title: '1. INFRAESTRUCTURA TECNOLOGICA',
      description: 'Diseñamos, implementamos y gestionamos soluciones de infraestructura física y lógica, orientadas a optimizar el rendimiento y la disponibilidad de los entornos tecnológicos:',
      features: ['Venta, Instalación y configuración de Servidores y Storage', 'Consolidación de entornos tecnológicos con alta disponibilidad', 'Respaldo y continuidad operativa'],
      highlight: true,
    },
    {
      icon: Wrench,
      image: '/Hardware.png',
      title: '2. SOPORTE ENTERPRISE MULTIMARCA 24x7',
      description: 'El mantenimiento de servidores y de los sistemas de almacenamiento es esencial para asegurar la disponibilidad, seguridad y eficiencia de la infraestructura IT. Ofrecemos acuerdos de nivel de servicio (SLA) adaptados a sus necesidades.',
      features: ['Mantenimiento Preventivo – Correctivo', 'Actualización de Firmware', 'Asistencia Inmediata', 'Niveles de Servicio 24x7x4', 'Técnicos Certificados'],
      highlight: false,
    },
    {
      icon: HardDrive,
      image: '/Venta.png',
      title: '3. SERVICIOS DE HARDWARE IT | Spare as a Service',
      description: 'Obtenga las piezas de repuesto que necesita para que su infraestructura IT funcione sin problemas, donde y cuando las necesite. Contamos con las mejores opciones en tiempos de envíos.',
      features: ['Repuestos de alta calidad', 'Envíos rápidos', 'Stock Disponible', 'Garantía Total'],
      highlight: false,
    },
    {
      icon: ShoppingCart,
      image: '/Alquiler.png',
      title: '4. EQUIPAMIENTO TECNOLOGICO',
      description: 'Ofrecemos soluciones de cómputo de las mejores marcas: laptops, equipos de escritorio y monitores. La línea de equipos empresariales más inteligentes y seguros del mundo.',
      features: ['Laptops y Equipos de Escritorio', 'Monitores Profesionales', 'Equipos Empresariales Seguros', 'Marcas Líderes'],
      highlight: false,
    },
  ];

  const handleWhatsApp = (serviceTitle: string) => {
    const message = `Hola, me interesa solicitar información sobre: ${serviceTitle}`;
    window.open(`https://wa.me/51938152389?text=${encodeURIComponent(message)}`, '_blank');
  };

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
              className={`group relative overflow-hidden rounded-2xl border bg-card transition-all duration-300 card-hover ${service.highlight
                ? 'border-primary/30 shadow-lg'
                : 'border-border hover:border-primary/20'
                }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                {/* Icon Overlay */}
                <div className="absolute top-4 left-4 rounded-xl bg-primary/90 p-3 shadow-lg text-white backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                  <service.icon className="h-6 w-6" />
                </div>

                {service.highlight && (
                  <div className="absolute right-4 top-4">
                    <span className="rounded-full bg-destructive px-3 py-1 text-xs font-semibold text-white">
                      Más solicitado
                    </span>
                  </div>
                )}
              </div>

              <div className="p-8 pt-10 text-center">
                <h3 className="mb-4 text-xl font-bold text-foreground lg:text-2xl">
                  {service.title}
                </h3>
                <p className="mb-6 text-muted-foreground line-clamp-2">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mb-6 flex flex-wrap justify-center gap-x-4 gap-y-2">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-1.5">
                      <div className="h-1.5 w-1.5 rounded-full bg-vp-green" />
                      <span className="text-xs font-medium text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Certifications */}
                <div className="mb-8 border-t border-border/50 pt-6">
                  <p className="text-sm font-semibold text-foreground mb-2">Certificaciones</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Contamos con las certificaciones más importantes del sector que garantizan la calidad y seguridad de nuestros servicios.
                  </p>
                </div>

                <Button
                  onClick={() => handleWhatsApp(service.title)}
                  className="h-11 w-full bg-primary text-primary-foreground hover:bg-destructive transition-all"
                >
                  Solicitar información por WhatsApp
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
