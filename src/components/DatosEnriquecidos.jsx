import React, { useEffect } from "react";

export function DatosEnriquecidos() {
  const empresaLocal = {
    "@context": "http://schema.org",
    "@type": "LocalBusiness",
    name: "Mi Empresa Local",
    description: "Descripción de mi empresa local",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Calle Principal",
      addressLocality: "Ciudad",
      addressRegion: "Provincia",
      postalCode: "12345",
      addressCountry: "ES",
    },
    telephone: "+34-123-456-789",
    url: "https://www.miempresa.com",
    sameAs: [
      "https://www.facebook.com/miempresa",
      "https://twitter.com/miempresa",
    ],
    image: "https://www.miempresa.com/logo.jpg",
    openingHours: "Mo,Tu,We,Th,Fr 09:00-17:00",
    priceRange: "$$$",
    review: {
      "@type": "Review",
      author: "Juan Pérez",
      datePublished: "2023-10-15",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
      },
      reviewBody: "Excelente servicio y personal amable.",
    },
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
