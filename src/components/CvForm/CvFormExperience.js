import React from "react";
import Experience from "./Experience";

class Experiences extends React.Component {
  render() {
    return (
      <section className="experience-input">
        <h3 className="input-title">EXPERIENCE</h3>
        <div className="experience-input-groups">
          <Experience />
        </div>
        <button className="add">ADD</button>
      </section>
    );
  }
}
export default Experiences;
