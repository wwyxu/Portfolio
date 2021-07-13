import React from "react";

const Pre = ({ load }) => {
  return <div id={load && window.scrollY === 0 ? "loading" : "loaded"} />;
};

export default Pre;
