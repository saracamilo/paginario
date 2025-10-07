import React from 'react';

function Benefits() {
  const benefits = [
    { text: 'Leia com propósito', emoji: '📖' },
    { text: 'Encontre leitores como você', emoji: '🤝' },
    { text: 'Horários flexíveis', emoji: '⏰' },
    { text: 'Eventos toda semana', emoji: '📅' },
  ];

  return (
    <section className="benefits-section">
      <div className="benefits-container">
        {benefits.map((benefit, index) => (
          <div className="benefit-card" key={index}>
            <span className="benefit-emoji">{benefit.emoji}</span>
            <p className="benefit-text">{benefit.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Benefits;