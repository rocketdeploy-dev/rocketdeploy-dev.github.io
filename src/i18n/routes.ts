export type RouteKey =
  | "home"
  | "services"
  | "servicesDevelopment"
  | "servicesDesign"
  | "servicesInfrastructure"
  | "servicesDeployment"
  | "servicesPostLaunch"
  | "contact"
  | "caseStudies"
  | "caseStudy"
  | "howWeWork"
  | "faq"
  | "forFounders";

export type RouteParams = {
  slug?: string;
};

type RouteBuilder = (params?: RouteParams) => string;

type RouteEntry = {
  pl: string | RouteBuilder;
  en: string | RouteBuilder;
};

const buildCaseStudyPath = (basePath: string): RouteBuilder => (params) => {
  if (!params?.slug) {
    throw new Error("Missing slug for case study route.");
  }

  return `${basePath}${params.slug}/`;
};

const routes: Record<RouteKey, RouteEntry> = {
  home: {
    pl: "/pl/",
    en: "/en/",
  },
  services: {
    pl: "/pl/oferta/",
    en: "/en/services/",
  },
  servicesDevelopment: {
    pl: "/pl/oferta/programowanie/",
    en: "/en/services/development/",
  },
  servicesDesign: {
    pl: "/pl/oferta/projektowanie/",
    en: "/en/services/design/",
  },
  servicesInfrastructure: {
    pl: "/pl/oferta/infrastruktura/",
    en: "/en/services/infrastructure/",
  },
  servicesDeployment: {
    pl: "/pl/oferta/wdrozenie/",
    en: "/en/services/deployment/",
  },
  servicesPostLaunch: {
    pl: "/pl/oferta/obsluga/",
    en: "/en/services/post-launch/",
  },
  contact: {
    pl: "/pl/kontakt/",
    en: "/en/contact/",
  },
  caseStudies: {
    pl: "/pl/case-studies/",
    en: "/en/case-studies/",
  },
  caseStudy: {
    pl: buildCaseStudyPath("/pl/case-studies/"),
    en: buildCaseStudyPath("/en/case-studies/"),
  },
  howWeWork: {
    pl: "/pl/how-we-work/",
    en: "/en/how-we-work/",
  },
  faq: {
    pl: "/pl/faq/",
    en: "/en/faq/",
  },
  forFounders: {
    pl: "/pl/for-founders/",
    en: "/en/for-founders/",
  },
};

const resolvePath = (value: string | RouteBuilder, params?: RouteParams): string =>
  typeof value === "function" ? value(params) : value;

export const getRoutePaths = (
  routeKey: RouteKey,
  params?: RouteParams,
): { pl: string; en: string } => {
  const entry = routes[routeKey];

  return {
    pl: resolvePath(entry.pl, params),
    en: resolvePath(entry.en, params),
  };
};
