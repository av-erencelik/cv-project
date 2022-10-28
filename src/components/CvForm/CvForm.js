import React from "react";
import "../../styles/CvForm.css";
import Experiences from "./CvFormExperience";
import PersonalInfo from "./CvFormPersonalInfo";

class CvForm extends React.Component {
  render() {
    return (
      <div className="cv-form">
        <PersonalInfo
          onPhotoLoad={this.props.onPhotoLoad}
          onChangePersonalInfo={this.props.onChangePersonalInfo}
        />
        <Experiences
          experiences={this.props.experiences}
          onAddExperience={this.props.onAddExperience}
          onDeleteExperience={this.props.onDeleteExperience}
        />
      </div>
    );
  }
}
export default CvForm;
