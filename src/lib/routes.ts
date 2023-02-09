import type { Routes } from "../types/routesTypes";

export const routesHeader: Routes = [
  { index: 0, name: "Inicio", path: "/" },
  { index: 1, name: "Nosotros", path: "/nosotros" },
  { index: 2, name: "Proyectos", path: "/proyectos" },
  { index: 3, name: "Servicios", path: "/servicios" },
  { index: 4, name: "Contacto", path: "/contacto" },
];

export const routesFooter: Routes = [
  { index: 0, name: "Política de privacidad", path: "/politica-de-privacidad" },
  { index: 1, name: "Política de cookies", path: "/politica-de-cookies" },
  { index: 2, name: "Aviso legal", path: "/aviso-legal" },
];
