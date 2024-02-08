// Fichero src/components/App.jsxx
import { useEffect, useState } from 'react';
import '../scss/App.scss';
import getDataFromApi from '../services/api';
import CharacterList from './characters/CharacterList';
import Filters from './filters/Filters';

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getDataFromApi().then((cleanData) => {
      setCharacters(cleanData);
    });
  }, []);

  return (
    <>
      <h1>Harry Potter </h1>
      <CharacterList characters={characters} />
      <Filters />
    </>
  );
}

export default App;
