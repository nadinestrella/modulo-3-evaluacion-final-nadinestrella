import { useParams } from 'react-router-dom';

function CharacterDetail({ characters }) {
  const { id } = useParams();

  const findElement = characters.find((item) => item.id === id);
  //   const params = useParams();
  //   const characterSelected = characters(params.id);
  if (!findElement) {
    return <div>No se encontró el personaje con el ID especificado.</div>;
  }

  return (
    <div>
      <img src={findElement.photo} alt="" />
      <h3>{findElement.name}</h3>
      <p>{findElement.house}</p>
      <p>{findElement.alive}</p>
      <p>{findElement.gender}</p>
      <p>{findElement.species}</p>
      <ul>
        {findElement.alternativeNames.map((name, i) => (
          <li key={i}> {name}</li>
        ))}
      </ul>
    </div>
  );
}

export default CharacterDetail;
