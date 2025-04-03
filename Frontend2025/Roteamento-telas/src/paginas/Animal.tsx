import { useParams } from 'react-router-dom';

const Animal = () => {
  const { animal } = useParams<{ animal: string }>();

  return (
    <div>
      <h1>{animal}</h1>
    </div>
  );
};

export default Animal;