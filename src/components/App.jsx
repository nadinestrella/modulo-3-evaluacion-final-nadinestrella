// Fichero src/components/App.jsxx
import { useEffect, useState } from 'react';
import '../scss/App.scss';
import getDataFromApi from '../services/api';
import CharacterList from './characters/CharacterList';
import Filters from './filters/Filters';

function App() {
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState('');
  const [filterHouse, setFilterHouse] = useState('Gryffindor');

  useEffect(() => {
    getDataFromApi().then((cleanData) => {
      setCharacters(cleanData);
    });
  }, []);

  const handleFilterName = (value) => {
    setFilterName(value);
  };
  const handleFilterHouse = (value) => {
    setFilterHouse(value);
  };

  const filteredCharacters = characters
    .filter((character) => character.name.toLowerCase().includes(filterName))
    .filter((eachHouse) => {
      if (filterHouse === 'Gryffindor') {
        return true;
      } else {
        return eachHouse.house[0] === filterHouse;
      }

      //   return filterHouse === 'Gryffindor'
      //     ? true
      //     : eachHouse.house[0] === filterHouse;
      //
    });

  return (
    <>
      <h1>Harry Potter </h1>
      <Filters
        filterName={filterName}
        handleFilterName={handleFilterName}
        handleFilterHouse={handleFilterHouse}
      />
      <CharacterList characters={filteredCharacters} />
    </>
  );
}

export default App;
