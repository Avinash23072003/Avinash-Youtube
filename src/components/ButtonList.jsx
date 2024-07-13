import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const buttons = [
    "All",
    "Music",
    "Video",
    "Singer",
    "Arjit Singh",
    "Coding",
    "Infosys",
    "All",
    "Music",
  ];

  return (
    <div className="flex ml-4 overflow-x-auto">
      {buttons.map((button, index) => (
        <Button key={index} name={button} />
      ))}
    </div>
  );
};

export default ButtonList;
