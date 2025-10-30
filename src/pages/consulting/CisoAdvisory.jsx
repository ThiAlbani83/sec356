import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CisoAdvisory = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const advisoryBenefits = [
    {
      title: "Estratégia Especializada",
      description:
        "Orientação estratégica fornecida por profissionais experientes em cibersegurança, ajudando a alinhar a estratégia de segurança com os objetivos de negócios.",
      icon: "🎯",
      color: "from-blue-500 to-indigo-600",
    },
    {
      title: "Gestão Abrangente de Segurança",
      description:
        "Gestão eficaz de uma ampla gama de responsabilidades, desde compliance e gestão de pessoas até arquitetura de segurança e gestão de contratos.",
      icon: "🏗️",
      color: "from-indigo-500 to-purple-600",
    },
    {
      title: "Conformidade Sustentável",
      description:
        "Auxílio na garantia de conformidade contínua com regulamentações como a LGPD, protegendo a organização contra riscos legais e financeiros.",
      icon: "⚖️",
      color: "from-purple-500 to-pink-600",
    },
    {
      title: "Otimização de Investimentos",
      description:
        "Mapeamento da arquitetura de segurança atual para identificar oportunidades de otimização e maximização dos investimentos já realizados.",
      icon: "💰",
      color: "from-pink-500 to-red-600",
    },
    {
      title: "Melhoria da Maturidade em Segurança",
      description:
        "Ordenação de ações para elevar consistentemente o nível de maturidade em segurança, garantindo uma defesa robusta contra ameaças cibernéticas.",
      icon: "📈",
      color: "from-red-500 to-orange-600",
    },
    {
      title: "Aceleração de Ações Críticas",
      description:
        "Aceleração de ações em execução para garantir a rápida implementação de medidas críticas em resposta às ameaças em evolução.",
      icon: "⚡",
      color: "from-orange-500 to-yellow-600",
    },
    {
      title: "Assessoria Sênior e Desenvolvimento de Talentos",
      description:
        "Assessoria sênior para equipes técnicas, promovendo o desenvolvimento de talentos internos na área de segurança.",
      icon: "🎓",
      color: "from-yellow-500 to-green-600",
    },
    {
      title: "Visão Holística da Segurança",
      description:
        "Oferece uma visão holística da segurança cibernética, considerando não apenas aspectos técnicos, mas também a gestão de pessoas, conformidade legal e estratégias alinhadas aos objetivos de negócios.",
      icon: "👁️",
      color: "from-green-500 to-cyan-600",
    },
    {
      title: "Redução de Riscos",
      description:
        "Identificação proativa e mitigação de riscos de segurança, protegendo a organização contra ameaças emergentes e possíveis brechas.",
      icon: "🛡️",
      color: "from-cyan-500 to-teal-600",
    },
    {
      title: "Apoio em Auditorias e Adequação a Normas",
      description:
        "Suporte no atendimento a auditorias e planos de ação para adequação a normas e regulamentações de mercado, assegurando a transparência e conformidade.",
      icon: "📋",
      color: "from-teal-500 to-blue-600",
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
          <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
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
                Construa uma visão estratégica impenetrável em cibersegurança
                com nosso CISO Advisory
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="text-primary">CISO</span>
                <br />
                <span className="text-2xl md:text-3xl">ADVISORY</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Mitigue riscos, eleve a maturidade e lidere a defesa contra
                ameaças digitais
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
                Orientação especializada para o estabelecimento de uma visão
                estratégica alinhada às últimas tendências em segurança
                cibernética. Essencial para mitigar riscos corporativos, elevar
                a maturidade e gerenciar eficazmente os programas de segurança
                cibernética de sua empresa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Vision Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-blue-500 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="relative">
              {/* Strategic background elements */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full">
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 1000 400"
                    fill="none"
                  >
                    <g stroke="currentColor" strokeWidth="1.5">
                      {/* Strategic network */}
                      <circle cx="200" cy="200" r="60" />
                      <circle cx="500" cy="150" r="50" />
                      <circle cx="800" cy="250" r="55" />
                      <line
                        x1="260"
                        y1="200"
                        x2="440"
                        y2="150"
                        strokeDasharray="4,4"
                      />
                      <line
                        x1="550"
                        y1="150"
                        x2="740"
                        y2="250"
                        strokeDasharray="4,4"
                      />
                      <line
                        x1="200"
                        y1="260"
                        x2="800"
                        y2="305"
                        strokeDasharray="4,4"
                      />

                      {/* Strategic elements */}
                      <polygon points="150,100 200,80 250,100 200,120" />
                      <rect x="750" y="100" width="100" height="60" rx="8" />
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
                      <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z" />
                    </svg>
                  </div>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Visão <span className="text-yellow-300">Estratégica</span> em
                  Cibersegurança
                </h2>

                <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8">
                  Nosso CISO Advisory combina expertise técnica com visão de
                  negócios para criar estratégias de segurança alinhadas aos
                  objetivos organizacionais.
                </p>

                <div className="flex justify-center items-center space-x-12">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
                    <span className="text-white font-medium">Estratégia</span>
                  </div>
                  <div className="text-white text-2xl">🎯</div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse animation-delay-500"></div>
                    <span className="text-white font-medium">Maturidade</span>
                  </div>
                  <div className="text-white text-2xl">🛡️</div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-blue-400 rounded-full animate-pulse animation-delay-1000"></div>
                    <span className="text-white font-medium">Conformidade</span>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 uppercase">
              O CISO Advisory oferece uma série de{" "}
              <span className="text-primary">benefícios cruciais</span> para as
              organizações
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Benefícios que buscam fortalecer sua postura de segurança
              cibernética e garantir conformidade com normas e regulamentações.
              Alguns dos benefícios incluem:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advisoryBenefits.map((benefit, index) => (
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

          <div className="mt-16 max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-primary/10 to-blue-500/10 border-l-4 border-primary rounded-2xl p-8">
              <p className="text-gray-800 text-lg leading-relaxed text-center font-medium">
                Ao optar pelo CISO Advisory, as organizações podem contar com
                uma abordagem especializada e abrangente para garantir que suas
                práticas de segurança estejam alinhadas às melhores práticas do
                setor e adaptadas às suas necessidades específicas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Advisory Process Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 uppercase">
              Processo de <span className="text-primary">Advisory</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Análise Atual",
                description: "Avaliação completa da postura atual de segurança",
                icon: "🔍",
              },
              {
                step: "02",
                title: "Estratégia",
                description:
                  "Desenvolvimento de estratégia alinhada aos negócios",
                icon: "🎯",
              },
              {
                step: "03",
                title: "Roadmap",
                description: "Criação de roadmap detalhado de implementação",
                icon: "🗺️",
              },
              {
                step: "04",
                title: "Acompanhamento",
                description: "Mentoria contínua e ajustes estratégicos",
                icon: "📈",
              },
            ].map((process, index) => (
              <div
                key={index}
                className="group text-center bg-black/20 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="text-primary text-sm font-bold mb-4">
                  {process.step}
                </div>
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {process.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                  {process.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-blue-500 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Construa Sua Estratégia de Segurança
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Entre em contato conosco e descubra como nosso CISO Advisory pode
            elevar a maturidade em segurança da sua organização.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl cursor-pointer"
          >
            Solicitar Advisory
          </button>
        </div>
      </section>
    </div>
  );
};

export default CisoAdvisory;
