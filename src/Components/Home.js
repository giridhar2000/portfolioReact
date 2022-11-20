import React, { Component } from 'react'
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn} from "react-scroll-motion";
import Hihand from '../Styles/photos/hi.png'
import name from '../Styles/photos/name.png'
import showu from '../Styles/photos/poiting.png'
import works from '../Styles/photos/works.png'

export default class Home extends Component {
  render() {
    const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
    return (
        <div className='home' id='home'>
        <ScrollContainer>
          <ScrollPage>
            <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
            <span style={{ fontSize: "larger" }}> HEY THERE <img src={Hihand} alt='Hi' width={75}></img></span><br></br>
              <span style={{ fontSize: "larger" }}>- I'M GIRIDHAR - <img src={name} alt='Hi' width={75}></img></span>
            </Animator>
          </ScrollPage>
          <ScrollPage>
            <Animator animation={ZoomInScrollOut}>
              <span style={{ fontSize: "larger" }}>SOFTWARE ENGINEER ✨</span>
            </Animator>
          </ScrollPage>
          <ScrollPage>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "30%", marginTop:"5%" }} >
              <span style={{ fontSize: "larger"}}>
                <Animator animation={MoveIn(-1000, 0)}>LET ME SHOW YOU <img src={showu} alt='Hi' width={50} height={50}></img></Animator>
                <Animator animation={MoveIn(1000, 0)}>SOME OF MY GREAT WORKS <img src={works} alt='Hi' width={50} height={50}></img></Animator>
              </span>
            </div>
          </ScrollPage>
        </ScrollContainer>
        </div>
    )
  }
}
