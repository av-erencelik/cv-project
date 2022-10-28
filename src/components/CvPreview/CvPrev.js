import React from "react";
import "../../styles/CvPrev.css";
import Links from "./CvPrevLinks";
import Experience from "./CvPrevExperience";
import Education from "./CvPrevEducation";
import { IoLocation } from "react-icons/io5";
import { AiFillPhone, AiFillMail } from "react-icons/ai";

class CvPrev extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="cv-preview">
        <div className="left-side">
          <img
            src={this.props.personalInfo.photo}
            alt="example"
            className="profile-photo"
          ></img>
          <div className="about">
            <h3 className="about-title">ABOUT ME</h3>
            <p className="about-text">{this.props.personalInfo.about}</p>
          </div>
          <div className="social-media">
            <h3 className="social-media-title">WEBSITE & SOCIAL LINKS</h3>
            {this.props.links.map((link) => {
              return <Links site={link.site} url={link.url} key={link.id} />;
            })}
          </div>
        </div>
        <div className="right-side">
          <div className="personal-info">
            <div className="name-title">
              <h1 className="name">
                {this.props.personalInfo.name} {this.props.personalInfo.surname}
              </h1>
              <h3 className="person-title">{this.props.personalInfo.title}</h3>
            </div>
            <div className="contact">
              <p className="address">
                <IoLocation className="logo" />
                {this.props.personalInfo.address}
              </p>
              <p className="phone">
                <AiFillPhone className="logo" />
                {this.props.personalInfo.phoneNumber}
              </p>
              <p className="mail">
                <AiFillMail className="logo" />
                {this.props.personalInfo.email}
              </p>
            </div>
          </div>
          <div className="experiences">
            <h3 className="experience-title">WORK EXPERIENCE</h3>
            {this.props.experiences.map((experience) => {
              return (
                <Experience
                  position={experience.position}
                  company={experience.company}
                  city={experience.city}
                  from={experience.from}
                  to={experience.to}
                  jobDescription={experience.jobDesciption}
                  key={experience.id}
                />
              );
            })}
          </div>
          <div className="educations">
            <h3 className="education-title">EDUCATION</h3>
            {this.props.educations.map((education) => {
              return (
                <Education
                  uni={education.uni}
                  city={education.city}
                  degree={education.degree}
                  degreeDescription={education.degreeDescription}
                  from={education.from}
                  to={education.to}
                  key={education.id}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default CvPrev;
