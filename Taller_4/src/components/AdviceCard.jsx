// src/components/AdviceCard.jsx
import React, { useState } from 'react';
import './AdviceCard.css';
import useFetch from '../Hooks/UseFetch'; 

const AdviceCard = () => {
  const { data, loading, error, refetch } = useFetch('https://api.adviceslip.com/advice');
  const [advice, setAdvice] = useState('');

  
  React.useEffect(() => {
    if (data) {
      setAdvice(data.slip.advice); 
    }
  }, [data]);

  return (
    <div className="advice-card">
      
      {error && <p>Something went wrong. Please try again.</p>}
      {!loading && !error && (
        <>
          <h1 className="advice-id">ADVICE #{data && data.slip.id}</h1>
          <p className="advice-text">"{advice}"</p>
          <figure className='figure-card'>
                    <img className='figure-card-image--desktop' src ="src/assets/images/pattern-divider-desktop.svg" id='desktop' alt="divider-desktop" />
                    <img className='figure-card-image--mobile' src ="src/assets/images/pattern-divider-mobile.svg" id='mobile' alt="divider-mobile"/>
                </figure>
          <button className="dice-button" onClick={refetch}>
            <img src="src/assets/Images/icon-dice.svg" alt="icono-dado" />
          </button>
        </>
      )}
    </div>
  );
};

export default AdviceCard;
