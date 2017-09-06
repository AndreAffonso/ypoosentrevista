
import React, {Component} from 'react'
import '../styles/Destaques.css'
import Product from './Product'

import imageProduct from '../images/cafe.png'


import { ic_local_grocery_store } from 'react-icons-kit/md/ic_local_grocery_store';       

  

class Destaques extends Component {
  render() {
    
    return (
      <div className="Destaques">
        <h1 className="text-center">Destaques</h1>
        
        <div className="Box">
            <Product 
                name="Cubos de Paleta Friboi Reserva"
                quantity="600g"
                price="R$ 8,69"
                img={ imageProduct }
            />
            <Product 
                name="Limpador Multiuso Uau Lavanda"
                quantity="500ml"
                price="R$ 2,23"
                img={ imageProduct }
            />
            <Product 
            name="Molho Tomate Fugini Sachet Tradicional"
            quantity="340g"
            price="R$ 1,21"
            img={ imageProduct }
            />
            <Product 
                name="Café Tradicional Padre Victor"
                quantity="500g"
                price="R$ 7,63"
                img={ imageProduct }
            />
        </div>
        
        <div className="Box">
            <Product 
                name="Desinfetante Kalipto Eucalipto"
                quantity="2L"
                price="R$ 4,99"
                img={ imageProduct }
            />
            <Product 
                name="Melão Amarelo"
                quantity="900g"
                price="R$ 1,79"
                img={ imageProduct }
            />
            <Product 
                name="Repolho Verde"
                quantity="1kg"
                price="R$ 0,99"
                img={ imageProduct }
            />
            <Product 
                name="Batata Lavada"
                quantity="1kg"
                price="R$ 0,99"
                img={ imageProduct }
            />
        </div>

        <div className="Box">
            <Product 
                name="Farinha de Trigo SM"
                quantity="1Kg"
                price="R$ 2,34"
                img={ imageProduct }
            />
            <Product 
                name="Cebola Nacional"
                quantity="500g"
                price="R$ 0,84"
                img={ imageProduct }
            />
            <Product 
                name="Café Extra Forte Padre Victor"
                quantity="500g"
                price="R$ 7,63"
                img={ imageProduct }
            />
            <Product 
                name="Limpador Multiuso Uau Floral"
                quantity="500ml"
                price="R$ 2,23"
                img={ imageProduct }
            />
        </div>
        
        <br/><br/><br/><br/>
      </div>
    )
  }
}


export default Destaques