import './App.css';
import InputField from './InputField';
import OutputField from './outputfield';

function App() {
  return (
    <div>
      <header id="head">
        <div className="banner-content">
          <div className="page-heading">
            <h1>INFINITE LOOP </h1> 
          </div>
        </div>
        <div className='input-fieldheading'>
          <InputField/>
          <OutputField/> 
        </div>   
      </header>
    </div>
  );
}

export default App;


