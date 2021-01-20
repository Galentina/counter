import React from 'react';
import './App.css';

function Buttons(props) {

    return (
        <div className='next'>
            <button onClick={()=> props.plusMinus(props.id, props.but)}>{props.but}</button>{' '}

        </div>
    );
}

export default Buttons;
