import './App.css';
import Chat from './components/Chat';
import Settings from './components/Settings';
import { useState } from 'react';

function App() {

  const [bgColor, setBgColor] = useState('#8A8AFF')

  return (
    <div className="App">
      <Settings bgColor={bgColor} setBgColor={setBgColor}/>
      <Chat bgColor={bgColor} setBgColor={setBgColor}/>
    </div>
  );
}

export default App;
