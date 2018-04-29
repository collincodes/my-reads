import React, { Component } from 'react'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class AllBooks extends Component {
  // define proptypes here

  // set initial state for filter query

  // function to update the state for filter

  // function to reset the state

  render() {
    const { books } = this.props

    // initialize our showingBooks query

    // after we filter the books by query, sort them by name

    return (
      <div className='all-books'>
        <div className='search-query'>
          <input name='search' type='text' placeholder='Search Books' />
        </div>

        <ol className='book-list'>
          {books.map((book, index) => (
            <li key={book.id} className='book'>
              <div className='book-cover' style={{
                backgroundImage: `url(${book.imageLinks.thumbnail})`
              }}/>
              <h1>{book.title}</h1>
              <h6>{book.subtitle}</h6>
              <h6>Written By: {book.authors[0]}</h6>
            </li>
          ))}
        </ol>
      </div>
    )
  }
}

export default AllBooks
