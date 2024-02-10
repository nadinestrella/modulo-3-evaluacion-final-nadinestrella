import React from 'react';

function FilterByHouse({ handleFilterHouse }) {
  return (
    <div className="filters__byHouse">
      <label htmlFor="house" className="filters__byHouse__label">
        By House
      </label>
      <select
        name="house"
        onChange={(ev) => handleFilterHouse(ev.target.value)}
        className="filters__byHouse__select"
      >
        <option value="Gryffindor">Gryffindor</option>
        <option value="Ravenclaw">Ravenclaw</option>
        <option value="Slytherin">Slytherin</option>
        <option value="Hufflepuff">Hufflepuff</option>
      </select>
    </div>
  );
}

export default FilterByHouse;
