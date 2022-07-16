import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Typical from "react-typical";
import headerImg from "../assets/img/header-img.svg";
import TrackVisibility from "react-on-screen";
import { isVisible } from "@testing-library/user-event/dist/utils";

const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__bounce" : ""
                  }
                >
                  <p>HI THERE !</p>
                  <h2>
                    I'm a{" "}
                    <Typical
                      steps={["Freelancer", 1000, "Front End Developer", 2000]}
                      loop={Infinity}
                      wrapper="b"
                    />
                  </h2>
                  <p>
                    I'm a professional Front-End Developer. I can create any
                    kind of website as a static HTML website. I've experienced
                    in responsive design which is useful for supporting your
                    site any device. So what are you waiting for? just let me
                    know about your project & get that!
                  </p>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
