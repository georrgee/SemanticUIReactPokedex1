import React from 'react';
import './App.css';
import PokedexHeader from './components/PokedexHeader';

function App() {
  return (
    <div className="App">
      <PokedexHeader name={"George"} author={'@georrgee'}/>
    </div>
  );
}

export default App;
