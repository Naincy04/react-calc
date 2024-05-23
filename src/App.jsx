import styles from './App.module.css';
import Display from './components/Display';
import ButtonsContainer from './components/ButtonsContainer';
import { useState } from 'react';

function App(){

  let [calVal, setVal] = useState();
  const onButtonClick = (buttonText) =>{
    console.log(buttonText);
    if(buttonText === 'C'){
      setVal('');
    }
    else if(buttonText === '='){
      const result = eval(calVal);
      setVal(result);
    }
    else {
      const newVal = calVal + buttonText;
      setVal(newVal);
    }
  } 

  return <center>
    <div className={styles.calculator}>
      <h1 id={styles.heading}>Calculator</h1>
    </div>
    <br />
    <div className = {styles.container}>
      <Display displayValue = {calVal}/>
      <ButtonsContainer onButtonClick = {onButtonClick}/>
    </div>
    </center>
}

export default App;