import React from "react";
import httpClient from "../httpClient";

class LogIn extends React.Component {
  state = {
    fields: { email: "", password: "" }
  };

  onInputChange(evt) {
    this.setState({
      fields: {
        ...this.state.fields,
        [evt.target.name]: evt.target.value
      }
    });
  }

  onFormSubmit(evt) {
    evt.preventDefault();
    httpClient.logIn(this.state.fields).then(user => {
      this.setState({ fields: { email: "", password: "" } });
      if (user) {
        this.props.onLoginSuccess(user);
        this.props.history.push("/profile");
      }
    });
  }

  render() {
    const { email, password } = this.state.fields;
    return (
      <section id="LogIn">
        <div className="container">
          <div className="row login">
            <div className="col-md-6 mx-auto">
              <div className="card">
                <div className="card-header">
                  <h4>Login to Proper Watches</h4>
                </div>
                <div className="card-body">
                  <form
                    onChange={this.onInputChange.bind(this)}
                    onSubmit={this.onFormSubmit.bind(this)}
                  >
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        defaultValue={email}
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        defaultValue={password}
                        className="form-control"
                      />
                    </div>
                    <button className="btnSubmit">Login</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default LogIn;
