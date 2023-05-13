import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const OutputField = () => {
  const [outputValue, setOutputValue] = useState('');
  const inputValue = useSelector((state) => state.input.inputValue);

  const handleShowButtonClick = () => {
    setOutputValue(inputValue);
  };

  const handleClearButtonClick = () => {
    setOutputValue('');
  };

  return (
    <div>
      <header id="inputheading">
        <div className='inputhead'>
          <h2>Output</h2> 
        </div>
        <div className="input">  
          <input type="text" placeholder="Output" value={outputValue} readOnly />
        </div>
        <div className='button'>
          <button onClick={handleShowButtonClick}>Show</button>
          <button onClick={handleClearButtonClick}>Clear</button>
        </div>
      </header>
    </div>
  );
};

export default OutputField;