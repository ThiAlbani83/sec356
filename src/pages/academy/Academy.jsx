import React, { useState, useEffect } from "react";

const Academy = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const mainFeatures = [
    {
      title: "Curso Personalizado",
      description:
        "Desenvolvemos cursos personalizados que atendem às necessidades específicas de sua organização. Desde iniciantes até profissionais experientes, adaptamos o treinamento para abranger todos os níveis de habilidade.",
      icon: "🎯",
      gradient: "from-blue-400 to-indigo-500",
    },
    {
      title: "Abordagem Prática",
      description:
        "Nosso treinamento vai além da teoria, proporcionando experiências práticas para consolidar o aprendizado. Simulações de ataques, exercícios práticos e estudos de caso reais garantem que os participantes estejam preparados para situações do mundo real.",
      icon: "🛠️",
      gradient: "from-indigo-400 to-purple-500",
    },
    {
      title: "Tópicos Atualizados",
      description:
        "Mantemo-nos à frente das últimas tendências e ameaças em Cibersegurança. Nossos cursos abrangem tópicos como identificação de vulnerabilidades, prevenção de ataques, resposta a incidentes, conformidade regulatória e muito mais.",
      icon: "📚",
      gradient: "from-purple-400 to-pink-500",
    },
    {
      title: "Instrutores Especializados",
      description:
        "Contamos com uma equipe de instrutores altamente qualificados e experientes em Cibersegurança. Seja presencial ou online, nossos instrutores fornecem orientação especializada e compartilham insights valiosos.",
      icon: "👨‍🏫",
      gradient: "from-pink-400 to-red-500",
    },
  ];

  const courseModalities = [
    {
      title: "Capacitação em Cybersecurity",
      description:
        "Fortaleça-se contra ameaças digitais com treinamento especializado em segurança cibernética",
      icon: "🛡️",
      color: "from-blue-500 to-cyan-600",
    },
    {
      title: "Apresentações de Impacto",
      description:
        "Inspire, informe e influencie com apresentações cibernéticas que causam impacto.",
      icon: "📊",
      color: "from-purple-500 to-blue-600",
    },
    {
      title: "Workshops Especializados",
      description:
        "Explore aprofundadamente temas-chave com workshops especializados em segurança cibernética.",
      icon: "🔧",
      color: "from-pink-500 to-purple-600",
    },
    {
      title: "Treinamento Personalizado",
      description:
        "Aprimore suas defesas digitais com treinamento adaptado às suas necessidades específicas.",
      icon: "🎓",
      color: "from-green-500 to-blue-600",
    },
  ];

  const benefits = [
    {
      title: "Redução de Riscos",
      description:
        "Ao capacitar sua equipe, você fortalece as defesas cibernéticas da organização, reduzindo os riscos de violações de segurança.",
      icon: "📉",
      color: "from-red-500 to-orange-600",
    },
    {
      title: "Cultura de Segurança",
      description:
        "Nossos treinamentos contribuem para a criação de uma cultura de segurança, onde cada membro da equipe compreende a importância de práticas seguras.",
      icon: "🏛️",
      color: "from-blue-500 to-indigo-600",
    },
    {
      title: "Conformidade Regulatória",
      description:
        "Esteja em conformidade com as regulamentações de segurança cibernética, protegendo não apenas seus dados, mas também a reputação da sua organização.",
      icon: "⚖️",
      color: "from-green-500 to-teal-600",
    },
    {
      title: "Resposta Eficiente a Incidentes",
      description:
        "Ao treinar sua equipe para identificar e responder a incidentes, você reduz o tempo de detecção e mitigação, minimizando danos potenciais.",
      icon: "⚡",
      color: "from-purple-500 to-pink-600",
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
                Potencialize a resistência cibernética de sua equipe com nossos
                treinamentos especializados
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="text-primary">ACADEMIA DE</span>
                <br />
                <span className="text-2xl md:text-3xl">CIBERSEGURANÇA</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Transforme sua equipe em guardiões digitais através de nossos
                cursos de Cybersecurity
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
                Em um mundo digital em constante evolução, o treinamento em
                Cybersecurity tornou-se uma pedra angular para organizações que
                buscam proteger seus ativos digitais e dados sensíveis. Nossos
                serviços de treinamento em Cibersegurança oferecem uma abordagem
                abrangente para capacitar sua equipe, garantindo que estejam
                preparados para enfrentar os desafios do cenário cibernético
                moderno.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Experience Banner */}
      <section className="py-20 bg-gradient-to-br from-primary via-blue-500 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="relative">
              {/* Learning background elements */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full">
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 1000 400"
                    fill="none"
                  >
                    <g stroke="currentColor" strokeWidth="1.5">
                      {/* Knowledge network */}
                      <circle cx="200" cy="200" r="50" />
                      <circle cx="400" cy="150" r="40" />
                      <circle cx="600" cy="250" r="45" />
                      <circle cx="800" cy="180" r="35" />

                      {/* Connection lines */}
                      <line
                        x1="250"
                        y1="200"
                        x2="360"
                        y2="150"
                        strokeDasharray="3,3"
                      />
                      <line
                        x1="440"
                        y1="150"
                        x2="555"
                        y2="250"
                        strokeDasharray="3,3"
                      />
                      <line
                        x1="645"
                        y1="250"
                        x2="765"
                        y2="180"
                        strokeDasharray="3,3"
                      />

                      {/* Learning symbols */}
                      <rect
                        x="150"
                        y="100"
                        width="100"
                        height="60"
                        rx="8"
                        strokeDasharray="2,2"
                      />
                      <polygon
                        points="750,100 800,80 850,100 800,120"
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
                      <path d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z" />
                    </svg>
                  </div>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Experiência de{" "}
                  <span className="text-yellow-300">Aprendizado</span>{" "}
                  Transformadora
                </h2>

                <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8">
                  Na nossa jornada para viabilizar negócios seguros, acreditamos
                  que compartilhar conhecimento é promover o desenvolvimento. A
                  nossa academia é uma extensão dessa missão, proporcionando uma
                  base sólida para um futuro cibernético seguro. Conte conosco
                  não apenas para proteger seus negócios, mas também para
                  capacitá-lo continuamente.
                </p>

                <div className="flex justify-center items-center space-x-12">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
                    <span className="text-white font-medium">Conhecimento</span>
                  </div>
                  <div className="text-white text-2xl">🎓</div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse animation-delay-500"></div>
                    <span className="text-white font-medium">Prática</span>
                  </div>
                  <div className="text-white text-2xl">🛡️</div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-blue-400 rounded-full animate-pulse animation-delay-1000"></div>
                    <span className="text-white font-medium">Proteção</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Principais <span className="text-primary">Características</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mainFeatures.map((feature, index) => (
              <div
                key={index}
                className="group bg-black/20 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="flex items-start gap-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Modalities Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Conheça as modalidades de nossos{" "}
              <span className="text-primary">Cursos Especializados</span> em
              Cibersegurança
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courseModalities.map((modality, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="flex items-start gap-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${modality.color} rounded-2xl flex items-center justify-center text-2xl text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {modality.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
                      {modality.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {modality.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Trilha de <span className="text-primary">Aprendizado</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                level: "Básico",
                title: "Fundamentos",
                description:
                  "Introdução aos conceitos básicos de cibersegurança",
                icon: "📚",
                duration: "40h",
              },
              {
                level: "Intermediário",
                title: "Práticas",
                description: "Implementação de práticas de segurança",
                icon: "🛠️",
                duration: "60h",
              },
              {
                level: "Avançado",
                title: "Especialização",
                description: "Técnicas avançadas e especializações",
                icon: "🎯",
                duration: "80h",
              },
              {
                level: "Expert",
                title: "Liderança",
                description: "Liderança em segurança cibernética",
                icon: "👑",
                duration: "120h",
              },
            ].map((level, index) => (
              <div
                key={index}
                className="group text-center bg-black/20 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="text-primary text-sm font-bold mb-4">
                  {level.level}
                </div>
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {level.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                  {level.title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  {level.description}
                </p>
                <div className="text-primary font-bold">{level.duration}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Benefícios Principais{" "}
              <span className="text-primary">Imediatos</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Investir em treinamento em Cibersegurança é investir na proteção e
              no sucesso contínuo de sua organização no mundo digital. Capacite
              sua equipe hoje para enfrentar os desafios de amanhã.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="flex items-start gap-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center text-2xl text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-blue-500 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Transforme Sua Equipe em Guardiões Digitais
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Entre em contato conosco e descubra como nossa Academia de
            Cibersegurança pode fortalecer as defesas digitais da sua
            organização.
          </p>
          <button className="bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl">
            Iniciar Treinamento
          </button>
        </div>
      </section>
    </div>
  );
};

export default Academy;
