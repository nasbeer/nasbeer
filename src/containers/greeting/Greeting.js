import React from "react";
import "./Greeting.css";
// import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import BannerImg from "./BannerImg";
import Typewriter from "typewriter-effect";
import CompetitiveSites from "../../components/competitiveSites/CompetitiveSites";
import { competitiveSites } from "../../portfolio";
export default function Greeting(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              {/* <h1 className="greeting-text" style={{ color: theme.black }}>
                {greeting.title}
              </h1> */}
              <br />
              <h1 className="greeting-sub" style={{ color: theme.text }}>
                I'm {greeting.sub}
              </h1>
              <h1
                className="greeting-typewriter greeting-nas"
                style={{ color: theme.jacketColor }}
              >
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("I love Python")
                      .pauseFor(200)
                      .deleteAll()
                      .typeString("I can code in React")
                      .pauseFor(200)
                      .deleteAll()
                     .typeString("I'm UIUX Specialist")
                      .pauseFor(200)
                      .deleteAll()
                      .typeString("I love DS/ML")
                      .pauseFor(200)
                      .start();
                    // .typeString("IT Engineer")
                    // .pauseFor(200)
                    // .start();
                  }}
                  options={{
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>
              <span
                className="greeting-text-span subTitle"
                style={{ color: theme.text }}
              >
                <div className="entities">
                  A <mark data-entity="noun">Data Scientist</mark> who has
                  succeeded in harnessing{" "}
                  <mark data-entity="verb">Innovative ideas</mark> using
                  AI-powered solutions with
                  <mark data-entity="skill">full stack development</mark> and a
                  blend <br />
                  of
                  <mark data-entity="freelance">
                    UI/UX research and development
                  </mark>
                  {/* A <mark data-entity="noun">Data Scientist</mark> who thrives
                  to <mark data-entity="verb">leverage Innovative Ideas</mark> using
                  AI-based solutions along with{" "}
                  <mark data-entity="skill">Full Stack Development</mark> and a blend
                  of <mark data-entity="freelance">UI/UX research &amp; development</mark> */}
                </div>
              </span>
              <CompetitiveSites logos={competitiveSites.competitiveSites} />
              <div className="button-greeting-div">
                <Button
                  // className="hider"
                  text="see my portfolio"
                  newTab={false}
                  // href={greeting.resumeLink}
                  href="/projects"
                />
                <Button text="hire me" href="/contact" />
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <BannerImg />
          </div>
        </div>
      </div>
    </Fade>
  );
}
