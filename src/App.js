import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Header from './components/Header'
import BookShelves from './components/BookShelves'
import AllBooks from './components/AllBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends Component {
  // book keys
  // title, authors, averageRating, categories, id, imageLinks[thumbnail], pageCount, previewLink, public, shelf, subtitle

  state = {
    books: [],
    showSearchPage: false
  }

  // get books api then set the state
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
      console.log(books)
    })
  }

  shelfChange = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      book.shelf = shelf
      this.setState(state => ({ books: state.books.filter(b => b.id !== book.id).concat([book]) })
      )
    })
  }

  render() {
    const { shelfChange } = this
    const { books } = this.state

    return (
      <div>
        <Route exact path='/' render={() => (
          <div className='home-page'>
            <Header
              goToPage='/books'
            />
            <BookShelves
              books={ books }
              shelfChange={ shelfChange }
            />
          </div>
        )}/>
        <Route path='/books' render={() => (
          <div className='book-directory'>
            <Header
              goToPage=''
            />
            <AllBooks
              books={ books }
              shelfChange={ shelfChange }
            />
          </div>
        )}/>
      </div>
    )
  }
}

export default BooksApp
