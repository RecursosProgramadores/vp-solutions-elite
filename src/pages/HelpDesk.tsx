import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Send, Headphones, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import WhatsAppButton from '@/components/WhatsAppButton';

const WhatsAppIcon = ({ className, forceGreen = false, white = false }: { className?: string; forceGreen?: boolean; white?: boolean }) => (
    <img
        src="/wstp.svg"
        alt="WhatsApp"
        className={className}
        style={
            white ? { filter: 'brightness(0) invert(1)' } :
                forceGreen ? { filter: 'invert(58%) sepia(90%) saturate(400%) hue-rotate(92deg) brightness(95%) contrast(90%)' } :
                    undefined
        }
    />
);

const HelpDeskPage = () => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        telefono: '',
        detalle: '',
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const message = `Hola, mi nombre es ${formData.nombre}. Necesito soporte técnico.%0A%0ACorreo: ${formData.email}%0ATeléfono: ${formData.telefono}%0A%0ADetalle del problema: ${formData.detalle}`;

        window.open(`https://wa.me/51938152389?text=${message}`, '_blank');

        toast({
            title: 'Redirigiendo a WhatsApp...',
            description: 'Se abrirá una ventana para enviar tu consulta directamente.',
        });

        setIsSubmitting(false);
    };

    const contactMethods = [
        {
            icon: (props: any) => <WhatsAppIcon {...props} white={true} />,
            title: 'WhatsApp Soporte',
            value: '+51 938 152 389',
            action: () => window.open('https://wa.me/51938152389?text=Hola,%20necesito%20asistencia%20técnica.', '_blank'),
            primary: true,
            color: 'text-white',
            bgColor: 'bg-whatsapp'
        },
        {
            icon: Mail,
            title: 'Email Soporte',
            value: 'ventas@vpsolutions.com.pe',
            action: () => window.location.href = 'mailto:ventas@vpsolutions.com.pe',
            primary: false,
            color: 'text-primary',
            bgColor: 'bg-primary/10'
        },
        {
            icon: Phone,
            title: 'Teléfono Directo',
            value: '+51 938 152 389',
            action: () => window.location.href = 'tel:+51938152389',
            primary: false,
            color: 'text-primary',
            bgColor: 'bg-primary/10'
        },
    ];

    return (
        <div className="min-h-screen bg-background relative overflow-hidden">
            {/* Background elements for depth */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
                <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px]" />
                <div className="absolute top-[20%] -right-[10%] w-[30%] h-[30%] rounded-full bg-accent/5 blur-[100px]" />
            </div>

            <Header />

            <main className="pt-32 pb-20">
                <div className="container-vp">
                    {/* Hero Section */}
                    <div className="mx-auto mb-16 max-w-3xl text-center">
                        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary mb-6 animate-fade-in">
                            <Headphones className="h-4 w-4" />
                            <span>Centro de Soporte Especializado</span>
                        </div>
                        <h1 className="mb-6 font-outfit text-4xl font-black tracking-tighter text-foreground sm:text-7xl">
                            Mesa de <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Ayuda</span>
                        </h1>
                        <p className="text-lg sm:text-2xl text-muted-foreground leading-relaxed font-medium px-4">
                            En <strong>VP SOLUTIONS PERU</strong>, su tranquilidad es nuestra prioridad. Nuestro equipo de expertos está a su disposición para resolver cualquier inconveniente técnico con la agilidad y precisión que su negocio demanda.
                        </p>
                    </div>

                    <div className="grid gap-12 lg:grid-cols-12">
                        {/* Contact Channels */}
                        <div className="lg:col-span-5 space-y-8">
                            <div className="relative">
                                <h2 className="mb-8 font-outfit text-3xl font-black text-foreground tracking-tighter">
                                    Canales de Atención Directa
                                </h2>
                                <div className="grid gap-4">
                                    {contactMethods.map((method, idx) => (
                                        <button
                                            key={method.title}
                                            onClick={method.action}
                                            className="group relative flex items-center gap-4 sm:gap-6 rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-4 sm:p-8 text-left transition-all duration-300 hover:border-primary/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-1"
                                        >
                                            <div className={`flex h-12 w-12 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${method.primary ? 'bg-whatsapp text-white shadow-md' : 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white'}`}>
                                                <method.icon className="h-6 w-6 sm:h-8 sm:w-8" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <span className="block text-xs sm:text-sm font-black uppercase tracking-widest text-muted-foreground mb-1 leading-none">{method.title}</span>
                                                <span className="block font-outfit text-base sm:text-2xl font-black text-foreground group-hover:text-primary transition-colors tracking-tighter break-all sm:break-normal">
                                                    {method.value}
                                                </span>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                                <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-card to-secondary/30 border border-border shadow-inner">
                                    <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed italic relative">
                                        <span className="absolute -top-4 -left-2 sm:-top-6 sm:-left-3 text-4xl sm:text-6xl text-primary/20 font-serif">"</span>
                                        Garantizamos la continuidad operativa de su empresa mediante una infraestructura TI sólida y un soporte técnico de excelencia. Cada reporte es gestionado con la máxima prioridad profesional.
                                    </p>
                                    <div className="mt-4 flex items-center gap-2">
                                        <div className="h-px flex-1 bg-border" />
                                        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-primary/60">VP Solutions Service Desk</span>
                                    </div>
                                </div>
                            </div>

                            {/* Response Time Info */}
                            <div className="rounded-2xl bg-primary/10 border border-primary/20 p-8 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 transition-transform duration-500 group-hover:scale-110" />
                                <div className="flex items-start gap-5 relative z-10">
                                    <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-xl bg-primary/20 text-primary shadow-lg shadow-primary/20">
                                        <Clock className="h-6 w-6 sm:h-7 sm:w-7" />
                                    </div>
                                    <div>
                                        <h3 className="mb-2 text-lg sm:text-xl font-bold text-foreground">SLA de Respuesta</h3>
                                        <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                                            Compromiso de atención en menos de <strong className="text-primary underline decoration-2 underline-offset-4">2 horas</strong> durante horario hábil (Lun-Vie 8am-6pm).
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Support Form */}
                        <div className="lg:col-span-7">
                            <div className="rounded-3xl border border-border bg-card/80 backdrop-blur-xl p-6 sm:p-8 lg:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.1)] relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-accent to-primary" />
                                <div className="mb-8 md:mb-10">
                                    <h2 className="mb-3 text-3xl sm:text-4xl font-black text-foreground tracking-tighter">Registro de Ticket</h2>
                                    <p className="text-lg sm:text-xl text-muted-foreground font-medium">Proporcione los detalles de su requerimiento para una atención inmediata.</p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-8">
                                    <div className="space-y-3">
                                        <label htmlFor="nombre" className="text-lg font-black text-foreground/80 ml-1">
                                            Nombres y apellidos <span className="text-primary">*</span>
                                        </label>
                                        <Input
                                            id="nombre"
                                            name="nombre"
                                            value={formData.nombre}
                                            onChange={handleChange}
                                            required
                                            placeholder="Ingrese su nombre completo"
                                            className="h-12 sm:h-14 rounded-xl border-border bg-background/50 focus:ring-2 focus:ring-primary/20 transition-all text-base sm:text-lg"
                                        />
                                    </div>

                                    <div className="grid gap-8 sm:grid-cols-2">
                                        <div className="space-y-3">
                                            <label htmlFor="email" className="text-lg font-black text-foreground/80 ml-1">
                                                Correo electrónico <span className="text-primary">*</span>
                                            </label>
                                            <Input
                                                id="email"
                                                name="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                placeholder="correo@vpsolutions.pe"
                                                className="h-12 sm:h-14 rounded-xl border-border bg-background/50 focus:ring-2 focus:ring-primary/20 transition-all text-base sm:text-lg"
                                            />
                                        </div>
                                        <div className="space-y-3">
                                            <label htmlFor="telefono" className="text-lg font-black text-foreground/80 ml-1">
                                                Teléfono / Celular <span className="text-primary">*</span>
                                            </label>
                                            <Input
                                                id="telefono"
                                                name="telefono"
                                                type="tel"
                                                value={formData.telefono}
                                                onChange={handleChange}
                                                required
                                                placeholder="+51 9XX XXX XXX"
                                                className="h-12 sm:h-14 rounded-xl border-border bg-background/50 focus:ring-2 focus:ring-primary/20 transition-all text-base sm:text-lg"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <label htmlFor="detalle" className="text-lg font-black text-foreground/80 ml-1">
                                            Detalle del problema / consulta <span className="text-primary">*</span>
                                        </label>
                                        <Textarea
                                            id="detalle"
                                            name="detalle"
                                            value={formData.detalle}
                                            onChange={handleChange}
                                            required
                                            placeholder="Describa su consulta técnica con el mayor detalle posible para acelerar el diagnóstico..."
                                            rows={6}
                                            className="resize-none rounded-xl border-border bg-background/50 focus:ring-2 focus:ring-primary/20 transition-all text-base sm:text-lg p-4"
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="h-14 sm:h-16 w-full bg-primary hover:bg-destructive text-primary-foreground text-lg sm:text-xl font-bold rounded-2xl transition-all duration-300 shadow-[0_10px_20px_rgba(var(--primary),0.3)] hover:shadow-none hover:translate-y-1"
                                    >
                                        {isSubmitting ? (
                                            <span className="flex items-center gap-2">
                                                <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                Procesando Ticket...
                                            </span>
                                        ) : (
                                            <span className="flex items-center justify-center gap-2 sm:gap-3">
                                                <Send className="h-5 w-5 sm:h-6 sm:w-6" />
                                                Enviar Solicitud vía WhatsApp
                                            </span>
                                        )}
                                    </Button>

                                    <p className="text-center text-xs text-muted-foreground uppercase tracking-widest font-bold opacity-60">
                                        Soporte Directo al: +51 938 152 389
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
            <WhatsAppButton />
        </div>
    );
};

export default HelpDeskPage;
