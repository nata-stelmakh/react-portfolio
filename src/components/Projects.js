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
                  <Button colored>DEPLOYED</Button>
                  <Button colored>GITHUB</Button>
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
                  <Button colored>DEPLOYED</Button>
                  <Button colored>GITHUB</Button>
                </CardActions>
              </Card>
            </Cell>

            <Cell col={4}>
              <Card shadow={5} style={{ minWidth: 459, margin: "auto" }}>
                <CardTitle
                  style={{
                    color: "fff",
                    height: "250px",

                    background: "url(assets/Paws_City.png) center/cover",
                  }}
                ></CardTitle>
                <CardText>PAWS CITY</CardText>
                <CardActions border>
                  <Button colored>DEPLOYED</Button>
                  <Button colored>GITHUB</Button>
                </CardActions>
              </Card>
            </Cell>

            <Cell col={4}>
              <Card shadow={5} style={{ minWidth: 459, margin: "auto" }}>
                <CardTitle
                  style={{
                    color: "fff",
                    height: "250px",

                    background: "url(assets/snaps.png) center/cover",
                  }}
                ></CardTitle>
                <CardText>SNAPS COFFEE SHOP</CardText>
                <CardActions border>
                  <Button colored>DEPLOYED</Button>
                  <Button colored>GITHUB</Button>
                </CardActions>
              </Card>
            </Cell>

            <Cell col={4}>
              <Card shadow={5} style={{ minWidth: 459, margin: "auto" }}>
                <CardTitle
                  style={{
                    color: "fff",
                    height: "250px",

                    background: "url(assets/Weather.png) center/cover",
                  }}
                ></CardTitle>
                <CardText>WEATHER</CardText>
                <CardActions border>
                  <Button colored>DEPLOYED</Button>
                  <Button colored>GITHUB</Button>
                </CardActions>
              </Card>
            </Cell>
            <Cell col={4}>
              <Card shadow={5} style={{ minWidth: 459, margin: "auto" }}>
                <CardTitle
                  style={{
                    color: "fff",
                    height: "250px",

                    background: "url(assets/Quiz.png) center/cover",
                  }}
                ></CardTitle>
                <CardText>QUIZ</CardText>
                <CardActions border>
                  <Button colored>DEPLOYED</Button>
                  <Button colored>GITHUB</Button>
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
