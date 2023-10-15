import { useEffect } from "react";

export function DatosEnriquecidos() {
  const empresaLocal = {
    "@context": "http://schema.org",
    "@type": "LocalBusiness",
    name: "Taxi Sabadell | Andreu Freixas",
    description: "Ofrece sus servicios en Sabadell y zonas cercanas",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Sabadell",
      addressLocality: "Sabadell",
      addressRegion: "Barcelona",
      postalCode: "08202",
      addressCountry: "ES",
    },
    telephone: "+34649713682",
    url: "https://taxisabadellandreu.es/",
    image: "images/logobig.png",
    openingHours: "Mo,Tu,We,Th,Fr 12:00-00:00",
    "service": [ // Agrega una lista de servicios
      {
        "@type": "Service",
        "name": "Taxi con reserva"
      },
      {
        "@type": "Service",
        "name": "Taxi al momento"
      },
      {
        "@type": "Service",
        "name": "taxi en sabadell"
      },
      {
        "@type": "Service",
        "name": "taxi sant quirze"
      },
      {
        "@type": "Service",
        "name": "Aeropuerto Sabadell"
      },
      {
        "@type": "Service",
        "name": "Aeropuerto Barcelona"
      },
      {
        "@type": "Service",
        "name": "Puerto Barcelona"
      },
      {
        "@type": "Service",
        "name": "Aeropuerto el prat"
      },
      {
        "@type": "Service",
        "name": "Precio cerrado"
      },
      {
        "@type": "Service",
        "name": "Servicios concertados"
      },
      {
        "@type": "Service",
        "name": "Servicios hospital"
      },
      {
        "@type": "Service",
        "name": "Precio para empresas"
      },
      {
        "@type": "Service",
        "name": "Precio para grupos"
      },
      {
        "@type": "Service",
        "name": "Taxi"
      },
      {
        "@type": "Service",
        "name": "Reservas con antelacion"
      },
      {
        "@type": "Service",
        "name": "taxi con espera"
      },
      {
        "@type": "Service",
        "name": "taxi larga distancia"
      },
      {
        "@type": "Service",
        "name": "estación de sants"
      },
      {
        "@type": "Service",
        "name": "Aeropuerto t1"
      },
      {
        "@type": "Service",
        "name": "Aeropuerto t2"
      },
      // Agrega más servicios según sea necesario
    ]
    /* priceRange: "$$$", 
    review: {
      "@type": "Review",
      author: "Juan Pérez",
      datePublished: "2023-10-15",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
      },
      reviewBody: "Excelente servicio y personal amable.",
    },*/
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(empresaLocal);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);
}
