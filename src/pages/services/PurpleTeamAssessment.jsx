import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PurpleTeamAssessment = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const assessmentCards = [
    {
      title: "CENÁRIOS DE ATAQUE",
      description:
        "Descrição detalhada dos cenários de ataque simulados, destacando os métodos, técnicas e táticas usados.",
      icon: "⚔️",
      gradient: "from-red-500 to-pink-600",
    },
    {
      title: "ANÁLISE DE IMPACTO",
      description:
        "Avaliação de impactos financeiros, operacionais e de reputação que podem ocorrer devido a uma violação de segurança bem-sucedida.",
      icon: "📊",
      gradient: "from-purple-500 to-red-500",
    },
    {
      title: "ANÁLISE DE RESILIÊNCIA",
      description:
        "Recomendações sobre como melhorar a resiliência da organização em relação a ameaças cibernéticas.",
      icon: "🛡️",
      gradient: "from-blue-500 to-purple-500",
    },
    {
      title: "Lições Aprendidas",
      description:
        "Destaque das principais lições aprendidas durante o exercício e insights sobre como melhorar as capacidades de segurança.",
      icon: "💡",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      title: "Plano de Ação",
      description:
        "Um plano de ação detalhado que lista as etapas a serem seguidas para abordar quaisquer lacunas ou deficiências identificadas durante o teste.",
      icon: "📋",
      gradient: "from-green-500 to-cyan-500",
    },
    {
      title: "Avaliação de Riscos Futuros",
      description:
        "Uma análise dos riscos futuros e tendências de segurança que a organização pode enfrentar, juntamente com estratégias de mitigação.",
      icon: "🔮",
      gradient: "from-yellow-500 to-green-500",
    },
    {
      title: "Melhores Práticas",
      description:
        "Sugestões de melhores práticas em segurança cibernética com base nas descobertas e resultados do exercício.",
      icon: "⭐",
      gradient: "from-orange-500 to-yellow-500",
    },
    {
      title: "Benchmarks Comparativos",
      description:
        "Comparação das métricas da organização com benchmarks do setor para avaliar o desempenho em relação a seus pares.",
      icon: "📈",
      gradient: "from-pink-500 to-orange-500",
    },
    {
      title: "Estratégias de Comunicação",
      description:
        "Orientações sobre como comunicar as descobertas e ações corretivas para as partes interessadas internas e externas.",
      icon: "📢",
      gradient: "from-indigo-500 to-pink-500",
    },
  ];

  const mainBenefits = [
    {
      title: "Teste, Avalie e Fortaleça a Capacidade de Detecção",
      description:
        "Teste, avalie e fortaleça a capacidade de detecção e prevenção de ataques cibernéticos bem-sucedidos.",
      icon: "🎯",
      color: "from-red-500 to-purple-600",
    },
    {
      title: "Refine a Eficácia das Soluções de Segurança",
      description:
        "Refine a eficácia das soluções e processos de segurança existentes.",
      icon: "⚙️",
      color: "from-purple-500 to-blue-600",
    },
    {
      title: "Identifique Lacunas na Segurança",
      description:
        "Identifique lacunas na segurança para orientar decisões de compra e estratégias de proteção.",
      icon: "🔍",
      color: "from-blue-500 to-cyan-600",
    },
    {
      title: "Desenvolva Mentalidade de Invasor",
      description:
        "Desenvolva uma mentalidade de invasor em equipes defensivas para aprimorar o reconhecimento e resposta a atividades suspeitas.",
      icon: "🧠",
      color: "from-cyan-500 to-green-600",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-red-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div
              className={`transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/20">
                Fortalecendo sua Defesa: PURPLE TEAM ASSESSMENT, a Melhor
                Proteção Contra Ataques Reais.
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="text-primary">PURPLE TEAM</span>
                <br />
                <span className="text-2xl md:text-3xl">ASSESSMENT</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Avalie o risco e melhore sua capacidade defensiva contra ameaças
                reais
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Service Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              SOBRE O <span className="text-primary">SERVIÇO</span>
            </h2>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl shadow-lg mb-8">
              <p className="text-gray-700 leading-relaxed text-lg text-center">
                O serviço de Purple Team da SEC365 é uma combinação de
                exercícios de equipe vermelha (red team) e azul (blue team). O
                exercício de red team envolve um testador de penetração tentando
                contornar controles de segurança para identificar falhas com o
                objetivo de obter acesso não autorizado a dados ou sistemas de
                informação confidenciais/sensíveis. Já o exercício de blue team
                é quando a equipe de segurança defensiva tenta detectar e
                impedir um ator malicioso de obter acesso não autorizado a dados
                ou sistemas confidenciais/sensíveis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Teams Visual Representation */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            {/* Red Team */}
            <div className="text-center">
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-r from-red-500 to-red-700 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl text-white shadow-2xl">
                  ⚔️
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-400 rounded-full animate-ping"></div>
              </div>
              <h3 className="text-2xl font-bold text-red-400 mb-4">RED TEAM</h3>
              <p className="text-gray-300 leading-relaxed">
                Equipe ofensiva que simula ataques reais para identificar
                vulnerabilidades e testar as defesas da organização.
              </p>
            </div>

            {/* Purple Team (Collaboration) */}
            <div className="text-center">
              <div className="relative">
                <div className="w-40 h-40 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full mx-auto mb-6 flex items-center justify-center text-5xl text-white shadow-2xl transform scale-110">
                  🤝
                </div>
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-purple-400 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-purple-300 rounded-full animate-ping animation-delay-1000"></div>
              </div>
              <h3 className="text-3xl font-bold text-purple-400 mb-4">
                PURPLE TEAM
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                <strong>Colaboração estratégica</strong> entre Red e Blue Teams
                para maximizar o aprendizado e fortalecer as defesas.
              </p>
            </div>

            {/* Blue Team */}
            <div className="text-center">
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl text-white shadow-2xl">
                  🛡️
                </div>
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-blue-400 rounded-full animate-ping animation-delay-2000"></div>
              </div>
              <h3 className="text-2xl font-bold text-blue-400 mb-4">
                BLUE TEAM
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Equipe defensiva responsável por detectar, analisar e responder
                aos ataques simulados pelo Red Team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Cards Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              O ASSESSMENT DETALHADO E GLOBAL DESTE{" "}
              <span className="text-primary">SERVIÇO</span>, INCLUI:
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {assessmentCards.map((card, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 text-center"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${card.gradient} rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto`}
                >
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Battle Simulation Visualization */}
      <section className="py-20 bg-gradient-to-br from-primary via-purple-500 to-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="relative">
              {/* Cyber warfare background elements */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full">
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 1000 400"
                    fill="none"
                  >
                    <g stroke="currentColor" strokeWidth="2">
                      {/* Network connections */}
                      <path
                        d="M100,200 L300,100 L500,200 L700,100 L900,200"
                        strokeDasharray="5,5"
                        className="animate-pulse"
                      />
                      <path
                        d="M100,200 L300,300 L500,200 L700,300 L900,200"
                        strokeDasharray="5,5"
                        className="animate-pulse"
                      />

                      {/* Shield and sword elements */}
                      <circle cx="200" cy="150" r="30" />
                      <circle cx="800" cy="250" r="25" />
                      <polygon points="400,100 420,140 380,140" />
                      <rect x="580" y="180" width="40" height="40" rx="5" />
                    </g>
                  </svg>
                </div>
              </div>

              <div className="relative z-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-12">
                <div className="flex items-center justify-center mb-8">
                  <div className="bg-white/20 p-6 rounded-2xl">
                    <svg
                      className="w-16 h-16 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12,1L21,5V11C21,16.55 17.16,21.74 12,23C6.84,21.74 3,16.55 3,11V5L12,1M12,7C9.24,7 7,9.24 7,12S9.24,17 12,17S17,14.76 17,12S14.76,7 12,7M12,9C13.66,9 15,10.34 15,12S13.66,15 12,15S9,13.66 9,12S10.34,9 12,9Z" />
                    </svg>
                  </div>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Simulação de{" "}
                  <span className="text-yellow-300">Combate Cibernético</span>{" "}
                  Realista
                </h2>

                <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8">
                  Nosso Purple Team Assessment simula cenários de ataque reais
                  em um ambiente controlado, permitindo que sua organização
                  teste, aprenda e fortaleça suas defesas.
                </p>

                <div className="flex justify-center items-center space-x-12">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-red-400 rounded-full animate-pulse"></div>
                    <span className="text-white font-medium">
                      Ataque Simulado
                    </span>
                  </div>
                  <div className="text-white text-2xl">⚡</div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-blue-400 rounded-full animate-pulse animation-delay-500"></div>
                    <span className="text-white font-medium">Defesa Ativa</span>
                  </div>
                  <div className="text-white text-2xl">🛡️</div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse animation-delay-1000"></div>
                    <span className="text-white font-medium">Aprendizado</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 uppercase">
              Benefícios Principais{" "}
              <span className="text-primary">Imediatos</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mainBenefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="flex flex-col items-center text-center gap-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center text-2xl text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300 mx-auto`}
                  >
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 uppercase">
              Resultados <span className="text-primary">Comprovados</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "95%",
                label: "Melhoria na Detecção de Ameaças",
                icon: "🎯",
                color: "text-red-400",
              },
              {
                number: "80%",
                label: "Redução no Tempo de Resposta",
                icon: "⚡",
                color: "text-purple-400",
              },
              {
                number: "90%",
                label: "Aumento na Colaboração Entre Equipes",
                icon: "🤝",
                color: "text-blue-400",
              },
              {
                number: "100%",
                label: "Satisfação dos Clientes",
                icon: "⭐",
                color: "text-green-400",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="group text-center bg-black/20 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div
                  className={`text-4xl font-bold mb-2 group-hover:text-primary transition-colors duration-300 ${stat.color}`}
                >
                  {stat.number}
                </div>
                <p className="text-gray-300 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-purple-500 to-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Fortaleça Suas Defesas com Purple Team
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Entre em contato conosco e descubra como nosso Purple Team
            Assessment pode transformar a segurança da sua organização.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl cursor-pointer"
          >
            Iniciar Assessment
          </button>
        </div>
      </section>
    </div>
  );
};

export default PurpleTeamAssessment;
