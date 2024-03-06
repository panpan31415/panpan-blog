import { useRef } from "react";
import { useComponentSize } from "../utilities";
import "./MainContent.scss";
import { educations, experiences, skills } from "../profile-data";
import SkillItem from "./SkillItem";
import HistoryItem from "./HistoryItem";
import { BsBookHalf, BsMusicNoteBeamed, BsSteam, BsYinYang } from "react-icons/bs";
import { PiCookingPotBold } from "react-icons/pi";

export default function MainContent() {
  const ref = useRef(null);
  const size = useComponentSize(ref);
  return (
    <main className="main" ref={ref}>
      <div className="content-frame" style={{ width: size.width }} />

      <section className="home-section" id={"home"}>
        <div className="home-section__intro">
          <p className="home-section__hello">Hi, I'm</p>
          <h1 className="home-section__name">
            Panpan
            <br />
            Zhang
          </h1>
          <div className="home-section__divider" />
          <p className="home-section__position">Frontend Developer</p>
        </div>
        <div className="home-section__profile"></div>
      </section>
      <div className="home-section__links">
        <a className="home-section__links--left" href="/">
          DOWNLOAD RESUME
        </a>
        <a className="home-section__links--right" href="/">
          View Profile
        </a>
      </div>

      <section className="about-section" id="about">
        <h2 className="about-section__title">About</h2>
        <div className="about-section__divider" />
        <p className="about-section__subtitle">Passionate & detail focused</p>
        <p className="about-section__introduction">
          I am a Frontend Developer with three years of hands-on experience. I bring a strong foundation in React,
          JavaScript, and CSS to the table. My passion for crafting seamless user interfaces drives me to seek a
          position where I can challenge myself, innovate, and contribute significantly to projects that matter. I'm
          eager to apply my expertise within a dynamic team, aiming to push the boundaries of web development and create
          impactful digital experiences.
        </p>
        <div className="about-section__skill-area">
          {skills.map((skill, index) => (
            <SkillItem skill={skill} key={index} />
          ))}
        </div>
      </section>
      <section className="resume-section" id="resume">
        <h2 className="resume-section__title">Resume</h2>
        <div className="resume-section__divider" />
        <p className="resume-section__subtitle">Education & Experience</p>
        <div className="resume-section__history">
          <div className="resume-section__education">
            {educations.map((education, index) => (
              <HistoryItem
                item={{
                  date: education.period,
                  title: education.universityName,
                  subtitle: education.major,
                  descriptions: education.descriptions,
                }}
                key={index}
              />
            ))}
          </div>
          <div className="resume-section__experience">
            {experiences.map((experience, index) => (
              <HistoryItem
                item={{
                  date: experience.period,
                  title: experience.position,
                  subtitle: experience.companyName,
                  descriptions: experience.descriptions,
                }}
                key={index}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="hobby-section" id="hobbies">
        <h2 className="hobby-section__title">Hobbies</h2>
        <div className="hobby-section__divider" />
        <p className="hobby-section__subtitle"> Curious introvert & Passionate Explorer</p>
        <div className="hobby-section__items">
          <div className="hobby-item">
            <div className="hobby-item__icon">
              <BsMusicNoteBeamed size={"100%"} color="currentColor" />
            </div>
            <p className="hobby-item__name">music</p>
          </div>
          <div className="hobby-item">
            <div className="hobby-item__icon">
              <BsYinYang size={"100%"} color="currentColor" />
            </div>
            <p className="hobby-item__name">meditation</p>
          </div>
          <div className="hobby-item">
            <div className="hobby-item__icon">
              <BsSteam size={"100%"} color="currentColor" />
            </div>
            <p className="hobby-item__name">gaming</p>
          </div>
          <div className="hobby-item">
            <div className="hobby-item__icon">
              <BsBookHalf size={"100%"} color="currentColor" />
            </div>
            <p className="hobby-item__name">reading</p>
          </div>
          <div className="hobby-item">
            <div className="hobby-item__icon">
              <PiCookingPotBold size={"100%"} color="currentColor" />
            </div>
            <p className="hobby-item__name">cooking</p>
          </div>
        </div>

        {/* 
          1. meditation
          2. psychology
          3. music
          4. reading
          5. cooking
         */}
      </section>

      <div className="children--3" id={"contact"}>
        4
      </div>
    </main>
  );
}
