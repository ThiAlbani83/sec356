import { useState, useEffect } from "react";
import herobanner from "../../assets/herobanner.jpg";

const HeroIntroduce = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative flex flex-col items-center overflow-hidden py-20">
      {/* Background Image Container - Centralized with fixed dimensions and torn edges */}
      <div className="relative w-full max-w-[1300px] h-[600px] mx-auto">
        {/* Hero Banner Background Image with custom clip-path for torn edges */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"
          style={{
            backgroundImage: `url(${herobanner})`,
            clipPath:
              "polygon(0 0, calc(100% - 100px) 0, 100% 100px, 100% 100%, 100px 100%, 0 calc(100% - 100px))",
          }}
        ></div>

        {/* Enhanced overlay for better text readability */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/50"
          style={{
            clipPath:
              "polygon(0 0, calc(100% - 100px) 0, 100% 100px, 100% 100%, 100px 100%, 0 calc(100% - 100px))",
          }}
        ></div>

        {/* Content positioned inside the image bounds */}
        <div className="relative z-10 h-full flex items-center justify-end px-8 sm:px-12 lg:px-16">
          <div className="w-full max-w-lg text-left">
            {/* Small Label */}
            <div
              className={`text-sm font-medium text-white mb-4 tracking-wider uppercase transition-all duration-1000 drop-shadow-lg ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              SEGURANÇA CIBERNÉTICA
            </div>

            {/* Main Title */}
            <h1
              className={`text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white leading-tight mb-4 transition-all duration-1000 delay-200 drop-shadow-lg ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <span className="block">Fortalecendo</span>
              <span className="block text-cyan-300 drop-shadow-lg">
                Conexões Estratégicas
              </span>
              <span className="block">entre Inovação Científica</span>
              <span className="block">e o Setor Produtivo</span>
            </h1>

            {/* Subtitle */}
            <div
              className={`transition-all duration-1000 delay-400 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <p className="text-sm md:text-base text-white leading-relaxed mb-6 drop-shadow-md bg-black/20 backdrop-blur-sm rounded-lg p-4 border-l-4 border-cyan-300">
                Conectamos o conhecimento científico à inovação tecnológica,
                oferecendo{" "}
                <span className="text-cyan-300 font-semibold">
                  soluções estratégicas
                </span>{" "}
                que impulsionam a segurança cibernética em empresas públicas e
                privadas. Nosso foco é apoiar decisões críticas com análises de
                riscos, inteligência de dados e práticas avançadas que antecipam
                ameaças e fortalecem a resiliência digital.
              </p>
            </div>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-600 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <button className="group px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-cyan-600/30 hover:-translate-y-1 drop-shadow-lg">
                FALE CONOSCO
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section - Minimal style below the image container */}
      <div className="w-full max-w-[1300px] mx-auto mt-6 px-4">
        <div
          className={`flex flex-wrap justify-center gap-8 md:gap-12 transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="group flex items-center gap-3 px-4 py-2 bg-white/70 backdrop-blur-sm rounded-lg border border-cyan-200/50 hover:border-cyan-300 hover:bg-white/90 transition-all duration-300">
            <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-sm animate-pulse"></div>
            <div>
              <span className="text-lg font-bold text-cyan-700">24/7</span>
              <span className="text-xs text-slate-500 ml-2">Monitoramento</span>
            </div>
          </div>

          <div className="group flex items-center gap-3 px-4 py-2 bg-white/70 backdrop-blur-sm rounded-lg border border-cyan-200/50 hover:border-cyan-300 hover:bg-white/90 transition-all duration-300">
            <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-sm animate-pulse delay-300"></div>
            <div>
              <span className="text-lg font-bold text-cyan-700">99.9%</span>
              <span className="text-xs text-slate-500 ml-2">
                Disponibilidade
              </span>
            </div>
          </div>

          <div className="group flex items-center gap-3 px-4 py-2 bg-white/70 backdrop-blur-sm rounded-lg border border-cyan-200/50 hover:border-cyan-300 hover:bg-white/90 transition-all duration-300">
            <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-sm animate-pulse delay-700"></div>
            <div>
              <span className="text-lg font-bold text-cyan-700">+500</span>
              <span className="text-xs text-slate-500 ml-2">Empresas</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroIntroduce;
