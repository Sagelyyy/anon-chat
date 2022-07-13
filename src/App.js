import './App.css';
import Chat from './components/Chat';
import { useState } from 'react';
import MusicPlayer from './components/MusicPlayer';

function App() {

  const [bgColor, setBgColor] = useState('#8A8AFF')
  const [showSettings, setShowSettings] = useState(false)

  return (
    <div className="App">
      <Chat showSettings={showSettings} setShowSettings={setShowSettings} bgColor={bgColor} setBgColor={setBgColor}/>
      <MusicPlayer />
    </div>
  );
}

export default App;
