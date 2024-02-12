import React from 'react';

function FilterByGender({ handleFilterGender, filterGender }) {
  const handleRadio = (ev) => {
    handleFilterGender(ev.target.value);
  };

  return (
    <div>
      <label> By Gender</label>

      <input
        type="radio"
        name="gender"
        value="female"
        onChange={handleRadio}
        checked={filterGender === 'female'}
      />
      <label>Female </label>

      <input
        type="radio"
        name="gender"
        value="male"
        onChange={handleRadio}
        checked={filterGender === 'male'}
      />
      <label>Male </label>
    </div>
  );
}

export default FilterByGender;
