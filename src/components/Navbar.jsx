import React from 'react';
import logo from '../assets/logo.png';

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Clube dos Livros Logo" className="logo-image" />
      </div>
      <nav className="nav-links">
        <a href="#">Salas</a>
        <a href="#">Calendário</a>
        <a href="#">Livros</a>
        <a href="#">Como Funciona</a>
        <a href="#">Blog</a>
        <a href="#" className="login-link">Entrar</a>
        <button className="btn">Criar Conta</button>
      </nav>
    </header>
  );
}

export default Navbar;