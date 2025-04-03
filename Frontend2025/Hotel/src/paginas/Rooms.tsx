import { Link } from 'react-router-dom';

const Rooms = () => {
  const rooms = [
    { id: '101', nome: 'Suíte Master' },
    { id: '102', nome: 'Quarto Deluxe' },
    { id: '103', nome: 'Quarto Econômico' }
  ];

  return (
    <div>
      <h1>Quartos Disponíveis</h1>
      <ul>
        {rooms.map((room) => (
          <li key={room.id}>
            <Link to={`/room/${room.id}`}>{room.nome}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Rooms;
