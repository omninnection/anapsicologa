import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';

const PsicologiaAnalitica = () => {
  return (
    <>
      <Helmet>
        <title>O que é Psicologia Analítica Junguiana | Processo de Individuação</title>
        <meta 
          name="description" 
          content="Entenda a Psicologia Analítica de Carl Gustav Jung. Processo de individuação, arquétipos, inconsciente coletivo e Self. Abordagem terapêutica focada no desenvolvimento da consciência." 
        />
        <meta 
          name="keywords" 
          content="psicologia analítica Jung, processo individuação, arquétipos Jung, inconsciente coletivo, Self Jung, complexos psicológicos, sombra Jung, anima animus" 
        />
        <link rel="canonical" href="https://psicologaexemplo.com.br/psicologia-analitica" />
      </Helmet>
      
      <Navigation currentSlide={0} />
      
      <main className="min-h-screen bg-gradient-to-br from-lavender-50 to-white pt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-serif text-lavender-900 mb-6">
              Psicologia Analítica Junguiana
            </h1>
            <p className="text-xl text-lavender-700 leading-relaxed">
              A Psicologia Analítica de Carl Gustav Jung é uma abordagem profunda que visa 
              o processo de individuação e a ampliação da consciência através do diálogo 
              entre consciente e inconsciente.
            </p>
          </header>

          <section className="mb-12">
            <h2 className="text-3xl font-serif text-lavender-900 mb-6">
              O Processo de Individuação
            </h2>
            <div className="prose prose-lg text-lavender-800">
              <p className="mb-4">
                O processo de individuação é o conceito central da Psicologia Analítica. 
                Trata-se do desenvolvimento natural da personalidade através da integração 
                dos conteúdos inconscientes com a consciência.
              </p>
              <p className="mb-4">
                Durante este processo, a pessoa se torna aquilo que sempre foi em potencial, 
                realizando sua totalidade psíquica. É um caminho de autoconhecimento que 
                leva ao encontro com o Self - o arquétipo da totalidade.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-serif text-lavender-900 mb-6">
              Conceitos Fundamentais
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-lavender-900 mb-4">Arquétipos</h3>
                <p className="text-lavender-700">
                  Padrões universais ou imagens primordiais que derivam do inconsciente 
                  coletivo. São formas ou estruturas psíquicas herdadas que influenciam 
                  nossos pensamentos, sentimentos e comportamentos.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-lavender-900 mb-4">Inconsciente Coletivo</h3>
                <p className="text-lavender-700">
                  Camada mais profunda do inconsciente, comum a toda humanidade. 
                  Contém os arquétipos e representa nossa herança psíquica ancestral.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-lavender-900 mb-4">Sombra</h3>
                <p className="text-lavender-700">
                  Aspectos reprimidos ou negados da personalidade. A integração da sombra 
                  é fundamental para o processo de individuação e desenvolvimento pessoal.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-lavender-900 mb-4">Self</h3>
                <p className="text-lavender-700">
                  O arquétipo da totalidade, representando a unificação do consciente 
                  e inconsciente. É o objetivo final do processo de individuação.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-serif text-lavender-900 mb-6">
              A Terapia Junguiana
            </h2>
            <div className="bg-lavender-50 p-8 rounded-xl">
              <p className="text-lavender-800 mb-4">
                Na abordagem junguiana, o terapeuta acompanha o paciente em sua jornada 
                de individuação, criando um espaço seguro para a exploração dos conteúdos 
                inconscientes.
              </p>
              <p className="text-lavender-800 mb-4">
                Utilizamos diferentes métodos como análise de sonhos, imaginação ativa, 
                trabalho com complexos e exploração de símbolos para facilitar o 
                processo de integração psíquica.
              </p>
              <p className="text-lavender-800">
                O objetivo é promover a ampliação da consciência e o desenvolvimento 
                da personalidade total, levando a uma vida mais autêntica e significativa.
              </p>
            </div>
          </section>

        </div>
      </main>
    </>
  );
};

export default PsicologiaAnalitica;