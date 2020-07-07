import React from "react";

const Barra = () => {
  return (
    <header className="app-header">
      <p className="nombre-usuario">
        Hola <span>Diego!</span>
      </p>
      <nav className="nav-principal">
        <a href="#!" target="_blank" rel="noopener noreferrer">
          Cerrar Sesión
        </a>
      </nav>
    </header>
  );
};

export default Barra;
