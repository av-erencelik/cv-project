import React from "react";

class Experience extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="experience">
        <div className="date-city-company">
          <h4 className="company">{this.props.company}</h4>
          <p className="city">{this.props.city}</p>
          <p className="date">
            {this.props.from}-{this.props.to}
          </p>
        </div>
        <div className="job-description">
          <h4 className="job-title">{this.props.position}</h4>
          <p className="description">{this.props.jobDescription}</p>
        </div>
      </div>
    );
  }
}

export default Experience;
