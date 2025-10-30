import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MissionVisionValuesPurposes = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const pillars = [
    {
      title: "MISSÃO",
      icon: "🎯",
      gradient: "from-blue-500 to-cyan-600",
      content:
        "Dedicar-nos incansavelmente à proteção e preservação dos ativos digitais de nossos clientes. Estamos empenhados em construir um mundo cibernético seguro, onde a confiança é a base de cada interação digital. Estamos comprometidos em ser o guardião confiável dos dados e sistemas, contribuindo para um ambiente online resiliente e protegido contra as crescentes complexidades das ameaças cibernéticas.",
      keywords: ["Proteção", "Preservação", "Confiança", "Guardião Confiável"],
    },
    {
      title: "VISÃO",
      icon: "🔮",
      gradient: "from-purple-500 to-indigo-600",
      content:
        "Visualizamos um horizonte onde a SEC365 seja a melhor empresa parceira que melhor entende as necessidades de negócio dos nossos clientes, destacando-se pela capacidade de antecipar, adaptar e superar as ameaças digitais emergentes. Queremos ser reconhecidos não apenas como fornecedores de soluções, mas como arquitetos de confiança, moldando um futuro onde a segurança digital é uma constante na vida de empresas e indivíduos.",
      keywords: [
        "Melhor Parceira",
        "Antecipar",
        "Arquitetos de Confiança",
        "Futuro Seguro",
      ],
    },
    {
      title: "VALORES",
      icon: "💎",
      gradient: "from-green-500 to-teal-600",
      content:
        "Nossa visão é ser reconhecidos como parceiros na prestação de serviços de cibersegurança, destacando-nos pela excelência e inovação. Almejamos estar profundamente enraizados no cotidiano de nossos clientes, sendo a referência em soluções que garantem a integridade, confidencialidade e disponibilidade de seus dados e operações.",
      keywords: ["Excelência", "Inovação", "Referência", "Integridade"],
    },
    {
      title: "PROPÓSITOS",
      icon: "🌟",
      gradient: "from-orange-500 to-red-600",
      content:
        "Nossa razão de ser vai além da oferta de produtos e serviços. Buscamos ser uma plataforma que contribui ativamente para o desenvolvimento profissional e social em todas as regiões em que estamos inseridos. Queremos ser agentes de transformação positiva, capacitando as comunidades a prosperarem de maneira segura no vasto e dinâmico espaço cibernético.",
      keywords: [
        "Transformação",
        "Desenvolvimento",
        "Comunidades",
        "Prosperidade",
      ],
    },
  ];

  const coreAttributes = [
    {
      title: "Compromisso Inabalável",
      description: "Dedicação total à segurança cibernética",
      icon: "🛡️",
      color: "from-blue-500 to-cyan-600",
    },
    {
      title: "Visão Estratégica",
      description: "Antecipação das necessidades futuras",
      icon: "🎯",
      color: "from-purple-500 to-indigo-600",
    },
    {
      title: "Excelência Operacional",
      description: "Padrões elevados em todas as entregas",
      icon: "⭐",
      color: "from-green-500 to-teal-600",
    },
    {
      title: "Impacto Social",
      description: "Transformação positiva das comunidades",
      icon: "🌍",
      color: "from-orange-500 to-red-600",
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
                Características que nos definem
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                <span className="text-primary">MISSÃO, VISÃO,</span>
                <br />
                <span className="text-primary">VALORES E</span>
                <br />
                <span className="text-2xl md:text-3xl">PROPÓSITOS</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Na vanguarda da cibersegurança, apresentamos nossos compromissos
                inabaláveis em Cibersegurança
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Banner */}
      <section className="py-20 bg-gradient-to-br from-primary via-blue-500 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="relative">
              {/* Core values background elements */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full">
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 1000 400"
                    fill="none"
                  >
                    <g stroke="currentColor" strokeWidth="1.5">
                      {/* Foundation symbols */}
                      <rect
                        x="100"
                        y="150"
                        width="120"
                        height="100"
                        rx="10"
                        strokeDasharray="3,3"
                      />
                      <rect
                        x="300"
                        y="120"
                        width="120"
                        height="130"
                        rx="10"
                        strokeDasharray="3,3"
                      />
                      <rect
                        x="500"
                        y="140"
                        width="120"
                        height="110"
                        rx="10"
                        strokeDasharray="3,3"
                      />
                      <rect
                        x="700"
                        y="100"
                        width="120"
                        height="150"
                        rx="10"
                        strokeDasharray="3,3"
                      />

                      {/* Connection lines */}
                      <line
                        x1="220"
                        y1="200"
                        x2="300"
                        y2="185"
                        strokeDasharray="2,2"
                      />
                      <line
                        x1="420"
                        y1="185"
                        x2="500"
                        y2="195"
                        strokeDasharray="2,2"
                      />
                      <line
                        x1="620"
                        y1="195"
                        x2="700"
                        y2="175"
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
                      <path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z" />
                    </svg>
                  </div>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Nossos{" "}
                  <span className="text-yellow-300">Pilares Fundamentais</span>
                </h2>

                <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8">
                  Cada valor, cada visão e cada propósito que carregamos são os
                  alicerces que sustentam nossa excelência em cibersegurança e
                  nossa dedicação incansável aos nossos clientes.
                </p>

                <div className="flex justify-center items-center space-x-12">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
                    <span className="text-white font-medium">Compromisso</span>
                  </div>
                  <div className="text-white text-2xl">🎯</div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse animation-delay-500"></div>
                    <span className="text-white font-medium">Excelência</span>
                  </div>
                  <div className="text-white text-2xl">⭐</div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-blue-400 rounded-full animate-pulse animation-delay-1000"></div>
                    <span className="text-white font-medium">
                      Transformação
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Attributes Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 uppercase">
              Características que nos{" "}
              <span className="text-primary">Definem</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {coreAttributes.map((attribute, index) => (
              <div
                key={index}
                className="group text-center bg-gradient-to-br from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${attribute.color} rounded-2xl flex items-center justify-center text-2xl text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {attribute.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
                  {attribute.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {attribute.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Pillars Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content Side */}
                <div className="flex-1">
                  <div className="bg-black/20 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 hover:border-primary/50 transition-all duration-300">
                    <div className="flex items-center mb-6">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${pillar.gradient} rounded-2xl flex items-center justify-center text-2xl text-white mr-6`}
                      >
                        {pillar.icon}
                      </div>
                      <h3 className="text-3xl font-bold text-primary">
                        {pillar.title}
                      </h3>
                    </div>

                    <p className="text-gray-300 leading-relaxed text-lg mb-8">
                      {pillar.content}
                    </p>

                    {/* Keywords */}
                    <div className="flex flex-wrap gap-3">
                      {pillar.keywords.map((keyword, keyIndex) => (
                        <span
                          key={keyIndex}
                          className={`px-4 py-2 bg-gradient-to-r ${pillar.gradient} bg-opacity-20 text-white rounded-full text-sm font-medium border border-white/20`}
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Visual Side */}
                <div className="flex-1 flex justify-center">
                  <div className="relative">
                    <div
                      className={`w-80 h-80 bg-gradient-to-br ${pillar.gradient} rounded-3xl flex items-center justify-center relative overflow-hidden group`}
                    >
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div
                          className="absolute inset-0"
                          style={{
                            backgroundImage: `
                              linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%),
                              linear-gradient(-45deg, rgba(255,255,255,0.1) 25%, transparent 25%),
                              linear-gradient(45deg, transparent 75%, rgba(255,255,255,0.1) 75%),
                              linear-gradient(-45deg, transparent 75%, rgba(255,255,255,0.1) 75%)
                            `,
                            backgroundSize: "40px 40px",
                            backgroundPosition:
                              "0 0, 0 20px, 20px -20px, -20px 0px",
                          }}
                        ></div>
                      </div>

                      {/* Center Icon */}
                      <div className="relative z-10 text-8xl text-white group-hover:scale-110 transition-transform duration-300">
                        {pillar.icon}
                      </div>

                      {/* Floating Elements */}
                      <div className="absolute top-6 right-6 w-6 h-6 bg-white/20 rounded-full animate-pulse"></div>
                      <div className="absolute bottom-8 left-8 w-4 h-4 bg-white/30 rounded-full animate-bounce"></div>
                      <div
                        className="absolute bottom-12 right-12 w-5 h-5 bg-white/25 rounded-full animate-pulse"
                        style={{ animationDelay: "1s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 uppercase">
              Nosso <span className="text-primary">Impacto</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                metric: "100%",
                label: "Compromisso com a Segurança",
                icon: "🛡️",
                gradient: "from-blue-500 to-cyan-600",
              },
              {
                metric: "24/7",
                label: "Proteção Contínua",
                icon: "🔒",
                gradient: "from-purple-500 to-indigo-600",
              },
              {
                metric: "∞",
                label: "Potencial de Crescimento",
                icon: "📈",
                gradient: "from-green-500 to-teal-600",
              },
              {
                metric: "360°",
                label: "Visão Completa",
                icon: "🌐",
                gradient: "from-orange-500 to-red-600",
              },
            ].map((impact, index) => (
              <div
                key={index}
                className="group text-center bg-gradient-to-br from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${impact.gradient} rounded-2xl flex items-center justify-center text-2xl text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {impact.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
                  {impact.metric}
                </div>
                <div className="text-gray-600">{impact.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-blue-500 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Conheça Nossos Valores em Ação
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Descubra como nossa missão, visão, valores e propósitos se traduzem
            em resultados excepcionais para sua organização.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl cursor-pointer"
          >
            Conhecer Mais
          </button>
        </div>
      </section>
    </div>
  );
};

export default MissionVisionValuesPurposes;
