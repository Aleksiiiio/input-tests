import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  //images
  const [gooningColor, setGooningColor] = useState(false);
  const [freakyColor, setFreakyColor] = useState(false);
  const [lobotColor, setLobotColor] = useState(false);

  function imageClickHandle(e){
    if(e.target.id == "gooning") {
      setGooningColor(!gooningColor);
      setFreakyColor(false);
      setLobotColor(false)
    }
    if(e.target.id == "freaky") {
      setFreakyColor(!freakyColor)
      setGooningColor(false);
      setLobotColor(false)
    };
    if(e.target.id == "lobot"){
      setLobotColor(!lobotColor)
      setGooningColor(false);
      setFreakyColor(false)
    }
  }
  //paragraphs
  const [textClick, setTextClick] = useState(0);
  
  let texts = ["buzdygan inkuba","berdysz adepta","pożoga świętości","kostur krwawego księżyca","kostur korzenia"]
  function textClickHandle(e){
    if(textClick == 1) setTextClick(0);
    else setTextClick(textClick + 1);
    console.log(textClick)
  }

  return (
    <div className="container">
      <div className='d-flex flex-column'>
          <h4>onClick=""/// value ? "true" : "false"</h4>
          <div className={`d-flex flex-row align-items-center justify-content-center ${gooningColor ? "bg-primary" : ""} ${freakyColor ? "bg-secondary" : ""} ${lobotColor ? "bg-success" : ""}`} id='images'>
            <img src='gooning.png' alt='gooning' className='w-25 img-fluid' id='gooning' onClick={imageClickHandle}/>
            <img src='freaky.gif' alt='freaky' className='w-25 img-fluid' id='freaky' onClick={imageClickHandle}/>
            <img src='lobot.jpg' alt='lobot' className='w-25 img-fluid' id='lobot' onClick={imageClickHandle}/>
          </div>
          <h4>array.map((arrayItem,index)=&gt;(function))</h4>
          <div className='d-flex flex-row align-items-center justify-content-center my-2' id='paragraphs'>
            {texts.map((text,index)=>(
              <p key={index} className={`text-center m-2 ${textClick == 0 ? "violet" : "green"}`}
              onClick={textClickHandle}>
                {text}
              </p>
            ))}
          </div>
      </div>
    </div>
  );
}

export default App;
