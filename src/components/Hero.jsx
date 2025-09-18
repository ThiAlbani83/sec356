import { useState, useEffect } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-backgrond via-gray-900 to-black overflow-hidden">
      {/* Cybersecurity Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        {/* Circuit Pattern SVG */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1200 800"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Grid Lines */}
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="#00ff94"
                strokeWidth="0.5"
                opacity="0.3"
              />
            </pattern>
            <pattern
              id="dots"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="40" cy="40" r="1" fill="#00ff94" opacity="0.4" />
            </pattern>
          </defs>

          <rect width="100%" height="100%" fill="url(#grid)" />
          <rect width="100%" height="100%" fill="url(#dots)" />

          {/* Circuit Lines */}
          <g stroke="#00ff94" strokeWidth="1" opacity="0.3" fill="none">
            <path d="M100,200 L300,200 L300,400 L500,400" />
            <path d="M200,100 L200,300 L400,300 L400,500" />
            <path d="M600,150 L800,150 L800,350 L1000,350" />
            <path d="M50,600 L250,600 L250,400 L450,400" />
            <path d="M700,500 L900,500 L900,300 L1100,300" />
          </g>

          {/* Connection Nodes */}
          <g fill="#00ff94" opacity="0.6">
            <circle cx="300" cy="200" r="3" />
            <circle cx="300" cy="400" r="3" />
            <circle cx="200" cy="300" r="3" />
            <circle cx="400" cy="300" r="3" />
            <circle cx="800" cy="150" r="3" />
            <circle cx="800" cy="350" r="3" />
            <circle cx="250" cy="600" r="3" />
            <circle cx="250" cy="400" r="3" />
            <circle cx="900" cy="500" r="3" />
            <circle cx="900" cy="300" r="3" />
          </g>
        </svg>
      </div>

      {/* Animated Cyber Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Lock Icons */}
        <div className="absolute top-20 left-10 text-primary/20 animate-pulse">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        {/* Floating Shield Icons */}
        <div className="absolute top-40 right-20 text-primary/15 animate-pulse delay-1000">
          <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        {/* Floating Network Icons */}
        <div className="absolute bottom-32 left-16 text-primary/20 animate-pulse delay-500">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
          </svg>
        </div>

        {/* Code/Binary Elements */}
        <div className="absolute top-60 right-40 text-primary/10 font-mono text-xs animate-pulse delay-700">
          <div>01001000</div>
          <div>01100101</div>
          <div>01110010</div>
        </div>

        <div className="absolute bottom-60 left-40 text-primary/10 font-mono text-xs animate-pulse delay-300">
          <div>11000001</div>
          <div>10110110</div>
          <div>11010101</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Title */}
        <h1
          className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="block">Fortalecendo</span>
          <span className="block text-primary">Conexões Estratégicas</span>
          <span className="block font-normal text-gray-300 mt-4">
            entre Inovação Científica e o Setor Produtivo
          </span>
        </h1>

        {/* Subtitle */}
        <div
          className={`max-w-4xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
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
        </div>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <button className="group relative px-8 py-4 bg-primary text-black font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/25 hover:scale-105">
            <span className="relative z-10">Nossos Serviços</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          <button className="group px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg transition-all duration-300 hover:bg-primary hover:text-black hover:scale-105">
            Fale Conosco
          </button>
        </div>

        {/* Stats or Key Points */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
              24/7
            </div>
            <div className="text-gray-300">Monitoramento</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
              99.9%
            </div>
            <div className="text-gray-300">Disponibilidade</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
              +500
            </div>
            <div className="text-gray-300">Empresas Protegidas</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
