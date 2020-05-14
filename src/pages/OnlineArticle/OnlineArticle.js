import React, { useEffect } from "react";
import "../../App.scss";
import "./OnlineArticle.scss";
import { useHistory } from "react-router-dom";
//Components
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Footer/Footer";

const OnlineArticle = ({ onlineArticle }) => {
  let history = useHistory();
  if (onlineArticle.title === "Article title") {
    history.push("/publications");
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  let content = [];
  for (let i = 0; i < onlineArticle.paragraphs.length; i++) {
    let paragraph = onlineArticle.paragraphs[i];
    if (paragraph.includes("HEADER")) {
      content.push(<h2 key={i}>{paragraph.substring(6, paragraph.length)}</h2>);
    } else if (paragraph.includes("LISTSTART")) {
      let liCounter = 1;
      let lis = [];
      while (!onlineArticle.paragraphs[i + liCounter].includes("LISTEND")) {
        lis.push(
          <li key={i + liCounter}>{onlineArticle.paragraphs[i + liCounter]}</li>
        );
        liCounter++;
      }
      if (paragraph.includes("ORDERED")) {
        content.push(<ol key={i}>{lis}</ol>);
      } else {
        content.push(<ul key={i}>{lis}</ul>);
      }
      i = i + liCounter;
    } else {
      content.push(<p key={i}>{paragraph}</p>);
    }
  }
  return (
    <div className="OnlineArticle">
      <Hero
        img={onlineArticle.img}
        imgDescription={onlineArticle.imgDescription}
        text={onlineArticle.title}
      />
      <div className="content">{content}</div>
      <Footer />
    </div>
  );
};

export default OnlineArticle;
