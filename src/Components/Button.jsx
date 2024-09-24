// components/Button.js
import React from 'react';

const Button = ({ text, className, ...props }) => {
  return (
    <button
      className={`text-white px-4 py-2 rounded-md ${className}`}
      style={{ backgroundColor: 'rgb(12, 105, 103)' }}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
