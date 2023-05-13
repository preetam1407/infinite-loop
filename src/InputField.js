import React from 'react';
import './inputfield.css';
import { useDispatch } from 'react-redux';
import { setInputValue, clearInputValue } from './inputSlice';


const InputField = () => {
  const [localInputValue, setLocalInputValue] = React.useState('');
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setLocalInputValue(event.target.value);
  };

  const handleStoreButtonClick = () => {
    dispatch(setInputValue(localInputValue));
  };

  const handleClearButtonClick = () => {
    dispatch(clearInputValue());
    setLocalInputValue('');
  };

  

  return (
  <div>
    <header id="inputheading">
      <div className='inputhead'>
        <h2>Input</h2> 
      </div>
      <div className="input">  
        <input type="text" placeholder="Enter Something" value={localInputValue} onChange={handleInputChange} />
      </div>
      <div className='button'>
        <button onClick={handleStoreButtonClick}>Store</button>
        <button onClick={handleClearButtonClick}>Clear</button>
      </div>
    </header>
  </div>
   
  );
}

export default InputField;
