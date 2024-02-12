import React from 'react';
import FilterByHouse from './FilterByHouse';
import FilterByName from './FilterByName';
import FilterByGender from './FilterByGender';
import Reset from './Reset';

function Filters({
  filterName,
  handleFilterName,
  filterHouse,
  handleFilterHouse,
  handleFilterGender,
  filterGender,
  resetButon,
}) {
  return (
    <form className="filters">
      <FilterByName
        filterName={filterName}
        handleFilterName={handleFilterName}
      />
      <FilterByHouse
        filterHouse={filterHouse}
        handleFilterHouse={handleFilterHouse}
      />
      <FilterByGender
        handleFilterGender={handleFilterGender}
        filterGender={filterGender}
      />
      <Reset resetButon={resetButon} />
    </form>
  );
}

export default Filters;
