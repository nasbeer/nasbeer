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
              <h1 className="greeting-sub" style={{ color: theme.black }}>
                I'm Nasbeer Ahammed
              </h1>
              <h1 className="greeting-typewriter" style={{ color: theme.blue }}>
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Data Scientist(Python)")
                      .pauseFor(200)
                      .deleteAll()
                      .typeString("Full Stack Developer")
                      .pauseFor(200)
                      .deleteAll()
                      .typeString("UI/UX Specialist")
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
                style={{ color: "black" }}
              >
                <div className="entities">
                  A <mark data-entity="noun">Data Scientist</mark> who thrives
                  to <mark data-entity="verb">leverage Startups</mark> using
                  AI-based solutions along with{" "}
                  <mark data-entity="skill">Web Development</mark> and a blend
                  of <mark data-entity="freelance">UI/UX Development</mark>
                </div>
              </span>
              <CompetitiveSites logos={competitiveSites.competitiveSites} />
              <div className="button-greeting-div">
                <Button text="Contact me" href="/contact" />
                <Button
                  text="View my resume"
                  newTab={true}
                  href={greeting.resumeLink}
                />
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
