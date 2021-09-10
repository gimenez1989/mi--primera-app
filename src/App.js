import React from 'react';
import Nabvar from './Navbar';
import Numero from './Numero';
import Post from './Post';
import './App.css';

function App() {

  const propsIniciales = [
    {nick: "Re-On", mensaje: "Soy Re-on"},
    {nick: "Fracisco", mensaje: "Soy Francisco"},
    {nick: "Juan", mensaje: "Soy Juan"},
    {nick: "Pedro", mensaje: "Soy Pedro"}
  ]

  return (
    <div className="App">
      {
        propsIniciales.map(e => <Post nick={e.nick} mensaje={e.mensaje}/>)
      }
    </div>
  );
}

export default App;
