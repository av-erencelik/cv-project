import React from "react";

class Education extends React.Component {
  render() {
    return (
      <div className="education">
        <div className="uni-city-date">
          <h4 className="university">{this.props.uni}</h4>
          <p className="city">{this.props.city}</p>
          <p className="date">
            {this.props.from}-{this.props.to}
          </p>
        </div>
        <div className="edu-description">
          <h4 className="program-name">{this.props.degree}</h4>
          <p className="program-description">{this.props.degreeDescription}</p>
        </div>
      </div>
    );
  }
}
export default Education;
