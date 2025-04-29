// import React from 'react'
const refreshPage = () => {
  window.location.reload();
};

function Reset() {
  return (
    <div
      style={{
        marginTop: "-10px",
      }}
    >
      <button className="reset" onClick={refreshPage}>
        Reset
      </button>
    </div>
  );
}

export default Reset;
