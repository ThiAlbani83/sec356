import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CisoAsAService = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const cisoResponsibilities = [
    {
      category: "Compliance",
      items: [
        "Atendimento de auditorias internas e externas",
        "Obtenção ou renovação de certificações",
        "Conformidade com regulamentações específicas de mercado",
        "Conformidade com padrões de configuração segura, entre outros",
      ],
      icon: "✅",
      color: "from-green-500 to-emerald-600",
    },
    {
      category: "Membro do Board",
      items: [
        "Execução e apresentação do plano diretor de segurança",
        "Defesa de orçamento",
        "Assessoramento em temas estratégicos relacionados à segurança",
      ],
      icon: "👔",
      color: "from-blue-500 to-indigo-600",
    },
    {
      category: "Gestão de Contratos",
      items: [
        "Gestão de contratos com fornecedores e parceiros",
        "Gestão de Licenciamento de software",
        "Diligência de fornecedores",
      ],
      icon: "📋",
      color: "from-purple-500 to-violet-600",
    },
    {
      category: "Documentação",
      items: [
        "Criação e atualização de Políticas de Segurança",
        "Avaliação e assinatura em procedimentos técnicos derivados",
        "Manutenção de templates e padrões para uso em outras áreas",
      ],
      icon: "📄",
      color: "from-orange-500 to-red-600",
    },
    {
      category: "Gestão de Pessoas",
      items: [
        "Contratação e gestão de uma equipe de segurança da informação",
        "Capacitação, feedbacks e delegação",
        "Controle da capacidade operacional",
      ],
      icon: "👥",
      color: "from-cyan-500 to-teal-600",
    },
    {
      category: "Continuidade de Negócio",
      items: [
        "Criação do BCP (Business Continuity Plan)",
        "Políticas de Disaster Recovery",
        "Políticas de backup e restore",
        "Plano de resposta a incidentes, entre outros",
      ],
      icon: "🔄",
      color: "from-pink-500 to-rose-600",
    },
  ];

  const benefits = [
    {
      title:
        "Ordenação de ações para uma elevação consistente do nível de maturidade",
      icon: "📈",
    },
    {
      title: "Priorização de ações de acordo com o risco para o negócio",
      icon: "🎯",
    },
    {
      title: "Aceleração de ações em execução",
      icon: "⚡",
    },
    {
      title:
        "Validação e aconselhamento sobre o Plano Diretor de Segurança da Informação",
      icon: "📊",
    },
    {
      title:
        "Mapeamento da arquitetura de segurança atual para otimização e economia de investimentos já realizados",
      icon: "🗺️",
    },
    {
      title: "Validação e aconselhamento sobre o RoadMap de investimentos",
      icon: "🛣️",
    },
    {
      title: "Assessoria sênior para equipes técnicas",
      icon: "🎓",
    },
    {
      title:
        "Identificação e desenvolvimento de talentos internos para a área de segurança",
      icon: "💎",
    },
    {
      title:
        "Apoio no atendimento a auditorias e em planos de ação para adequação a normas e regulamentações de mercado",
      icon: "⚖️",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
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
                Eleve a segurança de sua organização para novos patamares com
                nosso CISO as a Service
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="text-primary">CISO</span>
                <br />
                <span className="text-2xl md:text-3xl">as a Service</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Uma parceria estratégica que coloca especialistas em
                cibersegurança à disposição, garantindo proteção contínua.
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
                O serviço de CISO as a Service envolve uma gama extensa de
                responsabilidades dentro de uma organização, representando um
                desafio que transcende a capacidade de uma única pessoa, tanto
                do ponto de vista técnico quanto em termos de disponibilidade,
                especialmente quando as horas no dia são limitadas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CISO Responsibilities Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 uppercase">
              Alguns dos principais aspectos dessa{" "}
              <span className="text-primary">função</span> incluem:
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cisoResponsibilities.map((responsibility, index) => (
              <div
                key={index}
                className="group bg-black/20 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="text-center mb-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${responsibility.color} rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {responsibility.icon}
                  </div>
                  <h3 className="text-xl font-bold text-primary group-hover:text-cyan-300 transition-colors duration-300">
                    {responsibility.category}
                  </h3>
                </div>

                <div className="space-y-3">
                  {responsibility.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex items-start gap-3 p-3 bg-gray-800/30 rounded-lg hover:bg-gray-800/50 transition-colors duration-200"
                    >
                      <div className="flex items-center justify-center w-8 h-8 bg-green-500/20 rounded-full flex-shrink-0 mt-0.5">
                        <svg
                          className="w-4 h-4 text-green-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed flex-1">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Dashboard Visualization */}
      <section className="py-20 bg-gradient-to-br from-primary via-blue-500 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="relative">
              {/* Executive background elements */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full">
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 1000 400"
                    fill="none"
                  >
                    <g stroke="currentColor" strokeWidth="2">
                      {/* Executive chart lines */}
                      <path
                        d="M100,300 Q300,200 500,250 Q700,150 900,200"
                        strokeDasharray="3,3"
                        className="animate-pulse"
                      />
                      <path
                        d="M100,250 Q300,150 500,200 Q700,100 900,150"
                        strokeDasharray="3,3"
                        className="animate-pulse"
                      />

                      {/* Strategic elements */}
                      <circle cx="200" cy="150" r="40" />
                      <circle cx="800" cy="250" r="35" />
                      <rect x="450" y="180" width="100" height="60" rx="10" />
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
                      <path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z" />
                    </svg>
                  </div>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Liderança Estratégica em{" "}
                  <span className="text-yellow-300">Cibersegurança</span>
                </h2>

                <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8">
                  Nosso CISO as a Service oferece liderança executiva
                  especializada, combinando visão estratégica com expertise
                  técnica para elevar sua postura de segurança.
                </p>

                <div className="flex justify-center items-center space-x-12">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
                    <span className="text-white font-medium">Estratégia</span>
                  </div>
                  <div className="text-white text-2xl">⚡</div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse animation-delay-500"></div>
                    <span className="text-white font-medium">Execução</span>
                  </div>
                  <div className="text-white text-2xl">🎯</div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-blue-400 rounded-full animate-pulse animation-delay-1000"></div>
                    <span className="text-white font-medium">Resultados</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              BENEFÍCIOS PARA AS <span className="text-primary">EMPRESAS</span>
            </h2>
          </div>

          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-gradient-to-r from-gray-50 to-gray-100 hover:from-primary/5 hover:to-primary/10 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg border-l-4 border-primary/30 hover:border-primary"
              >
                <div className="flex items-center gap-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-cyan-500 rounded-xl text-2xl text-white group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-800 text-lg leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                      {benefit.title}
                    </p>
                  </div>
                  <div className="text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
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
              Impacto <span className="text-primary">Executivo</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "90%",
                label: "Redução no Tempo de Resposta a Incidentes",
                icon: "⚡",
                color: "text-green-400",
              },
              {
                number: "85%",
                label: "Melhoria na Postura de Compliance",
                icon: "✅",
                color: "text-blue-400",
              },
              {
                number: "75%",
                label: "Otimização de Investimentos em Segurança",
                icon: "💰",
                color: "text-yellow-400",
              },
              {
                number: "100%",
                label: "Satisfação Executiva",
                icon: "👔",
                color: "text-purple-400",
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
      <section className="py-20 bg-gradient-to-br from-primary via-blue-500 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Eleve Sua Liderança em Segurança
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Entre em contato conosco e descubra como nosso CISO as a Service
            pode transformar a governança de segurança da sua organização.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl cursor-pointer"
          >
            Agendar Consultoria Executiva
          </button>
        </div>
      </section>
    </div>
  );
};

export default CisoAsAService;
