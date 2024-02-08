import React from 'react';

function FilterByHouse({ handleFilterHouse }) {
  return (
    <div>
      <label htmlFor="house">By House</label>
      <select
        name="house"
        onChange={(ev) => handleFilterHouse(ev.target.value)}
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
