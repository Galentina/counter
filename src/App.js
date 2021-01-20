import React, {useState} from 'react';
import{v4 as uuidv4} from 'uuid';
import Counters from './Counters'
import './App.css';

function App() {

  const [counter, setCounter] = useState([
      {id: uuidv4(), counter: 1, buttons: [1]},

  ]) ;

  const [counterNum, setCounterNum] = useState('');


  const plusMinus =(id, number) => {
    const newCounter = counter.map(el => (el.id === id) ? {...el, counter: el.counter + number} : {...el});
      console.log(newCounter);
      setCounter(newCounter);
  }

    const deleteButton = (id) => {
      const newCounter = counter.filter(el => el.id !== id);
        setCounter(newCounter);
    }

    const addCounter = (num) => {
      if (num !== '' && !isNaN(num)) {
        const newCounter = [...counter, {id: uuidv4(), counter: +num, buttons: []}];
        setCounter(newCounter);
      }
      setCounterNum('');
    }

    const newButtonArray = (id, buttons) => {
        const newCounter = counter.map(el => {
            if (el.id === id) {
                if (buttons>0) {
                    const arr = el.buttons;
                    let j = (arr.length === 0) ? 1 : arr.length + 1;
                    for (let i = j; i < j + buttons; i++) {
                        arr.push(i);
                    }
                    return {...el, buttons: arr};
                } else if (buttons<0){
                    const arr = el.buttons;
                    for (let i = 1; i <= -buttons; i++) {
                        arr.pop();
                    }
                    return {...el, buttons: arr};
                }
            } return el;
         })
      setCounter(newCounter);
    }

    // const ifFirst = (id) = (counter[0].id === id);
    // const ifLast = (id) = (counter[counter.length-1].id===id);

    const Reset = (move, id) => {
        let temp;
        const newCounter = [...counter];
        if (move === 'down') {
            for (let i = 0; i < newCounter.length; i++) {
                if (newCounter[i].id === id && i !== newCounter.length - 1) {
                    temp = newCounter[i];
                    newCounter[i] = newCounter[i + 1];
                    newCounter[i + 1] = temp;
                    break;
                }
            }
        }
        if (move === 'up') {
            for (let i=0; i<newCounter.length; i++) {
                if (newCounter[i].id === id && i!==0) {
                    temp = newCounter[i];
                    newCounter[i] = newCounter[i - 1];
                    newCounter[i - 1] = temp;
                    break;
                }
            }
        }
        setCounter(newCounter);
    }

  return (
    <div className="App">
      <header className="App-header">Counter V2</header>
        <div>
          <input className='inputC' value={counterNum} onChange={event => setCounterNum(event.target.value)} placeholder={'new counter'} />{' '}
          <button className='butAdd' onClick={() => addCounter(counterNum)}>Add Counter</button>
        </div>
        {counter.map((el, id) => <Counters el={el} key={id} plusMinus={plusMinus} deleteButton={deleteButton} newButtonArray={newButtonArray} Reset={Reset}/>)}

    </div>
  );
}

export default App;
