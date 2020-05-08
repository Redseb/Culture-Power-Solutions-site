import React from "react";
import "../../../App.scss";
import "../Publications.scss";
//Components
import Hero from "../../../components/Hero/Hero";
import Article from "../../../components/Article/Article";
//Resources
const heroImg = require("../../../images/heroPublications.jpg");
const art1Img = require("../../../images/articles/online/art1Img.png");
const PublicationsEng = () => {
  return (
    <div className="Publications">
      <Hero
        img={heroImg}
        imgDescription="Writing in a notebook"
        text="Publications"
      />
      <div id="content">
        <div id="online">
          <Article
            thumbnail={art1Img}
            title="Article title"
            description="This is an article about a very important topic where I am discussing a thing about a very interesting point, and at the end there is a coupon for unlimited things!"
            isLeft={true}
          />
          <Article
            thumbnail={art1Img}
            title="Article title"
            description="This is an article about a very important topic where I am discussing a thing about a very interesting point, and at the end there is a coupon for unlimited things!"
            isLeft={false}
          />
          <Article
            thumbnail={art1Img}
            title="Article title"
            description="This is an article about a very important topic where I am discussing a thing about a very interesting point, and at the end there is a coupon for unlimited things!"
            isLeft={true}
          />
        </div>
        <div id="printed">
          <Article
            thumbnail={art1Img}
            title="Article title"
            description="This is an article about a very important topic where I am discussing a thing about a very interesting point, and at the end there is a coupon for unlimited things!"
            isLeft={false}
          />
          <Article
            thumbnail={art1Img}
            title="Article title"
            description="This is an article about a very important topic where I am discussing a thing about a very interesting point, and at the end there is a coupon for unlimited things!"
            isLeft={true}
          />
          <Article
            thumbnail={art1Img}
            title="Article title"
            description="This is an article about a very important topic where I am discussing a thing about a very interesting point, and at the end there is a coupon for unlimited things!"
            isLeft={false}
          />
        </div>
      </div>
    </div>
  );
};

export default PublicationsEng;
