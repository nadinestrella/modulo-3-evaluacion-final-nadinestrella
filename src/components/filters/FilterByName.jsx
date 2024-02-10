import React from 'react';

function FilterByName({ filterName, handleFilterName }) {
  return (
    <div className="filters__byName">
      <label className="filters__byName__label">Find a Character</label>
      <input
        className="filters__byName__input"
        type="text"
        placeholder="Harry Potter"
        value={filterName}
        onChange={(ev) => {
          ev.preventDefault();
          handleFilterName(ev.target.value);
        }}
      />
    </div>
  );
}

export default FilterByName;
