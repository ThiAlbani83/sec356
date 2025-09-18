export const menuData = {
  servicos: {
    title: "Serviços",
    key: "servicos",
    width: "w-80",
    items: [
      {
        label: "Managed Security Services (MSS)",
        href: "/services/managed_security_services",
      },
      {
        label: "Gestão de Vulnerabilidade (VMaaS)",
        href: "/services/vulnerability_management",
      },
      {
        label: "Threat Intelligence, Hunting & Detection",
        href: "/services/threat_intelligence",
      },
      {
        label: "Spear Phishing Corporativo",
        href: "/services/corporative_phishing",
      },
      {
        label: "Teste de Intrusão | Pentest",
        href: "/services/intrusion_testing",
      },
      {
        label: "Purple Team Assessment",
        href: "/services/purple_team_assessment",
      },
      {
        label: "SIEM | XDR - SaaS",
        href: "/services/siem_saas",
      },
    ],
  },
  consultoria: {
    title: "Consultoria",
    key: "consultoria",
    width: "w-72",
    items: [
      {
        label: "Adequação LGPD + vDPO",
        href: "/consulting/lgpd_dpo",
      },
      {
        label: "CISO as a Service",
        href: "/consulting/ciso_as_a_service",
      },
      {
        label: "CISO Advisory",
        href: "/consulting/ciso_advisory",
      },
      {
        label: "Perícia Forense Computacional",
        href: "/consulting/computer_forensics",
      },
    ],
  },
  sobre: {
    title: "Sobre",
    key: "sobre",
    width: "w-72",
    items: [
      {
        label: "Nossa Metodologia",
        href: "/about/our_methodology",
      },
      {
        label: "Nosso Time",
        href: "/about/our_team",
      },
      {
        label: "Missão, Visão, Valores e Propósitos",
        href: "/about/mission_vision_values_purposes",
      },
      {
        label: "Política de Privacidade",
        href: "/about/privacy_policies",
      },
      {
        label: "Código de Ética e Conduta",
        href: "/about/code_of_ethics_conduct",
      },
    ],
  },
};

export const mobileMenuItems = [
  {
    title: "Início",
    href: "/",
  },
  menuData.servicos,
  menuData.consultoria,
  {
    title: "Academia",
    href: "/academy",
  },
  menuData.sobre,
  {
    title: "Contato",
    href: "/contact",
  },
];
