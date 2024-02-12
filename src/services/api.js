const getDataFromApi = () => {
  return fetch('https://hp-api.onrender.com/api/characters')
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.map((character) => {
        //IMAGES
        let image = character.image;
        if (!image) {
          image = `https://via.placeholder.com/210x295/ffffff/666666/?text=${character.name}`;
        }
        //STATUS

        const status = character.alive ? 'alive' : 'death';

        //HUMAN

        let specie = character.species;

        if (character.species === 'human') {
          ('human');
        } else character.especies;

        return {
          id: character.id,
          name: character.name,
          specie: specie,
          status: status,
          gender: character.gender,
          house: character.house,
          photo: image,
          alternativeNames: character.alternate_names,
        };
      });
      return cleanData;
    });
};

export default getDataFromApi;
