import React from "react";
import "../../App.scss";
import "./Article.scss";

const Article = ({ thumbnail, title, description, paragraphs, isLeft }) => {
  return (
    <div className="Article">
      <img src={thumbnail} style={{ float: isLeft ? "left" : "right" }} />
      <div id="cardTextOuter">
        <div id="cardText">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Article;
