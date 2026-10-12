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
    href: "/empresas",
    children: [
      { label: "Delotte", href: "/empresas/delotte" },
      { label: "Empresa B", href: "/empresas/empresab" },
    ],
  },
  { label: "Talentos", href: "/Talentos" },
  { label: "Contactanos", href: "/contactanos" },
];
