// Fichero src/components/App.jsxx
import { useEffect, useState } from 'react';
import '../scss/App.scss';
import getDataFromApi from '../services/api';
import CharacterList from './characters/CharacterList';
import Filters from './filters/Filters';

function App() {
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState('');

  useEffect(() => {
    getDataFromApi().then((cleanData) => {
      setCharacters(cleanData);
    });
  }, []);

  const handleFilterName = (value) => {
    setFilterName(value);
  };

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(filterName)
  );

  return (
    <>
      <h1>Harry Potter </h1>
      <Filters filterName={filterName} handleFilterName={handleFilterName} />
      <CharacterList characters={filteredCharacters} />
    </>
  );
}

export default App;
