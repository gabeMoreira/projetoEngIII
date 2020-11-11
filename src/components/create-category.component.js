import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      description: '',
      
    }
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
  }
  

  onSubmit(e) {
    e.preventDefault();

    const user = {
      nome: this.state.username,
      description: this.state.description,
      
    }

    console.log(user);

    axios.post('http://localhost:5000/categories/add', user)
      .then(res => console.log(res.data));

    this.setState({
      username: '',
      description: '',
     
    })
  }

  render() {
    return (
      <div>
        <h3>Adicionar Nova Categoria</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Nome: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}
                />
                <label>Descrição: </label>
              <input  type="text"
                required
                className="form-control"
                value={this.state.description}
                onChange={this.onChangeDescription}
                />
                
          </div>
          <div className="form-group">
            <input type="submit" value="Criar Categoria" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}