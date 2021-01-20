import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import Buttons from "./buttons";
import './App.css';

function Counters(props) {
    const {el, plusMinus} = props;
    const set= props.set;
    const [buttonsNum, setButtonsNum] = useState(set);

    const saveButtons = (sym) => {
        let num;
        if (sym==='+') num = +buttonsNum;
        if (sym==='-') num = (+buttonsNum)*(-1);
        props.newButtonArray(el.id, num);
        setButtonsNum('');
    }

    return (
        <div>
           {el.buttons.map(elb => <Buttons but={-elb} key={uuidv4()} id={el.id} plusMinus={plusMinus}/>)}
           {el.counter}{' '}
           {el.buttons.reverse().map(elb => <Buttons but={elb} key={uuidv4()} id={el.id} plusMinus={plusMinus}/>)}&nbsp;&nbsp;&nbsp;&nbsp;
           <input className='input' value={buttonsNum} onChange={event => setButtonsNum(event.target.value)} placeholder={'number of buttons'}/>&nbsp;
           <button className='butAdd' onClick={()=> saveButtons("+")}>Add buttons</button>&nbsp;
            <button className='butDelB' onClick={() => saveButtons("-")}>Delete buttons</button>&nbsp;
            <button className='butArrow2' onClick={()=>{props.Reset('down', el.id)}}>&#8595;</button>{' '}
            <button className='butArrow' onClick={()=>{props.Reset('up', el.id)}}>&#8593;</button>&nbsp;
            <button className='butDel' onClick={()=> props.deleteButton(el.id)}>Delete line</button>&nbsp;
        </div>
);
}

export default Counters;
