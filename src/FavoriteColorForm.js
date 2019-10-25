import React from 'react';

class FavoriteColorForm extends React.Component {
    state = { value: '' }

    newColor = e => {
        this.setState({ value: e.target.value }) // Sets state value to form event input value
    }

    submit = e => {
        console.log(`New Color: ${this.state.value}`) 
        e.preventDefault()
    }
    
    render() {
        return (
            <form onSubmit={this.submit}>
                <label>Pick your Favorite Color:
                    <input type="color" onChange={this.newColor}/>
                </label>
                <button>Submit</button>
            </form>
        )
    }
}

export default FavoriteColorForm;