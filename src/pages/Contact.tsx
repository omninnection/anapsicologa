import { Helmet } from 'react-helmet-async';
import ContactComponent from '../components/Contact';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contato - Agendar Consulta com Psicóloga Junguiana | São Paulo</title>
        <meta 
          name="description" 
          content="Agende sua consulta com psicóloga especializada em abordagem junguiana. Atendimento em Cotia-SP e online. Processo de individuação e desenvolvimento pessoal." 
        />
        <meta 
          name="keywords" 
          content="agendar consulta psicóloga, contato psicóloga junguiana, Cotia SP, sessões online, consulta psicologia, terapia individual" 
        />
        <link rel="canonical" href="https://psicologaexemplo.com.br/contato" />
      </Helmet>
      
      <ContactComponent />
      <Footer />
    </>
  );
};

export default Contact;