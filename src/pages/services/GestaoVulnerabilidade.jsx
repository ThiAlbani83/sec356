import React, { useState, useEffect } from "react";

const GestaoVulnerabilidade = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const benefits = [
    { title: "Maior Segurança", percentage: "100%" },
    { title: "Melhoria Contínua", percentage: "100%" },
    { title: "Redução de Riscos", percentage: "100%" },
    { title: "Foco no Core Business", percentage: "100%" },
    { title: "Eficiência Operacional", percentage: "100%" },
    { title: "Adaptação às Mudanças", percentage: "100%" },
    { title: "Economia de Custos", percentage: "100%" },
    { title: "Prevenção de Interrupções", percentage: "100%" },
    { title: "Proteção da Reputação", percentage: "100%" },
    { title: "Tempo de Resposta Rápido", percentage: "100%" }
  ];

  const processSteps = [
    {
      title: "Identificação e Inventário de Ativos",
      icon: "🔍",
      gradient: "from-cyan-400 to-blue-500"
    },
    {
      title: "Detecção de Vulnerabilidades",
      icon: "🎯",
      gradient: "from-blue-400 to-indigo-500"
    },
    {
      title: "Avaliação de Risco por Pontuação e EPSS",
      icon: "📊",
      gradient: "from-indigo-400 to-purple-500"
    },
    {
      title: "Elaboração e Formulação do Plano de Remediação",
      icon: "📋",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      title: "Execução e Monitoramento",
      icon: "⚙️",
      gradient: "from-pink-400 to-red-500"
    },
    {
      title: "Ação e Controle das Vulnerabilidades",
      icon: "🛡️",
      gradient: "from-red-400 to-orange-500"
    },
    {
      title: "Apresentação e Entregas dos Resultados",
      icon: "📈",
      gradient: "from-orange-400 to-yellow-500"
    },
    {
      title: "Aprendizado e Aprimoramento Contínuo",
      icon: "🎓",
      gradient: "from-yellow-400 to-green-500"
    },
    {
      title: "Ciclo Contínuo de Controle das Vulnerabilidades",
      icon: "🔄",
      gradient: "from-green-400 to-cyan-500"
    }
  ];

  const mainBenefits = [
    {
      title: "Identificação Rápida de Vulnerabilidades",
      description: "A Gestão Contínua de Vulnerabilidades permite a identificação rápida e precisa de vulnerabilidades nos sistemas, aplicativos e infraestrutura, possibilitando uma resposta imediata para mitigar esses riscos.",
      icon: "⚡",
      color: "from-cyan-500 to-blue-600"
    },
    {
      title: "Minimização do Tempo de Exposição",
      description: "Ao detectar e corrigir vulnerabilidades de maneira ágil, a organização reduz significativamente o tempo em que seus sistemas estão expostos a potenciais explorações, diminuindo a janela de oportunidade para ataques.",
      icon: "⏱️",
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Priorização Eficiente de Correções",
      description: "A ferramenta de Gestão de Vulnerabilidades classifica e prioriza as vulnerabilidades com base em sua gravidade e no potencial impacto nos negócios. Isso permite que a equipe de segurança concentre seus esforços nas correções mais críticas e urgentes.",
      icon: "🎯",
      color: "from-indigo-500 to-purple-600"
    },
    {
      title: "Conformidade com Padrões de Segurança",
      description: "A Gestão Contínua de Vulnerabilidades auxilia na manutenção da conformidade com regulamentações e padrões de segurança, fornecendo evidências das ações tomadas para mitigar riscos.",
      icon: "✅",
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Aprimoramento da Postura de Segurança",
      description: "Ao abordar regularmente as vulnerabilidades, a organização melhora continuamente sua postura de segurança, fortalecendo as defesas contra ameaças conhecidas e emergentes.",
      icon: "🛡️",
      color: "from-pink-500 to-red-600"
    },
    {
      title: "Redução de Riscos e Custos Associados",
      description: "A rápida identificação e correção de vulnerabilidades contribuem para a redução do risco de incidentes de segurança e dos custos associados à recuperação após uma violação.",
      icon: "💰",
      color: "from-red-500 to-orange-600"
    },
    {
      title: "Ganhos de Eficiência Operacional",
      description: "A automação de processos na Gestão Contínua de Vulnerabilidades proporciona ganhos de eficiência, liberando a equipe de segurança para focar em tarefas mais estratégicas e na resposta a ameaças mais avançadas.",
      icon: "⚙️",
      color: "from-orange-500 to-yellow-600"
    },
    {
      title: "Aumento da Consciência de Segurança",
      description: "A organização desenvolve uma cultura de segurança proativa, promovendo a conscientização sobre a importância da manutenção contínua da segurança cibernética em todos os níveis da empresa.",
      icon: "🧠",
      color: "from-yellow-500 to-green-600"
    }
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
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/20">
                A chave para um futuro protegido
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="text-primary">GESTÃO ATIVA</span> DE VULNERABILIDADES
              </h1>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Na vanguarda da cibersegurança, apresentamos nossa abordagem distintiva e compromisso inabalável em proteger seus ativos digitais
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

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl shadow-lg">
              <p className="text-gray-700 leading-relaxed text-lg text-center">
                Nossa solução oferece a capacidade de identificar, diagnosticar e remediar as vulnerabilidades presentes nos seus ativos de TI, independentemente de serem em ambientes de nuvem, locais (on-premise), dispositivos endpoints, e outros. É um sistema completo de administração de vulnerabilidades fundamentado na avaliação de riscos. Tenha a tranquilidade de saber que sua empresa está preparada para se defender de ciberataques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              BENEFÍCIOS PARA A SUA <span className="text-primary">EMPRESA</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-black/20 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="text-center">
                  <h3 className="text-white font-bold text-lg mb-4 group-hover:text-primary transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <div className="text-4xl font-bold text-primary mb-2">
                    {benefit.percentage}
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-primary to-cyan-400 h-2 rounded-full w-full"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              NOSSO <span className="text-primary">PROCESSO</span>
            </h2>
            <p className="text-xl text-gray-600 font-semibold">
              PROTEGENDO ATIVOS COM EFICIÊNCIA E ESTRATÉGIA
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${step.gradient} rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                      {step.icon}
                    </div>
                    <div className="text-3xl font-bold text-gray-300 group-hover:text-primary transition-colors duration-300">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Benefícios Principais <span className="text-primary">Imediatos</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              O serviço de Gestão Ativa de Vulnerabilidades da SEC365 oferece uma abordagem pró-ativa para a segurança cibernética, resultando em uma postura robusta, menor exposição a ameaças e maior capacidade de resposta a incidentes de segurança.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mainBenefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-black/20 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="flex items-start gap-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center text-2xl text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
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
            Proteja Seus Ativos Digitais Agora
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Entre em contato conosco e descubra como nossa Gestão Ativa de Vulnerabilidades pode fortalecer a segurança da sua organização.
          </p>
          <button className="bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl">
            Solicitar Avaliação
          </button>
        </div>
      </section>
    </div>
  );
};

export default GestaoVulnerabilidade;
