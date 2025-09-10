import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Navigation from './components/Navigation';
import About from './components/About';
import Services from './components/Services';
import EmotionalMap from './components/EmotionalMap';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [currentSlide, setCurrentSlide] = useState(1); // Começar no slide 1 (real index 0)
  const [isMobile, setIsMobile] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [mobileActiveSlide, setMobileActiveSlide] = useState(0); // Para mobile scroll detection

  const goToSlide = (index: number) => {
    if (isMobile) {
      // Mobile: scroll to specific section
      const sectionIds = ['about', 'emotional-map', 'services', 'contact'];
      const targetId = sectionIds[index];
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        // Set target slide immediately for header color
        setMobileActiveSlide(index);
        
        targetElement.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
        
        // Ensure the slide remains set after scroll completes
        setTimeout(() => {
          setMobileActiveSlide(index);
        }, 1000); // After smooth scroll completes
      }
    } else {
      // Desktop: slide navigation
      setCurrentSlide(index + 1); // +1 porque temos um clone no início
    }
  };

  // Dynamic SEO based on current slide
  const getSEOForSlide = (slideIndex: number) => {
    const realSlide = Math.max(0, Math.min(slideIndex - 1, baseSections.length - 1));
    
    switch (realSlide) {
      case 0: // About
        return {
          title: "Ana - Psicóloga Clínica Junguiana em São Paulo | Terapia Individual",
          description: "Psicóloga clínica especializada em abordagem junguiana. Processo de individuação, ampliação da consciência em São Paulo e Cotia. Formação PUC-SP e Instituto Dedalus.",
          canonical: "https://psicologaexemplo.com.br/sobre-ana"
        };
      case 1: // Emotional Map / Atuação Clínica
        return {
          title: "Atuação Clínica Junguiana | Processo de Individuação e Autoconhecimento",
          description: "Abordagem junguiana focada no processo de individuação. Trabalho com sonhos, complexos e amplificação da consciência. Psicóloga especializada em Psicologia Analítica.",
          canonical: "https://psicologaexemplo.com.br/atuacao-clinica-junguiana"
        };
      case 2: // Services
        return {
          title: "Serviços de Terapia Junguiana | Atendimento Presencial e Online",
          description: "Terapia individual com abordagem junguiana. Atendimento presencial em Cotia e sessões online. Processo de individuação e ampliação da consciência.",
          canonical: "https://psicologaexemplo.com.br/servicos-terapia"
        };
      case 3: // Contact
        return {
          title: "Contato - Agendar Consulta com Psicóloga Junguiana | São Paulo",
          description: "Agende sua consulta com psicóloga especializada em abordagem junguiana. Atendimento em Cotia-SP e online. Processo de individuação e desenvolvimento pessoal.",
          canonical: "https://psicologaexemplo.com.br/contato-agendar"
        };
      default:
        return {
          title: "Ana - Psicóloga Clínica Junguiana em São Paulo | Terapia Individual",
          description: "Psicóloga clínica especializada em abordagem junguiana. Processo de individuação, ampliação da consciência em São Paulo e Cotia.",
          canonical: "https://psicologaexemplo.com.br/"
        };
    }
  };

  // Define cores das setas baseado na página atual
  const getArrowColor = () => {
    const realSlide = Math.max(0, Math.min(currentSlide - 1, baseSections.length - 1));
    switch (realSlide) {
      case 0: // About/Home - roxo
        return 'text-lavender-700';
      case 1: // Atuação Clínica - laranja
        return 'text-orange-600';
      case 2: // Serviços - verde
        return 'text-sage-700';
      case 3: // Contato - verde
        return 'text-sage-700';
      default:
        return 'text-sage-700';
    }
  };

  const getSections = () => [
    { id: 'about', component: <About goToSlide={goToSlide} /> },              // 0 - Início
    { id: 'emotional-map', component: <EmotionalMap goToSlide={goToSlide} /> }, // 1 - Atividades  
    { id: 'services', component: <Services goToSlide={goToSlide} /> },         // 2 - Serviços
    { id: 'contact', component: <><Contact /><Footer /></> }, // 3 - Contato
  ];

  // Criar array com slides duplicados para loop infinito
  const getExtendedSections = () => {
    const baseSections = getSections();
    return [
      { id: 'contact-clone', component: <><Contact /><Footer /></> }, // Clone do último para loop
      ...baseSections,
      { id: 'about-clone', component: <About goToSlide={goToSlide} /> } // Clone do primeiro para loop
    ];
  };

  const baseSections = getSections();
  const extendedSections = getExtendedSections();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Mobile scroll detection with Intersection Observer - Optimized for faster response
  useEffect(() => {
    if (!isMobile) return;

    // Reduced delay for faster initialization
    const initializeObserver = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            // More responsive threshold - triggers earlier
            if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
              const sectionId = entry.target.id;
              // Map section IDs to indices directly
              const sectionIndexMap: { [key: string]: number } = {
                'about': 0,
                'emotional-map': 1,
                'services': 2,
                'contact': 3
              };
              
              const sectionIndex = sectionIndexMap[sectionId];
              if (sectionIndex !== undefined) {
                setMobileActiveSlide(sectionIndex);
              }
            }
          });
        },
        {
          threshold: [0.3, 0.5, 0.7], // Multiple thresholds for smoother detection
          rootMargin: '-10% 0px -10% 0px' // Less aggressive margin for earlier detection
        }
      );

      // Observe all sections
      const sections = ['about', 'emotional-map', 'services', 'contact'];
      sections.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
          observer.observe(element);
        }
      });

      return observer;
    };

    // Faster initialization - reduced from 100ms to 50ms
    const timeoutId = setTimeout(() => {
      const observer = initializeObserver();
      
      return () => {
        if (observer) {
          observer.disconnect();
        }
      };
    }, 50);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' && currentSlide < extendedSections.length - 1) {
        goToNextSlide();
      } else if (e.key === 'ArrowLeft' && currentSlide > 0) {
        goToPreviousSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSlide, extendedSections.length, isMobile]);

  const goToPreviousSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    
    if (currentSlide === 1) {
      // Indo do primeiro slide real para o último - vai para slide 0 (clone do último)
      setCurrentSlide(0);
      setTimeout(() => {
        // Desabilita transição antes do pulo
        setIsTransitioning(false);
        // Pula instantaneamente para o slide real
        setCurrentSlide(baseSections.length); // Último slide real
      }, 700);
    } else {
      setCurrentSlide(prev => prev - 1);
      setTimeout(() => setIsTransitioning(false), 700);
    }
  };

  const goToNextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    
    if (currentSlide === baseSections.length) {
      // Indo do último slide real para o primeiro - vai para slide +1 (clone do primeiro)
      setCurrentSlide(baseSections.length + 1);
      setTimeout(() => {
        // Desabilita transição antes do pulo
        setIsTransitioning(false);
        // Pula instantaneamente para o slide real
        setCurrentSlide(1); // Primeiro slide real
      }, 700);
    } else {
      setCurrentSlide(prev => prev + 1);
      setTimeout(() => setIsTransitioning(false), 700);
    }
  };

  const currentSEO = getSEOForSlide(isMobile ? mobileActiveSlide + 1 : currentSlide);

  if (isMobile) {
    return (
      <>
        <Helmet>
          <title>{currentSEO.title}</title>
          <meta name="description" content={currentSEO.description} />
          <link rel="canonical" href={currentSEO.canonical} />
        </Helmet>
        
        <div className="min-h-screen overflow-y-auto">
          <Navigation currentSlide={mobileActiveSlide} goToSlide={goToSlide} />
        
        {/* Mobile: Vertical scroll layout - sections stacked naturally */}
        <div className="flex flex-col">
          {baseSections.map((section, index) => (
            <div
              key={`${section.id}-${index}`}
              className="min-h-screen w-full"
            >
              {section.component}
            </div>
          ))}
        </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{currentSEO.title}</title>
        <meta name="description" content={currentSEO.description} />
        <link rel="canonical" href={currentSEO.canonical} />
      </Helmet>
      
      <div className="h-screen overflow-hidden relative">
        <Navigation currentSlide={Math.max(0, Math.min(currentSlide - 1, baseSections.length - 1))} goToSlide={goToSlide} />
      
      {/* Previous Button */}
      <button
        onClick={goToPreviousSlide}
        className="hidden md:flex fixed left-6 top-1/2 transform -translate-y-1/2 z-40 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 !outline-none !border-none"
        aria-label="Página anterior"
      >
        <ChevronLeft className={`w-6 h-6 ${getArrowColor()}`} />
      </button>

      {/* Next Button */}
      <button
        onClick={goToNextSlide}
        className="hidden md:flex fixed right-6 top-1/2 transform -translate-y-1/2 z-40 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 !outline-none !border-none"
        aria-label="Próxima página"
      >
        <ChevronRight className={`w-6 h-6 ${getArrowColor()}`} />
      </button>

      <div 
        className={`flex h-screen ${isTransitioning ? 'transition-transform duration-700 ease-in-out' : 'transition-none'}`}
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {extendedSections.map((section, index) => (
          <div
            key={`${section.id}-${index}`}
            className="w-screen h-screen flex-shrink-0 overflow-y-auto scrollbar-hidden"
          >
            {section.component}
          </div>
        ))}
      </div>
      </div>
    </>
  );
}

export default App;