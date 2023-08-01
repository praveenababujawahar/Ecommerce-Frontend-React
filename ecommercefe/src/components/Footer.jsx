import React from "react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="container-fluid footer">
      <div className="row flex-column align-items-center flex-md-row flex-lg-row">
        <div className="col-12 col-md-6 col-lg-3 d-flex justify-content-center">
          <div className="footer-men card w-100">
            <ul className="list-group list-group-flush text-center">
              <a href="./pages/product-categories/women/women.html">
                <h4 className="footer-heading card-header text-center">Women</h4>
              </a>
              <li className="list-group-item">
                <a href="/allproducts">Kurthis</a>
              </li>
              <li className="list-group-item">
                <a href="/allproducts">Pants</a>
              </li>
              <li className="list-group-item">
                <a href="/allproducts">Skirts</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3 d-flex justify-content-center">
          <div className="footer-women card w-100">
            <ul className="list-group list-group-flush text-center">
              <a href="./pages/product-categories/men/men.html">
                <h4 className="footer-heading card-header text-center">Men</h4>
              </a>
              <li className="list-group-item">
                <a href="/allproducts">Shirts</a>
              </li>
              <li className="list-group-item">
                <a href="/allproducts">Pants</a>
              </li>
              <li className="list-group-item">
                <a href="/allproducts">Shoes</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3 d-flex justify-content-center">
          <div className="card w-100">
            <h4 className="footer-kids text-center card-header">Kids</h4>
            <ul className="list-group list-group-flush text-center">
              <li className="list-group-item">
                <a href="/allproducts">Girl Babies Dress</a>
              </li>
              <li className="list-group-item">
                <a href="/allproducts">Boy Babies Dress</a>
              </li>
              <li className="list-group-item">
                <a href="/allproducts">Toys</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3 d-flex justify-content-center">
          <div className=" card w-100">
            <h4 className="footer-heading text-center card-header">Links</h4>
            <ul className="list-group list-group-flush text-center">
              <li className="list-group-item">
                <a href="/">Home</a>
              </li>
              <li className="list-group-item">
                <a href="/login">Login</a>
              </li>
              <li className="list-group-item">
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row copyright-row d-flex justify-content-around">
        <div className="col-12 col-md-6 col-lg-6 copyright-col d-flex justify-content-around align-items-items">
          <p>Kushi E-Shop &copy; {currentYear}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
