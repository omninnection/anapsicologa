import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import ServicesComponent from '../components/Services';

const Services = () => {
  const navigate = useNavigate();
  
  const handleNavigation = (index: number) => {
    // Static pages navigation
    const routes = ['/', '/servicos-terapia', '/atuacao-clinica-junguiana', '/contato-agendar'];
    navigate(routes[index] || '/');
  };
  
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Ana - Psicóloga Clínica Junguiana",
    "description": "Serviços de terapia individual com abordagem junguiana",
    "url": "https://psicologaexemplo.com.br/servicos",
    "telephone": "+55-11-99375-8482",
    "address": {
      "@type": "PostalAddress", 
      "streetAddress": "R. Phoenix, 28 - San Diego Park",
      "addressLocality": "Cotia",
      "addressRegion": "SP",
      "postalCode": "06710-860",
      "addressCountry": "BR"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Serviços de Psicoterapia",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalTherapy",
            "name": "Terapia Individual Presencial",
            "description": "Sessões de terapia com abordagem junguiana em consultório",
            "duration": "PT60M",
            "availableAtOrFrom": {
              "@type": "Place",
              "name": "Consultório Ana Psicóloga",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Cotia",
                "addressRegion": "SP"
              }
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalTherapy", 
            "name": "Terapia Individual Online",
            "description": "Sessões de terapia por videochamada",
            "duration": "PT60M"
          }
        }
      ]
    },
    "medicalSpecialty": "Clinical Psychology",
    "availableService": {
      "@type": "MedicalTherapy",
      "name": "Psicoterapia Junguiana",
      "alternateName": "Psicologia Analítica"
    }
  };

  return (
    <>
      <Helmet>
        <title>Serviços de Terapia Junguiana | Atendimento Presencial e Online</title>
        <meta 
          name="description" 
          content="Terapia individual com abordagem junguiana. Atendimento presencial em Cotia e sessões online. Processo de individuação e ampliação da consciência com psicóloga formada pela PUC-SP." 
        />
        <meta 
          name="keywords" 
          content="terapia junguiana, sessões online, atendimento presencial Cotia, psicóloga clínica, processo individuação, Jung terapia, desenvolvimento pessoal" 
        />
        <link rel="canonical" href="https://psicologaexemplo.com.br/servicos" />
        
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      </Helmet>
      
      <Navigation currentSlide={2} goToSlide={handleNavigation} />
      <ServicesComponent />
    </>
  );
};

export default Services;