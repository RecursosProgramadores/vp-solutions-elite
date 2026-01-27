import { ArrowRight, ShoppingCart, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const UpgradeCTA = () => {
    const handleWhatsApp = () => {
        const message = "Hola, necesito información sobre un upgrade de servidores o repuestos urgentes.";
        window.open(`https://wa.me/51938152389?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <section className="py-20 bg-[#1a1a1a] relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-vp-green/10 rounded-full blur-[120px]" />

            <div className="container-vp relative z-10">
                <div className="max-w-4xl mx-auto rounded-3xl bg-white/5 border border-white/10 p-8 md:p-12 backdrop-blur-sm text-center">
                    <div className="flex justify-center gap-4 mb-6">
                        <div className="p-3 rounded-2xl bg-primary/20 text-primary">
                            <Cpu className="h-8 w-8" />
                        </div>
                        <div className="p-3 rounded-2xl bg-vp-green/20 text-vp-green">
                            <ShoppingCart className="h-8 w-8" />
                        </div>
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                        ¿Necesita hacer un <span className="text-primary italic">upgrade</span> a sus servidores, <br className="hidden md:block" />
                        requiere un repuesto <span className="text-destructive uppercase">Urgente</span>?
                    </h2>

                    <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
                        Nuestro equipo técnico está listo para brindarle asistencia inmediata y soluciones de hardware críticas para asegurar la continuidad de su negocio.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            onClick={handleWhatsApp}
                            size="lg"
                            className="h-14 bg-primary text-white px-8 text-lg font-bold hover:bg-destructive transition-all duration-300 shadow-lg shadow-primary/25"
                        >
                            Contáctenos Ahora
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>

                        <div className="flex items-center justify-center px-6 py-3 rounded-xl bg-white/5 border border-white/5">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-vp-green animate-pulse" />
                                <span className="text-sm font-medium text-gray-300">Respuesta rápida garantizada</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UpgradeCTA;
