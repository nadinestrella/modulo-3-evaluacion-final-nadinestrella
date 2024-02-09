import Character from './Character';

function CharacterList({ characters }) {
  const renderCharacters = characters.map((character) => {
    return (
      <li className="card" key={character.id}>
        <Character character={character} />
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
