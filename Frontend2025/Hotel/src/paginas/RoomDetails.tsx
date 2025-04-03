import { useParams, useNavigate } from 'react-router-dom';

const RoomDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const reservar = () => {
    navigate('/booking-success');
  };

  return (
    <div>
      <h1>Quarto x {id}</h1>
      <button onClick={reservar}>Reservar</button>
    </div>
  );
};

export default RoomDetails;
