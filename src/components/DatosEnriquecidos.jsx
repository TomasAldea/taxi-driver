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
