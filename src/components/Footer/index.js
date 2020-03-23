import React, { Component } from 'react';
import { login } from 'helpFunctions'
import './style.scss'

const Footer = () => (
  <footer>
    <p onClick={login}>
      Powered by <a href='http://www.deezer.com/pl/' target='_blank' rel='noopener noreferrer'>
        <img src='/assets/images/DZ_Logo.png' alt='Deezer Logo' />
      </a>
    </p>
  </footer>
)

export default Footer