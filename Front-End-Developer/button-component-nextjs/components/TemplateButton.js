import React from "react";

function TemplateButton({ text, title, style }) {
  return (
    <div className="flex  flex-col h-32 items-start p-4 justify-between">
      <p>{text}</p>
      <button className={style}>{title}</button>
    </div>
  );
}

export default TemplateButton;
