import React, { Component } from 'react'

class BookShelves extends Component {

  render() {
    const { books, shelfChange } = this.props

    return (
      <div className='book-shelf'>
        <div className='current-shelf'>
          <h1 className='shelf-title'>Books being Read</h1>
          <ol className='current-books book-list'>
            {books.filter( b => b.shelf === 'currentlyReading' ).map( (book, index) => (
              <li key={book.id} className='book'>
                <div className='book-container' style={{ backgroundImage: book.imageLinks !== undefined ? `url(${book.imageLinks.thumbnail})` : null }}>
                  <select className='shelf-selection' defaultValue={book.shelf} onChange={(e) => shelfChange(book, e.target.value)}>
                    <option disabled>Move Book to Shelf</option>
                    <option value='currentlyReading'>Currently Reading</option>
                    <option value='wantToRead'>Want to Read</option>
                    <option value='read'>Read</option>
                    <option value='noShelf'>None</option>
                  </select>
                </div>
                <h1 className='book-title'>{book.title}</h1>
                <h6 className='book-subtitle'>{book.subtitle}</h6>
                <h6 className='book-author'>{book.authors !== undefined ? book.authors : null}</h6>
              </li>
            ))}
          </ol>
        </div>
        <div className='want-shelf'>
          <h1 className='shelf-title'>Books to Read</h1>
          <ol className='want-books book-list'>
            {books.filter( b => b.shelf === 'wantToRead' ).map( (book, index) => (
              <li key={book.id} className='book'>
                <div className='book-container' style={{ backgroundImage: book.imageLinks !== undefined ? `url(${book.imageLinks.thumbnail})` : null }}>
                  <select className='shelf-selection' defaultValue={book.shelf} onChange={(e) => shelfChange(book, e.target.value)}>
                    <option disabled>Move Book to Shelf</option>
                    <option value='currentlyReading'>Currently Reading</option>
                    <option value='wantToRead'>Want to Read</option>
                    <option value='read'>Read</option>
                    <option value='noShelf'>None</option>
                  </select>
                </div>
                <h1 className='book-title'>{book.title}</h1>
                <h6 className='book-subtitle'>{book.subtitle}</h6>
                <h6 className='book-author'>{book.authors !== undefined ? book.authors : null}</h6>
              </li>
            ))}
          </ol>
        </div>
        <div className='already-shelf'>
          <h1 className='shelf-title'>Books Read</h1>
          <ol className='read-books book-list'>
            {books.filter( b => b.shelf === 'read' ).map( (book, index) => (
              <li key={book.id} className='book'>
                <div className='book-container' style={{ backgroundImage: book.imageLinks !== undefined ? `url(${book.imageLinks.thumbnail})` : null }}>
                  <select className='shelf-selection' defaultValue={book.shelf} onChange={(e) => shelfChange(book, e.target.value)}>
                    <option disabled>Move Book to Shelf</option>
                    <option value='currentlyReading'>Currently Reading</option>
                    <option value='wantToRead'>Want to Read</option>
                    <option value='read'>Read</option>
                    <option value='noShelf'>None</option>
                  </select>
                </div>
                <h1 className='book-title'>{book.title}</h1>
                <h6 className='book-subtitle'>{book.subtitle}</h6>
                <h6 className='book-author'>{book.authors !== undefined ? book.authors : null}</h6>
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default BookShelves
