import { Link } from 'react-router-dom';
import Character from './Character';

function CharacterList({ characters }) {
  const renderCharacters = characters.map((character) => {
    return (
      <li key={character.id} className="card">
        <Link to={`/detail/${character.id}`}>
          <Character character={character} />
        </Link>
      </li>
    );
  });

  return (
    <section>
      <h2>Character List</h2>
      <ul>{renderCharacters}</ul>
    </section>
  );
}

export default CharacterList;
