import React from "react";

class Education extends React.Component {
  render() {
    return (
      <>
        <div className="input-group">
          <label className="label" htmlFor={"university" + this.props.id}>
            UNIVERSITY:
          </label>
          <input
            type="text"
            id={"university" + this.props.id}
            name="uni"
            className="input"
            onChange={(e) => this.props.onChangeEducation(e, this.props.id)}
          ></input>
        </div>
        <div className="input-group">
          <label className="label" htmlFor={"unicity" + this.props.id}>
            CITY:
          </label>
          <input
            type="text"
            id={"unicity" + this.props.id}
            name="city"
            className="input"
            onChange={(e) => this.props.onChangeEducation(e, this.props.id)}
          ></input>
        </div>
        <div className="input-group">
          <label className="label" htmlFor={"degree" + this.props.id}>
            DEGREE:
          </label>
          <input
            type="text"
            id={"degree" + this.props.id}
            name="degree"
            className="input"
            onChange={(e) => this.props.onChangeEducation(e, this.props.id)}
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
            onChange={(e) => this.props.onChangeEducation(e, this.props.id)}
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
            onChange={(e) => this.props.onChangeEducation(e, this.props.id)}
          ></input>
        </div>
        <div className="input-group">
          <label
            className="label"
            htmlFor={"degreeDescription" + this.props.id}
          >
            DEGREE DESCRIPTION:
          </label>
          <textarea
            type="text"
            id={"degreeDescription" + this.props.id}
            name="degreeDescription"
            className="input"
            onChange={(e) => this.props.onChangeEducation(e, this.props.id)}
          ></textarea>
        </div>
        <button
          className="delete"
          onClick={() => this.props.onDeleteEducation(this.props.id)}
        >
          DELETE
        </button>
      </>
    );
  }
}
export default Education;
