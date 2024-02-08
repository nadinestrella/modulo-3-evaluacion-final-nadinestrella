import React from 'react';

function FilterByName({ filterName, handleFilterName }) {
  return (
    <div>
      <label>Busca por personaje</label>
      <input
        type="text"
        placeholder="Harry Potter"
        value={filterName}
        onChange={(ev) => handleFilterName(ev.target.value)}
      />
    </div>
  );
}

export default FilterByName;
