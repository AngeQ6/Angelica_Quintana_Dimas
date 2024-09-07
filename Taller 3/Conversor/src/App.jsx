import { useState } from 'react';
import TempDisplay from './components/TempDisplay';
import InputBox from './components/InputBox';
import './App.css';

function App() {
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(32);
  const [bgColor, setBgColor] = useState('#00bfff'); // Color frío inicial
  const [waterState, setWaterState] = useState('El agua está a temperatura ambiente.'); // Estado inicial del agua

  const handleCelsiusChange = (value) => {
    setCelsius(value);
    const fahrenheitValue = (value * 9) / 5 + 32;
    setFahrenheit(fahrenheitValue);
    updateBackground(value);
    updateWaterState(value); // Actualiza el estado del agua
  };

  const handleFahrenheitChange = (value) => {
    setFahrenheit(value);
    const celsiusValue = ((value - 32) * 5) / 9;
    setCelsius(celsiusValue);
    updateBackground(celsiusValue);
    updateWaterState(celsiusValue); // Actualiza el estado del agua
  };

  const updateBackground = (temp) => {
    if (temp < 0) {
      setBgColor('#00bfff');
    } else if (temp > 25 && temp <= 100) {
      setBgColor('#ffbf00'); 
    } else {
      setBgColor('#ff4500'); 
    }
  };

  // Función para determinar el estado del agua en función de la temperatura
  const updateWaterState = (temp) => {
    if (temp <= 0) {
      setWaterState('El agua está congelada.');
    }else if (temp > 25 && temp < 100) {
      setWaterState('El agua está a temperatura ambiente.');
    } else if (temp >= 100) {
      setWaterState('El agua está hirviendo.');
    }
  };

  return (
    <>
    <h1 className="titulo" style={{color: 'black'}}>Conversor de Temperatura</h1>

    <div className="converter" style={{ backgroundColor: bgColor }}>
      <TempDisplay celsius={celsius} fahrenheit={fahrenheit} />
      <div className="controls">
        <InputBox value={celsius} label="Celsius" onChange={handleCelsiusChange} />
        <InputBox value={fahrenheit} label="Fahrenheit" onChange={handleFahrenheitChange} />
      </div>
      <div className="water-state">
        <p>{waterState}</p> {/* Muestra el estado del agua */}
      </div>
    </div>
    </>
  );
  
}

export default App;
