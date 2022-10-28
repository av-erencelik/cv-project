import React from "react";
import "../styles/Main.css";
import examplePp from "../components/photos/example.webp";
import { PrintCv } from "./CvPreview/CvPrev.print";
import { v4 as uuidv4 } from "uuid";
import CvForm from "./CvForm/CvForm";

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
        phoneNumber: "",
        email: "",
        about: "",
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

  handleFileLoader = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      this.setState((prevState) => ({
        ...prevState,
        personalInfo: {
          ...prevState.personalInfo,
          photo: reader.result,
        },
      }));
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  handleChangePersonalInfo = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      ...prevState,
      personalInfo: {
        ...prevState.personalInfo,
        [name]: value,
      },
    }));
  };

  render() {
    return (
      <main className="main">
        <CvForm
          onPhotoLoad={this.handleFileLoader}
          onChangePersonalInfo={this.handleChangePersonalInfo}
        />
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
