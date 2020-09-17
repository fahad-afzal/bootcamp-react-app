import React, {useState} from 'react';
import './App.css';


function App() {
  let [count, setCount] = useState(25);


  return (
    <div>   
      <h1>Value of counter variable: {count} </h1>
      <br />
  <button> onClick={
  ()=> alert ('Button Pressed')
  }> 
  Update Counter</button>
      </div>
  );
}

export default App;
