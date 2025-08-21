import { useState, useEffect, useRef } from 'react';
import { Phone, Mail, MapPin, Clock, Video, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    
    try {
      const form = e.target as HTMLFormElement;
      const formData = new FormData(form);
      formData.append("access_key", "69e1a1dc-3dcf-429f-b83b-813ec2ea375b");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        console.error("Error:", data);
        setIsSubmitted(false);
      }
    } catch (error) {
      console.error("Error:", error);
      setIsSubmitted(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section ref={sectionRef} id="contact" className="theme-contact min-h-full pt-32 md:pt-32 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-serif text-white mb-6 ${isVisible ? 'animate-word-reveal' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            Vamos começar?
          </h2>
          <p className={`text-xl text-neutral-100 max-w-3xl mx-auto leading-relaxed ${isVisible ? 'animate-paragraph-fade' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
            Estou aqui para ajudar você em sua jornada de bem-estar e crescimento pessoal
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className={`flex flex-col space-y-8 ${isVisible ? 'animate-text-flow' : 'opacity-0'}`} style={{ animationDelay: '0.9s' }}>
            <div>
              <h3 className="text-2xl font-serif text-white mb-6">
                Como me encontrar
              </h3>
              
              {/* Grid 2x2 + Consultório */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-neutral-200 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-white">Telefone</p>
                    <a href="tel:+5511993758482" className="text-neutral-100 hover:text-white transition-colors cursor-pointer">
                      (11) 99375-8482
                    </a>
                    <p className="text-sm text-neutral-200">WhatsApp disponível</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-neutral-200 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-white">E-mail</p>
                    <p className="text-neutral-100">albbortolato@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-neutral-200 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-white">Horários</p>
                    <p className="text-neutral-100">
                      Segunda a Sexta: 8h às 18h<br />
                      Sábado: 8h às 12h
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Video className="w-6 h-6 text-neutral-200 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-white">Atendimento Online</p>
                    <p className="text-neutral-100">
                      Sessões por videochamada<br />
                      Plataforma segura e confidencial
                    </p>
                  </div>
                </div>

                {/* Consultório - ocupando 2 colunas */}
                <div className="col-span-2 flex items-start">
                  <MapPin className="w-6 h-6 text-neutral-200 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-white">Consultório</p>
                    <p className="text-neutral-100">
                      R. Phoenix, 28 - San Diego Park<br />
                      Cotia - SP - CEP: 06710-860
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mapa */}
            <div className="bg-white rounded-2xl flex-1 min-h-80 overflow-hidden relative shadow-lg">
              <div className="w-full h-full">
                <iframe
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-46.833669,-23.597378,-46.827669,-23.593378&layer=mapnik&marker=-23.595378,-46.830669"
                  width="100%"
                  height="100%"
                  style={{ 
                    border: 0,
                    filter: 'brightness(98%) contrast(95%)'
                  }}
                  loading="lazy"
                  title="Localização do Consultório - R. Phoenix, 28, San Diego Park, Cotia"
                  className="rounded-2xl"
                ></iframe>
              </div>
              
              {/* Clickable overlay to open Google Maps */}
              <button
                onClick={() => window.open('https://www.google.com/maps/search/?api=1&query=R.+Phoenix,+28+-+San+Diego+Park,+Cotia+-+SP,+06710-860', '_blank')}
                onTouchStart={() => {}}
                className="absolute inset-0 w-full h-full bg-transparent cursor-pointer z-20 hover:bg-sage-900/5 active:bg-sage-900/10 transition-all duration-300 rounded-2xl touch-manipulation"
                title="Clique para abrir no Google Maps"
                aria-label="Abrir localização no Google Maps"
              />
              
              {/* Card de informação */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl z-30 pointer-events-none">
                <div className="flex items-center text-sage-700">
                  <MapPin className="w-5 h-5 mr-3 text-sage-600 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sage-800">R. Phoenix, 28 - San Diego Park</p>
                    <p className="text-sm text-sage-600">Cotia - SP, CEP: 06710-860</p>
                    <p className="text-xs text-sage-500 mt-1 flex items-center">
                      <span>👆 Clique para abrir no Google Maps</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`bg-white rounded-2xl p-8 ${isVisible ? 'animate-card-entrance' : 'opacity-0'}`} style={{ animationDelay: '1.2s' }}>
            <h3 className="text-2xl font-serif text-sage-800 mb-6">
              Me conte sobre você
            </h3>

            {isSubmitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                <p className="text-green-800">Mensagem enviada com sucesso! Responderemos em breve.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-sage-700 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-sage-200 rounded-lg focus:outline-none transition-colors touch-manipulation min-h-[44px]"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-sage-700 mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-sage-200 rounded-lg focus:outline-none transition-colors touch-manipulation min-h-[44px]"
                    placeholder="(11) 99375-8482"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-sage-700 mb-2">
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-sage-200 rounded-lg focus:outline-none transition-colors touch-manipulation min-h-[44px]"
                  placeholder="seu@email.com"
                />
              </div>


              <div>
                <label htmlFor="message" className="block text-sm font-medium text-sage-700 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-sage-200 rounded-lg focus:outline-none transition-colors resize-none touch-manipulation min-h-[100px]"
                  placeholder="Conte um pouco sobre o que você gostaria de conversar..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center px-8 py-4 bg-sage-500 text-white font-medium rounded-lg hover:bg-sage-600 active:bg-sage-700 transition-colors duration-200 focus:outline-none touch-manipulation min-h-[52px]"
                onTouchStart={() => {}} // Enable touch events
              >
                <Send className="w-5 h-5 mr-2" />
                {isSubmitted ? 'Enviando...' : 'Enviar Mensagem'}
              </button>
            </form>

            <p className="mt-4 text-sm text-sage-600 text-center">
              * Campos obrigatórios. Suas informações são tratadas com total confidencialidade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;