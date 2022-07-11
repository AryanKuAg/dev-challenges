import React from "react";
import "./PersonalDetail.css";
import UpperPersonalDetail from "./UpperPersonalDetail";

function PersonalDetail() {
  return (
    <React.Fragment>
      <div className="personalDetail__box">
        <img
          src="https://source.unsplash.com/200x200/?face"
          id="personalDetail__img"
        />
        <div className="personalDetail__upper">
          <UpperPersonalDetail />
          <p>
            Self-motivated developer, who is willing to learn and create
            outstanding UI applications.
          </p>
          <br />
          <p>
            Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque
            feugiat malesuada molestie.{" "}
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default PersonalDetail;
