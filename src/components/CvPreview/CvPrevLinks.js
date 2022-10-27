import React from "react";

class Links extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="link">
        <h4 className="link-title">{this.props.site}</h4>
        <p className="link-url">{this.props.url}</p>
      </div>
    );
  }
}
export default Links;
