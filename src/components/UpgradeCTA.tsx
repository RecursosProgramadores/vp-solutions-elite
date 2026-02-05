import { useState, useEffect } from 'react';
import { ArrowRight, ShoppingCart, Cpu, X, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const UpgradeCTA = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isDismissed, setIsDismissed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 600 && !isDismissed) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isDismissed]);

    const handleWhatsApp = () => {
        const message = "Hola, necesito información sobre un upgrade de servidores o repuestos urgentes.";
        window.open(`https://wa.me/51938152389?text=${encodeURIComponent(message)}`, '_blank');
    };

    if (isDismissed) return null;

    return (
        <div
            className={`fixed bottom-0 left-0 right-0 z-[60] p-4 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                }`}
        >
            <div className="max-w-7xl mx-auto">
                <div className="relative overflow-hidden rounded-2xl md:rounded-3xl bg-[#0a0a0a]/95 border border-white/10 p-6 md:p-8 backdrop-blur-xl shadow-[0_-20px_50px_-20px_rgba(0,0,0,0.5)]">
                    {/* Decorative radial gradients */}
                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[80px] pointer-events-none" />
                    <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-64 h-64 bg-vp-green/10 rounded-full blur-[80px] pointer-events-none" />

                    <button
                        onClick={() => setIsDismissed(true)}
                        className="absolute top-4 right-4 p-2 rounded-full bg-white/5 border border-white/10 text-white/50 hover:text-white hover:bg-white/10 transition-colors z-20"
                    >
                        <X className="h-5 w-5" />
                    </button>

                    <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">
                        <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                            <div className="hidden md:flex shrink-0 p-4 rounded-2xl bg-primary/10 border border-primary/20 text-primary">
                                <Cpu className="h-10 w-10 animate-pulse" />
                            </div>

                            <div>
                                <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                                    <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-destructive/10 border border-destructive/20 text-xs font-bold text-destructive uppercase tracking-wider">
                                        <Zap className="h-3.5 w-3.5 fill-destructive" />
                                        Atención Urgente
                                    </span>
                                    <span className="text-vp-green text-base font-bold flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-vp-green animate-pulse" />
                                        Soporte 24/7
                                    </span>
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                                    ¿Necesita un <span className="text-primary italic">upgrade</span> o repuesto <span className="text-destructive uppercase">Urgente</span>?
                                </h2>
                                <p className="text-gray-300 text-base md:text-lg mt-3 max-w-xl">
                                    Asistencia inmediata y soluciones de hardware críticas para asegurar la continuidad operativa de su empresa.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
                            <Button
                                onClick={handleWhatsApp}
                                size="lg"
                                className="w-full sm:w-auto h-14 bg-primary text-white px-10 text-xl font-black hover:bg-destructive transition-all duration-300 shadow-2xl shadow-primary/30 group uppercase tracking-tighter"
                            >
                                Agendar Soporte IT
                                <ArrowRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-2" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpgradeCTA;
