import React, {Component} from 'react'
import '../styles/Footer.css'

import Icon from 'react-icons-kit'

import { socialFacebook } from 'react-icons-kit/ionicons/socialFacebook';       

import { iosTelephone } from 'react-icons-kit/ionicons/iosTelephone';       


import { message } from 'react-icons-kit/typicons/message';       

    
    
   

class Footer extends Component{

  

    render() {
      
      return (
        <footer className="footer">
          <p className="developedBy">Fale conosco</p>
          <ul className="list">
            <li className="item"> <Icon icon={socialFacebook} size={28}/></li>
            <li className="item"><Icon icon={iosTelephone} size={28}/></li>
            <li className="item"><Icon icon={message} size={28}/></li>
          </ul>
        </footer>
      )
    }
}

export default Footer;
