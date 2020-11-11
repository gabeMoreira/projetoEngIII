import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateExercise extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeQuantity = this.onChangeQuantity.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      categories: [],
      category: '',
      categoryId: '',
      ListCategoriesId: [],
      description: '',
      quantity: 0,
     
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/categories/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            categories: response.data.map(user => user.nome),
            category: response.data[0].nome,
            ListCategoriesId: response.data.map(user => user._id),
            categoryId: response.data[0]._id
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
  }

  onChangeCategory(e) {
    this.setState({
      category: e.target.value
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


  onSubmit(e) {
    e.preventDefault();

    
    const receivement = {
      nome: this.state.username,
      description: this.state.description,
      quantity: this.state.quantity,   
      category: this.state.category
    }

    
    console.log(receivement)
    axios.post('http://localhost:5000/products/add', receivement)
      .then(res => console.log(res.data))
      .catch(err => {console.log(err)})
    window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>Cadastrar Produto</h3>
      <form onSubmit={this.onSubmit}>
        
        <div className="form-group"> 
          <label>Nome: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
              />
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
              readOnly="true"
              />
        </div>
        <div className="form-group"> 
          <label>Categoria: </label>
          <select ref="categoryInput"
              required
              className="form-control"
              value={this.state.category}
              onChange={this.onChangeCategory}>
              {
                this.state.categories.map(function(category) {
                  return <option 
                    key={category}
                    value={category}>{category}
                    </option>;
                })
              }
          </select>
        </div>

        <div className="form-group">
          <input type="submit" value="Cadastrar Produto" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}