import { useParams } from 'react-router-dom';

import { Link } from 'react-router-dom';

function CharacterDetail({ characters }) {
  const { id } = useParams();

  const findElement = characters.find((item) => item.id === id);

  if (!findElement) {
    return <div>'No se encontró el personaje con el ID especificado'</div>;
  }

  return (
    <div className="detailContainer">
      <Link className="detailContainer__link" to="/">
        <p>
          <i class="fa-solid fa-arrow-left"></i> Back
        </p>
      </Link>
      <div className="detailContainer__image">
        <img
          className="detailContainer__image--img"
          src={findElement.photo}
          alt=""
        />
      </div>
      <div className="detailContainer__text">
        <h3>{findElement.name}</h3>
        <p>House: {findElement.house}</p>
        <p>Gender: {findElement.gender}</p>
        <div className="detailContainer__text--status">
          <p>Status: {findElement.status} </p>
          <p>
            {findElement.status === 'alive' ? (
              <i className="fa-solid fa-heart-pulse"></i>
            ) : (
              <i className="fa-solid fa-cross"></i>
            )}
          </p>
        </div>

        <div className="detailContainer__text--specie">
          <p>Specie: {findElement.specie}</p>
          <p>
            {findElement.specie === 'human' ? (
              <i className="fa-solid fa-user"></i>
            ) : (
              <i class="fa-solid fa-dragon"></i>
            )}
          </p>
        </div>

        <ul className="detailContainer__text--ul">
          {' '}
          Alternative Names:
          {findElement.alternativeNames.map((name, i) => (
            <li className="detailContainer__li" key={i}>
              {' '}
              {name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CharacterDetail;
