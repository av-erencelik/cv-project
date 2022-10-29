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

  handleAddExperience = (e) => {
    this.setState((prevState) => ({
      ...prevState,
      experiences: [
        ...prevState.experiences,
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
    }));
  };

  handleDeleteExperience = (id) => {
    const newExperiences = this.state.experiences.filter(
      (experience) => experience.id !== id
    );
    this.setState((prevState) => {
      return { ...prevState, experiences: newExperiences };
    });
  };
  handleChangeExperience = (e, id) => {
    const { name, value } = e.target;
    const newExperience = this.state.experiences.map((experience) => {
      if (experience.id === id) {
        return { ...experience, [name]: value };
      }
      return experience;
    });
    this.setState((prevState) => {
      return { ...prevState, experiences: [...newExperience] };
    });
  };
  handleAddEducation = (e) => {
    this.setState((prevState) => ({
      ...prevState,
      educations: [
        ...prevState.educations,
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
    }));
  };
  handleDeleteEducation = (id) => {
    const newEducations = this.state.educations.filter(
      (education) => education.id !== id
    );
    this.setState((prevState) => {
      return { ...prevState, educations: newEducations };
    });
  };
  handleChangeEducation = (e, id) => {
    const { name, value } = e.target;
    const newEducation = this.state.educations.map((education) => {
      if (education.id === id) {
        return { ...education, [name]: value };
      }
      return education;
    });
    this.setState((prevState) => {
      return { ...prevState, educations: [...newEducation] };
    });
  };
  handleAddLink = (e) => {
    this.setState((prevState) => ({
      ...prevState,
      links: [
        ...prevState.links,
        {
          id: uuidv4(),
          site: "",
          url: "",
        },
      ],
    }));
  };
  handleDeleteLink = (id) => {
    const newLinks = this.state.links.filter((link) => link.id !== id);
    this.setState((prevState) => {
      return { ...prevState, links: newLinks };
    });
  };
  handleChangeLink = (e, id) => {
    const { name, value } = e.target;
    const newLink = this.state.links.map((link) => {
      if (link.id === id) {
        return { ...link, [name]: value };
      }
      return link;
    });
    this.setState((prevState) => {
      return { ...prevState, links: [...newLink] };
    });
  };

  render() {
    return (
      <main className="main">
        <CvForm
          onPhotoLoad={this.handleFileLoader}
          onChangePersonalInfo={this.handleChangePersonalInfo}
          experiences={this.state.experiences}
          onAddExperience={this.handleAddExperience}
          onDeleteExperience={this.handleDeleteExperience}
          onChangeExperience={this.handleChangeExperience}
          educations={this.state.educations}
          onAddEducation={this.handleAddEducation}
          onDeleteEducation={this.handleDeleteEducation}
          onChangeEducation={this.handleChangeEducation}
          links={this.state.links}
          onChangeLink={this.handleChangeLink}
          onAddLink={this.handleAddLink}
          onDeleteLink={this.handleDeleteLink}
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
