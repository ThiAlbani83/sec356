const HeroHex = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-backgrond via-gray-900 to-black overflow-hidden">
      {/* Hexagonal Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1200 800"
          fill="none"
        >
          <defs>
            {/* Hexagon Pattern */}
            <pattern
              id="hexPattern"
              x="0"
              y="0"
              width="60"
              height="52"
              patternUnits="userSpaceOnUse"
            >
              <polygon
                points="30,2 50,15 50,37 30,50 10,37 10,15"
                fill="none"
                stroke="#00ff94"
                strokeWidth="0.5"
                opacity="0.4"
              />
            </pattern>

            {/* Glowing Hexagons */}
            <pattern
              id="glowHex"
              x="0"
              y="0"
              width="120"
              height="104"
              patternUnits="userSpaceOnUse"
            >
              <polygon
                points="60,4 100,30 100,74 60,100 20,74 20,30"
                fill="none"
                stroke="#00ff94"
                strokeWidth="1"
                opacity="0.2"
              />
              <polygon
                points="60,12 92,34 92,66 60,88 28,66 28,34"
                fill="rgba(0,255,148,0.05)"
                stroke="#00ff94"
                strokeWidth="0.5"
                opacity="0.3"
              />
            </pattern>
          </defs>

          <rect width="100%" height="100%" fill="url(#hexPattern)" />
          <rect width="100%" height="100%" fill="url(#glowHex)" />
        </svg>
      </div>

      {/* Floating Security Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Binary Code Streams */}
        <div className="absolute top-10 left-1/4 text-primary/20 font-mono text-xs space-y-1 animate-pulse">
          <div>01001000 01100101 01110010 01101111</div>
          <div>01010011 01100101 01100011 01110101</div>
          <div>01110010 01101001 01110100 01111001</div>
        </div>

        <div className="absolute bottom-20 right-1/4 text-primary/15 font-mono text-xs space-y-1 animate-pulse delay-1000">
          <div>11000011 10111001 11100010 10110101</div>
          <div>10101010 11110000 10011001 11010011</div>
          <div>11010110 10000111 11101110 10101001</div>
        </div>

        {/* Network Nodes */}
        <div className="absolute top-1/4 left-1/6">
          <div className="relative">
            <div className="w-3 h-3 bg-primary rounded-full animate-ping"></div>
            <div className="absolute top-0 left-0 w-3 h-3 bg-primary rounded-full"></div>
          </div>
        </div>

        <div className="absolute top-2/3 right-1/5">
          <div className="relative">
            <div className="w-2 h-2 bg-primary rounded-full animate-ping delay-500"></div>
            <div className="absolute top-0 left-0 w-2 h-2 bg-primary rounded-full"></div>
          </div>
        </div>

        <div className="absolute bottom-1/3 left-1/3">
          <div className="relative">
            <div className="w-4 h-4 bg-primary rounded-full animate-ping delay-1000"></div>
            <div className="absolute top-0 left-0 w-4 h-4 bg-primary rounded-full"></div>
          </div>
        </div>

        {/* Security Icons */}
        <div className="absolute top-32 right-20 text-primary/25 animate-pulse">
          <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        <div className="absolute bottom-40 left-16 text-primary/20 animate-pulse delay-700">
          <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight mb-8">
          <span className="block">Fortalecendo</span>
          <span className="block text-primary">Conexões Estratégicas</span>
          <span className="block text-sm sm:text-base lg:text-xl xl:text-2xl font-normal text-gray-300 mt-4">
            entre Inovação Científica e o Setor Produtivo
          </span>
        </h1>

        {/* Subtitle */}
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed mb-8">
            Conectamos o conhecimento científico à inovação tecnológica,
            oferecendo
            <span className="text-primary font-medium">
              {" "}
              soluções estratégicas
            </span>{" "}
            que impulsionam a segurança cibernética em empresas públicas e
            privadas.
          </p>

          <p className="text-base sm:text-lg lg:text-xl text-gray-400 leading-relaxed">
            Nosso foco é apoiar decisões críticas com base em análises de
            riscos, inteligência de dados e práticas avançadas de
            cibersegurança, entregando soluções e serviços inovadores que
            antecipam ameaças, fortalecem a resiliência digital e promovem a
            transformação segura em um mundo cada vez mais conectado.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button className="group relative px-8 py-4 bg-primary text-black font-semibold rounded-lg transition-all duration-300 hover:shadow-2xl hover:shadow-primary/25 hover:scale-105 overflow-hidden">
            <span className="relative z-10">Nossos Serviços</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          <button className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg transition-all duration-300 hover:bg-primary hover:text-black hover:scale-105">
            Fale Conosco
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 border border-primary/20 rounded-lg backdrop-blur-sm bg-white/5">
            <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
              24/7
            </div>
            <div className="text-gray-300">Monitoramento</div>
          </div>
          <div className="text-center p-6 border border-primary/20 rounded-lg backdrop-blur-sm bg-white/5">
            <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
              99.9%
            </div>
            <div className="text-gray-300">Disponibilidade</div>
          </div>
          <div className="text-center p-6 border border-primary/20 rounded-lg backdrop-blur-sm bg-white/5">
            <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
              +500
            </div>
            <div className="text-gray-300">Empresas Protegidas</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroHex;
