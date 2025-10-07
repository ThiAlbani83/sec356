import React, { useState, useEffect } from "react";

const LgpdDpo = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const ourSkills = [
    {
      title: "Advogados especializados na LGPD",
      description: "Nosso time dispõe de Advogados especializados na LGPD.",
      icon: "⚖️",
      gradient: "from-blue-400 to-indigo-500",
    },
    {
      title: "Cientistas de Tecnologia especialistas na LGPD",
      description: "Time de Cientistas de Tecnologia especialistas na LGPD.",
      icon: "💻",
      gradient: "from-indigo-400 to-purple-500",
    },
    {
      title: "Experiência em Privacidade e Segurança da Informação",
      description:
        "Expertise consolidada em Privacidade e Segurança da Informação.",
      icon: "🛡️",
      gradient: "from-purple-400 to-pink-500",
    },
    {
      title: "Gestão de Riscos e Análise de Impacto",
      description:
        "Capacidade avançada em Gestão de Riscos e Análise de Impacto.",
      icon: "📊",
      gradient: "from-pink-400 to-red-500",
    },
    {
      title: "Elaborar Políticas e Procedimentos",
      description:
        "Capacidade de Elaborar Políticas e Procedimentos organizacionais.",
      icon: "📋",
      gradient: "from-red-400 to-orange-500",
    },
    {
      title: "Treinamento e Conscientização",
      description:
        "Capacidade de Treinamento e Conscientização organizacional.",
      icon: "🎓",
      gradient: "from-orange-400 to-yellow-500",
    },
    {
      title: "Gerenciamento de Incidentes de Privacidade",
      description:
        "Especialização em Gerenciamento de Incidentes de Privacidade.",
      icon: "🚨",
      gradient: "from-yellow-400 to-green-500",
    },
    {
      title: "Comunicação e Atualização Constante",
      description: "Habilidades de Comunicação e Atualização Constante.",
      icon: "📢",
      gradient: "from-green-400 to-cyan-500",
    },
  ];

  const dpoAdvantages = [
    {
      title: "Redução de Custos",
      description:
        "Redução dos custos relacionados a salários e encargos trabalhistas",
      icon: "💰",
    },
    {
      title: "Profissionais Especializados",
      description:
        "Contratação de profissionais com expertise em Cibersegurança e formação jurídica (certificados pela OAB)",
      icon: "👨‍💼",
    },
    {
      title: "Economia em Treinamento",
      description: "Economia nos custos de treinamento de colaboradores",
      icon: "📚",
    },
    {
      title: "Eliminação de Conflitos",
      description:
        "Eliminação de possíveis conflitos de interesse dentro da organização",
      icon: "🤝",
    },
    {
      title: "Monitoramento Constante",
      description:
        "Monitoramento constante do Programa de Governança em Privacidade",
      icon: "📡",
    },
  ];

  const dpoResponsibilities = [
    {
      title: "Receber Reclamações",
      description:
        "Receber reclamações e comunicações dos titulares de dados, fornecendo esclarecimentos e tomando as medidas necessárias.",
      icon: "📞",
    },
    {
      title: "Comunicação com ANPD",
      description:
        "Receber comunicações da autoridade nacional de proteção de dados e agir de acordo com as diretrizes.",
      icon: "🏛️",
    },
    {
      title: "Orientação de Funcionários",
      description:
        "Orientar os funcionários e contratados da organização sobre as melhores práticas em relação à proteção de dados pessoais.",
      icon: "👥",
    },
    {
      title: "Outras Atribuições",
      description:
        "Executar outras atribuições definidas pelo controlador de dados ou estabelecidas em regulamentos complementares.",
      icon: "📝",
    },
  ];

  const dpoFunctions = [
    {
      title: "Gestão do Programa de Governança em Privacidade",
      icon: "🏗️",
      color: "from-blue-500 to-indigo-600",
    },
    {
      title:
        "Avaliação de riscos relacionados à proteção de dados pessoais e segurança da informação",
      icon: "⚠️",
      color: "from-indigo-500 to-purple-600",
    },
    {
      title:
        "Formulação de respostas às solicitações dos titulares de dados pessoais e da ANPD",
      icon: "💬",
      color: "from-purple-500 to-pink-600",
    },
    {
      title:
        "Mediação entre os titulares de dados pessoais, a organização e a ANPD",
      icon: "⚖️",
      color: "from-pink-500 to-red-600",
    },
    {
      title: "Mapeamento do Ciclo de Vida de Dados Pessoais",
      icon: "🔄",
      color: "from-red-500 to-orange-600",
    },
    {
      title:
        "Elaboração do Registro das Operações de Tratamento de Dados Pessoais",
      icon: "📊",
      color: "from-orange-500 to-yellow-600",
    },
    {
      title: "Identificação de não conformidades legais",
      icon: "🔍",
      color: "from-yellow-500 to-green-600",
    },
    {
      title: "Realização de treinamentos e capacitações para colaboradores",
      icon: "🎓",
      color: "from-green-500 to-cyan-600",
    },
    {
      title:
        "Elaboração de Relatórios de Impacto de Proteção de Dados Pessoais e Testes do Legítimo Interesse",
      icon: "📋",
      color: "from-cyan-500 to-blue-600",
    },
  ];

  const whyChooseUs = [
    {
      title: "Resultados sob Medida",
      description:
        "Entregamos resultados concretos por meio de projetos adaptados às necessidades reais de sua organização.",
      icon: "🎯",
      color: "from-blue-500 to-indigo-600",
    },
    {
      title: "Experiência Abundante",
      description:
        "Contamos com uma equipe experiente e qualificada nos campos da Lei Geral de Proteção de Dados Pessoais (LGPD), Segurança da Informação, Compliance e Governança Corporativa.",
      icon: "🏆",
      color: "from-indigo-500 to-purple-600",
    },
    {
      title: "Metodologia Flexível",
      description:
        "Utilizamos nossa própria metodologia, sempre personalizada para se ajustar ao modelo de negócios de nossos clientes.",
      icon: "🔧",
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
                CONSTRUINDO UM PROGRAMA DE PRIVACIDADE EM CONFORMIDADE COM A
                LGPD
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="text-primary">GOVERNANÇA LGPD</span>
                <br />
                <span className="text-2xl md:text-3xl">COM DPaaS</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Implementação LGPD com DPOaaS, uma questão de responsabilidade
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
                Desenvolvemos um abrangente serviço de Governança LGPD com a
                disponibilidade de atuação de profissionais para a função DPO,
                dedicado a estruturar um programa de privacidade organizacional
                que guiará sua empresa em todas as fases de conformidade com a
                Lei Geral de Proteção de Dados (LGPD – Lei 13.709/2018). A
                adequação a esta legislação tornou-se imperativa para todas as
                entidades, independentemente de sua natureza ser pública ou
                privada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Skills Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              NOSSAS <span className="text-primary">HABILIDADES</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Desempenhamos um papel eficaz na garantia da conformidade contínua
              com a LGPD e na proteção dos direitos e privacidade dos titulares
              de dados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ourSkills.map((skill, index) => (
              <div
                key={index}
                className="group bg-black/20 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${skill.gradient} rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {skill.icon}
                </div>
                <h3 className="text-lg font-bold text-primary mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                  {skill.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DPOaaS Advantages Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Você já considerou as vantagens da terceirização das funções de um{" "}
              <span className="text-primary">DPOaaS?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Aqui estão alguns dos benefícios que essa abordagem pode oferecer:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dpoAdvantages.map((advantage, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why DPO is Fundamental Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-blue-500 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Por que nomear o DPO é{" "}
              <span className="text-yellow-300">fundamental?</span>
            </h2>
            <p className="text-xl text-white/90 max-w-4xl mx-auto mb-8">
              A resposta é simples: Para garantir a conformidade com a LGPD, A
              designação de um DPO é um requisito legal, e o DPO tem diversas
              responsabilidades, incluindo:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dpoResponsibilities.map((responsibility, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="flex items-start gap-6">
                  <div className="text-4xl text-yellow-300 group-hover:scale-110 transition-transform duration-300">
                    {responsibility.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-yellow-300 transition-colors duration-300">
                      {responsibility.title}
                    </h3>
                    <p className="text-white/80 leading-relaxed">
                      {responsibility.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DPO Functions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Quais são as nossas funções como{" "}
              <span className="text-primary">DPOaaS</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              CONHEÇA NOSSAS FUNÇÕES APLICADAS SENDO DPO AS A SERVICE JUNTO A
              SUA EMPRESA.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dpoFunctions.map((func, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="flex items-start gap-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${func.color} rounded-2xl flex items-center justify-center text-2xl text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {func.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
                      {func.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              DESCUBRA AS RAZÕES PARA ESCOLHER NOSSO SERVIÇO DE{" "}
              <span className="text-primary">DPOaaS</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              A SEC365 é uma empresa de consultoria empresarial altamente
              especializada em oferecer soluções personalizadas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((reason, index) => (
              <div
                key={index}
                className="group bg-black/20 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="text-center">
                  <div
                    className={`w-20 h-20 bg-gradient-to-r ${reason.color} rounded-2xl flex items-center justify-center text-3xl text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {reason.icon}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                    {reason.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {reason.description}
                  </p>
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
            Garanta a Conformidade LGPD Agora
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Entre em contato conosco e descubra como nosso serviço de DPOaaS
            pode garantir a conformidade completa da sua organização com a LGPD.
          </p>
          <button className="bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl">
            Solicitar Consultoria
          </button>
        </div>
      </section>
    </div>
  );
};

export default LgpdDpo;
