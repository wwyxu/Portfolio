import React from "react";

const carouselItem = ({ index, img }) => {
  return (
    <>
      <div className={index === 0 ? "carousel-item active" : "carousel-item"}>
        <img className="d-block w-100" src={img} alt={`Slide ${index}`} />
      </div>
    </>
  );
};
export default carouselItem;
