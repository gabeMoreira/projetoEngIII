import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-xl">
        <Link to="/" className="navbar-brand">FPA - Sistema de Gerenciamento de Estoque</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Lista de Produtos</Link>
          </li>
          <li className="navbar-item">
          <Link to="/products" className="nav-link">Cadastrar Produto</Link>
          </li>
          <li className="navbar-item">
          <Link to="/categories" className="nav-link">Criar Categoria</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Cadastrar Recebimento</Link>
          </li>
          <li className="navbar-item">
          <Link to="/receivements" className="nav-link">Histórico de Recebimentos</Link>
          </li>
          <li className="navbar-item">
          <Link to="/user" className="nav-link">Adicionar Funcionário</Link>
          </li>
          <li className="navbar-item">
          <Link to="/userList" className="nav-link">Lista de Funcionários</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}