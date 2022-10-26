import React from "react";

import "../styles/Main.css";
import CvPrev from "./CvPreview/CvPrev";
import { PrintCv } from "./CvPreview/CvPrev.print";

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main className="main">
        <div className="cv-form"></div>
        <PrintCv />
      </main>
    );
  }
}

export default Main;
