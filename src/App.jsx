import { useState } from 'react';
import './index.css';
import Button from './components/Button';
import Details from './components/Details';

function App() {
  const [show, setShow] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ top: 0, left: 0 });
  const [isMoved, setIsMoved] = useState(false);

  function handleClick(which) {
    if (which === "yes") {
      setShow(true);
    } else if (which === "no") {
      setShow(false);
      moveNoButton();
    }
  }

  function handleClose() {
    setShow(false);
  }

  function moveNoButton() {
    const top = Math.random() * window.innerHeight;
    const left = Math.random() * window.innerWidth;
    setNoButtonPosition({ top, left });
    setIsMoved(true);
  }

  return (
    <div className='main-div'>
      <Details show={show} onClose={handleClose} />
      <div className="button-container">
        <Button className="yes" text="YES" onClick={() => handleClick("yes")} />
        <Button
          className="no"
          text="NO"
          onClick={() => handleClick("no")}
          style={isMoved ? { position: 'absolute', top: noButtonPosition.top, left: noButtonPosition.left } : {}}
        />
      </div>
    </div>
  );
}

export default App;
