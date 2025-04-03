import { Routes, Route, Link } from 'react-router-dom';
import Home from './paginas/Home';
import Rooms from './paginas/Rooms';
import RoomDetails from './paginas/RoomDetails';
import BookingSuccess from './paginas/BookingSuccess';

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/rooms">Quartos</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/room/:id" element={<RoomDetails />} />
        <Route path="/booking-success" element={<BookingSuccess />} />
      </Routes>
    </div>
  );
}

export default App;
