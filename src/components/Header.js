import React, { Component } from 'react'
import { Link }  from 'react-router-dom'
import '../styles/Header.css'

class Header extends Component{

  

    render() {
      
      return (
        <header className="header">
          <navbar className="nav">
            <ul className="list">
              <li className="item"><Link to="/" activeStyle={{ color: 'red' }} className="link" activeClassName="active">Home</Link></li>
              <li className="item"><Link to="/List" className="link" activeClassName="active">Como funciona</Link></li>
              <li className="item"><Link to="/QuemSomos" className="link" activeClassName="active">Cadastre-se</Link></li>
              <li className="item"><Link to="/Cadastre" className="link" activeClassName="active">Contatos</Link></li>
            </ul>
          </navbar>
        </header>
      )
    }
}

export default Header
