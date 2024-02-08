import React from 'react';
import FilterByHouse from './FilterByHouse';
import FilterByName from './FilterByName';

function Filters() {
  return (
    <div>
      <FilterByHouse />
      <FilterByName />
    </div>
  );
}

export default Filters;
