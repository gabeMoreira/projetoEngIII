import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component"
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";
import Receivements from "./components/receivement-list-component";
import UserList from "./components/users-list-component"
import EditProduct from "./components/edit-product-component"
import CreatCategory from "./components/create-category.component"
import CreateProduct from "./components/create-product.component"
// <Route path="/edit/:id" component={EditExercise} />
function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={ExercisesList} />
      <Route path="/receivements" exact component={Receivements} />
      <Route path="/products" exact component={CreateProduct} />
      <Route path="/categories" exact component={CreatCategory} />
      <Route path="/edit/product/:id" component={EditProduct} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/user" component={CreateUser} />
      <Route path="/userList" exact component={UserList} />
      </div>
    </Router>
  );
}

export default App;
