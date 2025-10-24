import { useState, useEffect } from "react";

// Importação das imagens dos certificados
import casp from "../../assets/casp.png";
import ceh from "../../assets/ceh.png";
import chfi from "../../assets/chfi.png";
import cisa from "../../assets/cisa.png";
import cism from "../../assets/cism.png";
import ciso from "../../assets/ciso.png";
import comp from "../../assets/comp.webp";
import cpent from "../../assets/cpent.png";
import crisc from "../../assets/crisc.webp";
import cse from "../../assets/cse.png";
import cysa from "../../assets/cysa.webp";
import doc from "../../assets/doc.png";
import exin from "../../assets/exin.png";
import icsi from "../../assets/icsi.png";
import mestre from "../../assets/mestre.png";
import pmp from "../../assets/pmp.png";
import posdoc from "../../assets/posdoc.png";

const Certificados = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const certificates = [
    { id: 1, image: casp, name: "CASP+" },
    { id: 2, image: ceh, name: "CEH" },
    { id: 3, image: chfi, name: "CHFI" },
    { id: 4, image: cisa, name: "CISA" },
    { id: 5, image: cism, name: "CISM" },
    { id: 6, image: ciso, name: "CISO" },
    { id: 7, image: comp, name: "CompTIA" },
    { id: 8, image: cpent, name: "CPENT" },
    { id: 9, image: crisc, name: "CRISC" },
    { id: 10, image: cse, name: "CSE" },
    { id: 11, image: cysa, name: "CySA+" },
    { id: 12, image: doc, name: "Doutorado" },
    { id: 13, image: exin, name: "EXIN" },
    { id: 14, image: icsi, name: "ICSI" },
    { id: 15, image: mestre, name: "Mestrado" },
    { id: 16, image: pmp, name: "PMP" },
    { id: 17, image: posdoc, name: "Pós-Doutorado" },
  ];

  // Auto-scroll do carrossel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === certificates.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [certificates.length]);

  // Navegação manual
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      currentIndex === 0 ? certificates.length - 1 : currentIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex(
      currentIndex === certificates.length - 1 ? 0 : currentIndex + 1
    );
  };

  // Função para obter os certificados visíveis (5 por vez)
  const getVisibleCertificates = () => {
    const visibleCount = 5;
    const start = currentIndex;
    const visible = [];

    for (let i = 0; i < visibleCount; i++) {
      const index = (start + i) % certificates.length;
      visible.push(certificates[index]);
    }

    return visible;
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)
          `,
            backgroundSize: "60px 60px",
            animation: "grid-move 20s linear infinite",
          }}
        ></div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-16 h-16 border-2 border-cyan-400/20 rotate-45 animate-spin-slow"></div>
        <div className="absolute top-40 right-32 w-12 h-12 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full animate-bounce-slow"></div>
        <div className="absolute bottom-32 left-40 w-20 h-20 border-2 border-indigo-400/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-14 h-14 border-2 border-purple-400/20 rotate-12 animate-spin-reverse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div
              className={`inline-block text-sm font-mono text-cyan-400 mb-4 px-4 py-2 bg-cyan-500/10 rounded-lg border border-cyan-500/30 transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              Credenciais de Excelência
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              <span className="block">Certificações</span>
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Profissionais
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Nossa equipe possui as principais certificações internacionais em{" "}
              <span className="text-cyan-400 font-semibold">
                segurança cibernética
              </span>
              , garantindo expertise comprovada e conhecimento atualizado.
            </p>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Main Carousel */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="relative overflow-hidden">
              {/* Certificates Display */}
              <div className="flex justify-center items-center space-x-6 py-8">
                {getVisibleCertificates().map((cert, index) => (
                  <div
                    key={`${cert.id}-${currentIndex}`}
                    className={`relative transition-all duration-500 ${
                      index === 2
                        ? "transform scale-110 z-10" // Centro em destaque
                        : index === 1 || index === 3
                        ? "transform scale-100 opacity-90" // Lados próximos
                        : "transform scale-90 opacity-60" // Extremidades
                    }`}
                  >
                    <div className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20">
                      {/* Certificate Image */}
                      <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-lg bg-white/5">
                        <img
                          src={cert.image}
                          alt={cert.name}
                          className="w-full h-full object-contain p-2"
                        />
                      </div>

                      {/* Certificate Name */}
                      <div className="text-center">
                        <h3 className="text-white font-semibold text-sm">
                          {cert.name}
                        </h3>
                      </div>

                      {/* Hover Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-cyan-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 hover:border-cyan-400/50 transition-all duration-300 group"
          >
            <svg
              className="w-6 h-6 transform group-hover:-translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 hover:border-cyan-400/50 transition-all duration-300 group"
          >
            <svg
              className="w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-12 space-x-2">
          {certificates.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-cyan-400 w-8"
                  : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 text-center">
          <div
            className={`flex flex-wrap justify-center gap-8 md:gap-12 transition-all duration-1000 delay-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="group flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:border-cyan-400/50 hover:bg-white/20 transition-all duration-300">
              <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse"></div>
              <div>
                <span className="text-xl font-bold text-cyan-400">17+</span>
                <span className="text-sm text-gray-300 ml-2">
                  Certificações
                </span>
              </div>
            </div>

            <div className="group flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:border-cyan-400/50 hover:bg-white/20 transition-all duration-300">
              <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full animate-pulse delay-300"></div>
              <div>
                <span className="text-xl font-bold text-blue-400">100%</span>
                <span className="text-sm text-gray-300 ml-2">Atualizadas</span>
              </div>
            </div>

            <div className="group flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:border-cyan-400/50 hover:bg-white/20 transition-all duration-300">
              <div className="w-3 h-3 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full animate-pulse delay-700"></div>
              <div>
                <span className="text-xl font-bold text-indigo-400">
                  Internacional
                </span>
                <span className="text-sm text-gray-300 ml-2">
                  Reconhecimento
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes grid-move {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(60px, 60px);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-reverse {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }

        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }

        .animate-spin-reverse {
          animation: spin-reverse 20s linear infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Certificados;
