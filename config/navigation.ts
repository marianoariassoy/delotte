export interface MenuItem {
  labelEs: string;
  labelEn: string;
  href: string;
  children?: MenuItem[];
}

export const mainMenu: MenuItem[] = [
  {
    labelEs: "Nosotros",
    labelEn: "About Us",
    href: "/nosotros",
  },
  {
    labelEs: "Actividades",
    labelEn: "Activities",
    href: "/actividades",
  },
  {
    labelEs: "Empresas",
    labelEn: "Companies",
    href: "",
    children: [
      { labelEs: "Delotte", labelEn: "Delotte", href: "/empresas/delotte" },
      {
        labelEs: "Productos Andinos",
        labelEn: "Productos Andinos",
        href: "/empresas/delotte",
      },
      { labelEs: "Alinoa", labelEn: "Alinoa", href: "/empresas/delotte" },
      {
        labelEs: "Frutucumán e Inducítrica",
        labelEn: "Frutucumán & Inducítrica",
        href: "/empresas/delotte",
      },
      {
        labelEs: "Agropecuaria El Sauce",
        labelEn: "Agropecuaria El Sauce",
        href: "/empresas/delotte",
      },
      {
        labelEs: "Servicios y Negocios",
        labelEn: "Services & Business",
        href: "/empresas/delotte",
      },
      { labelEs: "Tenax", labelEn: "Tenax", href: "/empresas/delotte" },
    ],
  },
  {
    labelEs: "Talentos",
    labelEn: "Talents",
    href: "/talentos",
  },
  {
    labelEs: "Contactanos",
    labelEn: "Contact Us",
    href: "/contactanos",
  },
];
