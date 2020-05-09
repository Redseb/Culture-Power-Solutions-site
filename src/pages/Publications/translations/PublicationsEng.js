import React, { useState } from "react";
import "../../../App.scss";
import "../Publications.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Components
import Hero from "../../../components/Hero/Hero";
import Article from "../../../components/Article/Article";
import OnlineArticle from "../../OnlineArticle/OnlineArticle";

//Resources
const heroImg = require("../../../images/heroPublications.jpg");
const art1Img = require("../../../images/articles/online/art1Img.png");
const PublicationsEng = () => {
  const [onlineArticle, setOnlineArticle] = useState({
    paragraphs: ["Test paragraph 1", "Test paragraph 2", "Test Paragraph 2"],
    title: "Article title",
    img: { art1Img },
    description:
      "This is an article about a very important topic where I am discussing a thi",
  });
  return (
    <Router>
      <Switch>
        <Route exact path="/publications/onlineArticle">
          <OnlineArticle onlineArticle={onlineArticle} />
        </Route>
        <Route exact path="/publications">
          <div className="Publications">
            <Hero
              img={heroImg}
              imgDescription="Writing in a notebook"
              text="Publications"
            />
            <div id="content">
              <div id="online">
                <h2 className="listHeader">Online</h2>
                <Article
                  thumbnail={art1Img}
                  title="Cross-cultural management and communication"
                  description="although recognized as one of the key competencies of the 21st century manager, is often underestimated.
                  This article is about one of the most important, and at the same time one of the most ignored, competencies of the 21st century manager in Poland and other places in the world."
                  paragraphs={[
                    "HEADER The key competency of 21st century",
                    "Cross-cultural management and communication, although recognized as one of the key competencies of the 21st century manager, is often underestimated. This article is about one of the most important, and at the same time one of the most ignored, competencies of the 21st century manager in Poland and other places in the world.",
                    "HEADER The key role of HR",
                    "Years ago, when the Polish transformation began, expats were seen as somebody unique; they were treated respectfully and were often blindly believed in their business and life wisdoms. Cross-cultural adaptation, as it exists today, was not an issue, as Polish workers simply needed to accept the perceived strange habits of their expat bosses. Cross-cultural adaptation was certainly not a central issue for HR departments. Today the situation has changed dramatically. Expats are no longer perceived as people of special status. Shared Service Centers have became an integral part of the business landscape and work in international virtual project teams has become an everyday reality. More and more Poles move up the career ladder to sit on Boards of Directors of international companies together with their foreign colleagues. This ability to work effectively in cross-cultural teams has become the key competency of modern-day HR. Sending local employees – no matter how talented – to foreign countries without the appropriate cultural awareness preparation can often result in his or her failure, dismissal from the company, and, all in all, enormous costs.HR employees who are responsible for sending and receiving expats mainly focus on the physical side of the relocation process: finding accommodation and school for kids, explaining how to use local medical facilities and where to shop. Of course all this information is necessary and critically important – but it is not sufficient. We often forget about the soft side of relocation. For example, the majority of employees from Asia will find it uncomfortable to speak up during meetings dominated by European “alpha men”. This is because in many Asian cultures the open voicing of opinions, especially in the presence of high-level bosses, is extremely awkward and embarrassing. One the one hand, forcing a culturally unaware employee to partake in such discussion will end in feelings of frustration, rejection and an impression that the group is arrogant and aggressive. On the other hand, Western co-workers might start questioning what is the added value to the discussion brought by a teammate who does not speak.Here we are faced with a classical cross-cultural communication barrier and different cultural DNA. However by simply adjusting the meeting facilitation style it is possible to open the discussion space for everyone.",
                    "HEADER My personal experience",
                    "When I think about the beginning of my adventure with studying other cultures, I always remember my first trip abroad. In the mid-80s, after my second year of Arabic at university in Poland, I received a scholarship to Al-Mustansiriya University in Bagdad and journeyed to study the language. Those were entirely different times, as Poles could not hold their own passports at home, a special permission called a “green card” was needed to cross the border, and the average salary in Poland approximated only 20-30 USD per month (of course by black market standards, as one could not even buy dollars by an official rate). The first day after my arrival in Bagdad, I was walking along the street and ahead of me are two soldiers with Kalashikov’s machine guns. They were walking and… holding each other’s hand. At the time that I was shocked; in my culture men do not hold each other’s hand when walking. Very quickly it was explained to me that in Arabic culture this behavior is absolutely normal for good friends, and there is no sexual connotation at all. This was my first “aha” moment – the revelation and true eye-opener that all the things I considered “normal” and “universal”, were not necessarily the same for others. Many years have passed from that “aha” moment. I had the privilege to work for an international corporation for an extensive time. Together with my family we moved from Poland to Ukraine, Dubai, China, Russia, Indonesia and Hong Kong. I have had bosses of 14 different nationalities and I have worked with truly international teams. I have tested the good and bad HR practices on my and my family’s own skins and I have made many mistakes, some of them quite funny, others rather serious. The 18 years of work outside my country, on different continents and in diverse roles, has taught me a lot. For example, that the “cultural glasses” we have obtained by virtue of growing up in a certain society determine how we see the world around us. That there is no single reality, but rather a multitude of realities created by each individual perceiver. Each of us wears these cultural glasses, but not all of us are aware they are there. During my years abroad I learnt humility and a great respect for others. Cross-cultural communication and management have become my passion and I want to share this knowledge with you.",
                  ]}
                  isLeft={true}
                  isPrint={false}
                  setOnlineArticle={setOnlineArticle}
                />
                <Article
                  thumbnail={art1Img}
                  title="Article title"
                  description="This is an article about a very important topic where I am discussing a thing about a very interesting point, and at the end there is a coupon for unlimited things!"
                  paragraphs={[
                    "Test paragraph 1",
                    "Test paragraph 2",
                    "Test Paragraph 2",
                  ]}
                  isLeft={true}
                  isPrint={false}
                  setOnlineArticle={setOnlineArticle}
                />
                <Article
                  thumbnail={art1Img}
                  title="Article title"
                  description="This is an article about a very important topic where I am discussing a thing about a very interesting point, and at the end there is a coupon for unlimited things!"
                  paragraphs={[
                    "Test paragraph 1",
                    "Test paragraph 2",
                    "Test Paragraph 2",
                  ]}
                  isLeft={true}
                  isPrint={false}
                  setOnlineArticle={setOnlineArticle}
                />
              </div>
            </div>
          </div>
        </Route>
      </Switch>
    </Router>
  );
};

export default PublicationsEng;
