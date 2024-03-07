import { useState } from "react";

const Tour = ({ id, image, price, name, info, removeItem }) => {
  const [isReadMore, setIsReadMore] = useState(false);
  return (
    <>
      <article className="single-tour" key={id}>
        <img src={image} alt="" className="img" />
        <span className="tour-price">${price}</span>
        <div className="tour-info">
          <h5>{name}</h5>
          <p>
            {isReadMore ? info : `${info.substring(150)}...`}
            <button
              className="info-btn"
              onClick={() => setIsReadMore(!isReadMore)}
            >
              {isReadMore ? "Show Less" : "Show More"}
            </button>
          </p>
          <button
            className="delete-btn btn-block btn"
            onClick={() => removeItem(id)}
          >
            Not interested
          </button>
        </div>
      </article>
    </>
  );
};

export default Tour;
