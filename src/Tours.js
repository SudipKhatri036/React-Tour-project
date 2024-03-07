import React from "react";

import Tour from "./Tour";

const Tours = ({ tourData, removeItem }) => {
  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="title-underline"></div>
      </div>
      <div className="tours">
        {tourData.map((data) => {
          return <Tour key={data.id} {...data} removeItem={removeItem} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
