import React from "react";
import { IconContext } from "react-icons";

const LinkItem = ({ text, icon, iconClassName }) => {
  return (
    <>
      <IconContext.Provider value={{ className: iconClassName }}>
        <span>{icon}</span>
      </IconContext.Provider>
      <span className="icon-text">{text}</span>
    </>
  );
};

export default LinkItem;
