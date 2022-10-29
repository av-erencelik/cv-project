import React from "react";

class Link extends React.Component {
  render() {
    return (
      <>
        <div className="input-group">
          <label className="label" htmlFor={"site" + this.props.id}>
            WEBSITE:
          </label>
          <input
            type="text"
            id={"site" + this.props.id}
            name="site"
            className="input"
            onChange={(e) => this.props.onChangeLink(e, this.props.id)}
          ></input>
        </div>
        <div className="input-group">
          <label className="label" htmlFor={"url" + this.props.id}>
            URL:
          </label>
          <input
            type="text"
            id={"url" + this.props.id}
            name="url"
            className="input"
            onChange={(e) => this.props.onChangeLink(e, this.props.id)}
          ></input>
        </div>
        <button
          className="delete"
          onClick={() => this.props.onDeleteLink(this.props.id)}
        >
          DELETE
        </button>
      </>
    );
  }
}
export default Link;
