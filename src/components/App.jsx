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
  const [filterGender, setFilterGender] = useState('');

  useEffect(() => {
    getDataFromApi().then((cleanData) => {
      setCharacters(cleanData);
    });
  }, []);

  const resetButon = () => {
    setFilterName('');
    setFilterHouse('Gryffindor');
    setFilterGender('');
  };

  const handleFilterName = (value) => {
    setFilterName(value);
  };
  const handleFilterHouse = (value) => {
    setFilterHouse(value);
  };
  const handleFilterGender = (value) => {
    setFilterGender(value);
  };

  const filteredCharacters = characters
    .sort((a, b) => a.name.localeCompare(b.name))
    .filter((character) =>
      character.name.toLowerCase().startsWith(filterName.toLowerCase())
    )
    .filter((character) => {
      return character.house === filterHouse;
    })
    .filter((character) => {
      if (filterGender === 'male') {
        return character.gender === 'male';
      } else if (filterGender === 'female') {
        return character.gender === 'female';
      }
      return true;
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
                filterHouse={filterHouse}
                handleFilterHouse={handleFilterHouse}
                handleFilterGender={handleFilterGender}
                filterGender={filterGender}
                resetButon={resetButon}
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
