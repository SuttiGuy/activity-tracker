import { useState } from 'react'
import Workout from './pages/Workout'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <h1>Workout Tracker</h1>
      <Workout />
    </div>
      
  );
}

export default App
