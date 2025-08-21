import { useState } from 'react';
import { ArrowLeft, Users, Crown, Heart, Sword, Lightbulb, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Question {
  id: number;
  text: string;
  answers: { text: string; archetypes: string[] }[];
}

interface Archetype {
  name: string;
  description: string;
  characteristics: string[];
  icon: JSX.Element;
  color: string;
}

const ExploradorArquetipos = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState<{[key: string]: number}>({});
  const [showResults, setShowResults] = useState(false);

  const archetypes: {[key: string]: Archetype} = {
    'Inocente': {
      name: 'Inocente',
      description: 'Busca felicidade e harmonia, confia na bondade do mundo',
      characteristics: ['Otimista', 'Puro', 'Confiante', 'Espontâneo'],
      icon: <Heart className="w-8 h-8" />,
      color: 'pink'
    },
    'Sábio': {
      name: 'Sábio',
      description: 'Busca verdade e conhecimento, deseja compreender o mundo',
      characteristics: ['Inteligente', 'Pensativo', 'Analítico', 'Contemplativo'],
      icon: <Lightbulb className="w-8 h-8" />,
      color: 'blue'
    },
    'Guerreiro': {
      name: 'Guerreiro',
      description: 'Busca coragem e maestria, quer provar seu valor',
      characteristics: ['Corajoso', 'Determinado', 'Competitivo', 'Disciplinado'],
      icon: <Sword className="w-8 h-8" />,
      color: 'red'
    },
    'Cuidador': {
      name: 'Cuidador',
      description: 'Busca ajudar outros, motivado pelo amor e compaixão',
      characteristics: ['Empático', 'Generoso', 'Compassivo', 'Protetor'],
      icon: <Shield className="w-8 h-8" />,
      color: 'green'
    },
    'Explorador': {
      name: 'Explorador',
      description: 'Busca liberdade e autenticidade, quer encontrar a si mesmo',
      characteristics: ['Independente', 'Aventureiro', 'Autêntico', 'Pioneiro'],
      icon: <Users className="w-8 h-8" />,
      color: 'orange'
    },
    'Governante': {
      name: 'Governante',
      description: 'Busca controle e responsabilidade, quer criar prosperidade',
      characteristics: ['Líder', 'Responsável', 'Organizador', 'Autoritativo'],
      icon: <Crown className="w-8 h-8" />,
      color: 'purple'
    }
  };

  const questions: Question[] = [
    {
      id: 1,
      text: "Em uma situação de conflito, você tende a:",
      answers: [
        { text: "Buscar uma solução pacífica para todos", archetypes: ["Inocente", "Cuidador"] },
        { text: "Analisar friamente todas as opções", archetypes: ["Sábio"] },
        { text: "Enfrentar diretamente o problema", archetypes: ["Guerreiro"] },
        { text: "Procurar uma alternativa criativa", archetypes: ["Explorador"] }
      ]
    },
    {
      id: 2,
      text: "Seu maior medo é:",
      answers: [
        { text: "Fazer algo errado ou prejudicar alguém", archetypes: ["Inocente", "Cuidador"] },
        { text: "Ser enganado ou tomar decisões ruins", archetypes: ["Sábio"] },
        { text: "Ser visto como fraco ou covarde", archetypes: ["Guerreiro"] },
        { text: "Ficar preso em uma vida sem sentido", archetypes: ["Explorador"] }
      ]
    },
    {
      id: 3,
      text: "Em um grupo, você geralmente:",
      answers: [
        { text: "Mantém a harmonia e cuida do bem-estar de todos", archetypes: ["Cuidador"] },
        { text: "Oferece conselhos e perspectivas sábias", archetypes: ["Sábio"] },
        { text: "Assume a liderança naturalmente", archetypes: ["Governante", "Guerreiro"] },
        { text: "Prefere manter sua independência", archetypes: ["Explorador"] }
      ]
    },
    {
      id: 4,
      text: "Sua maior motivação é:",
      answers: [
        { text: "Ser feliz e estar em paz", archetypes: ["Inocente"] },
        { text: "Compreender a verdade sobre a vida", archetypes: ["Sábio"] },
        { text: "Alcançar objetivos desafiadores", archetypes: ["Guerreiro"] },
        { text: "Criar ordem e estabilidade", archetypes: ["Governante"] }
      ]
    },
    {
      id: 5,
      text: "Quando toma decisões importantes:",
      answers: [
        { text: "Confio no meu coração e intuição", archetypes: ["Inocente", "Explorador"] },
        { text: "Pesquiso e analiso todas as informações", archetypes: ["Sábio"] },
        { text: "Escolho a opção mais corajosa", archetypes: ["Guerreiro"] },
        { text: "Considero o impacto nos outros", archetypes: ["Cuidador", "Governante"] }
      ]
    }
  ];

  const handleAnswer = (archetypes: string[]) => {
    const newScores = { ...scores };
    archetypes.forEach(archetype => {
      newScores[archetype] = (newScores[archetype] || 0) + 1;
    });
    setScores(newScores);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const getTopArchetypes = () => {
    return Object.entries(scores)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 3)
      .map(([name, score]) => ({ ...archetypes[name], score }));
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScores({});
    setShowResults(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-cream-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link
                to="/"
                className="flex items-center text-amber-600 hover:text-amber-700 transition-colors mr-4"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                <span className="hidden md:inline">Voltar</span>
              </Link>
              <h1 className="text-2xl font-serif text-amber-900">Explorador de Arquétipos</h1>
            </div>
            
            {/* Logo Ana - Hidden on mobile */}
            <Link
              to="/"
              className="hidden md:flex items-center hover:scale-105 transition-transform duration-300"
              aria-label="Voltar ao início"
            >
              <Heart className="w-6 h-6 mr-2 fill-current text-amber-600" />
              <span className="text-xl font-serif text-amber-600">Ana</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {!showResults ? (
          <>
            {/* Progress */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-amber-600 font-medium">
                  Pergunta {currentQuestion + 1} de {questions.length}
                </span>
              </div>
              <div className="w-full bg-amber-200 rounded-full h-2">
                <div
                  className="bg-amber-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Question */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-amber-200">
              <h2 className="text-2xl font-serif text-amber-900 mb-8 text-center">
                {questions[currentQuestion].text}
              </h2>

              <div className="space-y-4">
                {questions[currentQuestion].answers.map((answer, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(answer.archetypes)}
                    className="w-full p-4 text-left bg-amber-50 hover:bg-amber-100 border border-amber-200 hover:border-amber-300 rounded-lg transition-colors"
                  >
                    {answer.text}
                  </button>
                ))}
              </div>
            </div>
          </>
        ) : (
          /* Results */
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-amber-200">
            <div className="text-center mb-8">
              <Users className="w-16 h-16 text-amber-600 mx-auto mb-4" />
              <h2 className="text-3xl font-serif text-amber-900 mb-4">
                Seus Arquétipos Dominantes
              </h2>
              <p className="text-xl text-amber-700">
                Descobrindo as forças arquetípicas que guiam sua personalidade
              </p>
            </div>

            <div className="space-y-6 mb-8">
              {getTopArchetypes().map((archetype, index) => (
                <div
                  key={archetype.name}
                  className={`p-6 rounded-lg border-2 bg-${archetype.color}-50 border-${archetype.color}-200`}
                >
                  <div className="flex items-center mb-4">
                    <div className={`text-${archetype.color}-600 mr-4`}>
                      {archetype.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-amber-900">
                        #{index + 1} - {archetype.name}
                      </h3>
                      <span className="text-amber-600 text-sm">
                        Pontuação: {archetype.score}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-amber-700 mb-4">
                    {archetype.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {archetype.characteristics.map((char, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 bg-${archetype.color}-100 text-${archetype.color}-800 text-sm rounded-full`}
                      >
                        {char}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center space-x-4">
              <Link
                to="/#contact"
                className="inline-flex items-center px-6 py-3 bg-amber-600 text-white font-medium rounded-full hover:bg-amber-700 transition-colors"
              >
                <Heart className="w-5 h-5 mr-2" />
                Explorar em Terapia
              </Link>
              
              <button
                onClick={resetQuiz}
                className="inline-flex items-center px-6 py-3 border-2 border-amber-600 text-amber-600 font-medium rounded-full hover:bg-amber-600 hover:text-white transition-colors"
              >
                Refazer Quiz
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExploradorArquetipos;