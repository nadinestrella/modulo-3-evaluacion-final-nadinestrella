import React from 'react';

function Reset({ resetButon }) {
  return (
    <div className="filters__reset">
      <button
        className="filters__reset--btn"
        type="button"
        onClick={resetButon}
      >
        Reset
      </button>
    </div>
  );
}

export default Reset;
