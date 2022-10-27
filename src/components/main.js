import React from "react";

import "../styles/Main.css";
import examplePp from "../components/photos/example.webp";
import { PrintCv } from "./CvPreview/CvPrev.print";
import { v4 as uuidv4 } from "uuid";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personalInfo: {
        name: "",
        surname: "",
        title: "",
        photo: examplePp,
        address: "",
        phonoNumber: "",
        email: "",
        about: "",
        phone: "",
      },
      experiences: [
        {
          id: uuidv4(),
          position: "",
          company: "",
          city: "",
          from: "",
          to: "",
          jobDescription: "",
        },
      ],
      educations: [
        {
          id: uuidv4(),
          uni: "",
          city: "",
          degree: "",
          degreeDescription: "",
          from: "",
          to: "",
        },
      ],
      links: [
        {
          id: uuidv4(),
          site: "",
          url: "",
        },
      ],
    };
  }

  render() {
    return (
      <main className="main">
        <div className="cv-form"></div>
        <PrintCv
          personalInfo={this.state.personalInfo}
          experiences={this.state.experiences}
          educations={this.state.educations}
          links={this.state.links}
        />
      </main>
    );
  }
}

export default Main;
