import './App.css';
import { useState } from 'react';
import Contador from './components/Contador';
import Saudacao from './components/Saudacao';
import ListaTarefas from './components/ListaTarefas';
import ToggleVisibilidade from './components/ToggleVisibilidade';

const exercicios = {
  contador: <Contador />,
  saudacao: <Saudacao />,
  tarefas: <ListaTarefas tarefasIniciais={[]} />,
  toggle: <ToggleVisibilidade texto="Texto que estava oculto!" />,
};

function App() {
  const [exercicioAtual, setExercicioAtual] = useState<keyof typeof exercicios>('contador');

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      
      <h1>Exercícios Frontend</h1> {}
      
      <div style={{ marginBottom: '1rem' }}>
        {Object.keys(exercicios).map((key) => (
          <button key={key} onClick={() => setExercicioAtual(key as keyof typeof exercicios)}>
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </button>
        ))}
      </div>
<div>
        {exercicios[exercicioAtual]}
      </div>
    </div>
  );
}

export default App;
