import React from 'react';
import FilterByHouse from './FilterByHouse';
import FilterByName from './FilterByName';

function Filters({
  filterName,
  handleFilterName,

  handleFilterHouse,
}) {
  return (
    <div>
      <FilterByHouse handleFilterHouse={handleFilterHouse} />
      <FilterByName
        filterName={filterName}
        handleFilterName={handleFilterName}
      />
    </div>
  );
}

export default Filters;
