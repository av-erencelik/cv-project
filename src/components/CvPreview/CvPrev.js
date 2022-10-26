import React from "react";
import "../../styles/CvPrev.css";
import { IoLocation } from "react-icons/io5";
import { AiFillPhone, AiFillMail } from "react-icons/ai";

class CvPrev extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="left-side">
          <img
            src="./example.webp"
            alt="example"
            className="profile-photo"
          ></img>
          <div className="about">
            <h3 className="about-title">ABOUT ME</h3>
            <p className="about-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
              dicta minus molestiae vel beatae natus eveniet ratione temporibus
              aperiam harum alias officiis assumenda officia quibusdam deleniti
              eos cupiditate dolore doloribus! Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Qui dicta minus molestiae vel beatae
              natus eveniet ratione temporibus aperiam harum alias officiis
              assumenda officia quibusdam deleniti eos cupiditate dolore
              doloribus!
            </p>
          </div>
          <div className="social-media">
            <h3 className="social-media-title">WEBSITE & SOCIAL LINKS</h3>
            <div className="link">
              <h4 className="link-title">Github:</h4>
              <p className="link-url">github.com/example</p>
            </div>
            <div className="link">
              <h4 className="link-title">LinkedIn:</h4>
              <p className="link-url">linkedin.com/in/example</p>
            </div>
            <div className="link">
              <h4 className="link-title">Website:</h4>
              <p className="link-url">www.example.com</p>
            </div>
          </div>
        </div>
        <div className="right-side">
          <div className="personal-info">
            <div className="name-title">
              <h1 className="name">Name Surname</h1>
              <h3 className="person-title">Junior Web Developer</h3>
            </div>
            <div className="contact">
              <p className="address">
                <IoLocation className="logo" />
                Cecelia Havens 456 White Finch St. North Augusta, SC 29860
              </p>
              <p className="phone">
                <AiFillPhone className="logo" />
                +1234-567-8910
              </p>
              <p className="mail">
                <AiFillMail className="logo" />
                name.surname@gmail.com
              </p>
            </div>
          </div>
          <div className="experiences">
            <h3 className="experience-title">WORK EXPERIENCE</h3>
            <div className="experience">
              <div className="date-city-company">
                <h4 className="company">Example Ltd</h4>
                <p className="city">Example City</p>
                <p className="date">2016-2018</p>
              </div>
              <div className="job-description">
                <h4 className="job-title">Junior Web Developer</h4>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum tempus imperdiet nisl sed vestibulum. Donec
                  gravida, nulla eget blandit fermentum, mauris nisi rutrum
                  libero, ac pharetra erat est sit amet tellus.
                </p>
              </div>
            </div>
            <div className="experience">
              <div className="date-city-company">
                <h4 className="company">Example Ltd</h4>
                <p className="city">Example City</p>
                <p className="date">2016-2018</p>
              </div>
              <div className="job-description">
                <h4 className="job-title">Junior Web Developer</h4>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum tempus imperdiet nisl sed vestibulum.
                </p>
              </div>
            </div>
            <div className="experience">
              <div className="date-city-company">
                <h4 className="company">Example Example Example Ltd</h4>
                <p className="city">Example City</p>
                <p className="date">2016-2018</p>
              </div>
              <div className="job-description">
                <h4 className="job-title">Junior Web Developer</h4>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum tempus imperdiet nisl sed vestibulum. Donec
                  gravida, nulla eget blandit fermentum, mauris nisi rutrum
                  libero, ac pharetra erat est sit amet tellus.
                </p>
              </div>
            </div>
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
      </>
    );
  }
}
export default CvPrev;
