import React from "react";
import "../../App.scss";
import "./Article.scss";
import { Link } from "react-router-dom";
//Components
import Slide from "react-reveal/Slide";

const Article = ({
  thumbnail,
  title,
  description,
  paragraphs,
  isLeft,
  isPrint,
  pdf,
  setOnlineArticle,
}) => {
  if (isLeft) {
    if (isPrint) {
      return (
        <Slide left>
          <div>
            <a
              href={pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="Article"
            >
              <img
                src={thumbnail}
                style={{ float: isLeft ? "left" : "right" }}
                alt={description}
              />
              <div id="cardText">
                <h2>{title}</h2>
                <p>{description}</p>
              </div>
            </a>
          </div>
        </Slide>
      );
    } else {
      return (
        <Slide left>
          <div
            onClick={() => {
              setOnlineArticle({
                paragraphs: paragraphs,
                title: title,
                img: thumbnail,
                description: description,
              });
            }}
          >
            <Link to="/publications/onlineArticle" className="Article">
              <img
                src={thumbnail}
                style={{ float: isLeft ? "left" : "right" }}
                alt={description}
              />
              <div id="cardText">
                <h2>{title}</h2>
                <p>{description}</p>
              </div>
            </Link>
          </div>
        </Slide>
      );
    }
  } else {
    if (isPrint) {
      return (
        <Slide right>
          <div>
            <a
              href={pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="Article"
            >
              <img
                src={thumbnail}
                style={{ float: isLeft ? "left" : "right" }}
                alt={description}
              />
              <div id="cardText">
                <h2>{title}</h2>
                <p>{description}</p>
              </div>
            </a>
          </div>
        </Slide>
      );
    } else {
      return (
        <Slide right>
          <Link to="/publications/onlineArticle">
            <div
              className="Article"
              onClick={() => {
                setOnlineArticle({
                  paragraphs: paragraphs,
                  title: title,
                  img: thumbnail,
                  description: description,
                });
              }}
            >
              <img
                src={thumbnail}
                style={{ float: isLeft ? "left" : "right" }}
                alt={description}
              />
              <div id="cardText">
                <h2>{title}</h2>
                <p>{description}</p>
              </div>
            </div>
          </Link>
        </Slide>
      );
    }
  }
};

export default Article;
