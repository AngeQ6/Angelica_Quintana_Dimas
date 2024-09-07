import React from 'react';

function InputBox({ value, onChange, label }) {
  return (
    <div className="input-container">
      <label>{label}</label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="input-box"
      />
    </div>
  );
}

export default InputBox;
