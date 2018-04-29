import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <h1><span>MyReads:</span> A Book Tracking Application</h1>
        <Link to={this.props.goToPage}></Link>
      </div>
    )
  }
}

export default Header
