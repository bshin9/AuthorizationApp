import React from "react";

const Why = () => {
  return (
    <section id="home-icons" className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4 text-center">
            <i className="fas fa-chart-line fa-3x mb-2" />
            <h3>Stocks</h3>
            <p>Our stocks are projected to continue north.</p>
          </div>
          <div className="col-md-4 mb-4 text-center">
            <i className="fas fa-money-bill fa-3x mb-2" />
            <h3>Savings</h3>
            <p>
              We want to provide you the best deals in the market so you get a
              fair price.
            </p>
          </div>
          <div className="col-md-4 mb-4 text-center">
            <i className="fas fa-crown fa-3x mb-2" />
            <h3>Crowning Achievement</h3>
            <p>Conor may be king, but in this case, we work for you.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
