import React from "react";

// Created separate Footer component so we can clean up some code in the Pages folder
const Footer = () => {
  return (
    <footer className="page-footer font-small pt-4">
      <div className="container">
        <ul className="list-unstyled list-inline text-center">
          <li className="list-inline-item">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-hidden="true"
            >
              <i className="fab fa-facebook fa-2x" />
            </a>
          </li>
          <li className="list-inline-item">
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-hidden="true"
            >
              <i className="fab fa-twitter fa-2x" />
            </a>
          </li>
          <li className="list-inline-item">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-hidden="true"
            >
              <i className="fab fa-instagram fa-2x" />
            </a>
          </li>
          <li className="list-inline-item">
            <a
              href="https://www.pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-hidden="true"
            >
              <i className="fab fa-pinterest fa-2x" />
            </a>
          </li>
          <li className="list-inline-item">
            <a
              href="https://aboutme.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-hidden="true"
            >
              <i className="fab fa-google-plus fa-2x" />
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-copyright text-center py-3">
        © 2019 Copyright
      </div>
    </footer>
  );
};

export default Footer;
