import React from "react";

class Experience extends React.Component {
  render() {
    return (
      <>
        <div className="input-group">
          <label className="label" htmlFor="position">
            POSITION:
          </label>
          <input
            type="text"
            id="position"
            name="position"
            className="input"
          ></input>
        </div>
        <div className="input-group">
          <label className="label" htmlFor="company">
            COMPANY:
          </label>
          <input
            type="text"
            id="company"
            name="company"
            className="input"
          ></input>
        </div>
        <div className="input-group">
          <label className="label" htmlFor="city">
            CITY:
          </label>
          <input type="text" id="city" name="city" className="input"></input>
        </div>
        <div className="input-group">
          <label className="label" htmlFor="from">
            FROM:
          </label>
          <input type="text" id="from" name="from" className="input"></input>
        </div>
        <div className="input-group">
          <label className="label" htmlFor="to">
            TO:
          </label>
          <input type="text" id="to" name="to" className="input"></input>
        </div>
        <div className="input-group">
          <label className="label" htmlFor="jobDescription">
            JOB DESCRIPTION:
          </label>
          <textarea
            type="text"
            id="jobDescription"
            name="JobDescription"
            className="input"
          ></textarea>
        </div>
        <button
          className="delete"
          onClick={() => this.props.onDeleteExperience(this.props.id)}
        >
          DELETE
        </button>
      </>
    );
  }
}
export default Experience;
