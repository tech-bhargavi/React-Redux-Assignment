import React, { Component } from "react";
import "./App.css";
import { BrowserRouter,Link } from "react-router-dom";
import { Route } from "react-router";
import home from "./components/home";
import user from "./components/user";

// Set router paths for components; using "exact" here in routes for switching components
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        {/* <div>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
            <Link to="/user">User</Link>
            </li>
          </ul>
        </div> */}
        <Route path="/" exact component={home}></Route>
        <Route path="/user" exact component={user}></Route>
      </BrowserRouter>
    );
  }
}

export default App;
