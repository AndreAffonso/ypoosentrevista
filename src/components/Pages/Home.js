import React, { Component } from 'react'
import Card from '../Card'
import '../../styles/Home.css'
import Destaques from '../Destaques'

import logo from '../../images/centerBox.png'

import Icon from 'react-icons-kit'
import { glass } from 'react-icons-kit/iconic/glass';       
import { ic_local_cafe } from 'react-icons-kit/md/ic_local_cafe' 
import { ic_local_bar } from 'react-icons-kit/md/ic_local_bar'     
import { hammer } from 'react-icons-kit/icomoon/hammer'
import { iosPaw } from 'react-icons-kit/ionicons/iosPaw'
import { iosNutrition } from 'react-icons-kit/ionicons/iosNutrition'
import { ic_kitchen } from 'react-icons-kit/md/ic_kitchen'
import { ic_cake } from 'react-icons-kit/md/ic_cake'
import { bathtub } from 'react-icons-kit/fa/bathtub'
import { water } from 'react-icons-kit/entypo/water'



import { ic_local_grocery_store } from 'react-icons-kit/md/ic_local_grocery_store';  

export default class Home extends Component {

    render() {
        return (
            <div className="Home">
               
                <div className="container-top">
                    <div className="logo">
                        <img  className="image animate bounceInLeft" src={logo}/>
                        {/* <h1 class="animated infinite bounce">Example</h1> */}
                    </div>

                    <div className="search">
                        <input className="input" type="text" placeholder="pesquisar produto"/>
                    <button type="submit" className=" btnX" value="->">
                        <Icon icon={glass} />
                    </button>
                 
                    </div>
                    
                    <div className="menu">
                    
                            <ul className="list">
                                <li className="item-1"><a className="link" href="#">Finalizar compras</a></li>
                                <li className="item"><a className="link" href="#">Minha lista de compras</a></li>
                                <li className="item"><a className="link" href="#">Compras anteriores</a></li>
                                <li className="carrinho">
                                    <a className="link" href="#">
                                        <span className="preco">R$ 0,00</span>
                                        <Icon icon={ ic_local_grocery_store } size={64}/></a>
                                </li>
                            </ul>
                        
                    </div>
                </div>

                <div className="col-md-8 col-md-offset-2">

                 <div className="container-1">   
                    <Card name="Mercearia" icon={ ic_local_cafe } className="category item-1"/>
                    <Card name="Carne"  className="category item-2"/>
                    <Card name="Bebidas" icon={ ic_local_bar } className="category item-3"/>
                    <Card name="Higiene" icon={ bathtub } className="category item-4"/>
                    <Card name="Hortifruti" icon={ iosNutrition } className="category item-5"/>
                    <Card name="Cereais" className="category item-6"/>
                    <Card name="Petshop" icon={ iosPaw } className="category item-7"/>
                </div>

                <div className="container-2">   
                    <Card name="Limpeza" icon={ water } className="category item-1"/>
                    <Card name="Padaria" icon={ ic_cake } className="category item-2"/>
                    <Card name="Frios" className="category item-3"/>
                    <Card name="Congelados" icon={ ic_kitchen } className="category item-4"/>
                    <Card name="Biscoitos" className="category item-5"/>
                    <Card name="Matinais" className="category item-6"/>
                    <Card name="Utilidades" icon={ hammer } className="category item-7"/>
                </div>
                
                <hr />
                <Destaques />   
            </div>

            
        </div>
        )
    }
}