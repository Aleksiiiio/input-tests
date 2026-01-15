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
  }

  //form
  function handleSubmit(e){
    e.preventDefault();
    let text = e.target.text.value;
    let number = e.target.number.value;
    let option = e.target.option.value;
    alert(text+", "+number+", "+option);
  }

  //read from file
  function handleFileRead(){
    let p = document.getElementById("textfromfile")
  fetch("/data.txt")
  .then(res => res.text())
  .then(text => {
    p.textContent = text;
  });
  }
  return (
    <div className="container">
      <div className='d-flex flex-column'>
          <h4>onClick=""/// value ? "true" : "false"</h4>
          <div className={`d-flex flex-row align-items-center justify-content-center blackborder ${gooningColor ? "bg-primary" : ""} ${freakyColor ? "bg-secondary" : ""} ${lobotColor ? "bg-success" : ""}`} id='images'>
            <img src='gooning.png' alt='gooning' className='w-25 img-fluid' id='gooning' onClick={imageClickHandle}/>
            <img src='freaky.gif' alt='freaky' className='w-25 img-fluid' id='freaky' onClick={imageClickHandle}/>
            <img src='lobot.jpg' alt='lobot' className='w-25 img-fluid' id='lobot' onClick={imageClickHandle}/>
          </div>
          <h4>array.map((arrayItem,index)=&gt;(function))</h4>
          <div className='d-flex flex-row align-items-center justify-content-center my-2 blackborder' id='paragraphs'>
            {texts.map((text,index)=>(
              <p key={index} className={`text-center m-2 ${textClick == 0 ? "violet" : "green"}`}
              onClick={textClickHandle}>
                {text}
              </p>
            ))}
          </div>
          <h4>e.target.&lt;id&gt;.value</h4>
          <div className='d-flex flex-column align-items-center justify-content-center blackborder p-2 mb-2' id='form'>
              <form onSubmit={handleSubmit} className='w-100'>
                <div className='form-group'>
                    <label htmlFor='text'>Tekst</label>
                    <input type="text" className="form-control" id='text'/>
                </div>
                <div className='form-group'>
                    <label htmlFor='number'>Numer</label>
                    <input type="number" className="form-control" id='number'/>
                </div>
                <div className='form-group'>
                    <label htmlFor='option '>Podaj imię</label>
                    <select className='form-control' id='option'>
                      <option>-</option>
                      <option>Opcja 1</option>
                      <option>Opcja 2</option>
                      <option>Opcja 3</option>
                      <option>Opcja 4</option>
                    </select>
                </div>
                <button type="submit" className='btn btn-primary my-2'>Wyświetl</button>
              </form>
          </div>
          <h2>fetch("file").then(res => res.text().then(text => p.textContent = text;);)</h2>
          <div className='d-flex flex-column align-items-center justify-content-center blackborder'>
            <button className='w-25' onClick={handleFileRead}>Read From File</button>
            <p id='textfromfile'></p>
          </div>
      </div>
    </div>
  );
}

export default App;
