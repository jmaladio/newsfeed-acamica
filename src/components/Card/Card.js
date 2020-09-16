import React from "react";

const Card = ({ data }) => {
  const { img_url, title, source_name, url } = data;
  return (
    <div className="news-card">
      <div className="img-container">
        <img src={img_url} alt={title}></img>
      </div>
      <p>{title}</p>
      <h2>{source_name}</h2>
      <a href={url} target="_blank" rel="noopener noreferrer">
        Ver más
      </a>
    </div>
  );
};

export default Card;
