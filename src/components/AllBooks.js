import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import * as BooksAPI from '../BooksAPI'

class AllBooks extends Component {
  // define proptypes here
  static propTypes = {
    books: PropTypes.array.isRequired
  }

  // set initial state for filter query
  state = {
    query: '',
    searched: []
  }

  // function to update the state for filter
  updateQuery = (query) => {
    this.setState({ query: query })

    if (query) {
      BooksAPI.search(query).then((response) => this.setState({
        searched: response
      }))
    }
  }

  render() {
    const { books, shelfChange } = this.props
    const { query, searched } = this.state

    // initialize our showingBooks query
    let showingBooks
    if (query && !searched.error) {
      showingBooks = searched
    } else {
      showingBooks = books
    }

    // after we filter the books by query, sort them by title
    showingBooks.sort(sortBy('title'))

    return (
      <div className='all-books'>
        <div className='search-query'>
          <input
            className='search-books'
            name='search'
            type='text'
            placeholder='Search Books by Title'
            value={query}
            onChange={(e) => this.updateQuery(e.target.value)}
          />
        </div>

        <h1 className='shelf-title'>Book Directory</h1>
        <ol className='book-list'>
          {showingBooks.map((book, index) => (
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
              {JSON.stringify(books.authors)}
            </li>
          ))}
        </ol>
      </div>
    )
  }
}

export default AllBooks
