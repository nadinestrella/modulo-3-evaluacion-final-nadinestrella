function Character({ character }) {
  return (
    <div>
      <img
        className="card__img"
        src={character.photo}
        alt="Foto de personaje"
        title="Foto de personaje"
      />
      <h3 className="card__title">{character.name}</h3>
      <p className="card__description"> {character.specie}</p>
      <p>{character.house}</p>
    </div>
  );
}

export default Character;
