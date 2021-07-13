import React from "react";

const projectCard = ({ delay, target, img }) => {
  return (
    <>
      <div
        className="card m-0"
        data-aos="fade-up"
        data-aos-anchor="#trigger-up2"
        data-aos-anchor-placement="center-center"
        data-aos-delay={delay}
      >
        <div data-toggle="modal" data-target={target}>
          <a className="img-top">
            <div class="content">
              <img className="card-img-top" src={img} alt={target}/>
              <div class="content-overlay"/>
              <div class="content-details fadeIn-bottom">
                <h5 type="button">View</h5>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};
export default projectCard;
