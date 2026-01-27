import React from 'react';

const logos = [
    { name: 'Osinfor', src: '/src/assets/logos/Osinfor.png' },
    { name: 'SENAMHI', src: '/src/assets/logos/SENAMHI.jpg' },
    { name: 'ZONAREGISTRALPIURA', src: '/src/assets/logos/ZONAREGISTRALPIURA.jpg' },
    { name: 'cofopri', src: '/src/assets/logos/cofopri.jpg' },
    { name: 'emapica', src: '/src/assets/logos/emapica.jpg' },
    { name: 'ministeriocultura', src: '/src/assets/logos/ministeriocultura.jpg' },
    { name: 'minsa', src: '/src/assets/logos/minsa.jpg' },
    { name: 'qaliwarma', src: '/src/assets/logos/qaliwarma.jpg' },
    { name: 'servir', src: '/src/assets/logos/servir.jpg' },
];

const ClientLogos = () => {
    // Double the logos to create the infinite scroll effect
    const duplicatedLogos = [...logos, ...logos];

    return (
        <section className="py-16 bg-white overflow-hidden border-y border-gray-100">
            <div className="container-vp mb-8 text-center">
                <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    Empresas que confían en nosotros
                </p>
            </div>

            <div className="relative flex overflow-x-hidden">
                <div className="flex animate-infinite-scroll whitespace-nowrap">
                    {duplicatedLogos.map((logo, index) => (
                        <div
                            key={`${logo.name}-${index}`}
                            className="mx-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                        >
                            <img
                                src={logo.src}
                                alt={logo.name}
                                className="h-12 w-auto object-contain max-w-[180px]"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        @keyframes infinite-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-infinite-scroll {
          display: flex;
          width: fit-content;
          animation: infinite-scroll 40s linear infinite;
        }
        .animate-infinite-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
        </section>
    );
};

export default ClientLogos;
