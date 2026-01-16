import { Mail, Phone, MapPin, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Servicios', href: '/#servicios' },
    { name: 'Nosotros', href: '/#nosotros' },
    { name: 'Mesa de Ayuda', href: '/mesa-de-ayuda' },
    { name: 'Contacto', href: '/#contacto' },
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
  ];

  return (
    <footer className="bg-navy-deep text-white">
      {/* Main Footer */}
      <div className="container-vp py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img
                src="/LogoVPS.png"
                alt="VP Solutions Logo"
                className="h-28 w-auto brightness-0 invert -ml-7"
              />
            </div>

            <p className="mb-6 text-sm text-white/70">
              Integradores de soluciones TI con más de 13 años de experiencia brindando servicios de calidad al sector público y privado del Perú.
            </p>
            <div className="mb-8">
              <a
                href="https://forms.gle/YaXB1nhvNkimJGUT7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transition-transform hover:scale-105"
              >
                <img
                  src="/libroreclamaciones.jpeg"
                  alt="Libro de Reclamaciones"
                  className="h-20 w-auto rounded-lg bg-white p-2 -ml-2"
                />
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
                  +51 938 152 389
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-vp-green" />
                <span className="text-sm text-white/70">Lima, Perú</span>
              </div>
              <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                <a href="#" className="text-white/40 hover:text-vp-green transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="#" className="text-white/40 hover:text-vp-green transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-vp py-8">
          <div className="flex flex-col items-center justify-center gap-8 text-center">
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-white/60">
              <p>
                © {currentYear} VP SOLUTIONS PERU S.A.C. – Todos los derechos reservados
              </p>
              <span className="hidden md:inline text-white/20">|</span>
              <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
                {legalLinks.map((link, index) => (
                  <div key={link.name} className="flex items-center gap-4">
                    <a
                      href={link.href}
                      className="transition-colors hover:text-white"
                    >
                      {link.name}
                    </a>
                    {index < legalLinks.length - 1 && <span className="hidden md:inline text-white/20">|</span>}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center">
              <a
                href="https://wa.me/51949992147?text=Hola%20Fly,%20vengo%20de%20VP%20SOLUTIONS%20PERU%20S.A.C,%20estoy%20interesado%20en%20crear%20mi%20p%C3%A1gina%20web%20profesional"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-sm font-medium text-white/40 transition-all hover:text-white"
              >
                <span>Desarrollado por</span>
                <img
                  src="/logo.svg"
                  alt="Logo Fly"
                  className="h-8 w-auto opacity-50 grayscale transition-all group-hover:opacity-100 group-hover:grayscale-0"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
