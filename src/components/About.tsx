import { CheckCircle2, Users, Building2, Globe, Award, Target, Heart, Star } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '13+', label: 'Años de experiencia', icon: Award },
    { number: '500+', label: 'Clientes satisfechos', icon: Users },
    { number: '100%', label: 'Cobertura nacional', icon: Globe },
    { number: '24/7', label: 'Soporte disponible', icon: Building2 },
  ];

  const values = [
    {
      icon: Target,
      title: 'Misión',
      description: 'Proporcionar soluciones TI de la más alta calidad, estableciendo alianzas duraderas con nuestros clientes y contribuyendo al desarrollo tecnológico del Perú.',
    },
    {
      icon: Star,
      title: 'Visión',
      description: 'Ser la empresa líder en servicios de infraestructura TI en el Perú, reconocida por nuestra excelencia, integridad y compromiso con la innovación.',
    },
    {
      icon: Heart,
      title: 'Valores',
      description: 'Integridad, excelencia en el servicio, compromiso con el cliente, transparencia en nuestras operaciones y desarrollo continuo de nuestro capital humano.',
    },
  ];

  const commitments = [
    'Relaciones a largo plazo con nuestros clientes',
    'Proveedores transparentes y confiables',
    'Desarrollo continuo del capital humano',
    'Calidad, integridad y excelencia en cada proyecto',
  ];

  return (
    <section id="nosotros" className="section-padding bg-secondary">
      <div className="container-vp">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            Sobre Nosotros
          </span>
          <h2 className="mb-6 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Más de una década{' '}
            <span className="text-primary">construyendo confianza</span>
          </h2>
        </div>

        {/* Main Content */}
        <div className="mb-20 grid gap-12 lg:grid-cols-2">
          {/* Company Description */}
          <div>
            <img
              src="/LogoVPS.png"
              alt="VP SOLUTIONS PERU S.A.C."
              className="mb-6 h-32 w-auto object-contain"
            />
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                VP SOLUTIONS PERU S.A.C. es una empresa peruana, integradora de soluciones TI, creada hace más de 10 años (13 años en 2026).
              </p>
              <p className="leading-relaxed">
                Contamos con un amplio portafolio de clientes a nivel nacional, principalmente entidades gubernamentales y del Estado, con un equipo profesional altamente calificado dedicado a brindar la más alta calidad de atención y servicio.
              </p>
              <p className="leading-relaxed">
                A lo largo de los años hemos construido alianzas sólidas con las principales empresas de tecnología para proporcionar a nuestros clientes soluciones a medida que se ajusten perfectamente a sus necesidades.
              </p>
            </div>

            {/* Commitments */}
            <div className="mt-8 space-y-3">
              {commitments.map((commitment) => (
                <div key={commitment} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-vp-green" />
                  <span className="text-foreground">{commitment}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="group relative flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-6 md:p-10 text-center shadow-lg transition-all hover:-translate-y-2 hover:shadow-2xl overflow-hidden"
              >
                {/* Accent Bands - The requested #77787b bands */}
                <div className="absolute left-0 top-0 h-full w-3 bg-[#77787b]" />
                <div className="absolute left-0 top-0 h-3 w-full bg-[#77787b] opacity-30" />

                <div className="mb-5 rounded-2xl bg-[#77787b]/10 p-4 transition-all duration-300 group-hover:bg-[#77787b] group-hover:scale-110">
                  <stat.icon className="h-10 w-10 text-[#77787b] transition-colors group-hover:text-white" />
                </div>

                <span className="mb-1 text-5xl font-black tracking-tighter text-[#77787b] lg:text-7xl">
                  {stat.number}
                </span>
                <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-[#77787b]/80">
                  {stat.label}
                </span>

                {/* Dynamic corner accent */}
                <div className="absolute -bottom-6 -right-6 h-12 w-12 rounded-full bg-[#77787b]/10 blur-xl transition-all group-hover:scale-[3] group-hover:bg-[#77787b]/20" />
              </div>
            ))}
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid gap-8 md:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-2xl border border-border bg-card p-8 transition-all card-hover"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <value.icon className="h-7 w-7 text-primary" />
              </div>
              <h4 className="mb-4 text-xl font-bold text-foreground">{value.title}</h4>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
