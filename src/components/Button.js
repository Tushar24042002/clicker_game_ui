import React from 'react';

const Button = ({ onClick, loading }) => {
  return (
    <button className="click-button" onClick={onClick} disabled={loading}>
      {loading ? 'Loading...' : 'Click Me!'}
    </button>
  );
};

export default Button;
