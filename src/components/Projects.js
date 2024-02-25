import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.jpg";
import projImg2 from "../assets/img/project-img2.jpg";
import projImg3 from "../assets/img/project-img3.jpg";
import projImg4 from "../assets/img/project-img4.jpg";
import projImg5 from "../assets/img/project-img5.jpg";
import projImg6 from "../assets/img/project-img6.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Ed. Tech Website",
      description: "It is a cutting-edge educational platform developed with the MERN stack, offering dynamic features for both learners and educators. Dive into interactive courses, collaborate in real-time, and track your progress seamlessly, revolutionizing the learning experience.",
      imgUrl: projImg1,
    },
    {
      title: "CineCritique",
      description: "CineCritique is a MERN stack project offering users a complete movie-watching experience. Explore movies, watch trailers, view cast information, and read reviews all in one platform. With user authentication and comprehensive rating systems, CineCritique enhances the movie review process for cinephiles everywhere.",
      imgUrl: projImg2,
    },
    {
      title: "Excel Clone",
      description: "A lightweight web-based spreadsheet application built with HTML, CSS, and JavaScript. Create and manage spreadsheets effortlessly in your browser, with familiar features and intuitive design for seamless data organization and analysis.",
      imgUrl: projImg3,
    },
    
    
  ];
  const projects2 = [
    {
      title: "SkyCast",
      description: "SkyCast is a user-friendly weather forecasting web application built with HTML, CSS, and JavaScript. Offering real-time weather updates and forecasts, SkyCast provides users with intuitive navigation and visually appealing design, ensuring a seamless and enjoyable weather tracking experience.",
      imgUrl: projImg4,
    },
    {
      title: "Calculator",
      description:"BasicCalc is a simple yet functional calculator web application created using HTML, CSS, and JavaScript. With a clean and user-friendly interface, BasicCalc allows users to perform basic arithmetic operations effortlessly. Whether you're crunching numbers for work or school, BasicCalc provides a convenient and accessible tool for quick calculations on the go.",
      imgUrl: projImg5,
    },
    {
      title: "TicTacJS",
      description: "TicTacJS is a classic Tic Tac Toe game implemented using HTML, CSS, and JavaScript. With a minimalist design and intuitive gameplay, TicTacJS offers hours of entertainment for players of all ages. Challenge your friends or test your skills against the computer in this timeless game of strategy and wit.",
      imgUrl: projImg6,
    },
    
    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Engineered dynamic MERN and React projects, blending creativity with technical prowess to deliver immersive frontend experiences and robust full-stack solutions. Explore the intersection of innovation and functionality in my portfolio.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
