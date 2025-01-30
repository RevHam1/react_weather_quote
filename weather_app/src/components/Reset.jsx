// import React from 'react'
const refreshPage = () => {
  window.location.reload();
};

function Reset() {
  return (
    <div>
      <button
        style={{
          color: "white",
          backgroundColor: "blue",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={refreshPage}
      >
        Reset
      </button>
    </div>
  );
}

export default Reset;
