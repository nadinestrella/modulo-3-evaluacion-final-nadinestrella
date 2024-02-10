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
    <div className="detailContainer">
      <div>
        <img
          className="detailContainer__image"
          src={findElement.photo}
          alt=""
        />
      </div>
      <div className="detailContainer__text">
        <h3>{findElement.name}</h3>
        <p>{findElement.house}</p>
        <p>{findElement.gender}</p>
        <div>
          <p> {findElement.status} </p>
          <p>
            {findElement.status === 'alive' ? (
              <i className="fa-solid fa-heart-pulse"></i>
            ) : (
              <i className="fa-solid fa-cross"></i>
            )}
          </p>
        </div>
        <p>{findElement.specie}</p>
        <div>
          <p>
            {findElement.specie === 'human' ? (
              <i className="fa-solid fa-user"></i>
            ) : (
              <i class="fa-solid fa-dragon"></i>
            )}
          </p>
        </div>

        <ul>
          {findElement.alternativeNames.map((name, i) => (
            <li key={i}> {name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CharacterDetail;
