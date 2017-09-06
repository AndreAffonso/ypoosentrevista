import React, { Component } from 'react'
import './App.css'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import  Button from 'components/Button'
import InputText from 'components/InputText'
import List from 'components/List'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Home from 'components/Pages/Home'

class App extends Component {
  render() {
    return (
      <Router>
        
        <div className="App">
          <Header /> 
          <Route exact path='/' component={Home} />
          <Route exact path='/List' component={Home} />
          <Footer />
        </div>
        
      </Router>
    );
  }
}

export default App
