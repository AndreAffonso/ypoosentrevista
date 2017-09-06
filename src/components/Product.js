
import React, {Component} from 'react'
import '../styles/Product.css'

      
import Icon from 'react-icons-kit'
import { iosCart } from 'react-icons-kit/ionicons/iosCart'       

    
  

class Product extends Component {

  state = {value: 0}
  
    handleChange = (e) => {
      this.setState((prevState) => ({value: prevState.value+1}))
    }


  render() {
    const {name, price, quantity, img} = this.props 
    return (
      <div className="Product">
        <p className="name">{ name }</p>
        <img className="img" src={ img } alt="Produto"></img>
        <span className="quantity">{ quantity }</span>
        <span className="price">{ price }</span>
        
        <div className="col-md-8 col-md-offset-2">
          <input className="form-control" type="number" placeholder="quantidade"/>
          <button className="btn btn-block ">
           <span className="adicionar">Adcionar ao carrinho</span><Icon icon={ iosCart } size={18}/>
          </button>
        </div>
        
      </div>
    )
  }
}


export default Product