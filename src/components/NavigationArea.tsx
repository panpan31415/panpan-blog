import { useRef } from "react";
import "./NavigationArea.scss";
import { useComponentWidth } from "../utilities";
export default function NavigationArea() {
  const headerRef = useRef(null);
  const size = useComponentWidth(headerRef);
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
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Contact</a>
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
