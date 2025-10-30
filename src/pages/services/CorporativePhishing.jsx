import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CorporativePhishing = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const benefits = [
    {
      title: "Criação e Execução de Campanhas",
      description:
        "Desenvolvemos e executamos campanhas personalizadas de conscientização em segurança cibernética.",
      icon: "🎯",
      gradient: "from-cyan-400 to-blue-500",
    },
    {
      title: "Disparo de Comunicados",
      description:
        "Sistema automatizado para envio de comunicações importantes sobre segurança para toda a organização.",
      icon: "📧",
      gradient: "from-blue-400 to-indigo-500",
    },
    {
      title: "Testes de Simulações",
      description:
        "Realizamos simulações realistas de ataques phishing para avaliar a preparação da equipe.",
      icon: "🎭",
      gradient: "from-indigo-400 to-purple-500",
    },
    {
      title: "Engajamento com QUIZ",
      description:
        "Quizzes interativos para testar e reforçar o conhecimento em segurança cibernética.",
      icon: "🧩",
      gradient: "from-purple-400 to-pink-500",
    },
    {
      title: "Aplicação de Compliance",
      description:
        "Garantimos que todas as práticas estejam em conformidade com regulamentações e padrões de segurança.",
      icon: "✅",
      gradient: "from-pink-400 to-red-500",
    },
    {
      title: "Acesso às Campanhas",
      description:
        "Plataforma centralizada para acessar todas as campanhas e materiais de treinamento.",
      icon: "🔗",
      gradient: "from-red-400 to-orange-500",
    },
    {
      title: "Aceites On-Line",
      description:
        "Sistema digital para registrar aceites e confirmações de políticas de segurança.",
      icon: "📝",
      gradient: "from-orange-400 to-yellow-500",
    },
    {
      title: "Aprimoramento Contínuo",
      description:
        "Processo iterativo de melhoria baseado em feedback e resultados das campanhas.",
      icon: "🔄",
      gradient: "from-yellow-400 to-green-500",
    },
    {
      title: "Consciência de Segurança",
      description:
        "Desenvolvimento de uma cultura organizacional voltada para a segurança cibernética.",
      icon: "🧠",
      gradient: "from-green-400 to-cyan-500",
    },
  ];

  const features = [
    {
      title: "Simulações Realistas",
      description:
        "Criamos simulações de phishing que replicam ameaças reais, preparando sua equipe para situações do mundo real.",
      icon: "🎯",
      color: "from-cyan-500 to-blue-600",
    },
    {
      title: "Análise Comportamental",
      description:
        "Monitoramos e analisamos o comportamento dos funcionários durante as simulações para identificar vulnerabilidades.",
      icon: "📊",
      color: "from-blue-500 to-indigo-600",
    },
    {
      title: "Relatórios Detalhados",
      description:
        "Fornecemos relatórios abrangentes com métricas, tendências e recomendações personalizadas.",
      icon: "📋",
      color: "from-indigo-500 to-purple-600",
    },
    {
      title: "Treinamento Personalizado",
      description:
        "Desenvolvemos programas de treinamento adaptados às necessidades específicas da sua organização.",
      icon: "🎓",
      color: "from-purple-500 to-pink-600",
    },
    {
      title: "Campanhas Direcionadas",
      description:
        "Criamos campanhas específicas para diferentes departamentos e níveis hierárquicos.",
      icon: "🎪",
      color: "from-pink-500 to-red-600",
    },
    {
      title: "Monitoramento Contínuo",
      description:
        "Acompanhamento constante da evolução da consciência de segurança na organização.",
      icon: "📡",
      color: "from-red-500 to-orange-600",
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
                Mais que segurança, um ecossistema de conscientização em
                cibersegurança para sua equipe
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="text-primary">SPEAR PHISHING</span>
                <br />
                <span className="text-2xl md:text-3xl">CORPORATIVO</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                A inteligência artificial com a humana contra o spear phishing
                corporativo
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
                No cenário do cibercrime, é recorrente a comercialização de
                propriedade intelectual de corporações comprometidas
                globalmente. Ataques direcionados aos funcionários das empresas,
                por meio de táticas de Phishing, destacam-se como uma ameaça
                proeminente. Essas ações resultam na exposição de dados
                sensíveis e na vulnerabilidade dos ativos de rede da
                organização-alvo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-cyan-500 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full"></div>
                <div className="absolute bottom-10 right-10 w-24 h-24 border-2 border-white rounded-full"></div>
                <div className="absolute top-20 right-20 w-16 h-16 bg-white/20 rounded-full"></div>
              </div>

              <div className="relative z-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-12">
                <div className="flex items-center justify-center mb-8">
                  <div className="bg-white/20 p-6 rounded-2xl">
                    <svg
                      className="w-16 h-16 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2L2 7V10C2 16 6 20.9 12 22C18 20.9 22 16 22 10V7L12 2Z" />
                    </svg>
                  </div>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Proteja-se Contra{" "}
                  <span className="text-yellow-300">Phishing</span>
                </h2>

                <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
                  A nossa solução SaaS constitui um ecossistema abrangente, que
                  difunde o conhecimento de segurança, privacidade e
                  conformidade, transcendendo barreiras e promovendo uma postura
                  defensiva eficaz contra ameaças, incluindo o spear phishing
                  corporativo.
                </p>

                <div className="flex justify-center items-center mt-8 space-x-8">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-yellow-300 rounded-full animate-pulse"></div>
                    <span className="text-white font-medium">
                      Proteção Ativa
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-yellow-300 rounded-full animate-pulse animation-delay-300"></div>
                    <span className="text-white font-medium">
                      Conscientização
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-yellow-300 rounded-full animate-pulse animation-delay-600"></div>
                    <span className="text-white font-medium">Conformidade</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              BENEFÍCIOS PARA AS <span className="text-primary">EMPRESAS</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-black/20 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 text-center"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${benefit.gradient} rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto`}
                >
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 uppercase">
              Nossa <span className="text-primary">Abordagem</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Combinamos tecnologia avançada com metodologias comprovadas para
              criar um ambiente de aprendizado eficaz e engajador.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 text-center"
              >
                <div className="flex flex-col items-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center text-2xl text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300 mb-6`}
                  >
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
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
                label: "Redução em Cliques Suspeitos",
                icon: "📊",
              },
              { number: "80%", label: "Melhoria na Detecção", icon: "🎯" },
              {
                number: "90%",
                label: "Engajamento em Treinamentos",
                icon: "🎓",
              },
              { number: "100%", label: "Conformidade Regulatória", icon: "✅" },
            ].map((stat, index) => (
              <div
                key={index}
                className="group text-center bg-black/20 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-primary mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                  {stat.number}
                </div>
                <p className="text-gray-300 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-cyan-500 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Fortaleça Sua Defesa Contra Phishing
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Entre em contato conosco e descubra como podemos proteger sua
            organização contra ataques de spear phishing corporativo.
          </p>
          <button
            className="bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl cursor-pointer"
            onClick={() => navigate("/contact")}
          >
            Iniciar Proteção
          </button>
        </div>
      </section>
    </div>
  );
};

export default CorporativePhishing;
