import React, { useState } from 'react';
import { Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SearchBox from './SearchBox';
import logo from '../assets/logo.png';
import './Header.css';

const Header = () => {
  const [womenDropdownOpen, setWomenDropdownOpen] = useState(false);
  const [menDropdownOpen, setMenDropdownOpen] = useState(false);
  const [kidsDropdownOpen, setKidsDropdownOpen] = useState(false);

  const openWomenDropdown = () => {
    setWomenDropdownOpen(true);
    setMenDropdownOpen(false);
    setKidsDropdownOpen(false);
  };

  const openMenDropdown = () => {
    setMenDropdownOpen(true);
    setWomenDropdownOpen(false);
    setKidsDropdownOpen(false);
  };

  const openKidsDropdown = () => {
    setKidsDropdownOpen(true);
    setWomenDropdownOpen(false);
    setMenDropdownOpen(false);
  };

  const closeDropdowns = () => {
    setWomenDropdownOpen(false);
    setMenDropdownOpen(false);
    setKidsDropdownOpen(false);
  };

  return (
    <header>
      <Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Link to="/" className="navbar-brand">
            <img
              src={logo}
              alt="Logo"
              className="logo"
              style={{ width: '100px' }}
            />
          </Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto search-box">
              <SearchBox />

              <Link to="/cart" className="nav-link cart-link">
                <FaShoppingCart size={30} /> Cart
              </Link>

              <Link to="/login" className="nav-link sign-in-link">
                <FaUser size={25} /> Sign In
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Navbar bg="light" expand="lg" className="nav-2" collapseOnSelect>
        <Container>
          <Navbar.Toggle aria-controls="navbarNav" />

          <Navbar.Collapse id="navbarNav" className="justify-content-center">
            <Nav>
              <Link to="/" exact="true" className="nav-link">
                Home
              </Link>
              <Link to="/allproducts" className="nav-link">
                All Products
              </Link>

              <NavDropdown
                title="Women"
                id="navbarDropdownWomen"
                show={womenDropdownOpen}
                onMouseEnter={openWomenDropdown}
                onMouseLeave={closeDropdowns}
              >
                <Link to="/allproducts" className="dropdown-item">
                  Kurtis
                </Link>
                <Link to="/allproducts" className="dropdown-item">
                  Pants
                </Link>
                <Link to="/allproducts" className="dropdown-item">
                  Skirts
                </Link>
              </NavDropdown>
              <NavDropdown
                title="Men"
                id="navbarDropdownMen"
                show={menDropdownOpen}
                onMouseEnter={openMenDropdown}
                onMouseLeave={closeDropdowns}
              >
                <Link to="/allproducts" className="dropdown-item">
                  Shirts
                </Link>
                <Link to="/allproducts" className="dropdown-item">
                  Pants
                </Link>
                <Link to="/allproducts" className="dropdown-item">
                  Shoes
                </Link>
              </NavDropdown>
              <NavDropdown
                title="Kids"
                id="navbarDropdownKids"
                show={kidsDropdownOpen}
                onMouseEnter={openKidsDropdown}
                onMouseLeave={closeDropdowns}
              >
                <Link to="/allproducts" className="dropdown-item">
                  Girl Baby Dress
                </Link>
                <Link to="/allproducts" className="dropdown-item">
                  Boy Baby Dress
                </Link>
                <Link to="/allproducts" className="dropdown-item">
                  Toys
                </Link>
              </NavDropdown>
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
