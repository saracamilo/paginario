import React from 'react';
import iconCalendar from '../assets/icon-calendar.svg';
import iconBook from '../assets/icon-book.svg';
import iconPencil from '../assets/icon-pencil.svg';
import iconChat from '../assets/icon-chat.svg';

function CalendarAndInfo() {
  return (
    <section className="calendar-info">
      <div className="calendar">
        <h3>Calendário</h3>

        <div className="calendar-header">
          <button className="nav-arrow-btn" aria-label="Mês anterior">‹</button>
          <div className="calendar-month">Setembro de 2024</div>
          <button className="nav-arrow-btn" aria-label="Próximo mês">›</button>
        </div>

        <table className="calendar-table">
          <thead>
            <tr>
              <th>S</th>
              <th>T</th>
              <th>Q</th>
              <th>Q</th>
              <th>Q</th>
              <th>S</th>
              <th>S</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td />
              <td />
              <td />
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
            </tr>
            <tr>
              <td>5</td>
              <td>6</td>
              <td>7</td>
              <td>8</td>
              <td>9</td>
              <td>10</td>
              <td>11</td>
            </tr>
            <tr>
              <td>12</td>
              <td>13</td>
              <td>14</td>
              <td>15</td>
              <td>16</td>
              <td>17</td>
              <td>18</td>
            </tr>
            <tr>
              <td>19</td>
              <td>20</td>
              <td>21</td>
              <td>22</td>
              <td>23</td>
              <td>24</td>
              <td><span className="highlight-date">25</span></td>
            </tr>
            <tr>
              <td>26</td>
              <td>27</td>
              <td>28</td>
              <td>29</td>
              <td>30</td>
              <td />
              <td />
            </tr>
          </tbody>
        </table>

        <div className="upcoming-sessions">
          <span className="label-sessions">Próximas sessões</span>
          <ul>
            <li>Terça <span>1</span></li>
            <li>Quarta <span>4</span></li>
            <li>Quinta <span>15</span></li>
            <li>Sexta <span>0</span></li>
          </ul>
        </div>
      </div>

      <div className="how-it-works">
        <h3>Como funciona</h3>

        <div className="steps-grid">
          <div className="step">
            <img src={iconCalendar} alt="Ícone de Salas" />
            <p>Salas - Cadastro diversos temas</p>
          </div>
          <div className="step">
            <img src={iconBook} alt="Ícone de Leitura" />
            <p>Leia o livro do mês</p>
          </div>
          <div className="step">
            <img src={iconPencil} alt="Ícone de Agendamento" />
            <p>Agende-se no calendário</p>
          </div>
          <div className="step">
            <img src={iconChat} alt="Ícone de Debate" />
            <p>Participe do debate</p>
          </div>
        </div>

        <ul className="mini-agenda">
          <li className="mini-agenda__item">
            <div className="mini-agenda__text">
              <span className="mini-agenda__when">Qua, 19h00</span>
              <span className="mini-agenda__sep">—</span>
              <span className="mini-agenda__title">“O Grande Gatsby”</span>
            </div>
            <span className="badge badge--online">Online</span>
          </li>

          <li className="mini-agenda__item">
            <div className="mini-agenda__text">
              <span className="mini-agenda__when">Qui, 20h00</span>
              <span className="mini-agenda__sep">—</span>
              <span className="mini-agenda__title">“Caraval”</span>
            </div>
            <span className="badge badge--hybrid">Híbrido</span>
          </li>

          <li className="mini-agenda__item">
            <div className="mini-agenda__text">
              <span className="mini-agenda__when">Sábado, 10h</span>
              <span className="mini-agenda__sep">—</span>
              <span className="mini-agenda__title">“Talvez você deva conversar…”</span>
            </div>
            <span className="badge badge--online">Online</span>
          </li>
        </ul>

        <div className="how-cta">
          <button className="btn btn-how-primary">Criar minha sala</button>
          <button className="btn btn-how-secondary">Explorar salas</button>
        </div>

        <div className="notice">
          <div className="notice__icon">i</div>
          <div className="notice__content">
            <h4 className="notice__title">Importante</h4>
            <p className="notice__text">
              Ao criar uma sala, ela passará por uma breve análise da equipe do Paginário antes de ser publicada.
              Esse processo garante a qualidade das discussões e a segurança da comunidade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CalendarAndInfo;
