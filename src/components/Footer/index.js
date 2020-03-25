import React from 'react'
import { login } from 'helperFunctions'
import './style.scss'

const Footer = () => (
  <footer>
    <p onClick={login}>
      Powered by <a href='http://www.deezer.com/pl/' target='_blank' rel='noopener noreferrer'>
        <img src="https://img.icons8.com/color/48/000000/deezer.png" alt='Deezer Logo' />
      </a>
    </p>
  </footer>
)

export default Footer