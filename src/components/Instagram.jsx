import React from 'react';

export const Instagram = () => {
  const openWhatsAppChat = () => {
    // Número de teléfono al que se enviará el mensaje en formato internacional (por ejemplo, +1234567890)
    const phoneNumber = '+34649713682';

    // Mensaje que se enviará en el chat de WhatsApp

    // Genera la URL de WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}`;

    // Abre la URL de WhatsApp en una nueva ventana o pestaña del navegador
    window.open(whatsappUrl, '_blank');

    // Realiza un seguimiento del clic en Instagram
  };

  return (
    <section
      onClick={openWhatsAppChat}
      id="instagram"
      className="z-10 w-12 p-3 rounded-full fixed bottom-10 cursor-pointer right-10 bg-sabagreen-50 mb:right-4 mb:bottom-4"
    >
      <img src="images/instagram.svg" alt="" className=" w-6 h-6"/>
    </section>
  );
};
