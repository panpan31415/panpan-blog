import { useRef } from "react";
import { useComponentSize } from "../utilities";
import "./MainContent.scss";
export default function MainContent() {
  const ref = useRef(null);
  const size = useComponentSize(ref);
  return (
    <main className="main" ref={ref}>
      <div className="content-frame" style={{ width: size.width }}></div>

      <div className="children--1" id={"1"}>
        1
      </div>

      <div className="children--2" id={"2"}>
        2
      </div>
      <div className="children--3" id={"3"}>
        3
      </div>
    </main>
  );
}
