import React from "react";
import { NavLink } from "react-router-dom";
import ProductSlider from "../components/ProductSlider";
import Who from "../components/Who";
import Why from "../components/Why";

// created Home class
class Home extends React.Component {
  render() {
    return (
      <div className="App">
        {/* HEADER */}
        <header id="page-header">
          <div className="container">
            <div className="row">
              <div className="col-md-6 m-auto text-center"></div>
            </div>
          </div>
        </header>

        {/* INFO SECTION */}
        <section id="info" className="py-3">
          <div className="container">
            <div className="row">
              <div className="col-md-6 align-self-center">
                <h3>WELCOME TO PROPER WATCH!</h3>
                <p>
                  Proper Watch is where you can find a variety of classy and
                  stylistic watches ranging from all different price ranges. We
                  will make sure that you get all the information you need to
                  make an informed decision before you buy anything. We pride
                  ourselves in knowing that we prioritize quality over quantity.
                  The button below will take you to our products page!
                </p>
                <NavLink
                  to="/products"
                  className="btn btn-outline-info btn-block"
                  id="btn"
                >
                  Check Out Our Watches!
                </NavLink>
              </div>
              <div className="col-md-6">
                <img
                  src="img/gorilla.jpeg"
                  className="img-fluid pic"
                  alt="proper"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Product Slide */}
        <ProductSlider />

        {/* Who we are */}
        <Who />

        {/* Why we do this */}
        <Why />
      </div>
    );
  }
}

export default Home;
