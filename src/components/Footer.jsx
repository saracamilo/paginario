import React from 'react';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-col footer-col-1">
          <span className="footer-title">Paginário</span>
          <p>Seu espaço para encontrar e debater livros com pessoas que amam a leitura tanto quanto você.</p>
          <div className="social-icons">
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
        <div className="footer-col footer-col-2">
          <h4>Links Rápidos</h4>
          <ul>
            <li><a href="#">Salas</a></li>
            <li><a href="#">Calendário</a></li>
            <li><a href="#">Livros</a></li>
            <li><a href="#">Como Funciona</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
        <div className="footer-col footer-col-3">
          <h4>Newsletter</h4>
          <p>Receba sugestões de leitura e novidades por e-mail.</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Seu e-mail" />
            <button className="btn">Assinar</button>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Clube dos Livros. Todos os direitos reservados.</p>
        <p>Desenvolvido por Sara Camilo | <a href="https://github.com/saracamilo" target="_blank" rel="noopener noreferrer">@saracamilo</a></p>
        <p><a href="#">Termos de Uso</a> | <a href="#">Política de Privacidade</a></p>
      </div>
    </footer>
  );
}

export default Footer;