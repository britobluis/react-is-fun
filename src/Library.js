import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';
import Hiring from './Hiring';
import NotHiring from './NotHiring';

// To use local state Class component is needed
class Library extends React.Component {

    state = { // This gets rid of constructor 
        open: true, 
        freeBookmark: true,
        hiring: true,
        data: [],
        loading: false
    }

    componentDidMount() {
        this.setState({loading: true})
        fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1')
            .then(data => data.json()) // Turn data from API into json
            .then(data => this.setState({data, loading: false})) // Set data to state.date and loading to false
    }

    componentDidUpdate() {
        console.log("The component just updated!")
    }

    componentWillUnmount() {
        console.log("The component will unmount!")
    }

    toggleOpenClosed = () => { // Arrow functions automatically bind 'this' inside of the context of this function
        this.setState(prevState => ({ //Returns this Object, uses callback to make it async
            open: !prevState.open // Change it to the opposite
        }))
    }
    render() {
        // console.log(this.state)
        const { books } = this.props
        return ( 
            <div>
                {this.state.hiring ? <Hiring /> : <NotHiring />}
                {this.state.loading
                    ? "loading..."
                    : <div>
                        {this.state.data.map((product, i) => { // Array method .map() iterates an array
                            return (
                                <div key={i}>
                                    <h3>Library Product of the Week!</h3>
                                    <h4>{product.name}</h4>
                                    <img src={product.image} height={100} alt={product.name}/>
                                </div>
                            )
                        })}
                      </div>
                }
                <h2>The library is {this.state.open ? 'open' : 'closed'}</h2> { /*Conditional Rendering using ternary or inline if statement */}
                <button onClick={this.toggleOpenClosed}>Change</button>
                {books.map(
                    (book, i) =>
                        <Book
                            key={i}
                            title={book.title}
                            author={book.author}
                            pages={book.pages} 
                            freeBookmark={this.state.freeBookmark}/>
                )}
            </div>
        )
    }
}

Book.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    pages: PropTypes.number,
    freeBookmark: PropTypes.bool
}

export default Library