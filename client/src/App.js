import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import httpClient from "./httpClient";
import LogIn from "./views/LogIn";
import LogOut from "./views/LogOut";
import SignUp from "./views/SignUp";
import Profile from "./views/Profile";
import "./css/Navbar.css";
import "./css/Homepage.css";
import "./css/Productpage.css";
import "./css/Contactpage.css";
import "./css/Footer.css";
import "./css/Video.css";
import "./css/SignUp.css";
import "./css/EditComment.css";

// Using the router to route the Home, Product, and Contact pages together
// Calling the Navbar and Footer so we don't have to repeat in the other pages
class App extends React.Component {
  state = { currentUser: httpClient.getCurrentUser() };

  onLoginSuccess(user) {
    this.setState({ currentUser: httpClient.getCurrentUser() });
  }

  logOut() {
    httpClient.logOut();
    this.setState({ currentUser: null });
  }

  render() {
    const { currentUser } = this.state;

    return (
      <Router>
        <Navbar currentUser={currentUser} />
        <Route path="/home" exact component={Home} />
        <Route path="/products" exact component={Product} />
        <Route path="/contact" exact component={Contact} />

        <Switch>
          <Route
            path="/login"
            render={props => {
              return (
                <LogIn
                  {...props}
                  onLoginSuccess={this.onLoginSuccess.bind(this)}
                />
              );
            }}
          />

          <Route
            path="/logout"
            render={props => {
              return <LogOut onLogOut={this.logOut.bind(this)} />;
            }}
          />

          {/* the sign up component takes an 'onSignUpSuccess' prop which will perform the same thing as onLoginSuccess: set the state to contain the currentUser */}
          <Route
            path="/signup"
            render={props => {
              return (
                <SignUp
                  {...props}
                  onSignUpSuccess={this.onLoginSuccess.bind(this)}
                />
              );
            }}
          />

          <Route
            path="/profile"
            render={() => {
              return currentUser ? <Profile /> : <Redirect to="/login" />;
            }}
          />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
