import React from "react";
import Education from "./Education";

class Educations extends React.Component {
  render() {
    return (
      <section className="education-input">
        <h3 className="input-title">EDUCATION</h3>
        <div className="education-input-groups">
          {this.props.educations.map((education) => {
            return (
              <Education
                key={education.id}
                id={education.id}
                onDeleteEducation={this.props.onDeleteEducation}
                onChangeEducation={this.props.onChangeEducation}
              />
            );
          })}
        </div>
        <button className="add" onClick={this.props.onAddEducation}>
          ADD
        </button>
      </section>
    );
  }
}
export default Educations;
