import React from 'react';

const Book = ({title, author, pages}) => {
    return (
        <section>
            <h2>{title}</h2>
            <p>by: {author}</p>
            <p>Pages: {pages} pages</p>
        </section>
    )
}

// To use local state Class component is needed
class Library extends React.Component {

    state = { open: false } // This gets rid of constructor below

    // constructor(props) {
    //     super(props)
    //     this.state = { // State is just an Object, that has as many keys as one sets up
    //         open: true
    //     }
    //     this.toggleOpenClosed = this.toggleOpenClosed.bind(this) // Makes 'this' accessible to custom method
    // }

    toggleOpenClosed = () => { // Arrow functions automatically bind 'this' inside of the context of this function
        this.setState(prevState => ({ //Returns this Object, uses callback to make it async
            open: !prevState.open // Change it to the opposite
        }))
    }
    render() {
        console.log(this.state)
        const { books } = this.props
        return ( 
            <div>
                <h2>The library is {this.state.open ? 'open' : 'closed'}</h2> { /*Conditional Rendering using ternary or inline if statement */}
                <button onClick={this.toggleOpenClosed}>Change</button>
                {books.map(
                    (book, i) =>
                        <Book
                            key={i}
                            title={book.title}
                            author={book.author}
                            pages={book.pages} />
                )}
            </div>
        )
    }
}

export default Library