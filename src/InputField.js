import React from 'react';
import './inputfield.css';
import { useSelector, useDispatch } from 'react-redux';
import { setInputValue, clearInputValue } from './inputSlice';

const InputField = () => {
  const inputValue = useSelector((state) => state.input.inputValue);
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    dispatch(setInputValue(event.target.value));
  };

  const handleClearButtonClick = () => {
    dispatch(clearInputValue());
  };

  const handleStoreButtonClick = () => {
    // Add your logic here to store the input value in your backend or local storage
    console.log('Storing input value:', inputValue);
  };

  return (
    // <div>
    //   <header id = 'inputheading'>
    //     <div className='input'>
    //   <h2 >Input</h2>
    //   </div>
    //     <input type="text" placeholder="Enter text" value={inputValue} onChange={handleInputChange} />
    //     <div className='button'>
    //     <button onClick={handleClearButtonClick}>Clear</button>
    //     </div>
    //     <button onClick={handleStoreButtonClick}>Store</button>
    //   </header>
    //   </div>


  <div>
    <header id="inputheading">
      <div className='inputhead'>
        <h2>Input</h2> 
      </div>
      <div className="input">  
      <input type="text" placeholder="Enter Something" value={inputValue} onChange={handleInputChange} />
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
