import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeCpf = this.onChangeCpf.bind(this);
    this.onChangePosition = this.onChangePosition.bind(this);
    this.onChangeAdress = this.onChangeAdress.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      cpf: '',
      position: '',
      adress: '',
      email: ''
    }
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onChangeCpf(e) {
    this.setState({
      cpf: e.target.value
    })
  }

  onChangePosition(e) {
    this.setState({
      position: e.target.value
    })
  }

  onChangeAdress(e) {
    this.setState({
      adress: e.target.value
    })
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    })
  }

  

  onSubmit(e) {
    e.preventDefault();

    const user = {
      nome: this.state.username,
      cpf: this.state.cpf,
      position: this.state.position,
      adress: this.state.adress,
      email: this.state.email
    }

    console.log(user);

    axios.post('http://localhost:5000/users/add', user)
      .then(res => console.log(res.data))
    this.setState({
      username: '',
      cpf: '',
      position: '',
      adress: '',
      email: '',
    })
  }

  render() {
    return (
      <div>
        <h3>Adicionar Novo Funcionário</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Nome: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}
                />
                <label>CPF: </label>
              <input  type="text"
                required
                className="form-control"
                value={this.state.cpf}
                onChange={this.onChangeCpf}
                />
                <label>Cargo: </label>
              <input  type="text"
                required
                className="form-control"
                value={this.state.position}
                onChange={this.onChangePosition}
                />
                <label>Endereço: </label>
                <input  type="text"
                required
                className="form-control"
                value={this.state.adress}
                onChange={this.onChangeAdress}
                />
                <label>Email: </label>
                <input  type="text"
                required
                className="form-control"
                value={this.state.email}
                onChange={this.onChangeEmail}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Criar Funcionário" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}