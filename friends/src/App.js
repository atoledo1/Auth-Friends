import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/logInForm";
import FriendsList from "./components/friendList";
import PrivateRoute from "./components/privateRoute";

function App() {
  return (
    <Router>
      <div className="App">
        
          <nav className='nav'>
            <Link to="/login">Log In</Link>
          </nav>
        <Switch>
          <PrivateRoute exact path="/protected" component={FriendsList} />

          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
