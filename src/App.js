import logo from './logo.svg';
import './App.css';
import AutoLayoutSizingExample from './Component/Control';
import ListPlayers from './Component/ListPlayers';
import Form from './Component/Form';
import { useState } from 'react';
function App() {
  const [state, setState] = useState([]);
  const addPlayer = (playerName) => {
    const newPlayer = { name: playerName ,count:0};
    setState([...state, newPlayer]);
  };
  const deleteNote = (index) => {
    setState((prevState) => prevState.filter((_, i) => i !== index));
  };

  if (state.length === 0) {
   alert('Không còn người chơi')
  }

  
  return (
  <div >
    <div>
      <AutoLayoutSizingExample state = {state}/>
    </div>
    <div >
      < ListPlayers state = {state} setState={setState} deleteNote={deleteNote} />
    </div>
    <div>
      <Form addPlayer={addPlayer} />
    </div>
  </div>
  );
}

export default App;
