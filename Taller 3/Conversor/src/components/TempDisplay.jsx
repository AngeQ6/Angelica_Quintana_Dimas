import React from 'react';

function TempDisplay({ celsius, fahrenheit }) {
  return (
    <div className="temp-display">
      <p>
        Temperatura en Celsius: <span>{Math.round(celsius * 100) / 100}°C</span>
      </p>
      <p>
        Temperatura en Fahrenheit: <span>{Math.round(fahrenheit * 100) / 100}°F</span>
      </p>
    </div>
  );
}

export default TempDisplay;
