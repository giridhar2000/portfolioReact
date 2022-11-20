import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareJs } from '@fortawesome/free-brands-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faEnvira } from '@fortawesome/free-brands-svg-icons'
import { faJava } from '@fortawesome/free-brands-svg-icons'
import { faAndroid } from '@fortawesome/free-brands-svg-icons'
import ProgressBar from 'react-bootstrap/ProgressBar';


export default class Profile extends Component {
  render() {
    return (
      <div id='profile' className='profile'>
        <h2 className='head'>TECHNOLOGIES</h2>
        <br></br>
        <FontAwesomeIcon className='fa' icon={faSquareJs} />     
        <FontAwesomeIcon className='fa' icon={faReact} />    
        <FontAwesomeIcon className='fa' icon={faEnvira} /> 
        <FontAwesomeIcon className='fa' icon={faJava} /> 
        <FontAwesomeIcon className='fa' icon={faAndroid} /> 
        <div className='row'>
          <div className='column'>
            <h3>Javascript</h3>
          </div>
          <div className='column'>
          <ProgressBar className='pb' animated now={65} label={"65%"}/>
          </div>
        </div>

        <div className='row'>
          <div className='column'>
            <h3>React</h3>
          </div>
          <div className='column'>
          <ProgressBar className='pb' animated now={65} label={"65%"}/>
          </div>
        </div>

        <div className='row'>
          <div className='column'>
            <h3>MongoDB</h3>
          </div>
          <div className='column'>
          <ProgressBar className='pb' animated now={25} label={"25%"}/>
          </div>
        </div>

        <div className='row'>
          <div className='column'>
            <h3>Java</h3>
          </div>
          <div className='column'>
          <ProgressBar className='pb' animated now={80} label={"80%"}/>
          </div>
        </div>

        <div className='row'>
          <div className='column'>
            <h3>Android Studio</h3>
          </div>
          <div className='column'>
          <ProgressBar className='pb' animated now={60} label={"60%"}/>
          </div>
        </div>

     </div>
    )
  }
}
