import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <Link className='logo' to=''>
          <h1>my/reads</h1>
          <h5>A Book Tracking Application</h5>
        </Link>
        <Link className='icon' to={this.props.goToPage}></Link>
      </div>
    )
  }
}

export default Header
