import { Link } from 'react-router-dom';
import Character from './Character';

function CharacterList({ characters }) {
  const renderCharacters = characters.map((character) => {
    return (
      <li key={character.id} className="card">
        <Link className="card__link" to={`/detail/${character.id}`}>
          <Character character={character} />
        </Link>
      </li>
    );
  });

  return (
    <section className="list">
      <h2 className="list__title">Character List</h2>
      <div className="list__grid">
        <ul className="list__grid--ul">{renderCharacters}</ul>
      </div>
    </section>
  );
}

export default CharacterList;
