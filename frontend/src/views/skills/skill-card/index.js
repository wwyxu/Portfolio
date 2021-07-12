import React from "react";

const skillCard = ({ delay, img, name, description }) => {
  return (
    <>
      <div
        className="card shadow-sm text-center"
        style={{ marginBottom: "30px" }}
        data-aos="fade-up"
        data-aos-anchor="#trigger-up"
        data-aos-anchor-placement="center-center"
        data-aos-delay={delay}
      >
        <div className="card-body">
          <img
            className="rounded"
            src={img}
            style={{ marginBottom: "10px" }}
            width="100"
            alt="database"
          />
          <h5 className="card-title">{name}</h5>
          <p className="card-text text-secondary">{description}</p>
        </div>
      </div>
    </>
  );
};
export default skillCard;
