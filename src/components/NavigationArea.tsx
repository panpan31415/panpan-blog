import { useRef } from "react";
import "./NavigationArea.scss";
import { useComponentSize } from "../utilities";
import SmoothScrollLink from "./SmoothScrollLink";
import { TfiLinkedin, TfiFacebook, TfiGithub } from "react-icons/tfi";

export default function NavigationArea() {
  const headerRef = useRef(null);
  const size = useComponentSize(headerRef);
  return (
    <nav className="header" ref={headerRef}>
      <div className="fixed-area" style={{ width: size.width }}>
        <div className="left-area" />
        <div className="navigation-area">
          <div className="logo">
            <p>
              Panpan<span className="logo--highlight">.</span>
            </p>
          </div>
          <menu className="navigation">
            <li>
              <SmoothScrollLink to="/home">Home</SmoothScrollLink>
            </li>
            <li>
              <SmoothScrollLink to="/about">About</SmoothScrollLink>
            </li>
            <li>
              <SmoothScrollLink to="/resume">Resume</SmoothScrollLink>
            </li>
            <li>
              <SmoothScrollLink to="/portfolio">portfolio</SmoothScrollLink>
            </li>
          </menu>
          <div className="social-area">
            <a
              href="https://github.com/panpan31415?tab=repositories"
              className="social-ink"
              aria-label="github link"
              title="github"
            >
              <TfiGithub color="currentColor" size={"20"} />
            </a>
            <a
              href="https://www.linkedin.com/in/panpan-zhang/"
              className="social-ink"
              aria-label="linkedin link"
              title="linkedIn"
            >
              <TfiLinkedin color="currentColor" size={"20"} />
            </a>
            <a
              href="https://www.facebook.com/Panpan86"
              className="social-ink"
              aria-label="facebook link"
              title="facebook"
            >
              <TfiFacebook color="currentColor" size={"20"} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
