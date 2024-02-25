import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
// import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          {/* <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col> */}
          <div className="container">
  <div className="row justify-content-center">
    <Col xs={12} sm={6} className="text-center mt-5">
      <div className="social-icon">
        <a href="https://www.linkedin.com/in/amritanshu23/"><img src={navIcon1} alt="Icon" /></a>
        <a href="https://m.facebook.com/profile.php/?id=100011980009278&name=xhp_nt_"><img src={navIcon2} alt="Icon" /></a>
        <a href="https://www.instagram.com/amritanshu23/"><img src={navIcon3} alt="Icon" /></a>
      </div>
      <p >Copyright 2024. All Rights Reserved</p>
    </Col>
  </div>
</div>

        </Row>
      </Container>
    </footer>
  )
}
