import { useState } from 'react';

interface ToggleVisibilidadeProps {
  texto: string;
}

function ToggleVisibilidade({ texto }: ToggleVisibilidadeProps) {
  const [visivel, setVisivel] = useState(false);

  return (
    <div>
      <button onClick={() => setVisivel(!visivel)}>
        Mostrar
      </button>
      {visivel && <p>{texto}</p>}
    </div>
  );
}

export default ToggleVisibilidade;
