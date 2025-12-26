import { Locale } from "./config";

export type Messages = {
  nav: {
    home: string;
    about: string;
    services: string;
    portfolio: string;
    contact: string;
  };
  hero: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    ctaWork: string;
    ctaContact: string;
  };
  common: {
    readMore: string;
    seeAll: string;
    learnMore: string;
    getInTouch: string;
    send: string;
    loading: string;
    error: string;
    success: string;
  };
};

const messages: Record<Locale, Messages> = {
  "pt-BR": {
    nav: {
      home: "Home",
      about: "Sobre",
      services: "Serviços",
      portfolio: "Portfólio",
      contact: "Contato",
    },
    hero: {
      title: "Toda marca tem algo que",
      titleHighlight: "só ela pode ser",
      subtitle:
        "Somos um estúdio criativo que combina estratégia e sensibilidade para criar marcas que se posicionam com clareza e consistência.",
      ctaWork: "Conheça nosso trabalho",
      ctaContact: "Fale com a gente",
    },
    common: {
      readMore: "Ler mais",
      seeAll: "Ver todos",
      learnMore: "Saiba mais",
      getInTouch: "Entre em contato",
      send: "Enviar",
      loading: "Carregando...",
      error: "Erro",
      success: "Sucesso",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      about: "Nosotros",
      services: "Servicios",
      portfolio: "Portafolio",
      contact: "Contacto",
    },
    hero: {
      title: "Cada marca tiene algo que",
      titleHighlight: "solo ella puede ser",
      subtitle:
        "Somos un estudio creativo que combina estrategia y sensibilidad para crear marcas que se posicionan con claridad y consistencia.",
      ctaWork: "Conoce nuestro trabajo",
      ctaContact: "Háblanos",
    },
    common: {
      readMore: "Leer más",
      seeAll: "Ver todos",
      learnMore: "Saber más",
      getInTouch: "Ponerse en contacto",
      send: "Enviar",
      loading: "Cargando...",
      error: "Error",
      success: "Éxito",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      portfolio: "Portfolio",
      contact: "Contact",
    },
    hero: {
      title: "Every brand has something that",
      titleHighlight: "only it can be",
      subtitle:
        "We are a creative studio that combines strategy and sensibility to create brands that position themselves with clarity and consistency.",
      ctaWork: "See our work",
      ctaContact: "Get in touch",
    },
    common: {
      readMore: "Read more",
      seeAll: "See all",
      learnMore: "Learn more",
      getInTouch: "Get in touch",
      send: "Send",
      loading: "Loading...",
      error: "Error",
      success: "Success",
    },
  },
};

export default messages;

