import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
//<td>{props.product.date.substring(0,10)}</td>
const User = props => (
  <tr>
    <td>{props.product.nome}</td>
    <td>{props.product.cpf}</td>
    <td>{props.product.position}</td>
    <td>{props.product.adress}</td>
    <td>{props.product.email}</td>
    
    <td>
      <Link to={"/edit/"+props.product._id}>Editar</Link> | <a href="#" onClick={() => { props.deleteProduct(props.product._id) }}>Apagar</a>
    </td>
  </tr>
)

export default class ExercisesList extends Component {
  constructor(props) {
    super(props);

    this.deleteProduct = this.deleteProduct.bind(this)

    this.state = {products: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/users/')
      .then(response => {
        this.setState({ products: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteProduct(id) {
    axios.delete('http://localhost:5000/users/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      products: this.state.products.filter(el => el._id !== id)
    })
  }

  exerciseList() {
    return this.state.products.map(currentproducts => {
      return <User product={currentproducts} deleteProduct={this.deleteProduct} key={currentproducts._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Histórico de Recebimentos</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Nome:</th>
              <th>CPF:</th>
              <th>Cargo:</th>
              <th>Endereço:</th>
              <th>E-mail:</th>
            </tr>
          </thead>
          <tbody>
            { this.exerciseList() }
          </tbody>
        </table>
      </div>
    )
  }
}