import React from "react";

class PersonalInfo extends React.Component {
  render() {
    return (
      <section className="personal-info-input">
        <h3 className="input-title">PERSONAL INFO</h3>
        <div className="input-group">
          <label className="label" htmlFor="name">
            NAME:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="input"
            onChange={this.props.onChangePersonalInfo}
          ></input>
        </div>
        <div className="input-group">
          <label className="label" htmlFor="surname">
            SURNAME:
          </label>
          <input
            type="text"
            id="surname"
            name="surname"
            className="input"
            onChange={this.props.onChangePersonalInfo}
          ></input>
        </div>
        <div className="input-group">
          <label className="label" htmlFor="title">
            TITLE:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="input"
            onChange={this.props.onChangePersonalInfo}
          ></input>
        </div>
        <div className="input-group">
          <label className="label" htmlFor="photo">
            PHOTO:
          </label>
          <input
            type="file"
            id="photo"
            name="photo"
            className="input"
            accept="image/png, image/jpeg"
            onChange={this.props.onPhotoLoad}
          ></input>
        </div>
        <div className="input-group">
          <label className="label" htmlFor="address">
            ADDRESS:
          </label>
          <input
            type="text"
            id="address"
            name="address"
            className="input"
            onChange={this.props.onChangePersonalInfo}
          ></input>
        </div>
        <div className="input-group">
          <label className="label" htmlFor="phoneNumber">
            PHONE:
          </label>
          <input
            type="phone"
            id="phoneNumber"
            name="phoneNumber"
            className="input"
            onChange={this.props.onChangePersonalInfo}
          ></input>
        </div>
        <div className="input-group">
          <label className="label" htmlFor="email">
            EMAIL:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="input"
            onChange={this.props.onChangePersonalInfo}
          ></input>
        </div>
        <div className="input-group">
          <label className="label" htmlFor="about">
            ABOUT ME:
          </label>
          <textarea
            type="text"
            id="about"
            name="about"
            className="input"
            onChange={this.props.onChangePersonalInfo}
          ></textarea>
        </div>
      </section>
    );
  }
}
export default PersonalInfo;
