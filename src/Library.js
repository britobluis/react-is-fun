import React from 'react';

const Book = ({title, author, pages, freeBookmark}) => {
    return (
        <section>
            <h2>{title}</h2>
            <p>by: {author}</p>
            <p>Pages: {pages} pages</p>
            <p>Free Bookmark Today: {freeBookmark ? 'yes!' : 'no!'}</p>
        </section>
    )
}

const Hiring = () => 
    <div>
        <p>The library is hiring. Go to www.library.com/jobs for more.</p>
    </div>

const NotHiring = () =>
    <div>
        <p>The library is not hiring. Check back later for more info.</p>
    </div>

// To use local state Class component is needed
class Library extends React.Component {

    state = { // This gets rid of constructor 
        open: true, 
        freeBookmark: true,
        hiring: true
    } 

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
                {this.state.hiring ? <Hiring /> : <NotHiring />}
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

export default Library