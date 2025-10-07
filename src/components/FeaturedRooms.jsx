import React from 'react';

function FeaturedRooms() {
  const rooms = [
    {
      label: 'Clássicos',
      title: 'O Grande Gatsby',
      info: 'Online + Online\n37 confirmados - 23 vagas',
      image: 'https://m.media-amazon.com/images/I/81Ph4QRq1gL._UF1000,1000_QL80_.jpg',
      button: 'Inscrever-se',
      ctaText: 'Participar dessa sala',
      variant: 'large'
    },
    {
      label: 'Romance',
      title: 'Amor, teoricamente',
      info: 'Próxima sessão\n25 Set - 19:00 BRT',
      image: 'https://m.media-amazon.com/images/I/81iUrbors9L.jpg',
      button: 'Ver detalhes',
      ctaText: 'Descobrir esse clube',
      variant: 'small'
    },
    {
      label: 'Não Ficção',
      title: 'Talvez você deva conversar com alguém',
      info: 'Próxima sessão\n25 Set - 19:00 BRT',
      image: 'https://m.media-amazon.com/images/I/71Moy8WL7PL._UF1000,1000_QL80_.jpg',
      button: 'Ver detalhes',
      ctaText: 'Descobrir esse clube',
      variant: 'small'
    },
    {
      label: 'Romance',
      title: 'A noiva',
      info: 'Presencial\nPróxima sessão\n25 Set - 19:00 BRT',
      image: 'https://m.media-amazon.com/images/I/812RDxFDd8L._UF1000,1000_QL80_.jpg',
      button: 'Ver detalhes',
      ctaText: 'Descobrir esse clube',
      variant: 'small'
    },
    {
      label: 'Fantasia',
      title: 'Caraval',
      info: 'Próxima sessão\n26 Out - 19:00 BRT',
      image: 'https://m.media-amazon.com/images/I/71p66yY4htL.jpg',
      button: 'Ver detalhes',
      ctaText: 'Descobrir esse clube',
      variant: 'small'
    },

    {
      label: 'Fantasia',
      title: 'Harry Potter e o Cálice de Fogo',
      info: 'Próxima sessão\n10 Nov - 19:00 BRT',
      image: 'https://m.media-amazon.com/images/I/81YOuOGFCJL.jpg',
      button: 'Ver detalhes',
      ctaText: 'Descobrir esse clube',
      variant: 'small'
    },
    {
      label: 'Romance',
      title: 'Tempo-Abstrato',
      info: 'Próxima sessão\n17 Nov - 19:00 BRT',
      image: 'https://m.media-amazon.com/images/I/71MBDHfJeML._SL1358_.jpg',
      button: 'Ver detalhes',
      ctaText: 'Descobrir esse clube',
      variant: 'small'
    }
  ];

  return (
    <section className="featured-rooms">
      <h2>Salas em destaque</h2>
      <div className="rooms-container">
        {rooms.slice(0, 1).map((room, index) => (
          <div className={`room-card ${room.variant}`} key={index}>
            <div className="room-label">{room.label}</div>
            <div className="room-image">
              <img src={room.image} alt={room.title} />
            </div>
            <h3>{room.title}</h3>
            <p style={{ whiteSpace: 'pre-line' }}>{room.info}</p>
            <button
              className={`btn-card ${
                room.button === 'Inscrever-se' ? 'btn-primary' : 'btn-secondary'
              }`}
            >
              {room.ctaText}
            </button>
          </div>
        ))}

        <div className="small-rooms-group">
          {rooms.slice(1).map((room, index) => (
            <div className={`room-card ${room.variant}`} key={index}>
              <div className="room-label">{room.label}</div>
              <div className="room-image">
                <img src={room.image} alt={room.title} />
              </div>
              <h3>{room.title}</h3>
              <p style={{ whiteSpace: 'pre-line' }}>{room.info}</p>
              <button
                className={`btn-card ${
                  room.button === 'Inscrever-se' ? 'btn-primary' : 'btn-secondary'
                }`}
              >
                {room.ctaText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedRooms;
