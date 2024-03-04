import { useRef } from "react";
import "./NavigationArea.scss";
import { useComponentSize } from "../utilities";
import SmoothScrollLink from "./SmoothScrollLink";
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
          <ul className="navigation">
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
              <SmoothScrollLink to="/contact">Contact</SmoothScrollLink>
            </li>
          </ul>
          <div className="social-media">
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </div>
        </div>
      </div>
    </nav>
  );
}
