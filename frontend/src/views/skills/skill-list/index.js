import React from "react";

const skillList = ({ name }) => {
  return (
    <>
      <li className="text">
        <div id="chevron-arrow-right" className="mr-1"></div>
        {"   "}
        {name}
      </li>
    </>
  );
};
export default skillList;
