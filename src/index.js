import React from 'react';
import ReactDOM from 'react-dom';
import Library from './Library';
import FavoriteColorForm from './FavoriteColorForm';

// Books
let bookList = [
    { "title": "Hunger", "author": "Roxane Gay", "pages": 320 },
    { "title": "The Sun Also Rises", "author": "Ernest Hemingway", "pages": 260 },
    { "title": "White Teeth", "author": "Zadie Smith", "pages": 480 },
    { "title": "Cat's Cradle", "author": "Kurt Vonnegut", "pages": 304 }
]

ReactDOM.render(
    <Library books={bookList}/>
    // <FavoriteColorForm />
    ,
    document.getElementById('root')
)