import React from "react";
import CarouselIndicator from "./carousel-indicator";
import CarouselItem from "./carousel-item";

const projectModal = (props) => {
  const carouselIndicators =
    props.img.length > 1
      ? props.img?.map((img, index) => (
          <CarouselIndicator id={props.id} index={index} />
        ))
      : null;

  const carouselItems = props.img?.map((img, index) => (
    <CarouselItem img={img} index={index} />
  ));

  return (
    <div className="modal fade" id={props.id}>
      <div
        className={
          props.vertical ? "modal-dialog modal-sm" : "modal-dialog modal-lg"
        }
      >
        <div className="modal-content">
          <div className="modal-header">
            <div className="text">{props.name}</div>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div
              id={`carouselIndicators${props.id}`}
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">{carouselItems}</div>
              <ol className="carousel-indicators">{carouselIndicators}</ol>
              {props.img.length > 1 ? (
                <a
                  className="carousel-control-prev"
                  href={`#carouselIndicators${props.id}`}
                  role="button"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  />
                  <span class="sr-only">Previous</span>
                </a>
              ) : null}
              {props.img.length > 1 ? (
                <a
                  className="carousel-control-next"
                  href={`#carouselIndicators${props.id}`}
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Next</span>
                </a>
              ) : null}
            </div>
            <div className="card-body text-center m-0 p-0">
              <p className="card-text text-secondary mt-2">{props.description}</p>
              <p>
                {props.project && (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={props.project}
                    type="button"
                    className="btn btn-info mx-1"
                  >
                    Project <i className="fas fa-external-link-alt"></i>
                  </a>
                )}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={props.github}
                  type="button"
                  className="btn btn-dark mx-1"
                >
                  GitHub <i className="fas fa-external-link-alt"></i>
                </a>
              </p>
              <div className="card-footer">
              <small className="text-muted small-text">
                {props.stack}
              </small>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default projectModal;
