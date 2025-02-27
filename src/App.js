import './App.css';
import Board from './components/Board'
import Keyboard from './components/Keyboard'
import {createContext , useState } from 'react';
import { boardDefault } from './components/Words'

export const AppContext = createContext()

function App() {
  const [board, setBoard] = useState(boardDefault)
  return (
    <div className="App">
      <nav>
        <h1>Wordle</h1>
        <AppContext.Provider value = {{board, setBoard}}>
        <Board />
        <Keyboard />
        </AppContext.Provider>
      </nav>
    </div>
  );
}

export default App;
