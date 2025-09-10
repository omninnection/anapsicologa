import { Helmet } from 'react-helmet-async';
import About from '../components/About';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Ana - Psicóloga Clínica Junguiana em São Paulo | Terapia Individual</title>
        <meta 
          name="description" 
          content="Psicóloga clínica especializada em abordagem junguiana. Processo de individuação, ampliação da consciência em São Paulo e Cotia. Formação PUC-SP e Instituto Dedalus." 
        />
        <meta 
          name="keywords" 
          content="psicóloga junguiana São Paulo, Ana psicóloga, terapia individual, processo individuação, psicologia analítica, Jung, autoconhecimento, desenvolvimento pessoal" 
        />
        <link rel="canonical" href="https://psicologaexemplo.com.br/" />
      </Helmet>
      
      <About />
    </>
  );
};

export default Home;