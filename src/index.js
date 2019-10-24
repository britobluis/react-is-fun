import React from 'react';
import ReactDOM from 'react-dom';

class Message extends React.Component {
    render() {
        return (
            <div>
                <h1 id="heading-element" className="header">Hello World!</h1>
                <p>React is fun!</p>
            </div>
        )
    }
}

ReactDOM.render(
    <Message />, document.getElementById('root')
)