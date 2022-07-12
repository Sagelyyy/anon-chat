import './App.css';
import Chat from './components/Chat';
import Settings from './components/Settings';
import { useState } from 'react';

function App() {

  const [bgColor, setBgColor] = useState('#8A8AFF')
  const [showSettings, setShowSettings] = useState(false)

  return (
    <div className="App">
      <Chat showSettings={showSettings} setShowSettings={setShowSettings} bgColor={bgColor} setBgColor={setBgColor}/>
    </div>
  );
}

export default App;
