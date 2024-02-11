import React from 'react';

function FilterByName({ filterName, handleFilterName }) {
  return (
    <div className="filters__byName">
      <label className="filters__byName--label">Find a Character</label>
      <input
        className="filters__byName--input"
        type="text"
        placeholder="Harry Potter"
        value={filterName}
        onChange={(ev) => {
          handleFilterName(ev.target.value);
        }}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            event.preventDefault();
          }
        }}
      />
    </div>
  );
}

export default FilterByName;
