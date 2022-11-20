import React, { Component } from 'react'
import pic from '../Styles/photos/pic.jpg'
import '../App.css'

export default class About extends Component {
  render() {
    return (
      <div id='about' className='about'><div class="column">
        <h2 className='heading'>ABOUT</h2>
      <div class="card" style={{left: "80%"}}>
          <div class="card-body">
              <div class="row">
                  <div class="column left">
                      <img src={pic} class="pic" alt="Profile-pic"></img>
                  </div>
                  <div class="column right">
                      <h4 class="card-title" style={{margin: "0"}}>Giridhar B</h4>                       
                      <h5>Programmer Analyst Trainee</h5>
                      <h6 class="card-subtitle mb-2 text-muted">Cognizant</h6>
                  </div>
              </div>
          </div>
          <div class="row">
              <table>
                  <thead>
                      <tr>
                          <td>Total Expirence</td>
                          <td>Current Company</td>
                          <td>Salary</td>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td>03 Years</td>
                          <td>01 Years</td>
                          <td>4 LPA</td>
                      </tr>
                  </tbody>
              </table>
          </div>

          <div class="row" style={{margin: "1vh"}}>
              <div class="column">
              </div>
          </div>
      </div>
      </div>
      </div>
    )
  }
}
