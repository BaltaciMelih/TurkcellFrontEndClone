import React from 'react';
function Button({ className, width, height, id, onClick, children }) {
  return (
    <button
      style={{
        backgroundColor: '#76b900',
        width,
        height
      }}
      className={`text-white border ${className} `}
      id={id}
      onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
