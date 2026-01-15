import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [gooningColor, setGooningColor] = useState(false);
  const [freakyColor, setFreakyColor] = useState(false);

  function imageClickHandle(e){
    if(e.target.id == "gooning") {
      setGooningColor(!gooningColor);
      setFreakyColor(false);
    }
    if(e.target.id == "freaky") {
      setFreakyColor(!freakyColor)
      setGooningColor(false);
    };
  }
  
  return (
    <div className="container">
      <div className='d-flex flex-column'>
          <div  className={`d-flex align-items-center justify-content-center ${gooningColor ? "bg-primary" : ""} ${freakyColor ? "bg-secondary" : ""}`} id='images'>
            <img src='gooning.png' alt='gooning' className='w-25 img-fluid' id='gooning' onClick={imageClickHandle}/>
            <img src='freaky.gif' alt='freaky' className='w-25 img-fluid' id='freaky' onClick={imageClickHandle}/>
          </div>
      </div>
    </div>
  );
}

export default App;
