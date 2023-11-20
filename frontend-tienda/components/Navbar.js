"use client"

import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  // Estado para el término de búsqueda
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="navbar-brand" style={{ marginRight: "5px" }}>
            <img
              src="/ElHacendadoImg.jpg"
              alt="El Hacendado Logo"
              style={{ width: "130px", height: "auto" }}
            />
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* Enlace a la página de Inicio */}
                <Link href="/" className="nav-link active" aria-current="page">
                  Inicio
                </Link>
              </li>
            </ul>
            {/* Formulario de búsqueda */}
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchTerm}
                onChange={handleSearchChange}
              />
              {/* Botón de búsqueda */}
              <Link
                href={`/search?query=${encodeURIComponent(searchTerm)}`}
                passHref
              >
                <button className="btn btn-outline-success" type="submit">
                  Buscar
                </button>
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
