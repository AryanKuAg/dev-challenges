import React from "react";
import "./Project.css";
import MuiToggleButton from "@mui/material/ToggleButton";

import { styled } from "@mui/material/styles";

const ToggleButton = styled(MuiToggleButton)({
  "&.Mui-selected, &.Mui-selected:hover": {
    backgroundColor: "#2F80ED",
  },
});

function Project(props) {
  const [skills, setSkills] = React.useState({
    html: false,
    css: false,
    responsive: true,
  });

  return (
    <div className="project">
      <h3>Projects (3)</h3>
      <div className="project__div">
        <ToggleButton
          sx={{ borderRadius: 4 }}
          value="check"
          selected={skills.html}
          onChange={() => {
            setSkills((pre) => {
              props.addSkill(!pre.html, pre.css, pre.responsive);
              return { ...pre, html: !pre.html };
            });
          }}
        >
          <p style={{ color: skills.html ? "white" : "black" }}>HTML</p>
        </ToggleButton>
        <ToggleButton
          sx={{ borderRadius: 4 }}
          value="check"
          selected={skills.css}
          onChange={() => {
            setSkills((pre) => {
              props.addSkill(pre.html, !pre.css, pre.responsive);
              return { ...pre, css: !pre.css };
            });
          }}
        >
          <p style={{ color: skills.css ? "white" : "black" }}>CSS</p>
        </ToggleButton>
        <ToggleButton
          sx={{ borderRadius: 4 }}
          value="check"
          selected={skills.responsive}
          onChange={() => {
            setSkills((pre) => {
              props.addSkill(pre.html, pre.css, !pre.responsive);
              return { ...pre, responsive: !pre.responsive };
            });
          }}
        >
          <p style={{ color: skills.responsive ? "white" : "black" }}>
            Responsive
          </p>
        </ToggleButton>
      </div>
    </div>
  );
}

export default Project;
