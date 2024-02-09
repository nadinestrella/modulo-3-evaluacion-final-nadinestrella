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

        // death <i class="fa-solid fa-cross"></i>
        //alive <i class="fa-solid fa-heart-pulse"></i>
        //men <i class="fa-solid fa-person"></i>
        //woman <i class="fa-solid fa-person-dress"></i>
        // arrow <i class="fa-solid fa-arrow-left"></i>
        //human <i class="fa-solid fa-user"></i>

        return {
          id: character.id,
          name: character.name,
          specie: character.species,
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
