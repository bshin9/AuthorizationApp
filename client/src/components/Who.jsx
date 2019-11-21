import React from "react";

const Who = () => {
  return (
    <section id="who">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2 className="alignTxt">Who Are We?</h2>
            <hr text-align="center" width="50%" />
            <p className="lead">
              We were created and funded by UFC Lightweight and Featherweight
              Champion, Conor McGregor. We are based off in California and have
              only been in business for one year. After the success of Conor's
              Proper Twelve whiskey business, he decided to pursue another
              passion of his. Proper Twelve has reached over $1 Billion in just
              one year which set a record for highest revenue earned in a single
              year in the whiskey business. We hope to provide you with the best
              customer experience and excellent quality of products using the
              experience gained from the success of his other ventures.
            </p>
          </div>
          <div className="col-md-6">
            <img className="img-fluid" src="img/conorbelt.jpg" alt="belts" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Who;
