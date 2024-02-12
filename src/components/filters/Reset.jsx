import React from 'react';

function Reset({ resetButon }) {
  return (
    <div>
      <button type="button" onClick={resetButon}>
        Reset
      </button>
    </div>
  );
}

export default Reset;
