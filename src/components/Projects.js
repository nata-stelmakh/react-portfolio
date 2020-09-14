import React, { Component } from "react";
import {
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  CardMenu,
  Button,
  IconButton,
  CardText,
} from "react-mdl";

class Projects extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <section className="projects-grid">
          <Grid className="demo-grid-3">
            <Cell col={4}>
              <Card shadow={5} style={{ minWidth: 450, margin: "auto" }}>
                <CardTitle
                  style={{
                    color: "fff",
                    height: "250px",
                    background: "url(assets/burger.png) center/cover",
                  }}
                ></CardTitle>
                <CardText>EAT-DA-BURGER</CardText>
                <CardActions border>
                  <Button
                    colored
                    href="https://powerful-garden-33648.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    DEPLOYED
                  </Button>
                  <Button
                    colored
                    href="https://github.com/nata-stelmakh/eat-da-burger"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GITHUB
                  </Button>
                </CardActions>
              </Card>
            </Cell>
            <Cell col={4}>
              <Card shadow={5} style={{ minWidth: 450, margin: "auto" }}>
                <CardTitle
                  style={{
                    color: "fff",
                    height: "250px",
                    background: "url(assets/team.png) center/cover",
                  }}
                ></CardTitle>
                <CardText>TEAM GENERATOR</CardText>
                <CardActions border>
                  <Button
                    colored
                    href="https://drive.google.com/file/d/1wJbUxBE29dOEGVJgyiRPtR_E7BQ121Cw/view"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    DEPLOYED
                  </Button>
                  <Button
                    colored
                    href="https://github.com/nata-stelmakh/template-engine"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GITHUB
                  </Button>
                </CardActions>
              </Card>
            </Cell>

            <Cell col={4}>
              <Card shadow={5} style={{ minWidth: 450, margin: "auto" }}>
                <CardTitle
                  style={{
                    color: "fff",
                    height: "250px",

                    background: "url(assets/Paws_City.png) center/cover",
                  }}
                ></CardTitle>
                <CardText>PAWS CITY</CardText>
                <CardActions border>
                  <Button
                    colored
                    href="https://nata-stelmakh.github.io/PawsCity/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    DEPLOYED
                  </Button>
                  <Button
                    colored
                    href="https://github.com/nata-stelmakh/PawsCity"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GITHUB
                  </Button>
                </CardActions>
              </Card>
            </Cell>

            <Cell col={4}>
              <Card shadow={5} style={{ minWidth: 450, margin: "auto" }}>
                <CardTitle
                  style={{
                    color: "fff",
                    height: "250px",

                    background: "url(assets/snaps.png) center/cover",
                  }}
                ></CardTitle>
                <CardText>SNAPS COFFEE SHOP</CardText>
                <CardActions border>
                  <Button
                    colored
                    href="https://morning-hamlet-29390.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    DEPLOYED
                  </Button>
                  <Button
                    colored
                    href="https://github.com/HexiangLiu/Snaps-Coffe"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GITHUB
                  </Button>
                </CardActions>
              </Card>
            </Cell>

            <Cell col={4}>
              <Card shadow={5} style={{ minWidth: 450, margin: "auto" }}>
                <CardTitle
                  style={{
                    color: "fff",
                    height: "250px",

                    background: "url(assets/Weather.png) center/cover",
                  }}
                ></CardTitle>
                <CardText>WEATHER</CardText>
                <CardActions border>
                  <Button
                    colored
                    href="https://nata-stelmakh.github.io/Weather/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    DEPLOYED
                  </Button>
                  <Button
                    colored
                    href="https://github.com/nata-stelmakh/Weather"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GITHUB
                  </Button>
                </CardActions>
              </Card>
            </Cell>
            <Cell col={4}>
              <Card shadow={5} style={{ minWidth: 450, margin: "auto" }}>
                <CardTitle
                  style={{
                    color: "fff",
                    height: "250px",

                    background: "url(assets/Quiz.png) center/cover",
                  }}
                ></CardTitle>
                <CardText>QUIZ</CardText>
                <CardActions border>
                  <Button
                    colored
                    href="https://nata-stelmakh.github.io/Quiz/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    DEPLOYED
                  </Button>
                  <Button
                    colored
                    href="https://github.com/nata-stelmakh/Quiz"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GITHUB
                  </Button>
                </CardActions>
              </Card>
            </Cell>
          </Grid>
        </section>
      </div>
    );
  }
}

export default Projects;
