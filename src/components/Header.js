import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <div className='logo'>
          <h1>my/reads</h1>
          <h5>A Book Tracking Application</h5>
        </div>
        <Link to={this.props.goToPage}></Link>
      </div>
    )
  }
}

export default Header
