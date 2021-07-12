import React from "react";

const carouselIndicator = ({ id, index }) => {
  return (
    <>
      <li
        data-target={`#carouselIndicators${id}`}
        data-slide-to={index}
        class="active"
      />
    </>
  );
};
export default carouselIndicator;
