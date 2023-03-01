import type { Routes } from "../types/routesTypes";

export const routesHeader: Routes = [
  { name: "Inicio", path: "/" },
  { name: "Nosotros", path: "/nosotros" },
  { name: "Proyectos", path: "/proyectos" },
  { name: "Servicios", path: "/servicios" },
  { name: "Contacto", path: "/contacto" },
];

export const routesFooter: Routes = [
  { name: "Política de privacidad", path: "/politica-de-privacidad" },
  { name: "Política de cookies", path: "/politica-de-cookies" },
  { name: "Aviso legal", path: "/aviso-legal" },
];
