import { useState } from 'react';

interface ContadorProps {
  valorInicial?: number;
}

function Contador({ valorInicial = 0 }: ContadorProps) {
  const [contador, setContador] = useState(valorInicial);

  return (
    <div>
      <h2>Contador: {contador}</h2>
      <button onClick={() => setContador(contador - 1)}>-</button>
      <button onClick={() => setContador(contador + 1)}>+</button>
    </div>
  );
}

export default Contador;