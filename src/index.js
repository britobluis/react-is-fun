import React from 'react';
import ReactDOM from 'react-dom';

var style= {
    backgroundColor: 'orange',
    color: 'white',
    fontFamily: 'Helvetica'
}

ReactDOM.render(
    <div style={style}>
        <h1 id="heading-element" className="header">Hello World!</h1>
        <p>React is fun!</p>
    </div>,
    document.getElementById('root')
)