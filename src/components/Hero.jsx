import React from 'react';

function Hero() {
  return (
    <section className="hero">
      <h1>Encontre seu clube de leitura</h1>
      <p>Participe de salas agendadas, leia os livros do mês e discuta com outros leitores.</p>
      <div className="hero-buttons">
        <button className="btn-primary">Explorar Salas</button>
        <button className="btn-secondary">
          Criar conta
        </button>
      </div>
    </section>
  );
}

export default Hero;