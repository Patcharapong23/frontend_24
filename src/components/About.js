import React, { Component, Fragment  } from 'react'

export default class About extends Component {
  render() {
    return (
      <Fragment>
        
      <divc className='img2'>
        {/* <img className='img-2' src='./images/my.png'  alt='...'/> {''}           */}
        </divc>
        <div className='col-lg-9 col-md-12 col-sm-12 d-flex align-items-center'>
          <div>
            <div className=' slide-in-top'>
              <head> </head>

              <h1 className='ls-2 mt-2 animate-charcter  m-0 slide-In-Bottom'>About</h1>
              <h3>Name: Patcharapong Namchan Nickname:Night</h3>
              <h3>19 years old, a student from North Bangkok University</h3>
              <h3>Faculty of Information Technology and Digital Innovation</h3>
              <h3>Information Technology and Digital Innovation</h3>
            </div>
            <div className=' slide-in-top'>
            <h1 className='ls-2 mt-2 animate-charcter  m-0 slide-In-Bottom'>Contact</h1>
              <h3>Line:zizoozaa01</h3>
              <h3>Facebook:Patcharapong Namchan</h3>
              <h3>Instagram:nai_luck</h3>
              <h3>Email:Patcharapong.namc@northbkk.ac.th</h3>
            </div>  
            <div className='slide-in-top'>
               <a href='https://www.facebook.com/profile.php?id=100011546595484' tabIndex={1}><img src='./images/facebook.png' className='facebook'  alt='...' /> {''}  </a>
               <a href='https://line.me/ti/p/6Yph0HY_iw'><img src='./images/line.png' className='line'  alt='...'/> {''}</a>    
               <a href='https://instagram.com/nai_luck?igshid=ZDdkNTZiNTM='><img src='./images/instagram.png' className='instagram'  alt='...'/> {''} </a>   
               <a href mailto='mailto:patcharapong.namc@northbkk.ac.th'><img src='./images/gmail.png' className='gmail'  alt='...'/> {''}</a>
            </div>
            {/* <h3 md={5} style={{paddingBottom:20}}>
              <img src='./images/Mio.jpg' className='Mio' alt='...'/>

            </h3> */}



            
          </div>
        </div>
      </Fragment>
    )
  }
}

