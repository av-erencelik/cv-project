import React from "react";
import "../../styles/CvPrev.css";
import { IoLocation } from "react-icons/io5";
import { AiFillPhone, AiFillMail } from "react-icons/ai";
import Links from "./CvPrevLinks";
import Experience from "./CvPrevExperience";

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
              return (
                <Links
                  site={link.site}
                  url={link.url}
                  key={this.props.links.indexOf(link)}
                />
              );
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
                {this.props.personalInfo.phone}
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
                  key={this.props.experiences.indexOf(experience)}
                />
              );
            })}
          </div>
          <div className="educations">
            <h3 className="education-title">EDUCATION</h3>
            <div className="education">
              <div className="uni-city-date">
                <h4 className="university">University Of Example</h4>
                <p className="city">Example City</p>
                <p className="date">2012-2016</p>
              </div>
              <div className="edu-description">
                <h4 className="program-name">Bachelor Of Computer Science</h4>
                <p className="program-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum tempus imperdiet nisl sed vestibulum. Donec
                  gravida, nulla eget blandit fermentum, mauris nisi rutrum
                  libero, ac pharetra erat est sit amet tellus.
                </p>
              </div>
            </div>
            <div className="education">
              <div className="uni-city-date">
                <h4 className="university">University Of Example</h4>
                <p className="city">Example City</p>
                <p className="date">2012-2016</p>
              </div>
              <div className="edu-description">
                <h4 className="program-name">Master of IT</h4>
                <p className="program-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum tempus imperdiet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default CvPrev;
