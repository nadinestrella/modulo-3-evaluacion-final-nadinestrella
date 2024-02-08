import React from 'react';
import FilterByHouse from './FilterByHouse';
import FilterByName from './FilterByName';

function Filters({ filterName, handleFilterName }) {
  return (
    <div>
      <FilterByHouse />
      <FilterByName
        filterName={filterName}
        handleFilterName={handleFilterName}
      />
    </div>
  );
}

export default Filters;
