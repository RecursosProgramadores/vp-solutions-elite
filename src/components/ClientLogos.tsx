import React from 'react';

const institutionalLogos = [
  { name: 'Osinfor', src: '/logos/Osinfor.png' },
  { name: 'SENAMHI', src: '/logos/SENAMHI.jpg' },
  { name: 'ZONAREGISTRALPIURA', src: '/logos/ZONAREGISTRALPIURA.jpg' },
  { name: 'cofopri', src: '/logos/cofopri.jpg' },
  { name: 'emapica', src: '/logos/emapica.jpg' },
  { name: 'ministeriocultura', src: '/logos/ministeriocultura.jpg' },
  { name: 'minsa', src: '/logos/minsa.jpg' },
  { name: 'qaliwarma', src: '/logos/qaliwarma.jpg' },
  { name: 'servir', src: '/logos/servir.jpg' },
];

const techPartnersLogos = [
  { name: 'HP Enterprise', src: '/logos/Logo-HP-Enterprise.jpg' },
  { name: 'NetApp', src: '/logos/NetApp-logo.png' },
  { name: 'Dell EMC', src: '/logos/dellemc.png' },
  { name: 'HP', src: '/logos/hp.png' },
  { name: 'Huawei', src: '/logos/huawei.jpg' },
  { name: 'IBM', src: '/logos/ibm.jpg' },
  { name: 'Lenovo', src: '/logos/lenovo.png' },
  { name: 'Microsoft', src: '/logos/microsof.jpg' },
  { name: 'Nutanix', src: '/logos/nutanix.jpg' },
  { name: 'Veeam', src: '/logos/veeam-logo.png' },
  { name: 'VMware', src: '/logos/vmware.png' },
];

const ClientLogos = () => {
  // Double the logos to create the infinite scroll effect
  const duplicatedLogos = [...institutionalLogos, ...institutionalLogos];

  return (
    <section className="py-16 bg-white overflow-hidden border-y border-gray-100">
      {/* Technology Partners Section (Static) */}
      <div className="container-vp mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold text-vp-blue tracking-tight relative inline-block">
            Nuestros Socios de Negocios
            <span className="block h-1.5 w-24 bg-vp-red mx-auto mt-4 rounded-full"></span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {techPartnersLogos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center justify-center transition-all duration-300 transform hover:scale-110"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="h-12 md:h-16 w-auto object-contain max-w-[140px]"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-100 my-16 opacity-50"></div>

      {/* Institutional Clients Section (Carousel) */}
      <div className="container-vp mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-vp-blue tracking-tight relative inline-block">
          Empresas que confían en nosotros
          <span className="block h-1.5 w-24 bg-vp-red mx-auto mt-4 rounded-full"></span>
        </h2>
      </div>

      <div className="relative flex overflow-x-hidden py-4">
        <div className="flex animate-infinite-scroll whitespace-nowrap items-center">
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="mx-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 transform hover:scale-110"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="h-16 md:h-20 w-auto object-contain max-w-[220px]"
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
