import React from "react";
import { Container, Navbar, NavbarBrand } from "reactstrap";
import Logo from "./banjos-logo.svg";
import UserLogo from "./ic_user.svg";

export function BanjosNav() {
  return (
    <Navbar light expand container="" className="navbar">
      <Container className="container-max-nav">
        <div className="nav-menu">
          <div className="logo-label">
            <NavbarBrand href="/">
              <img src={Logo} alt="LOGO" />
            </NavbarBrand>
            <div className="ps-4">Contact us</div>
          </div>
        </div>
        <div className="nav-options">
          <div className="signin subtitle-13" id="signin-btn">
            <img src={UserLogo} />
            <span className="hide-mob">Sign In</span>
          </div>
        </div>
      </Container>
    </Navbar>
  );
}
