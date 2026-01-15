import { Mail, Phone, MapPin, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Mesa de Ayuda', href: '#mesa-de-ayuda' },
    { name: 'Contacto', href: '#contacto' },
  ];

  const services = [
    'Soporte de Servidores',
    'Mantenimiento de Storage',
    'Venta de Hardware',
    'Alquiler de Servidores',
    'Partes y Piezas',
  ];

  const legalLinks = [
    { name: 'Política de Privacidad', href: '#' },
    { name: 'Términos y Condiciones', href: '#' },
    { name: 'Libro de Reclamaciones', href: '#' },
  ];

  return (
    <footer className="bg-navy-deep text-white">
      {/* Main Footer */}
      <div className="container-vp py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                <span className="text-xl font-bold text-primary-foreground">VP</span>
              </div>
              <div>
                <span className="block text-lg font-bold">VP SOLUTIONS</span>
                <span className="text-xs text-white/60">PERU S.A.C.</span>
              </div>
            </div>
            <p className="mb-6 text-sm text-white/70">
              Integradores de soluciones TI con más de 13 años de experiencia brindando servicios de calidad al sector público y privado del Perú.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 transition-colors hover:bg-white/20"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 transition-colors hover:bg-white/20"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 text-lg font-bold">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-6 text-lg font-bold">Servicios</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#servicios"
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-6 text-lg font-bold">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-vp-green" />
                <div className="space-y-1 text-sm text-white/70">
                  <a href="mailto:ventas@vpsolutions.com.pe" className="block hover:text-white">
                    ventas@vpsolutions.com.pe
                  </a>
                  <a href="mailto:victor.portocarrero@vpsolutions.com.pe" className="block hover:text-white">
                    victor.portocarrero@vpsolutions.com.pe
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-vp-green" />
                <a href="tel:+5101234567" className="text-sm text-white/70 hover:text-white">
                  +51 (01) 123-4567
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-vp-green" />
                <span className="text-sm text-white/70">Lima, Perú</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-vp flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
          <p className="text-center text-sm text-white/60">
            © {currentYear} VP SOLUTIONS PERU S.A.C. – Todos los derechos reservados
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {legalLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-white/60 transition-colors hover:text-white"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
