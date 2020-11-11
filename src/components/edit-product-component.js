import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class EditExercise extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      description: '',
      category: 0,
      users: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/products/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          username: response.data.nome,
          description: response.data.description,
          category: response.data.category,
          
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

    axios.get('http://localhost:5000/users/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map(user => user.username),
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

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
  }

  onChangeCategory(e) {
    this.setState({
      category: e.target.value
    })
  }


  onSubmit(e) {
    e.preventDefault();

    const exercise = {
      nome: this.state.username,
      description: this.state.description,
      category: this.state.category
    }

    console.log(exercise);

    axios.put('http://localhost:5000/products/' + this.props.match.params.id, exercise)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>Edit Exercise Log</h3>
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
          <label>Description: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
              />
        </div>

        <div className="form-group"> 
          <label>Categoria: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.category}
              onChange={this.onChangeCategory}
              readOnly="true"
              />
        </div>
        

        <div className="form-group">
          <input type="submit" value="Editar Produto" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}