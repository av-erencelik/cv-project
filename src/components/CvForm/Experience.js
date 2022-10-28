import React from "react";

class Experience extends React.Component {
  render() {
    return (
      <>
        <div className="input-group">
          <label className="label" htmlFor={"position" + this.props.id}>
            POSITION:
          </label>
          <input
            type="text"
            id={"position" + this.props.id}
            name="position"
            className="input"
            onChange={(e) => this.props.onChangeExperience(e, this.props.id)}
          ></input>
        </div>
        <div className="input-group">
          <label className="label" htmlFor={"company" + this.props.id}>
            COMPANY:
          </label>
          <input
            type="text"
            id={"company" + this.props.id}
            name="company"
            className="input"
            onChange={(e) => this.props.onChangeExperience(e, this.props.id)}
          ></input>
        </div>
        <div className="input-group">
          <label className="label" htmlFor={"city" + this.props.id}>
            CITY:
          </label>
          <input
            type="text"
            id={"city" + this.props.id}
            name="city"
            className="input"
            onChange={(e) => this.props.onChangeExperience(e, this.props.id)}
          ></input>
        </div>
        <div className="input-group">
          <label className="label" htmlFor={"from" + this.props.id}>
            FROM:
          </label>
          <input
            type="text"
            id={"from" + this.props.id}
            name="from"
            className="input"
            onChange={(e) => this.props.onChangeExperience(e, this.props.id)}
          ></input>
        </div>
        <div className="input-group">
          <label className="label" htmlFor={"to" + this.props.id}>
            TO:
          </label>
          <input
            type="text"
            id={"to" + this.props.id}
            name="to"
            className="input"
            onChange={(e) => this.props.onChangeExperience(e, this.props.id)}
          ></input>
        </div>
        <div className="input-group">
          <label className="label" htmlFor={"jobDescription" + this.props.id}>
            JOB DESCRIPTION:
          </label>
          <textarea
            type="text"
            id={"jobDescription" + this.props.id}
            name="jobDescription"
            className="input"
            onChange={(e) => this.props.onChangeExperience(e, this.props.id)}
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
