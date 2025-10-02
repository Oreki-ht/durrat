export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EmploymentAgency",
    "name": "Durrat Foreign Employment Agency",
    "description": "Connecting Ethiopian talent with global opportunities across the Middle East",
    "url": "https://durratfea.com",
    "logo": "https://durratfea.com/durrat.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Mexico, Tselre Building 4th floor",
      "addressLocality": "Addis Ababa",
      "addressCountry": "Ethiopia"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+251-96-655-5551",
      "email": "durrat.agency@gmail.com",
      "contactType": "Customer Service"
    },
    "openingHours": "Mo,Tu,We,Th,Fr 08:30-17:30 Sa 09:00-13:00",
    "sameAs": [
      "https://www.facebook.com/durratfea",
      "https://www.instagram.com/durratfea",
      "https://twitter.com/durratfea"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}