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
      <p> {findElement.status} </p>
      <p>
        {findElement.status === 'alive' ? (
          <i className="fa-solid fa-heart-pulse"></i>
        ) : (
          <i className="fa-solid fa-cross"></i>
        )}
      </p>

      <p>{findElement.gender}</p>
      <p>
        {findElement.specie === 'human' ? (
          <i className="fa-solid fa-user"></i>
        ) : (
          findElement.specie
        )}
      </p>

      <ul>
        {findElement.alternativeNames.map((name, i) => (
          <li key={i}> {name}</li>
        ))}
      </ul>
    </div>
  );
}

export default CharacterDetail;
