import React, { useState, useEffect } from "react";

const OurMethodology = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const methodologyPrinciples = [
    {
      title: "Independência Total",
      description:
        "Não temos afiliações com vendedores, garantindo recomendações imparciais baseadas exclusivamente nas necessidades do cliente.",
      icon: "🔓",
      gradient: "from-blue-500 to-cyan-600",
    },
    {
      title: "Visão Estratégica",
      description:
        "Antecipamos ameaças e compreendemos profundamente o negócio para oferecer soluções visionárias e personalizadas.",
      icon: "🔮",
      gradient: "from-purple-500 to-indigo-600",
    },
    {
      title: "Abordagem Holística",
      description:
        "Integramos uma compreensão completa das operações do cliente para criar defesas robustas e duradouras.",
      icon: "🌐",
      gradient: "from-green-500 to-teal-600",
    },
    {
      title: "Compromisso Exclusivo",
      description:
        "Nosso único compromisso é com a segurança e sucesso dos nossos clientes, sem interesses comerciais conflitantes.",
      icon: "🤝",
      gradient: "from-orange-500 to-red-600",
    },
  ];

  const methodologySteps = [
    {
      step: "01",
      title: "Avaliação Profunda",
      description:
        "Análise minuciosa da situação atual, identificando vulnerabilidades e compreendendo o contexto do negócio.",
      color: "from-blue-500 to-cyan-600",
    },
    {
      step: "02",
      title: "Diagnóstico Estratégico",
      description:
        "Identificação de lacunas na segurança e oportunidades de melhoria baseadas na realidade operacional.",
      color: "from-purple-500 to-indigo-600",
    },
    {
      step: "03",
      title: "Recomendações Personalizadas",
      description:
        "Desenvolvimento de soluções sob medida que atendem necessidades específicas e preparam para o futuro.",
      color: "from-green-500 to-teal-600",
    },
    {
      step: "04",
      title: "Implementação Guiada",
      description:
        "Acompanhamento na execução das soluções, garantindo efetividade e adaptação contínua.",
      color: "from-orange-500 to-red-600",
    },
  ];

  const differentials = [
    {
      title: "Sem Conflitos de Interesse",
      description: "Não representamos fabricantes ou produtos específicos",
      icon: "⚖️",
    },
    {
      title: "Expertise Independente",
      description: "Décadas de experiência sem vinculação comercial",
      icon: "🧠",
    },
    {
      title: "Visão de Negócio",
      description: "Compreensão profunda das operações do cliente",
      icon: "📊",
    },
    {
      title: "Soluções Duradouras",
      description: "Preparação para desafios futuros, não apenas atuais",
      icon: "🛡️",
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
          <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-green-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
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
                Nossa metodologia em cibersegurança: independência que gera
                confiança
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="text-primary">NOSSA</span>
                <br />
                <span className="text-2xl md:text-3xl">METODOLOGIA</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Nossa metodologia em cibersegurança transcende barreiras,
                criando um escudo de proteção para os ativos digitais de nossos
                clientes
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

          <div className="max-w-6xl mx-auto space-y-8">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl shadow-lg">
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Adotamos uma abordagem única e independente em cibersegurança,
                distanciando-nos de afiliações com vendedores para atuar como
                verdadeiros consultores. Não representamos nem nos comprometemos
                com fabricantes, produtos ou soluções específicas. Nosso
                compromisso é exclusivamente com o cliente, posicionando-nos
                como os vigilantes atentos aos seus interesses.
              </p>

              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Ao invés de meramente reagir a ameaças, nos destacamos por
                sermos os visionários, compreendendo profundamente o negócio e
                suas necessidades específicas. Através de uma avaliação
                minuciosa da situação, oferecemos recomendações informadas para
                os próximos passos em termos de segurança cibernética.
              </p>

              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Nossa metodologia vai além do convencional. Não apenas
                identificamos lacunas na segurança, mas também integramos uma
                compreensão holística das operações do cliente. Isso nos permite
                personalizar soluções que não apenas resolvem desafios
                imediatos, mas também preparam o terreno para uma defesa robusta
                no futuro.
              </p>

              <p className="text-gray-700 leading-relaxed text-lg">
                Ao permanecer independentes de quaisquer interesses comerciais
                ou alianças exclusivas, garantimos que nossas recomendações se
                baseiem unicamente na expertise adquirida ao longo de décadas.
                Somos os aliados confiáveis que não estão vinculados a nenhum
                produto específico, mas sim à missão de salvaguardar os ativos
                digitais e a reputação de nossos clientes. Nossa metodologia é
                mais do que uma estratégia; é um compromisso inabalável com a
                excelência em cibersegurança.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Independence Banner */}
      <section className="py-20 bg-gradient-to-br from-primary via-blue-500 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="relative">
              {/* Independence background elements */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full">
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 1000 400"
                    fill="none"
                  >
                    <g stroke="currentColor" strokeWidth="1.5">
                      {/* Independence symbols */}
                      <circle cx="200" cy="200" r="60" strokeDasharray="3,3" />
                      <circle cx="500" cy="150" r="50" strokeDasharray="3,3" />
                      <circle cx="800" cy="250" r="55" strokeDasharray="3,3" />

                      {/* Shield patterns */}
                      <path
                        d="M150,100 L250,100 L250,200 L200,250 L150,200 Z"
                        strokeDasharray="2,2"
                      />
                      <path
                        d="M450,80 L550,80 L550,180 L500,230 L450,180 Z"
                        strokeDasharray="2,2"
                      />
                      <path
                        d="M750,180 L850,180 L850,280 L800,330 L750,280 Z"
                        strokeDasharray="2,2"
                      />
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
                      <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C15.4,11.5 16,12.1 16,12.7V16.2C16,16.8 15.4,17.3 14.8,17.3H9.2C8.6,17.3 8,16.8 8,16.2V12.7C8,12.1 8.6,11.5 9.2,11.5V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,10V11.5H13.5V10C13.5,8.7 12.8,8.2 12,8.2Z" />
                    </svg>
                  </div>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  <span className="text-yellow-300">Independência</span> que
                  Gera Confiança
                </h2>

                <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8">
                  Nossa metodologia se fundamenta na independência total,
                  garantindo que cada recomendação seja baseada exclusivamente
                  na expertise e no melhor interesse do cliente, sem influências
                  comerciais externas.
                </p>

                <div className="flex justify-center items-center space-x-12">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
                    <span className="text-white font-medium">
                      Imparcialidade
                    </span>
                  </div>
                  <div className="text-white text-2xl">🔓</div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse animation-delay-500"></div>
                    <span className="text-white font-medium">
                      Transparência
                    </span>
                  </div>
                  <div className="text-white text-2xl">🤝</div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-blue-400 rounded-full animate-pulse animation-delay-1000"></div>
                    <span className="text-white font-medium">
                      Confiabilidade
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Principles Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Pilares da Nossa <span className="text-primary">Metodologia</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {methodologyPrinciples.map((principle, index) => (
              <div
                key={index}
                className="group bg-black/20 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="flex items-start gap-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${principle.gradient} rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {principle.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                      {principle.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Steps Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Processo <span className="text-primary">Metodológico</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {methodologySteps.map((step, index) => (
              <div key={index} className="group relative text-center">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center text-white text-xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connection line (except for last item) */}
                {index < methodologySteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-8 h-0.5 bg-gradient-to-r from-primary to-cyan-400"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Nossos <span className="text-primary">Diferenciais</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {differentials.map((differential, index) => (
              <div
                key={index}
                className="group text-center bg-black/20 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {differential.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                  {differential.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {differential.description}
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
            Conheça Nossa Metodologia Independente
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Descubra como nossa abordagem independente pode fortalecer a
            segurança cibernética da sua organização com recomendações
            imparciais e estratégicas.
          </p>
          <button className="bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl">
            Fale Conosco
          </button>
        </div>
      </section>
    </div>
  );
};

export default OurMethodology;
