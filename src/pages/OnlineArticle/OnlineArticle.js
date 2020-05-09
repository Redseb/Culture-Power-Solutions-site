import React, { useEffect } from "react";
import "../../App.scss";
import "./OnlineArticle.scss";
//Components
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Footer/Footer";

const OnlineArticle = ({ onlineArticle }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  let content = [];
  for (let i = 0; i < onlineArticle.paragraphs.length; i++) {
    let paragraph = onlineArticle.paragraphs[i];
    if (paragraph.includes("HEADER")) {
      content.push(<h2 key={i}>{paragraph.substring(6, paragraph.length)}</h2>);
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
