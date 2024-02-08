const getDataFromApi = () => {
  return fetch('https://hp-api.onrender.com/api/characters')
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.map((character) => {
        return {
          id: character.id,
          name: character.name,
          specie: character.species,
          status: character.alive,
          gender: character.gender,
          house: character.house,
          photo: character.image,
          alternativeNames: character.alternate_names,
        };
      });
      return cleanData;
    });
};

export default getDataFromApi;
