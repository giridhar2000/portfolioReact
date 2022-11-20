import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../Styles/photos/logo.png'
import resume from '../GiridharResume.pdf';
import {faCloudArrowDown} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../App.css';


export default class NavgationBar extends Component {
  constructor(){
    super();
    this.downloadResume = this.downloadResume.bind(this)
  }

  downloadResume(){
    const link = document.createElement("a");
    link.download = resume;
    link.href = resume;
    link.click();
  }
  render() {
    return (
      <div className='parent' style={{color: "whitesmoke!important"}}>      
        {['xl'].map((expand) => ( 
        <Navbar key={expand} expand={expand} className="mb-3 navibar" fixed="top">
          <Container>
            <Navbar.Brand className='brand' style={{fontSize: "xxx-large",color: "whitesmoke"}}  href="/"><img src={logo} alt={'logo'} width={40}></img></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title className='brand' id={`offcanvasNavbarLabel-expand-${expand}`}>
                Portfolio
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="AppNav justify-content-center flex-grow-1 pe-3">
                  <Nav.Link href="#home">INTRO</Nav.Link>
                  <Nav.Link href='#about'>WHO</Nav.Link>
                  <Nav.Link href='#profile'>WHAT</Nav.Link>
                  <Nav.Link href='#work'>WORK</Nav.Link>
                </Nav>
                <Button type='button' className='btn' onClick={this.downloadResume}>Resume <FontAwesomeIcon icon={faCloudArrowDown} /></Button>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      </div>
    )
  }
}
