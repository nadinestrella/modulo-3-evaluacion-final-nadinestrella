import React from 'react';
import FilterByHouse from './FilterByHouse';
import FilterByName from './FilterByName';

function Filters({
  filterName,
  handleFilterName,

  handleFilterHouse,
}) {
  return (
    <form>
      <FilterByHouse handleFilterHouse={handleFilterHouse} />
      <FilterByName
        filterName={filterName}
        handleFilterName={handleFilterName}
      />
    </form>
  );
}

export default Filters;
