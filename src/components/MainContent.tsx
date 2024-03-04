import { useRef } from "react";
import { useComponentSize } from "../utilities";
import "./MainContent.scss";
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

      <div className="children--2" id={"about"}>
        2
      </div>
      <div className="children--3" id={"resume"}>
        3
      </div>
      <div className="children--3" id={"contact"}>
        4
      </div>
    </main>
  );
}
