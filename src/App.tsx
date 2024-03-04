import { Fragment } from "react/jsx-runtime";
import "./App.scss";
import NavigationArea from "./components/NavigationArea";

function App() {
  return (
    <Fragment>
      <div className="app-wrapper">
        <div className="app">
          <NavigationArea />
          <main className="main">
            <div className="children--1">1</div>
            <div className="children--2">2</div>
            <div className="children--3">3</div>
          </main>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
