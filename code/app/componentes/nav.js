"use client";
import { useState } from "react";
const Nav = () => {
    const [clase, setClase] = useState("hidden");
    const toggleMenu = () => {
        setClase(clase === "hidden" ? "block" : "hidden");
    };
    return (
    
    <nav className="bg-white fixed ms-2 mt-2 rounded z-10">
        <button onClick={() => toggleMenu()} className="flex items-center px-2 py-1 z-1 border rounded text-black hover:text-blue-600" aria-label="Abrir menú">
          <svg className="w-6 h-6" fill="" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
        <div className={clase}>
            <ul className="flex flex-col md:flex-row md:space-x-4 p-4">
                <li>
                <a href="#hero" className="text-gray-700 hover:text-blue-600">Inicio</a>
                </li>
                <li>
                <a href="#nosotros" className="text-gray-700 hover:text-blue-600">Nosotros</a>
                </li>
                <li>
                <a href="#servicios" className="text-gray-700 hover:text-blue-600">Servicios</a>
                </li>
                <li>
                <a href="#ventajas" className="text-gray-700 hover:text-blue-600">Ventajas</a>1
                </li>
                <li>
                <a href="#equipo" className="text-gray-700 hover:text-blue-600">Equipo</a>
                </li>
                <li>
                <a href="#proyectos" className="text-gray-700 hover:text-blue-600">Proyectos</a>
                </li>
                <li>
                <a href="#contacto" className="text-gray-700 hover:text-blue-600">Contacto</a>
                </li>
                <li>
                <a href="#cta" className="text-gray-700 hover:text-blue-600">CTA</a>
                </li>
            </ul>
        </div>
      </nav>
  );
};

export default Nav;