// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {

  const [temperatureValue,setTemperatureValue] = useState(10);
  const [color,setColor] = useState('normal');
  const [image,setImage] = useState('normalImage');

  const increaseFunc=()=>{
    var newTemp = temperatureValue + 1;

    if(newTemp>0 && newTemp<20){
      setColor('normal')
      setImage('normalImage')
    }else if(newTemp>-20 && newTemp<0){
      setColor('cold')
      setImage('coldImage')
    }else if(newTemp<-20){
      setColor('veryCold')
      setImage('veryColdImage')
    }else if(newTemp>20 && newTemp<40){
      setColor('hot')
      setImage('hotImage')
    }else if(newTemp>40){
      setColor('veryHot')
      setImage('veryHotImage')
    }

    setTemperatureValue(newTemp);
  }
  const decreaseFunc=()=>{
    var newTemp = temperatureValue - 1;

    if(newTemp>0 && newTemp<20){
      setColor('normal')
      setImage('normalImage')
    }else if(newTemp>-20 && newTemp<0){
      setColor('cold')
      setImage('coldImage')
    }else if(newTemp<-20){
      setColor('veryCold')
      setImage('veryColdImage')
    }else if(newTemp>20 && newTemp<40){
      setColor('hot')
      setImage('hotImage')
    }else if(newTemp>40){
      setColor('veryHot')
      setImage('veryHotImage')
    }

    setTemperatureValue(newTemp);
  }
  return (
    <div className={`container ${image}`}>
    <div className='temperature-container'>
      <div className='temperature-card'>
        <div className='temperature-value-container'>
        <div className={`temperature-value ${color}`}>{temperatureValue}&deg;C</div>
        </div>
        <div className='button-container'>
        <button className='increase button' onClick={increaseFunc}>+</button>
        <button className='decrease button' onClick={decreaseFunc}>-</button>
        </div>
      </div>
    </div>
    </div>
    );
}

export default App;

/* <h1>&deg;</h1>
        <h1>&#176;</h1>
        <h1>&#x00B0;</h1>
        <h1>&#xB0;</h1> {/* for hex code, you can omit the leading zeros */
        /* <h1>{'\u00B0'}</h1> */