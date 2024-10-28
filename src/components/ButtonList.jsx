import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const buttons = ["All", "Music", "Video", "Singer", "Arjit Singh", "Coding"];

  return (
    <div className="flex flex-wrap gap-2 p-2 overflow-x-auto whitespace-nowrap">
      {buttons.map((button, index) => (
        <Button key={index} name={button} />
      ))}
    </div>
  );
};

export default ButtonList;
