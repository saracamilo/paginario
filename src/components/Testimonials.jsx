import React from 'react';
import profile1 from '../assets/icon1.png.jpg';
import profile2 from '../assets/icon2.png.jpg';
import profile3 from '../assets/icon3.png.jpg';

function Testimonials() {
  const feedbacks = [
    {
      text: 'Finalmente encontrei um lugar para discutir livros que eu amo, com pessoas que realmente entendem!',
      author: 'Julia S.',
      image: profile1,
      detail: '5 ⭐',
    },
    {
      text: 'As salas são incrivelmente bem organizadas e a curadoria dos livros é impecável. Virou meu ponto de encontro semanal!',
      author: 'Pedro L.',
      image: profile2,
      detail: '12 Livros Lidos',
    },
    {
      text: 'Eu lia pouco, mas o Clube me deu motivação. É uma experiência transformadora e muito divertida.',
      author: 'Maria C.',
      image: profile3,
      detail: '4 ⭐',
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        {feedbacks.map((feedback, index) => (
          <div className="testimonial-card" key={index}>
            <p className="testimonial-text">{feedback.text}</p>
            <div className="testimonial-author">
              <img src={feedback.image} alt={feedback.author} className="author-image" />
              <div className="author-info">
                <span className="author-name">{feedback.author}</span>
                <span className="author-detail">{feedback.detail}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;