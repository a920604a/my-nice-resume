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
                className="bgrid-half s-bgrid-half cf"
              >
                {projects}
              </div>
            </div>
          </div>
        </Fade>

      </section>
    );
  }
}

export default Portfolio;
