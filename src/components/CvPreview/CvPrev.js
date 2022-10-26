import React from "react";
import "../../styles/CvPrev.css";
import { IoLocation } from "react-icons/io5";

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
                <IoLocation /> Cecelia Havens 456 White Finch St. North Augusta,
                SC 29860
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default CvPrev;
