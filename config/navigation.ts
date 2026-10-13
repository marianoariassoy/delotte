export type MenuItem = {
  label: string;
  href?: string;
  children?: MenuItem[];
};

export const mainMenu: MenuItem[] = [
  { label: "Nosotros", href: "/nosotros" },
  { label: "Actividades", href: "/actividades" },
  {
    label: "Empresas",
    href: "",
    children: [
      { label: "Delotte", href: "/empresas/delotte" },
      { label: "Productos Andinos", href: "/empresas/delotte" },
      { label: "Alinoa", href: "/empresas/delotte" },
      { label: "Frutucumán e Inducítrica", href: "/empresas/delotte" },
      { label: "Agropecuaria El Sauce", href: "/empresas/delotte" },
      { label: "Servicios y Negocios", href: "/empresas/delotte" },
      { label: "Tenax", href: "/empresas/delotte" },
    ],
  },
  { label: "Talentos", href: "/talentos" },
  { label: "Contactanos", href: "/contactanos" },
];
