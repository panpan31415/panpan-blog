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
          View Portfolio
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
      </section>
      <section className="portfolio-section" id="portfolio">
        <h2 className="portfolio-section__title">Portfolio</h2>
        <div className="portfolio-section__divider" />
        <p className="portfolio-section__subtitle"> Skillful & Experienced</p>
        <div className="portfolio-section__items">
          <div className="portfolio-item--motosumo">
            <a href="https://team.motosumo.com/" className="portfolio-item__link" target="_blank" rel="noreferrer">
              <img
                src="https://static1.squarespace.com/static/5f215ab150bec52030447111/t/60cccd0be0529c4c668475fa/1624034571565/ms_logo-vertical-white%401x.png"
                alt="motosumo team-display application website"
              />
              <div className="portfolio-item__cover">
                <div>
                  <h4 className="portfolio-item__title">Motosumo</h4>
                  <h5 className="portfolio-item__subtitle">Team Display App</h5>
                </div>
                <span className="portfolio-item__deco-line" />
              </div>
            </a>
          </div>
          <div className="portfolio-item--webshop">
            <a
              href="https://webshop-example.panpan.dk/home"
              className="portfolio-item__link"
              target="_blank"
              rel="noreferrer"
            >
              <img src={require("../assets/webshop.png")} alt="web shop model" style={{ height: "inherit" }} />
              <div className="portfolio-item__cover">
                <div>
                  <h4 className="portfolio-item__title">Web Shop</h4>
                  <h5 className="portfolio-item__subtitle">React Practice Project</h5>
                </div>
                <span className="portfolio-item__deco-line" />
              </div>
            </a>
          </div>
          <div className="portfolio-item--nexter">
            <a
              href="https://panpan31415.github.io/advanced-css-course-gird/"
              className="portfolio-item__link"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://panpan31415.github.io/advanced-css-course-gird/img/logo.png"
                alt="nexter project"
                style={{ width: "80%" }}
              />
              <div className="portfolio-item__cover">
                <div>
                  <h4 className="portfolio-item__title">Nextor Agent</h4>
                  <h5 className="portfolio-item__subtitle">A practice project build with CSS grid box</h5>
                </div>
                <span className="portfolio-item__deco-line" />
              </div>
            </a>
          </div>
          <div className="portfolio-item--hotel">
            <a
              href="https://panpan31415.github.io/advanced-css-course-flex/"
              className="portfolio-item__link"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://codingheroes.io/assets/img/logo-light-small.png"
                alt="coding hero"
                style={{ width: "80%" }}
              />
              <div className="portfolio-item__cover">
                <div>
                  <h4 className="portfolio-item__title">HOTEL LAS PALMAS</h4>
                  <h5 className="portfolio-item__subtitle">A flexbox practice project with Jonas Schmedtmann</h5>
                </div>
                <span className="portfolio-item__deco-line" />
              </div>
            </a>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <a
            className="portfolio-section__show-more"
            href="https://github.com/panpan31415?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            More on github
          </a>
        </div>

        <div className="portfolio-section__summary">
          <div className="portfolio-summary-item">
            <p className="portfolio-summary-item__number">20+</p>
            <div className="portfolio-summary-item__text">projects completed</div>
          </div>
          <div className="portfolio-summary-item">
            <p className="portfolio-summary-item__number">3+</p>
            <div className="portfolio-summary-item__text">years professional experience</div>
          </div>
          <div className="portfolio-summary-item">
            <p className="portfolio-summary-item__number">5+</p>
            <div className="portfolio-summary-item__text">certifications earned </div>
          </div>
        </div>
      </section>
      <section className="testimonials-section" id="testimonials">
        <h2 className="testimonials-section__title">Testimonials</h2>
        <div className="testimonials-section__divider" />
        <div className="testimonials-section__items">
          <div className="testimonial">
            <p className="testimonial__description">
              I had the pleasure of working with Panpan during his time in Optumce. Panpan is very eager to work and
              when set on a task he strives to complete on time. Panpan seeks to understand the assignments he is given
              to the fullest, even if the underlying theory is outside his field of work. If you appreciate a hard
              working employee, open to learn new things, this is your guy.{" "}
            </p>
            <div className="testimonial__author">
              <img
                src="https://media.licdn.com/dms/image/C4D03AQH0OUWB2vq8VA/profile-displayphoto-shrink_100_100/0/1581327880885?e=1715212800&v=beta&t=y1qPJ23xM81bjuo2LOPxzLUuxToWRge4z65dI-ZOEuw"
                alt="testimonial profile"
                className="testimonial__profile-picture"
              />
              <div>
                <p className="testimonial__name">Rasmus Brøndum</p>
                <p className="testimonial__position">Senior Measurement Engineer at Ørsted</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <h2 className="contact-section__title">Contact</h2>
        <div className="contact-section__divider" />
        <p className="contact-section__subtitle"> Available now</p>
        <div className="contact-section__items">
          <div className="contact-item">
            <p className="contact-item__method">Email</p>
            <p className="contact-item__text">panpan31415@gmail.com</p>
          </div>
          <div className="contact-item">
            <p className="contact-item__method">Phone</p>
            <p className="contact-item__text">+45 52686386</p>
          </div>
        </div>
      </section>

      <section className="copyright-section">
        <p>
          This site's design was created by{" "}
          <a href="https://themeforest.net/user/caliberthemes">© 2024 CaliberThemes</a> and is used by{" "}
          <a href="https//www.panpan.dk">Panpan</a> under the terms of themeforest regular license. All rights reserved.
        </p>
      </section>
    </main>
  );
}
