//card using && to render

import React, {Component} from 'react'
import '../styles/Card.css'

import Icon from 'react-icons-kit';
      
import { ic_local_grocery_store } from 'react-icons-kit/md/ic_local_grocery_store';       

  

class Card extends Component {
  render() {
    const {name, icon} = this.props
    return (
      <div className="card">
        <h1 className="title">{name || 'categoria'}</h1>
        <Icon icon={this.props.icon || ic_local_grocery_store} size={48}/>
      </div>
    )
  }
}


export default Card
