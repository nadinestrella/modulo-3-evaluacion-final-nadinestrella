import React from 'react';

function FilterByHouse({ handleFilterHouse, filterHouse }) {
  return (
    <div className="filters__byHouse">
      <label htmlFor="house" className="filters__byHouse--label">
        By House
      </label>
      <select
        value={filterHouse}
        id="house"
        onChange={(ev) => handleFilterHouse(ev.target.value)}
        className="filters__byHouse--select"
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
