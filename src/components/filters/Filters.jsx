import React from 'react';
import FilterByHouse from './FilterByHouse';
import FilterByName from './FilterByName';

function Filters({
  filterName,
  handleFilterName,

  handleFilterHouse,
}) {
  return (
    <form className="filters">
      <FilterByName
        filterName={filterName}
        handleFilterName={handleFilterName}
      />
      <FilterByHouse handleFilterHouse={handleFilterHouse} />
    </form>
  );
}

export default Filters;
