import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PoliticasDePrivacidade = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const sections = [
    {
      title: "Sobre a SEC365",
      content: `A SEC365 – Tecnologia em Cibersegurança, com presença física tanto em São Paulo/SP quanto em Belém/PA, atua como Controladora de dados, com atuação indireta no mercado desde 2013. Em conformidade com a Lei Geral de Proteção de Dados (LGPD), Lei nº 13.709/2018, nossa empresa tem o compromisso de coletar e tratar seus dados pessoais de acordo com os princípios éticos e legais estabelecidos pela legislação.

Nossos serviços são prestados em estrita observância às recomendações, melhores práticas e padrões de gestão de segurança da informação, conforme estabelecido pelas normas da família ISO/IEC 27000, bem como outras referências como COBIT, ITIL, NIST, PCI DSS, LGPD e GDPR.`,
    },
    {
      title: "Objetivo desta Política",
      content: `A presente Política de Privacidade tem como objetivo fornecer informações detalhadas sobre seus direitos e obrigações no que tange à proteção de dados pessoais. Explicamos minuciosamente quais dados são coletados, os métodos de coleta, os motivos para tal coleta, o local de armazenamento dos dados, entre outros aspectos relevantes.

É fundamental destacar que, ao utilizarmos o termo USUÁRIO, estamos nos referindo a todas as pessoas que, de alguma forma, utilizam ou demonstram interesse em nossos serviços.`,
    },
    {
      title: "Seus Direitos",
      content: `Você possui os seguintes direitos sobre suas informações:

• **Direito de Acesso**: Solicitar uma cópia das informações pessoais que possuímos
• **Direito de Correção**: Corrigir informações imprecisas, desatualizadas ou incompletas
• **Direito de Anonimização**: Solicitar que suas informações sejam apagadas ou anonimizadas
• **Direito de Objeção**: Se opor ao processamento de suas informações pessoais
• **Direito de Contestação**: Contestar o uso de suas informações para marketing direto
• **Consentimento**: Retirar seu consentimento a qualquer momento`,
    },
  ];

  const contactSections = [
    {
      title: "CONTATO COMERCIAL",
      items: [
        {
          question: "Quais dados coletamos?",
          answer:
            "Nome, e-mail, telefone, cargo e informações sobre sua organização. Também coletamos seu endereço de IP como medida de segurança.",
        },
        {
          question: "Por que tratamos seus dados?",
          answer:
            "Para facilitar a comunicação comercial e possibilitar o período de teste gratuito da plataforma SEC365.",
        },
        {
          question: "Quem tem acesso?",
          answer:
            "Apenas colaboradores envolvidos no processo de contato comercial. Não compartilhamos seus dados com terceiros.",
        },
        {
          question: "Por quanto tempo?",
          answer:
            "Enquanto persistir o interesse comercial. Você pode solicitar exclusão a qualquer momento.",
        },
      ],
    },
    {
      title: "USUÁRIOS SEC365",
      items: [
        {
          question: "Quais dados coletamos?",
          answer:
            "Nome, e-mail e endereço de IP. Foto de identificação é opcional.",
        },
        {
          question: "Por que tratamos seus dados?",
          answer:
            "Para viabilizar o uso da plataforma, garantir segurança e evitar fraudes.",
        },
        {
          question: "Quem tem acesso?",
          answer:
            "Colaboradores responsáveis pela manutenção da plataforma e administradores das instâncias.",
        },
        {
          question: "Por quanto tempo?",
          answer:
            "Durante a vigência do contrato. Após o término, dados são eliminados em 30 dias.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div
              className={`transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/20">
                Na era da informação, sua privacidade não é uma opção, é uma
                garantia
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
                <span className="text-primary">POLÍTICA DE</span>
                <br />
                <span className="text-2xl md:text-3xl">PRIVACIDADE</span>
              </h1>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Sua privacidade é nossa prioridade - protegemos seus dados como
                protegemos nossos próprios segredos
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction Sections */}
          <div className="space-y-12 mb-16">
            {sections.map((section, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-primary mb-6">
                  {section.title}
                </h2>
                <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {section.content}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Sections */}
          <div className="space-y-12">
            {contactSections.map((section, sectionIndex) => (
              <div
                key={sectionIndex}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8"
              >
                <h2 className="text-2xl font-bold text-primary mb-8 text-center">
                  {section.title}
                </h2>
                <div className="grid gap-6">
                  {section.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="bg-white rounded-lg p-6 shadow-sm"
                    >
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        {item.question}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Information */}
          <div className="mt-16 space-y-8">
            {/* Data Principles */}
            <div className="bg-blue-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-primary mb-6">
                Fundamentos do Tratamento de Dados
              </h2>
              <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                  Ao tratar dados pessoais, a SEC365 respeita os seguintes
                  fundamentos:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Respeito à privacidade</li>
                  <li>Autodeterminação informativa</li>
                  <li>Liberdade de expressão e comunicação</li>
                  <li>Inviolabilidade da intimidade, honra e imagem</li>
                  <li>Desenvolvimento econômico e tecnológico</li>
                  <li>Livre iniciativa e defesa do consumidor</li>
                  <li>Direitos humanos e dignidade</li>
                </ul>
              </div>
            </div>

            {/* Important Information */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-yellow-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  ⚠️ Informações Importantes
                </h3>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• Utilizamos cookies para melhorar sua experiência</li>
                  <li>• Transmissão de dados pela Internet envolve riscos</li>
                  <li>• Links para sites terceiros têm políticas próprias</li>
                  <li>• Esta política pode ser alterada a qualquer momento</li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  📞 Como Entrar em Contato
                </h3>
                <div className="text-gray-700 space-y-2 text-sm">
                  <p>
                    <strong>E-mail:</strong> dpo@sec365.com.br
                  </p>
                  <p>
                    <strong>Encarregado de Dados:</strong> Advogada Camila Bento
                  </p>
                  <p>
                    <strong>Reclamações:</strong> dpo@sec365.com.br
                  </p>
                  <p>
                    <strong>Dúvidas:</strong> Nossa equipe jurídica está à
                    disposição
                  </p>
                </div>
              </div>
            </div>

            {/* Footer Notice */}
            <div className="bg-gray-900 rounded-xl p-8 text-center">
              <h3 className="text-xl font-bold text-white mb-4">
                Compromisso com sua Privacidade
              </h3>
              <p className="text-gray-300 leading-relaxed">
                A SEC365 reconhece a importância fundamental do tratamento
                adequado dos seus dados pessoais e reitera seu compromisso
                inabalável com a proteção da sua privacidade. Estamos
                comprometidos em assegurar transparência e segurança em todas as
                nossas interações.
              </p>
              <div className="mt-6">
                <span className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium">
                  🔒 Dados Protegidos pela LGPD
                </span>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="text-center py-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Tem dúvidas sobre nossa Política de Privacidade?
              </h3>
              <p className="text-gray-600 mb-6">
                Entre em contato conosco para esclarecimentos
              </p>
              <button
                onClick={() => navigate("/contact")}
                className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors duration-300 cursor-pointer"
              >
                📧 Falar com DPO
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PoliticasDePrivacidade;
