import React from "react";
import buttonDataList from "./ButtonDataList.js";
import TemplateButton from "./TemplateButton";

function MainArea() {
  return (
    <div className=" w-3/4">
      <p>Buttons</p>
      {buttonDataList.map((e) => {
        // e is list here
        return (
          <div className="my-5 flex ">
            {e.map((obj) => {
                // obj is each button element with its associated text
              return (
                <TemplateButton
                  text={obj.text}
                  title={obj.title}
                  style={obj.style}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default MainArea;
