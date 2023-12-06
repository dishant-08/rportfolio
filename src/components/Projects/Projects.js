import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import TicTacpic from "../../Assets/Projects/TicTacpic.png";
import resultSnakesandLadder from "../../Assets/Projects/resultSnakesandLadder.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com//Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col> */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TicTacpic}
              isBlog={false}
              title="TicTacToe"
              description="I created a two-player Tic-Tac-Toe game with player name storage, turn-based play, and input validation. The game continues until a player wins, there's a draw, or all moves are completed. A built-in bot facilitates efficient testing."
              ghLink="https://github.com/dishant-08/ticTacToe.git"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={resultSnakesandLadder}
              isBlog={false}
              title="JavaScript Snakes and Ladders Game"
              description="Leveraged the power of Map data structure for efficient position tracking, enabling players to navigate the Snakes and Ladders game seamlessly. Used arrays and reduce functions to store and manipulate player moves, ensuring an accurate gaming experience with dynamic position updates."
              ghLink="https://github.com/dishant-08/snakesAndLadders"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
