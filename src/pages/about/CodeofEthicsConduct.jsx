import React, { useState, useEffect } from "react";

const CodeofEthicsConduct = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const principlesData = [
    {
      title: "Com nossos colaboradores",
      icon: "👥",
      content:
        "Na SEC365, promovemos um ambiente inclusivo e colaborativo, onde todas as vozes são ouvidas e respeitadas. Não existem barreiras hierárquicas que limitem o compartilhamento de ideias e opiniões. Valorizamos a integração e reconhecemos que momentos de integração são essenciais para o nosso sucesso.",
      color: "from-blue-500 to-cyan-600",
    },
    {
      title: "Com nossos clientes",
      icon: "🤝",
      content:
        "Nosso compromisso com os clientes vai além da entrega de serviços de qualidade. Buscamos construir relações baseadas na confiança, gentileza e transparência. Nossa equipe está sempre pronta para ouvir, entender e ajudar nossos clientes a alcançarem seus objetivos.",
      color: "from-green-500 to-teal-600",
    },
    {
      title: "Com a sociedade",
      icon: "🌍",
      content:
        "Almejamos impactar positivamente a sociedade por meio da nossa atuação em Segurança da Informação. Buscamos desenvolver negócios de forma sustentável e contribuir para o crescimento das comunidades onde operamos.",
      color: "from-purple-500 to-indigo-600",
    },
    {
      title: "Com a concorrência",
      icon: "⚖️",
      content:
        "Na SEC365, competimos de forma justa e ética. Respeitamos os concorrentes e agimos dentro dos limites da lei e dos princípios do livre mercado.",
      color: "from-orange-500 to-red-600",
    },
    {
      title: "Com o meio ambiente",
      icon: "🌱",
      content:
        "Cumprimos todas as leis e regulamentações ambientais e buscamos promover o desenvolvimento sustentável em todas as nossas atividades.",
      color: "from-green-400 to-emerald-600",
    },
  ];

  const workplaceData = [
    {
      title: "Responsabilidade dos colaboradores",
      content:
        "Cada colaborador é responsável por agir em conformidade com a lei e os valores éticos da empresa. É fundamental participar de treinamentos e atividades relacionadas ao Código de Ética e Conduta e relatar quaisquer situações que possam violá-lo.",
    },
    {
      title: "Saúde e segurança",
      content:
        "Priorizamos a saúde e a segurança de todos os colaboradores. Embora incentivemos a celebração, é importante fazê-lo com moderação e responsabilidade. O uso de substâncias ilegais ou armas de fogo nos nossos escritórios é estritamente proibido.",
    },
    {
      title: "Antiassédio",
      content:
        "Não toleramos nenhum tipo de assédio ou comportamento desrespeitoso no ambiente de trabalho. Todos os colaboradores devem se sentir seguros e respeitados.",
    },
    {
      title: "Não discriminação",
      content:
        "Valorizamos a diversidade e tratamos todos os colaboradores com justiça e dignidade, independentemente de características individuais.",
    },
    {
      title: "Vestimenta (Dress code)",
      content:
        "Adotamos um dress code casual para o dia a dia e informal de negócios para reuniões, sempre mantendo uma postura adequada.",
    },
    {
      title: "Home Office",
      content:
        "Autorizamos o trabalho remoto, desde que os colaboradores sigam as diretrizes do Código de Ética e Conduta.",
    },
  ];

  const integrityData = [
    {
      title: "Conflito de interesses",
      content:
        "Evitamos situações de conflito de interesses e atuamos sempre em prol dos nossos clientes e parceiros.",
    },
    {
      title: "Brindes, presentes, refeições, hospitalidade e entretenimento",
      content:
        "Oferecemos e aceitamos cortesias de forma ética e transparente, sem influenciar decisões comerciais.",
    },
    {
      title: "Corrupção, suborno e propina",
      content:
        "Repudiamos qualquer forma de corrupção e agimos em conformidade com as leis anticorrupção.",
    },
    {
      title: "Informações privilegiadas",
      content:
        "Não compartilhamos informações privilegiadas dentro da empresa e respeitamos as práticas concorrenciais.",
    },
    {
      title: "Lavagem de dinheiro",
      content:
        "Atuamos contra a lavagem de dinheiro e verificamos a legitimidade dos clientes e parceiros.",
    },
    {
      title: "Privacidade de dados",
      content:
        "Tratamos as informações pessoais com sigilo e segurança, em conformidade com as leis de proteção de dados.",
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
                Ética é o alicerce da SEC365
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                <span className="text-primary">CÓDIGO DE ÉTICA</span>
                <br />
                <span className="text-2xl md:text-3xl">E CONDUTA</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Cada ação reflete nossos valores: agimos com responsabilidade e
                respeito em todos os momentos
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary/5 to-blue-50 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Nosso Compromisso com a{" "}
              <span className="text-primary">Ética</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Como parte do compromisso da SEC365 com a ética e a integridade em
              todas as suas operações, apresentamos nosso Código de Ética e
              Conduta para orientar suas ações e decisões enquanto estiver
              contribuindo para o sucesso da nossa empresa.
            </p>
          </div>
        </div>
      </section>

      {/* 1. Princípios de Conduta Corporativa */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              1. PRINCÍPIOS DE{" "}
              <span className="text-primary">CONDUTA CORPORATIVA</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {principlesData.map((principle, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${principle.color} rounded-2xl flex items-center justify-center text-2xl text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {principle.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
                  {principle.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {principle.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. O Ambiente de Trabalho */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              2. O <span className="text-primary">AMBIENTE DE TRABALHO</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {workplaceData.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">
                    2.{index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Integridade nos Negócios */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              3. INTEGRIDADE NOS <span className="text-primary">NEGÓCIOS</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {integrityData.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-primary to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">
                    3.{index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Canal de Denúncias */}
      <section className="py-16 bg-gradient-to-br from-primary via-blue-500 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-12">
              <div className="flex items-center justify-center mb-8">
                <div className="bg-white/20 p-6 rounded-2xl">
                  <svg
                    className="w-16 h-16 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12,2C13.1,2 14,2.9 14,4C14,5.1 13.1,6 12,6C10.9,6 10,5.1 10,4C10,2.9 10.9,2 12,2M21,9V7L15,1H5C3.89,1 3,1.89 3,3V21A2,2 0 0,0 5,23H19A2,2 0 0,0 21,21V9M19,9H14V4H5V19H19V9Z" />
                  </svg>
                </div>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                4. CANAL DE <span className="text-yellow-300">DENÚNCIAS</span>
              </h2>

              <p className="text-xl text-white/90 leading-relaxed mb-8">
                Caso identifique qualquer violação ao Código de Ética e Conduta,
                reporte através do e-mail
                <span className="font-bold text-yellow-300">
                  {" "}
                  ouvidoria@SEC365.com.br
                </span>
                . Garantimos a confidencialidade das informações e tomaremos as
                medidas necessárias para investigar e resolver o problema.
              </p>

              <div className="flex justify-center items-center space-x-8">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
                  <span className="text-white font-medium">Confidencial</span>
                </div>
                <div className="text-white text-2xl">🔒</div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse animation-delay-500"></div>
                  <span className="text-white font-medium">Seguro</span>
                </div>
                <div className="text-white text-2xl">✅</div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-blue-400 rounded-full animate-pulse animation-delay-1000"></div>
                  <span className="text-white font-medium">Eficaz</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Summary */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Nossos <span className="text-primary">Valores Essenciais</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Integridade",
                icon: "⚖️",
                description: "Agimos com honestidade em todas as situações",
                color: "from-blue-500 to-cyan-600",
              },
              {
                title: "Respeito",
                icon: "🤝",
                description:
                  "Valorizamos a diversidade e tratamos todos com dignidade",
                color: "from-green-500 to-teal-600",
              },
              {
                title: "Transparência",
                icon: "🔍",
                description: "Mantemos comunicação clara e aberta",
                color: "from-purple-500 to-indigo-600",
              },
              {
                title: "Responsabilidade",
                icon: "🎯",
                description: "Assumimos nossos compromissos e obrigações",
                color: "from-orange-500 to-red-600",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="group text-center bg-gradient-to-br from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center text-2xl text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Compromisso com a Ética e Transparência
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Nosso Código de Ética e Conduta é mais que um documento - é nossa
            bússola moral que orienta cada decisão e ação.
          </p>
          <a
            href="mailto:ouvidoria@SEC365.com.br"
            className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-primary/90 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            📧 Canal de Denúncias
          </a>
        </div>
      </section>
    </div>
  );
};

export default CodeofEthicsConduct;
