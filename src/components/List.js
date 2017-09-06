import React, {Component} from 'react'

class List extends Component{

     state = {
      moradores: [
        {id: 1, nome: 'André Affonso'},
        {id: 2, nome: 'Guilherme Xavier'},
        {id: 3, nome: 'German Lozano'},
        {id: 4, nome: 'Matheus Henrique'},
        {id: 5, nome: 'Túlio Augusto'},
        {id: 6, nome: 'André Carpinteiro'},
        {id: 7, nome: 'Alexandre Vartuli'}
      ]
    }


  render() {
    const {moradores} = this.state


    return(
      <div>
        <h1>Moradores</h1>
        <ul style={styles.lista}>
          {moradores.map(morador => <li style={styles.item} key={morador.id}>{morador.nome}</li>)}
        </ul>
      </div>
    )
  }
}

const styles = {
  item: {

    borderRadius: '4px',
    marginBottom: '5px',
    padding: '5px',
    backgroundColor: '#efefef',

  },


  lista: {
    listStyleType: 'none'
  }
}

export default List
