import React from "react";
import "../../styles/CvForm.css";
import PersonalInfo from "./CvFormPersonalInfo";

class CvForm extends React.Component {
  render() {
    return (
      <div className="cv-form">
        <PersonalInfo
          onPhotoLoad={this.props.onPhotoLoad}
          onChangePersonalInfo={this.props.onChangePersonalInfo}
        />
      </div>
    );
  }
}
export default CvForm;
