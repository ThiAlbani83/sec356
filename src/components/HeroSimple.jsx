const HeroSimple = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-backgrond to-gray-900">
      {/* Content Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
          <span className="block mb-2">Fortalecendo</span>
          <span className="block text-primary mb-4">Conexões Estratégicas</span>
          <span className="block text-base sm:text-lg lg:text-xl font-light text-gray-300">
            entre Inovação Científica e o Setor Produtivo
          </span>
        </h1>

        {/* Description */}
        <div className="max-w-4xl mx-auto space-y-6 mb-12">
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed">
            Conectamos o conhecimento científico à inovação tecnológica,
            oferecendo
            <span className="text-primary font-medium">
              {" "}
              soluções estratégicas
            </span>{" "}
            que impulsionam a segurança cibernética em empresas públicas e
            privadas.
          </p>

          <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
            Nosso foco é apoiar decisões críticas com base em análises de
            riscos, inteligência de dados e práticas avançadas de
            cibersegurança, entregando soluções e serviços inovadores que
            antecipam ameaças, fortalecem a resiliência digital e promovem a
            transformação segura em um mundo cada vez mais conectado.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button className="px-8 py-4 bg-primary text-black font-semibold rounded-lg transition-all duration-300 hover:bg-green-400 hover:shadow-lg hover:scale-105">
            Nossos Serviços
          </button>

          <button className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg transition-all duration-300 hover:bg-primary hover:text-black">
            Fale Conosco
          </button>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
              24/7
            </div>
            <div className="text-gray-300 text-sm sm:text-base">
              Monitoramento Contínuo
            </div>
          </div>
          <div className="text-center p-6">
            <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
              99.9%
            </div>
            <div className="text-gray-300 text-sm sm:text-base">
              Disponibilidade Garantida
            </div>
          </div>
          <div className="text-center p-6">
            <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
              +500
            </div>
            <div className="text-gray-300 text-sm sm:text-base">
              Empresas Protegidas
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSimple;
