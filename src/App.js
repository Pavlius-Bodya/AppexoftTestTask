import { useState } from 'react';
import './App.scss';
import { LeftPage } from './components/LeftPage/LeftPage';
import { RightPage } from './components/RightPage/RightPage';

function App() {
  const [url, setUrl] = useState(null)
  return (
    <div className="App">
      <LeftPage setUrl={setUrl} />
      <RightPage url={url} />
    </div>
  );
}

export default App;
