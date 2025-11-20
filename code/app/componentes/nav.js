
FDGRTC%E$V|RTRT|RTtttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttcggggggggggggggg"use client";
import { useState } from "react";
import NavLink from "./NavLink";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen((prev) => !prev);
  return (
    <nav className="bg-white w-full flex items-center justify-between px-4 py-2 shadow-md fixed top-0 left-0 z-10">
      {/* Logo o nombre de marca */}
      <div className="font-bold text-lg text-blue-700">LOGO</div>
      {/* Botón hamburguesa solo en mobile */}
      <button
        onClick={toggleMenu}
        className="md:hidden flex items-center px-2 py-1 z-20 border rounded text-black hover:text-blue-600"
        aria-label="Abrir menú"
        aria-expanded={open}
        aria-controls="main-menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      {/* Menú de navegación */}
      <div
        id="main-menu"
        className={`absolute top-full left-0 w-full bg-white shadow-md transition-transform duration-300 md:static md:w-auto md:bg-transparent md:shadow-none md:transition-none ${
          open ? "translate-y-0" : "-translate-y-96"
        } md:translate-y-0 flex flex-col md:flex-row md:items-center md:space-x-6`}
        style={{ zIndex: 9 }}
      >
        <ul className="flex flex-col md:flex-row md:space-x-6 p-4 md:p-0">
          <li>
            <NavLink href="#hero">Inicio</NavLink>
          </li>
          <li>
            <NavLink href="#nosotros">Nosotros</NavLink>
          </li>
          <li>
            <NavLink href="#servicios">Servicios</NavLink>
          </li>
          <li>
            <NavLink href="#ventajas">Ventajas</NavLink>
          </li>
          <li>
            <NavLink href="#equipo">Equipo</NavLink>
          </li>
          <li>
            <NavLink href="#proyectos">Proyectos</NavLink>
          </li>
          <li>
            <NavLink href="#contacto">Contacto</NavLink>
          </li>
          <li>
            <NavLink href="#cta">CTA</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
