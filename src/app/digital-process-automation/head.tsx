export default function Head() {
  const title = "Digital Process Automation | Omnia";
  const description =
    "Design, build, and automate at enterprise scale with Pega, ServiceNow, and Microsoft Power Platform + Dynamics 365. Governance, security, and integrations included.";
  const url = "https://omniaservices.co.uk/digital-process-automation";
  const ogImage = "https://omniaservices.co.uk/assets/img/service/3.webp";

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://omniaservices.co.uk/" },
      { "@type": "ListItem", position: 2, name: "Digital Process Automation", item: url },
    ],
  };

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index,follow" />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD Breadcrumbs */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </>
  );
}


