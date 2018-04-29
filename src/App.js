import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import Header from './components/Header'
import BookShelves from './components/BookShelves'
import AllBooks from './components/AllBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends Component {
  state = {
    showSearchPage: false
  }

  render() {
    return (
      <div>
        <Route exact path='/' render={() => (
          <div className='home-page'>
            <Header
              goToPage='/books'
            />
            <BookShelves />
          </div>
        )}/>
        <Route path='/books' render={() => (
          <div className='book-directory'>
            <Header
              goToPage=''
            />
            <AllBooks />
          </div>
        )}/>
      </div>
    )
  }
}

export default BooksApp
