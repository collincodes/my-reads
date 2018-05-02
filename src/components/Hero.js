import React, { Component } from 'react'

class Hero extends Component {
  render() {
    const { image } = this.props

    return(
      <div className='hero' style={{
          backgroundImage: `url(${image})`
        }}>
        <div className='content'>
          <h1>A Udacity Project</h1>
        </div>
      </div>
    )
  }
}

export default Hero
