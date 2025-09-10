import { Helmet } from 'react-helmet-async';
import EmotionalMap from '../components/EmotionalMap';

const AtuacaoClinica = () => {
  return (
    <>
      <Helmet>
        <title>Atuação Clínica Junguiana | Processo de Individuação e Autoconhecimento</title>
        <meta 
          name="description" 
          content="Abordagem junguiana focada no processo de individuação. Trabalho com sonhos, complexos e amplificação da consciência. Psicóloga especializada em Psicologia Analítica." 
        />
        <meta 
          name="keywords" 
          content="psicologia analítica, processo individuação Jung, trabalho com sonhos, complexos psicológicos, Self Jung, inconsciente coletivo, arquétipos" 
        />
        <link rel="canonical" href="https://psicologaexemplo.com.br/atuacao-clinica" />
      </Helmet>
      
      <EmotionalMap />
    </>
  );
};

export default AtuacaoClinica;