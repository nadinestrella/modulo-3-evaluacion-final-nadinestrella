import React from 'react';

function FilterByGender({ handleFilterGender, filterGender }) {
  const handleRadio = (ev) => {
    handleFilterGender(ev.target.value);
  };

  return (
    <div className="filters__byGender">
      <label className="filters__byGender--label"> By Gender</label>

      <input
        type="radio"
        name="gender"
        value="female"
        onChange={handleRadio}
        checked={filterGender === 'female'}
        className="filters__byGender--input"
      />
      <label className="filters__byGender--label">Female </label>

      <input
        type="radio"
        name="gender"
        value="male"
        onChange={handleRadio}
        checked={filterGender === 'male'}
        className="filters__byGender--input"
      />
      <label className="filters__byGender--label">Male </label>
    </div>
  );
}

export default FilterByGender;
