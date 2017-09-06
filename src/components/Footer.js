import React, {Component} from 'react'
import '../styles/Footer.css'

class Footer extends Component{

  

    render() {
      
      return (
        <footer className="footer">
          <p className="developedBy">developed by andreaffonso</p>
          <ul className="list">
            <li className="item">facebook</li>
            <li className="item">linkedin</li>
            <li className="item">github</li>
          </ul>
        </footer>
      )
    }
}

export default Footer;
