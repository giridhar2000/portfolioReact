import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
  } from 'mdb-react-ui-kit';
import '../App.css'

export default class Footer extends Component {
  render() {
    return (
    <MDBFooter bg='light' className='bottom text-center text-lg-left' style={{marginTop: "25vh",
        display: "flex"}}>
    <hr />
  <MDBContainer className='p-4 pb-0'>
      <MDBRow className='d-flex justify-content-center'>
        <MDBCol size='auto' className='mb-4 mb-md-0'>
          <p className='pt-2'>
            <strong>Giridhar&copy; {new Date().getFullYear()} Copyright{' '}</strong>
          </p>
        <div className=''>
            
        </div>
        </MDBCol>

        <MDBCol size='auto' className='mb-4 mb-md-0'>
        <FontAwesomeIcon className='fa' icon={faInstagram} onClick={()=>{window.open("https://www.instagram.com/_miracle_boiy_/", "_blank")}}/>
        <FontAwesomeIcon className='fa' icon={faGithub} onClick={()=>{window.open("https://github.com/giridhar2000", "_blank")}}/> 
        <FontAwesomeIcon className='fa' icon={faEnvelope} onClick={()=>{window.open("mailto:giribala2001@gmail.com", "_blank")}}/>
        </MDBCol>
      </MDBRow>
  </MDBContainer>


</MDBFooter>
    )
  }
}
