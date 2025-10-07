import React, { useState, useEffect } from "react";

const SiemSaas = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const serviceFeatures = [
    {
      title: "Gestão de Eventos de Segurança",
      description:
        "Nossa solução SIEM como Serviço (SaaS) simplifica a gestão de eventos de segurança. Concentre-se em suas operações enquanto nossa plataforma monitora, analisa e correlaciona dados, identificando padrões que podem indicar possíveis ameaças. A gestão eficiente de eventos de segurança é a chave para uma postura de defesa robusta.",
      icon: "🛡️",
      gradient: "from-cyan-400 to-blue-500",
    },
    {
      title: "Monitoramento em Tempo Real",
      description:
        "Mantenha seu ambiente digital seguro com nosso SIEM na modalidade SaaS, que oferece monitoramento em tempo real. Detecte atividades suspeitas instantaneamente, permitindo uma resposta imediata a potenciais ameaças. Esteja sempre um passo à frente, protegendo seus ativos digitais com nossa tecnologia avançada de SIEM.",
      icon: "⚡",
      gradient: "from-blue-400 to-indigo-500",
    },
    {
      title: "Detecção Proativa de Ameaças",
      description:
        "Oferecemos uma abordagem proativa à cibersegurança com nosso SIEM na modalidade SaaS. Utilizando tecnologias avançadas, nossa solução identifica padrões de comportamento suspeitos, antecipando e neutralizando ameaças antes que causem impacto. Esteja à frente dos cibercriminosos com nossa detecção proativa de ameaças.",
      icon: "🎯",
      gradient: "from-indigo-400 to-purple-500",
    },
    {
      title: "Solução Ideal para sua Segurança Digital",
      description:
        "Garanta a proteção contínua de sua infraestrutura digital com nosso Serviço de SIEM com XDR na modalidade SaaS. Nossa solução oferece uma abordagem abrangente para a gestão de eventos e informações de segurança, proporcionando monitoramento em tempo real, detecção proativa de ameaças e resposta eficiente a incidentes.",
      icon: "💎",
      gradient: "from-purple-400 to-pink-500",
    },
    {
      title: "Resposta Rápida a Incidentes",
      description:
        "Nossa solução SIEM SaaS não apenas detecta ameaças, mas também proporciona uma resposta rápida a incidentes. Conte com uma equipe especializada pronta para agir assim que uma ameaça é identificada, minimizando o tempo de resposta e reduzindo os possíveis danos à sua infraestrutura digital.",
      icon: "🚀",
      gradient: "from-pink-400 to-red-500",
    },
    {
      title: "Relatórios e Insights Valiosos",
      description:
        "Obtenha uma visão clara da postura de segurança de sua organização com nossos relatórios detalhados e insights valiosos fornecidos pelo SIEM na modalidade SaaS. Compreenda as tendências, avalie a eficácia das políticas de segurança e esteja preparado para tomar decisões informadas para fortalecer sua postura de cibersegurança.",
      icon: "📊",
      gradient: "from-red-400 to-orange-500",
    },
  ];

  const mainBenefits = [
    {
      title: "Monitoramento Contínuo",
      description:
        "Obtenha visibilidade em tempo real sobre atividades de segurança, identificando ameaças no momento em que ocorrem.",
      icon: "📡",
      color: "from-cyan-500 to-blue-600",
    },
    {
      title: "Resposta Rápida a Incidentes",
      description:
        "Capacidade de reagir prontamente a ameaças, minimizando o impacto e reduzindo o tempo de exposição.",
      icon: "⚡",
      color: "from-blue-500 to-indigo-600",
    },
    {
      title: "Detecção Proativa",
      description:
        "Identifique padrões suspeitos e comportamentos anômalos, antecipando-se a possíveis ameaças antes que causem danos.",
      icon: "🔍",
      color: "from-indigo-500 to-purple-600",
    },
    {
      title: "Gestão Eficiente de Eventos",
      description:
        "Simplifique a gestão de eventos de segurança, otimizando processos e concentrando esforços nas áreas críticas.",
      icon: "⚙️",
      color: "from-purple-500 to-pink-600",
    },
    {
      title: "Proteção em Múltiplas Camadas",
      description:
        "Combine SIEM e XDR para uma abordagem abrangente, defendendo a infraestrutura em diversos níveis contra ameaças digitais.",
      icon: "🛡️",
      color: "from-pink-500 to-red-600",
    },
    {
      title: "Relatórios Detalhados e Insights Valiosos",
      description:
        "Tenha uma compreensão aprofundada da postura de segurança, com relatórios detalhados para embasar decisões estratégicas.",
      icon: "📈",
      color: "from-red-500 to-orange-600",
    },
  ];

  const techStack = [
    {
      name: "SIEM",
      description: "Security Information and Event Management",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "ERD",
      description: "Endpoint Detection and Response",
      color: "from-purple-500 to-blue-500",
    },
    {
      name: "XDR",
      description: "Extended Detection and Response",
      color: "from-pink-500 to-purple-500",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
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
                Mantenha-se um passo à frente das ameaças cibernéticas
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="text-primary">SIEM | ERD | XDR</span>
                <br />
                <span className="text-2xl md:text-3xl">SaaS</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Uma aliança invencível contra ameaças, proporcionando
                monitoramento em tempo real, detecção proativa e uma resposta
                imediata para fortalecer a segurança em cada rincão da sua
                infraestrutura de TI
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Visualization */}
      <section className="py-20 bg-gradient-to-br from-primary via-cyan-500 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Tecnologias <span className="text-yellow-300">Integradas</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {techStack.map((tech, index) => (
              <div key={index} className="group text-center">
                <div className="relative">
                  <div
                    className={`w-32 h-32 bg-gradient-to-r ${tech.color} rounded-full mx-auto mb-6 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300`}
                  >
                    <span className="text-3xl font-bold text-white">
                      {tech.name}
                    </span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full animate-ping"></div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {tech.name}
                </h3>
                <p className="text-white/80 text-lg">{tech.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-full px-8 py-4">
              <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
              <span className="text-white font-medium">
                Integração Completa
              </span>
              <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse animation-delay-500"></div>
              <span className="text-white font-medium">SaaS</span>
              <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse animation-delay-1000"></div>
              <span className="text-white font-medium">Tempo Real</span>
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
                Garanta a proteção contínua de sua infraestrutura digital com
                nossos serviços inteligentes na modalidade Software as a Service
                (SaaS). Nossa solução baseado em SIEM | XDR oferece uma
                abordagem ampla para a gestão de eventos e informações de
                segurança, proporcionando monitoramento em tempo real, detecção
                proativa de ameaças e resposta eficiente a incidentes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Visibilidade abrangente para um{" "}
              <span className="text-primary">mundo digital seguro</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceFeatures.map((feature, index) => (
              <div
                key={index}
                className="group bg-black/20 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
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
      <section className="py-20 bg-gradient-to-br from-primary via-cyan-500 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Proteja Sua Infraestrutura Agora
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Entre em contato conosco e descubra como nossa solução SIEM | ERD |
            XDR SaaS pode transformar a segurança da sua organização.
          </p>
          <button className="bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl">
            Começar Monitoramento
          </button>
        </div>
      </section>
    </div>
  );
};

export default SiemSaas;
