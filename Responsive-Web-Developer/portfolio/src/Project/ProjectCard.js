import React from "react";
import "./ProjectCard.css";
import Button from "@mui/material/Button";


function ProjectCard(props) {
 
  return (
    <div>
      <img src={props.data.image} id="pCard__img" />

      <p className="pCard__tags">
        {props.data.tag.map((e) => `#${e.toUpperCase()}\u00A0\u00A0`)}
      </p>
      <h2>{props.data.title}</h2>
      <p className="pCard__des">
        In this project, I work with HTML and CSS to create a responsive page.
        This page is similiar with a page. The design is from devchallenge.io
      </p>

      <div className="pCard__button">
        <Button variant="contained" fullWidth="true" size="large">
          Demo
        </Button>
        <Button variant="outlined" size="large" fullWidth="true">
          Code
        </Button>
      </div>

     
    </div>
  );
}

export default ProjectCard;
