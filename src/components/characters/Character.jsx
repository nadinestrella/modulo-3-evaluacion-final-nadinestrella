function Character({ character }) {
  return (
    <div>
      <img
        className="card__img"
        src={character.photo}
        alt="Foto de personaje"
        title="Foto de personaje"
      />
      <div className="card__containerText">
        <h3>{character.name}</h3>
        <p> {character.specie}</p>
      </div>
    </div>
  );
}

export default Character;
