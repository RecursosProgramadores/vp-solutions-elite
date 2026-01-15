import { Shield, Award, Leaf, Building2, Users, Clock } from 'lucide-react';

const TrustSection = () => {
  const certifications = [
    {
      icon: Shield,
      name: 'ISO 9001:2015',
      title: 'Sistema de Gestión de Calidad',
      description: 'Certificación que garantiza procesos estandarizados y mejora continua en todos nuestros servicios.',
    },
    {
      icon: Award,
      name: 'ISO 37001:2016',
      title: 'Sistema de Gestión Antisoborno',
      description: 'Compromiso con la ética empresarial y la transparencia en todas nuestras operaciones.',
    },
    {
      icon: Leaf,
      name: 'ISO 14001:2015',
      title: 'Sistema de Gestión Ambiental',
      description: 'Responsabilidad ambiental y prácticas sostenibles en nuestra operación diaria.',
    },
  ];

  const trustFactors = [
    { icon: Building2, label: 'Clientes del Estado Peruano', value: 'Principal segmento' },
    { icon: Users, label: 'Equipo certificado', value: 'Profesionales especializados' },
    { icon: Clock, label: 'Tiempo de respuesta', value: 'Atención inmediata' },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-vp">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full bg-accent/10 px-4 py-1.5 text-sm font-semibold text-accent">
            Certificaciones y Confianza
          </span>
          <h2 className="mb-6 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Respaldados por{' '}
            <span className="text-primary">estándares internacionales</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Nuestras certificaciones ISO garantizan la excelencia y confiabilidad de nuestros servicios
          </p>
        </div>

        {/* Certifications */}
        <div className="mb-16 grid gap-8 md:grid-cols-3">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 text-center transition-all card-hover"
            >
              <div className="mb-6 flex justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <cert.icon className="h-10 w-10 text-primary" />
                </div>
              </div>
              <span className="mb-2 block text-2xl font-bold text-accent">{cert.name}</span>
              <h4 className="mb-4 text-lg font-semibold text-foreground">{cert.title}</h4>
              <p className="text-muted-foreground">{cert.description}</p>
            </div>
          ))}
        </div>

        {/* Trust Factors Banner */}
        <div className="rounded-2xl p-8 md:p-12" style={{ background: 'var(--gradient-hero)' }}>
          <div className="grid gap-8 md:grid-cols-3">
            {trustFactors.map((factor) => (
              <div key={factor.label} className="flex items-center gap-4 text-white">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm">
                  <factor.icon className="h-7 w-7 text-cyan-glow" />
                </div>
                <div>
                  <span className="block text-lg font-bold">{factor.value}</span>
                  <span className="text-sm text-white/70">{factor.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
