import { Heart, Calendar, MessageCircle } from 'lucide-react';

interface AboutProps {
  goToSlide?: (index: number) => void;
}

const About = ({ goToSlide }: AboutProps) => {
  const navigateToContact = () => {
    if (goToSlide) {
      goToSlide(3); // Contact section is at index 3
    }
  };

  const credentials = [
    {
      title: "CRP 06/124406",
      description: "Registro no Conselho Regional de Psicologia"
    },
    {
      title: "Formação",
      description: "Psicologia Analítica - Instituto Dedalus"
    },
    {
      title: "10+ anos",
      description: "De experiência clínica"
    }
  ];

  return (
    <section id="about" className="theme-about min-h-full flex items-center pt-32 md:pt-32 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Text Content */}
          <div>
            <div className="flex items-center mb-6">
              <Heart className="w-8 h-8 text-white mr-3" />
              <span className="text-white font-medium text-lg uppercase tracking-widest">Sobre</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight">
              <span className="block">
                <span className="inline-block animate-word-reveal" style={{ animationDelay: '0.2s' }}>Vamos</span>{' '}
                <span className="inline-block animate-word-reveal" style={{ animationDelay: '0.4s' }}>conversar</span>
              </span>
              <span className="block">
                <span className="inline-block animate-word-reveal" style={{ animationDelay: '0.6s' }}>sobre</span>{' '}
                <span className="inline-block animate-word-reveal" style={{ animationDelay: '0.8s' }}>você?</span>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-neutral-100 mb-8 leading-relaxed animate-text-flow" style={{ animationDelay: '1.2s' }}>
              Psicoterapia individual e online com abordagem junguiana. 
              Amplie sua consciência e descubra seu potencial de transformação.
            </p>

            {/* Mobile Image - Square format after subtitle */}
            <div className="block lg:hidden mb-8">
              <div className="relative w-full" style={{ paddingBottom: '100%' }}>
                <div className="absolute inset-0 section-surface overflow-hidden animate-photo-reveal-mask" style={{ 
                  borderTopLeftRadius: '100px', 
                  borderTopRightRadius: '0', 
                  borderBottomLeftRadius: '0', 
                  borderBottomRightRadius: '100px'
                }}>
                  <img 
                    src="/profile-ana.png" 
                    alt="Ana - Psicóloga Clínica especializada em Psicologia Analítica Junguiana"
                    className="absolute inset-0 w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-row gap-3 mb-12 animate-buttons-entrance" style={{ animationDelay: '1.6s' }}>
              <button
                onClick={navigateToContact}
                type="button"
                className="group relative flex-1 px-4 py-4 bg-white text-lavender-500 font-semibold rounded-full transition-all duration-300 focus:outline-none hover:bg-neutral-100 hover:text-lavender-600 text-sm sm:text-base flex items-center justify-center"
              >
                <Calendar className="w-4 h-4 mr-1 sm:w-5 sm:h-5 sm:mr-2" />
                <span className="hidden xs:inline">Agendar Consulta</span>
                <span className="xs:hidden">Agendar</span>
              </button>

              <a
                href="https://wa.me/5511993758482"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex-1 px-4 py-4 border-2 border-white text-white bg-transparent font-semibold rounded-full transition-all duration-300 focus:outline-none hover:bg-white hover:text-lavender-500 text-sm sm:text-base inline-flex items-center justify-center"
              >
                <span className="flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 mr-1 sm:w-5 sm:h-5 sm:mr-2" />
                  <span className="hidden xs:inline">WhatsApp</span>
                  <span className="xs:hidden">WhatsApp</span>
                </span>
              </a>
            </div>
            
            <div className="space-y-6 text-lg text-white leading-relaxed">
              <p className="animate-paragraph-fade" style={{ animationDelay: '2.0s' }}>
                Sou psicóloga clínica formada em 2014 pela PUC-SP, com especialização 
                em abordagem junguiana (Psicologia Analítica). Atualmente estou em formação 
                em Psicologia Junguiana pelo Instituto Dedalus e participo de núcleos de estudo 
                na Sociedade Brasileira de Psicologia Analítica.
              </p>
              
              <p className="animate-paragraph-fade" style={{ animationDelay: '3.0s' }}>
                A abordagem junguiana tem como eixo central o processo de individuação, 
                que consiste na ampliação da consciência. Por meio dos movimentos da nossa 
                energia psíquica, nos relacionamos com o nosso Self e ampliamos nosso 
                campo de consciência.
              </p>
              
              <p className="animate-paragraph-fade" style={{ animationDelay: '4.0s' }}>
                Busco uma escuta sensível ao processo singular de cada paciente em sua 
                jornada de individuação, conduzindo-o à vivência de experiências mais 
                complexas de desenvolvimento e transformação. Atendo presencialmente 
                em São Paulo e online.
              </p>
            </div>

            {/* Mobile Credentials */}
            <div className="lg:hidden mt-12 grid sm:grid-cols-3 gap-6">
              {credentials.map((credential, index) => (
                <div 
                  key={index} 
                  className="text-center sm:text-left animate-credential-block" 
                  style={{ animationDelay: `${5.0 + (index * 0.3)}s` }}
                >
                  {credential.title === "CRP 06/124406" ? (
                    <>
                      <h3 className="font-bold text-neutral-100 mb-2 text-xl md:text-2xl">
                        CRP
                      </h3>
                      <div className="w-full max-w-[280px] h-px bg-neutral-300 mb-3"></div>
                      <p className="text-sm text-white mb-1">
                        (Registro no Conselho Regional de Psicologia)
                      </p>
                      <p className="text-base text-white font-medium">
                        06/124406
                      </p>
                    </>
                  ) : credential.title === "10+ anos" ? (
                    <>
                      <h3 className="font-bold text-neutral-100 mb-2 text-xl md:text-2xl">
                        {credential.title}
                      </h3>
                      <div className="w-full max-w-[200px] h-px bg-neutral-300 mb-3"></div>
                      <p className="text-base text-white">
                        {credential.description}
                      </p>
                    </>
                  ) : (
                    <>
                      <h3 className="font-bold text-neutral-100 mb-2 text-xl md:text-2xl">
                        {credential.title}
                      </h3>
                      <div className="w-full max-w-[240px] h-px bg-neutral-300 mb-3"></div>
                      <p className="text-base text-white">
                        {credential.description}
                      </p>
                    </>
                  )}
                </div>
              ))}
            </div>

          </div>

          {/* Desktop Image + Credentials */}
          <div className="hidden lg:block" style={{ paddingTop: '8px' }}>
            {/* Image - aligned with heart + SOBRE */}
            <div className="relative" style={{ marginTop: '34px' }}>
              <div className="relative w-full" style={{ paddingBottom: '125%' }}>
                <div className="absolute inset-0 section-surface overflow-hidden animate-photo-reveal-mask" style={{ 
                  borderTopLeftRadius: '100px', 
                  borderTopRightRadius: '0', 
                  borderBottomLeftRadius: '0', 
                  borderBottomRightRadius: '100px'
                }}>
                  <img 
                    src="/profile-ana.png" 
                    alt="Ana - Psicóloga Clínica especializada em Psicologia Analítica Junguiana"
                    className="absolute inset-0 w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
            
            {/* Credentials below image - 3 columns aligned with left text */}
            <div className="mt-2 grid grid-cols-3 gap-6">
              {credentials.map((credential, index) => (
                <div 
                  key={index} 
                  className="text-left animate-credential-block p-1" 
                  style={{ animationDelay: `${5.0 + (index * 0.3)}s` }}
                >
                  {credential.title === "CRP 06/124406" ? (
                    <>
                      <h3 className="font-bold text-neutral-100 mb-2 text-xl md:text-2xl">
                        CRP
                      </h3>
                      <div className="w-full max-w-[280px] h-px bg-neutral-300 mb-3"></div>
                      <p className="text-sm text-white mb-1">
                        (Registro no Conselho Regional de Psicologia)
                      </p>
                      <p className="text-base text-white font-medium">
                        06/124406
                      </p>
                    </>
                  ) : credential.title === "10+ anos" ? (
                    <>
                      <h3 className="font-bold text-neutral-100 mb-2 text-xl md:text-2xl">
                        {credential.title}
                      </h3>
                      <div className="w-full max-w-[200px] h-px bg-neutral-300 mb-3"></div>
                      <p className="text-base text-white">
                        {credential.description}
                      </p>
                    </>
                  ) : (
                    <>
                      <h3 className="font-bold text-neutral-100 mb-2 text-xl md:text-2xl">
                        {credential.title}
                      </h3>
                      <div className="w-full max-w-[240px] h-px bg-neutral-300 mb-3"></div>
                      <p className="text-base text-white">
                        {credential.description}
                      </p>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;