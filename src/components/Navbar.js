import React from 'react'
import { Link } from 'gatsby'
import instagram from '../img/instagram.svg'
import facebook from '../img/facebook.svg'
import logo from '../img/logo.png'

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <img src={logo} alt="Cascina Rampina" style={{ width: '88px' }} />
          </figure>
        </Link>
      </div>
      <div className="navbar-start">
        <Link className="navbar-item" to="/chi-siamo">
          Chi siamo
        </Link>
        <Link className="navbar-item" to="/cosa-facciamo">
          Cosa facciamo
        </Link>
        <Link className="navbar-item" to="/news">
          News
        </Link>
      </div>
      <div className="navbar-end">
        <a
          className="navbar-item"
          href="https://www.instagram.com/cascinarampina/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon">
            <img src={instagram} alt="Instagram" />
          </span>
        </a>
        <a
          className="navbar-item"
          href="https://www.facebook.com/cascinarampina/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon">
            <img src={facebook} alt="Facebook" />
          </span>
        </a>
      </div>
    </div>
  </nav>
)

export default Navbar
