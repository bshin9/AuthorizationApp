import React from "react";
import httpClient from "../httpClient";

// sign up form behaves almost identically to log in form. We could create a flexible Form component to use for both actions, but for now we'll separate the two:
class SignUp extends React.Component {
  state = {
    fields: { name: "", email: "", password: "" }
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
    httpClient.signUp(this.state.fields).then(user => {
      this.setState({ fields: { name: "", email: "", password: "" } });
      if (user) {
        this.props.onSignUpSuccess(user);
        this.props.history.push("/profile");
      }
    });
  }

  render() {
    const { name, email, password } = this.state.fields;
    return (
        <div className="SignUp">
          <div className="note">
            <p>Sign Up Here!</p>
          </div>
          <form
            onChange={this.onInputChange.bind(this)}
            onSubmit={this.onFormSubmit.bind(this)}
          >
            <div className="form-content">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Name"
                      name="name"
                      value={name}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Email"
                      name="email"
                      value={email}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={password}
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
              <button type="submit" className="btnSubmit">
                Submit
              </button>
            </div>
          </form>
        </div>
    );
  }
}

export default SignUp;
