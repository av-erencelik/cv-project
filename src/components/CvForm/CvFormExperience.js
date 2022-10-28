import React from "react";
import Experience from "./Experience";

class Experiences extends React.Component {
  render() {
    return (
      <section className="experience-input">
        <h3 className="input-title">EXPERIENCE</h3>
        <div className="experience-input-groups">
          {this.props.experiences.map((experience) => {
            return (
              <Experience
                key={experience.id}
                id={experience.id}
                onDeleteExperience={this.props.onDeleteExperience}
              />
            );
          })}
        </div>
        <button className="add" onClick={this.props.onAddExperience}>
          ADD
        </button>
      </section>
    );
  }
}
export default Experiences;
