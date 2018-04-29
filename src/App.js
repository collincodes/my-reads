import React, { Component } from 'react'
import { Route } from 'react-router-dom'
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
          <BookShelves />
        )}/>
        <Route path='/books' render={() => (
          <AllBooks />
        )}/>
      </div>
    )
  }
}

export default BooksApp
