import React, { Component } from 'react'

export default class Projects extends Component {
  constructor(){
    super();
    this.clgWeb = this.clgWeb.bind(this)
  }

  clgWeb(no){
    switch(no){
      case 1:
        window.open("https://github.com/giridhar2000/sara-website", "_blank")
        break
      case 2:
        window.open("https://github.com/giridhar2000/medsavvy", "_blank")
        break
      case 3:
        window.open("https://github.com/giridhar2000/memoir-blog-", "_blank")
        break
      case 4:
        window.open("https://github.com/giridhar2000/sosApp", "_blank")
        break
      default:
        return
    }
    
    
    
    
  }
  render() {
    return (
      <div id='work' className='projects'>
        <div className='row'>
        <h2 style={{color: "#4C4646"}}>PROJECTS</h2>
        <p className='text-muted' style={{color: "#4C4646"}}>(click to open)</p>
          <div className='column'>
            <div className='card1'>
              <div className='face face1'>
                <div className='content'>
                    <h2>College Website</h2>
                </div>
              </div>
              <div onClick={()=>{this.clgWeb(1)}} className='face face2'>
                <div className='content'>
                    <h3>Worked with my college to help them redesign their website, which is currently deployed.</h3>
                </div>
              </div>
            </div>
          </div>
          <div className='column'>
          <div className='card1'>
              <div className='face face1'>
                <div className='content'>
                    <h2>Internship project with Spring boot</h2>
                </div>
              </div>
              <div onClick={()=>{this.clgWeb(2)}} className='face face2'>
                <div className='content'>
                    <h3>Did a internship project in cognizant in react and spring boot.</h3>
                </div>
              </div>
            </div>
          </div>

          <div className='column'>
          <div className='card1'>
              <div className='face face1'>
                <div className='content'>
                    <h2>Blog in MERN</h2>
                </div>
              </div>
              <div onClick={()=>{this.clgWeb(3)}} className='face face2'>
                <div className='content'>
                    <h2>Did a blog in MERN. (fully functional)</h2>
                </div>
              </div>
            </div>
          </div>
          <div className='column'>
          <div className='card1'>
              <div className='face face1'>
                <div className='content'>
                    <h2>SoS Android App</h2>
                </div>
              </div>
              <div onClick={()=>{this.clgWeb(4)}} className='face face2'>
                <div className='content'>
                    <h3>An SoS App in Java(Android) got selected by TNSCT and won 7.5k.</h3>
                </div>
              </div>
            </div>  
          </div>
          </div>
      </div>

    )
  }
}
