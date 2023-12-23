import React, { Component, useState } from "react";
import Zmage from "react-zmage";
import { Fade, Slide } from "react-reveal";
let id = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function (projects) {
      let projectImage = "images/portfolio/" + projects.image;

      return (
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap">
            <div style={{ textAlign: "center" }}>{projects.title}</div>
            <ol>
              {projects.description.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ol>
            <Zmage alt={projects.title} src={projectImage} />
          </div>
        </div>
      );
    });

    return (
      <section id="portfolio">

        <Fade left big duration={1000} distance="40px">
          <div className="row project">
            <h1>
              <span>project</span>
            </h1>
            <div className="twelve columns collapsed">

              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                {projects}
              </div>
            </div>
          </div>
        </Fade>
{/* 
        <Slide left duration={1300}>
          <div className="row project">
            <div className="three columns header-col">
              <h1>
                <span>projects</span>
              </h1>
            </div>

            <div className="nine columns main-col">{projects}</div>
          </div>
        </Slide> */}


      </section>
    );
  }
}

export default Portfolio;
