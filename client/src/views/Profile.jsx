import React from "react";
import axios from "axios";
import ProfileCard from "../components/ProfileCard";

class Profile extends React.Component {
  state = {
    products: []
  };
  // using a componentDidMount here to retrieve my products from my endpoint
  // this componentDidMount will load the products in when the page loads
  componentDidMount() {
    this.getMongoProducts();
  }

  getMongoProducts = () => {
    const url = "/products";
    axios
      .get(url)
      .then(res => {
        console.log(res.data);
        this.setState({ products: res.data });
      })
      .catch(err => {
        console.log("failed--", err);
      });
  };
  render() {
    return (
      <section id="profile">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <div className="card">
                <div className="card-header">
                  <h4>Edit Profile</h4>
                </div>
                <div className="card-body">
                  <form>
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input type="email" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="bio">Bio</label>
                      <textarea className="form-control" name="editor1" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <h3>Brian Shin</h3>
              <img
                src="img/conoradd.jpeg"
                alt=""
                className="d-block img-fluid mb-3"
              />
              <button className="btn btn-primary btn-block">Edit Image</button>
              <button className="btn btn-danger btn-block">Delete Image</button>
            </div>
          </div>
        </div>
        <div className="flex-items">
          {this.state.products &&
            this.state.products.map((product, index) => (
              <ProfileCard
                key={index}
                name={product.name}
                price={product.price}
                description={product.description}
                image={product.image}
              />
            ))}
        </div>
      </section>
    );
  }
}

export default Profile;
