const WhatsAppButton = () => {
  const handleClick = () => {
    window.open(
      'https://wa.me/51938152389?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20sus%20servicios%20de%20TI',
      '_blank'
    );
  };

  return (
    <button
      onClick={handleClick}
      className="floating-whatsapp"
      aria-label="Contactar por WhatsApp"
    >
      <img src="/wstp.svg" alt="WhatsApp" className="h-7 w-7" />
    </button>
  );
};

export default WhatsAppButton;
