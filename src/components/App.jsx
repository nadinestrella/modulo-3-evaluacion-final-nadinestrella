// Fichero src/components/App.jsxx
import { useEffect, useState } from 'react';
import '../scss/App.scss';
import getDataFromApi from '../services/api';
import CharacterList from './characters/CharacterList';
import Filters from './filters/Filters';
import Header from './Header';
import { Route, Routes } from 'react-router-dom';
import CharacterDetail from './characters/CharacterDetail';

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
    .filter((character) => {
      // if (filterHouse === 'Gryffindor') {
      //   return true;
      // } else {
      return character.house === filterHouse;
      // }
    });

  return (
    <>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Filters
                filterName={filterName}
                handleFilterName={handleFilterName}
                handleFilterHouse={handleFilterHouse}
              />
              <CharacterList characters={filteredCharacters} />
            </>
          }
        />
        <Route
          path="/detail/:id"
          element={<CharacterDetail characters={characters} />}
        />
      </Routes>
    </>
  );
}

export default App;
