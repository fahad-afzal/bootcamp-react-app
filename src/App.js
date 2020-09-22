import React, {useState} from 'react';
import './App.css';
import counterContext from './CounterContext';
import Parent from './Parent';


function App() {
return(
  <counterContext.Provider value={788}> 
     <div>
      <Parent />

     </div>
 
 </counterContext.Provider>

  );
}

export default App;
