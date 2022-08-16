import React from "react";
import { Row, Col, Container } from "reactstrap";
import BanjosLogo from "./banjos-footer-logo.svg";
import AppStoreLogo from "./app-store.svg";
import PlayStoreLogo from "./play-store.svg";

const BigFooter = () => {
  return (
    <>
      <div className="footer-big">
        <Container className="container-max">
          <Row className="row">
            <Col md={6} lg={6}>
              <img src={BanjosLogo} className="logo" />

              <Row className="mt-5">
                <Col>
                  <p className="download">Download App</p>
                  <a
                    href="https://apps.apple.com/us/app/banjos-ordering/id1519152955"
                    target="_blank"
                  >
                    <img src={AppStoreLogo} className="icon" />
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=au.com.banjos.orderingapp"
                    target="_blank"
                  >
                    <img src={PlayStoreLogo} className="icon" />
                  </a>
                </Col>
              </Row>
            </Col>
            <Col md={2} lg={2} className="arrangement ">
              <h4>Bakery Locations</h4>
              <p>
                <a href="/stores/Queensland">Queensland</a>
                <a href="/stores/Tasmania">Tasmania</a>
                <a href="/stores/NewSouthWales">New South Wales</a>
                <a href="/stores/SouthAustralia">South Australia</a>
                <a href="/stores/Victoria">Victoria</a>
              </p>
            </Col>
            <Col md={2} lg={2} className="arrangement">
              <h4>Quick Links</h4>
              <p>
                <a href="https://banjos.com.au/" target="_blank">
                  Visit <b>Banjos.com.au</b>
                </a>
                <a href="/banjos-events">Events</a>

                <a href="/contact-us">Contact us</a>
                <a href="/help">Help</a>
              </p>
            </Col>
            <Col md={2} lg={2} className="arrangement last">
              <h4>Learn More</h4>
              <p>
                <a href="/privacy-policy">Privacy Policy</a>
                <a href="/terms-and-conditions">Terms & Conditions</a>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default BigFooter;
