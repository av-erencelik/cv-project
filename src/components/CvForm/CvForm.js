import React from "react";
import "../../styles/CvForm.css";
import Educations from "./CvFormEducation";
import Experiences from "./CvFormExperience";
import Links from "./CvFormLinks";
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
          onChangeExperience={this.props.onChangeExperience}
        />
        <Educations
          educations={this.props.educations}
          onAddEducation={this.props.onAddEducation}
          onDeleteEducation={this.props.onDeleteEducation}
          onChangeEducation={this.props.onChangeEducation}
        />
        <Links
          links={this.props.links}
          onAddLink={this.props.onAddLink}
          onDeleteLink={this.props.onDeleteLink}
          onChangeLink={this.props.onChangeLink}
        />
      </div>
    );
  }
}
export default CvForm;
