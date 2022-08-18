import React from "react";
import { Container } from "reactstrap";
import FacebookLogo from "./facebook.svg";
import InstagramLogo from "./instagram.svg";
import TwitterLogo from "./twitter.svg";

export function FooterSmall() {
  return (
    <footer className="footerBg">
      <Container className="container-max">
        <div className="footer-small">
          <div className="social">
            <a href="https://www.facebook.com/banjosbakery/" target="_blank">
              <img src={FacebookLogo} />
            </a>
            <a href="https://www.instagram.com/banjosbakery/" target="_blank">
              <img src={InstagramLogo} />
            </a>
            <a href="https://twitter.com/BanjosBakery" target="_blank">
              <img src={TwitterLogo} />
            </a>
          </div>
          <div className="copyright">
            <p>
              All Rights Reserved. Copyright © Banjo’s Pty Ltd. Version: 1.9.0
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
