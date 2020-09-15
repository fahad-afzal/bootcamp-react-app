import React from 'react';
import './App.css';
import Dinner from './dinner.js';

function App() {
  return (
    <div classname="App">
      <Dinner dishName="Chicken Masala" sweetdish="Kheer"/>
      <hr/>
      <Dinner dishName="Chicken Karahi" sweetdish="Gaajar ka halwa"/>
      <hr/>
      <Dinner dishName="Chicken Chaamp" sweetdish="Jalebi"/>    
      </div>
  );
}

export default App;
