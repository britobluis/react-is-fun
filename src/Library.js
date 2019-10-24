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
    constructor(props) {
        super(props)
        this.state = { // State is just an Object, that has as many keys as one sets up
            open: true
        }
    }

    render() {
        console.log(this.state)
        const { books } = this.props
        return ( 
            <div>
                <h2>The library is {this.state.open ? 'open' : 'closed'}</h2> { /*Conditional Rendering using ternary or inline if statement */}
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