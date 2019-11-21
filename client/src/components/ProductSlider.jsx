import React from "react";

const ProductSlider = () => {
  return (
    <section id="customers">
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <h2>A Proper Collection</h2>
            <hr width="30%" />
            <p>Proper Edition</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div id="quotes" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li
                  data-target="#quotes"
                  data-slide-to={0}
                  className="active"
                />
                <li data-target="#quotes" data-slide-to={1} />
                <li data-target="#quotes" data-slide-to={2} />
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <blockquote className="blockquote">
                    <img
                      src="img/rolex.jpg"
                      className="watchSlide"
                      alt="rolex"
                    />
                    <div className="blockquote-footer">
                      Conor McGregor loves this edition of the rolex
                    </div>
                    <p>
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <br />
                      Rolex Men's Submariner Automatic Blue Dial Oyster 18k
                      Solid Gold $30,000
                    </p>
                  </blockquote>
                </div>
                <div className="carousel-item">
                  <blockquote className="blockquote">
                    <img
                      src="img/rolex5k.jpg"
                      className="watchSlide"
                      alt="rolex5k"
                    />
                    <div className="blockquote-footer">
                      Floyd Mayweather proudly wears this rolex
                    </div>
                    <p>
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <br />
                      Rolex Daytona $200,000
                    </p>
                  </blockquote>
                </div>
                <div className="carousel-item">
                  <blockquote className="blockquote">
                    <img
                      src="img/versace.webp"
                      className="watchSlide"
                      alt="versace"
                    />
                    <div className="blockquote-footer">
                      Post Malone adores this collection of Versace
                    </div>
                    <p>
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <br />
                      45mm Sport Tech Chronograph $1,850
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSlider;
