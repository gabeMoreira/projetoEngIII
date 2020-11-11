import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateExercise extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeProduct = this.onChangeProduct.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeQuantity = this.onChangeQuantity.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      users: [],
      userId: '',
      ListUsersId: [],
      product: '',
      ListProducts: [],
      productId: '',
      ListProductsId: [],
      description: '',
      quantity: 0,
      date: new Date(),
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/users/')
      .then(response => {
        if (response.data.length > 0) {
          console.log(response)
          this.setState({
            users: response.data.map(user => user.nome),
            username: response.data[0].nome,
            ListUsersId: response.data.map(user => user._id),
            
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })
    axios.get('http://localhost:5000/products/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            ListProducts: response.data.map(prod => prod.nome),
            product: response.data[0].nome,
            ListProductsId: response.data.map(prod => prod._id),
            productId: response.data[0]._id
          })
          
        }
      })
      .catch((error) => {
        console.log(error);
      })
      
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
    console.log(this.state)
  }

  onChangeProduct(e) {
    this.setState({
      product: e.target.value
    })
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
  }

  onChangeQuantity(e) {
    this.setState({
      quantity: e.target.value
    })
  }

  onChangeDate(date) {
    this.setState({
      date: date
    })
  }

  onSubmit(e) {
    e.preventDefault();

    
    const receivement = {
      description: this.state.description,
      quantity: this.state.quantity,
      date: this.state.date,
      user: this.state.username,      
      product: this.state.product
    }

    
    
    axios.post('http://localhost:5000/receivements/add', receivement)
      .then(res => console.log(res.data))
      .catch(err => {console.log(err)})
    window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>Adicionar Recebimento</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Responsável: </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}>
              {
                this.state.users.map(function(user) {
                  return <option 
                    key={user}
                    value={user}>{user}
                    </option>;
                })
              }
          </select>
        </div>
        <div className="form-group"> 
          <label>Produto: </label>
          <select ref="productInput"
              required
              className="form-control"
              value={this.state.product}
              onChange={this.onChangeProduct}>
              {
                this.state.ListProducts.map(function(product) {
                  return <option 
                    key={product}
                    value={product}>{product}
                    </option>;
                })
              }
          </select>
        </div>
        <div className="form-group"> 
          <label>Descrição: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
              />
        </div>
        <div className="form-group">
          <label>Quantidade (em Unidades) </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.quantity}
              onChange={this.onChangeQuantity}
              />
        </div>
        <div className="form-group">
          <label>Data de Recebimento </label>
          <div>
            <DatePicker
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>
        </div>

        <div className="form-group">
          <input type="submit" value="Adicionar Recebimento" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}