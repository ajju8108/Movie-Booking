import React, { Component } from 'react'
import './Header.css'
import logo from "./logo.svg"

export default class Header extends Component {
  render() {
    return (
      <div className='header'>
        <div className='headerimg'>
            <img src={logo} alt="" />
        </div>
      </div>
    )
  }
}
