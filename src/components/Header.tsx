import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Server, HardDrive, Wrench, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const handleWhatsApp = () => {
    window.open('https://wa.me/51938152389?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20sus%20servicios', '_blank');
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { icon: Server, title: 'Soporte de Servidores y Storage', href: '/#servicios' },
    { icon: HardDrive, title: 'Venta de Partes y Piezas', href: '/#servicios' },
    { icon: Wrench, title: 'Alquiler de Servidores', href: '/#servicios' },
    { icon: ShoppingCart, title: 'Venta de Hardware Empresarial', href: '/#servicios' },
  ];

  const navLinks = [
    { name: 'Inicio', href: '/#inicio' },
    { name: 'Servicios', href: '/#servicios', hasSubmenu: true },
    { name: 'Nosotros', href: '/#nosotros' },
    { name: 'Mesa de Ayuda', href: '/mesa-de-ayuda' },
    { name: 'Contacto', href: '/#contacto' },
  ];

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${isScrolled || !isHome
        ? 'bg-card/95 shadow-lg backdrop-blur-md'
        : 'bg-[#0075bf]/60 backdrop-blur-sm'
        }`}
    >
      <div className="container-vp">
        <nav className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/LogoVPS.png"
              alt="VP Solutions Logo"
              className={`h-16 w-auto scale-110 transition-all duration-300 ${(!isHome || isScrolled) ? '' : 'brightness-0 invert'
                }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                {link.hasSubmenu ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <a
                      href={link.href}
                      className={`nav-link flex items-center gap-1 font-semibold transition-colors ${(isScrolled || !isHome) ? 'text-foreground hover:text-primary' : 'text-white hover:text-vp-green drop-shadow-md'
                        }`}
                    >
                      {link.name}
                      <ChevronDown className="h-4 w-4" />
                    </a>

                    {/* Mega Menu */}
                    <div
                      className={`absolute left-1/2 top-full w-80 -translate-x-1/2 pt-4 transition-all duration-200 ${isServicesOpen ? 'visible opacity-100' : 'invisible opacity-0'
                        }`}
                    >
                      <div className="rounded-xl border border-border bg-card p-4 shadow-xl">
                        <div className="space-y-1">
                          {services.map((service) => (
                            <a
                              key={service.title}
                              href={service.href}
                              className="flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-secondary"
                            >
                              <service.icon className="h-5 w-5 text-primary" />
                              <span className="text-sm font-medium text-foreground">{service.title}</span>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <a
                    href={link.href}
                    className={`nav-link font-semibold transition-colors ${(isScrolled || !isHome) ? 'text-foreground hover:text-primary' : 'text-white hover:text-vp-green drop-shadow-md'
                      }`}
                  >
                    {link.name}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              onClick={handleWhatsApp}
              className="bg-primary text-primary-foreground hover:bg-destructive transition-colors shadow-lg"
            >
              <img src="/wstp.svg" alt="WhatsApp" className="mr-2 h-5 w-5" />
              Solicitar Cotización
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden ${(isScrolled || !isHome) ? 'text-foreground' : 'text-white'}`}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
      >
        <div className="border-t border-border bg-card px-4 py-6">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-foreground hover:text-primary"
              >
                {link.name}
              </a>
            ))}
            <Button
              onClick={() => {
                handleWhatsApp();
                setIsMobileMenuOpen(false);
              }}
              className="mt-4 w-full bg-primary text-primary-foreground hover:bg-destructive transition-colors"
            >
              <img src="/wstp.svg" alt="WhatsApp" className="mr-2 h-5 w-5" />
              Solicitar Cotización
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
