import React from "react";
import ExperienceItem from "./ExperienceItem";
import addidas from "./addidas.png"
import hm from "./hm.png"

const experienceList = [
  {
    logo: addidas,
    duration: "Feb 2017 - Current",
    title: "Front-end developer",
    des: "Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.",
  },
  {
    logo: hm, 
    duration: "Aug 2016 - Feb 2018",
    title: "Full-stack developer",
    des: "Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.",
  },
];

function Experience() {
  return (
    <div>
      <h2>Experiences</h2>{" "}
      <div className="experience__div">
        {experienceList.map((exp) => (
          <ExperienceItem
            logo={exp.logo}
            duration={exp.duration}
            title={exp.title}
            des={exp.des}
          />
        ))}
      </div>
    </div>
  );
}

export default Experience;
