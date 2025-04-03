import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navegar = useNavigate();

  const NavegarParaSobre = () => {
    navegar('/sobre');
  };

  return (
    <div>
      <h1>Home</h1>
      <button onClick={NavegarParaSobre}>Ex3: Ir para Sobre</button>
    </div>
  );
};

export default Home;