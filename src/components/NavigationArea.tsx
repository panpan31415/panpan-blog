import { useRef, useState } from "react";
import "./NavigationArea.scss";
import SmoothScrollLink from "./SmoothScrollLink";
import { TfiLinkedin, TfiFacebook, TfiGithub } from "react-icons/tfi";

export default function NavigationArea() {
  const headerRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="header" ref={headerRef}>
      <div className="fixed-nav-area">
        <div className="left-area" />
        <div className="navigation-area">
          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span
              className={`menu-button__hamburg-icon ${!menuOpen ? "" : "menu-button__hamburg-icon--close"}`}
            ></span>
            <p className="menu-button__text">menu</p>
          </button>
          <div className="logo">
            <p>
              Panpan<span className="logo--highlight">.</span>
            </p>
          </div>
          <menu className={`navigation ${menuOpen ? "" : "navigation--close"}`}>
            <li>
              <SmoothScrollLink to="/home" callback={() => setMenuOpen(false)}>
                Home
              </SmoothScrollLink>
            </li>
            <li>
              <SmoothScrollLink to="/about" callback={() => setMenuOpen(false)}>
                About
              </SmoothScrollLink>
            </li>
            <li>
              <SmoothScrollLink
                to="/resume"
                callback={() => setMenuOpen(false)}
              >
                Resume
              </SmoothScrollLink>
            </li>
            <li>
              <SmoothScrollLink
                to="/portfolio"
                callback={() => setMenuOpen(false)}
              >
                portfolio
              </SmoothScrollLink>
            </li>
            <li>
              <SmoothScrollLink
                to="/contact"
                callback={() => setMenuOpen(false)}
              >
                contact
              </SmoothScrollLink>
            </li>
          </menu>
          <div className="social-area">
            <a
              href="https://github.com/panpan31415?tab=repositories"
              className="social-link"
              aria-label="github link"
              title="github"
            >
              <TfiGithub color="currentColor" size={"20"} />
            </a>
            <a
              href="https://www.linkedin.com/in/panpan-zhang/"
              className="social-link"
              aria-label="linkedin link"
              title="linkedIn"
            >
              <TfiLinkedin color="currentColor" size={"20"} />
            </a>
            <a
              href="https://www.facebook.com/Panpan86"
              className="social-link"
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
