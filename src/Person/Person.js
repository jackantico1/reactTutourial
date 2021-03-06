import React from 'react';

const person = (props) => {
    const style = {
        '@media (min-wdith: 500px)': {  //this is now a JS object
            width: "450px"
        }
    }
    
    return (
        <div className="Person" style={style}>   
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
};

export default person;