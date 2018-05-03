import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Header from './components/Header'
import BookShelves from './components/BookShelves'
import AllBooks from './components/AllBooks'
import Hero from './components/Hero'
import Footer from './components/Footer'
import * as BooksAPI from './BooksAPI'
import './App.css'

// import backgrounds
import backgroundOne from './assets/background-1.jpg'
import backgroundTwo from './assets/background-2.jpg'

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
    })
  }

  componentDidUpdate(prevProps, prevState) {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  shelfChange = (book, shelf) => {
    BooksAPI.update(book, shelf).then((books) => {
      book.shelf = shelf
      this.setState([ books ])
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
            <Hero
              image={ backgroundOne }
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
            <Hero
              image={ backgroundTwo }
            />
            <AllBooks
              books={ books }
              shelfChange={ shelfChange }
            />
          </div>
        )}/>
        <Footer />
      </div>
    )
  }
}

export default BooksApp
