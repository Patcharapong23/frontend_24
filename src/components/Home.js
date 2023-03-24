import React, { Component, Fragment } from 'react'
export default class Home extends Component {
  render() {
    return (
      <Fragment>
      <div className='row col-lg-9 col-md-12'>
          <div>
            <div className=' H1D slide-in-top'>
              <h1 className='welcome'>Welcome to Portfolio</h1>
              <h2 className='animate-charcter'> Patcharapong Namchan </h2>
            </div>
          </div>
        </div>
        <div className='row col-lg-9 col-md-12'>
        <div className='img1 slide-in-top'>
        <img src='./images/shape.png' className='shape'  alt='...'/> {''}    
        <img src='./images/my.png'  className='myi' alt='...'/>{''} 
        </div>
      </div>
      </Fragment>
    )
  }
}

