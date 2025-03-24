import { useState } from 'react';

function agorario(): string {
  const agora = new Date().getHours();

  if (agora >= 6 && agora < 12) return 'Bom dia';
  if (agora >= 12 && agora < 18) return 'Boa tarde';
  return 'Boa noite';
}

interface SaudacaoProps {
  nomeInicial?: string;
}

function Saudacao({ nomeInicial }: SaudacaoProps) {
  const [nome, setNome] = useState(nomeInicial);

  return (
    <div>
      <h2>{agorario()}, {nome}!</h2>
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Digite seu nome"
      />
    </div>
  );
}

export default Saudacao;
