import React from "react";
import "../styles/Main.css";
import CvPrev from "./CvPreview/CvPrev";
class Main extends React.Component {
  render() {
    return (
      <main className="main">
        <div className="cv-form"></div>
        <div className="cv-preview">
          <CvPrev />
        </div>
      </main>
    );
  }
}

export default Main;
