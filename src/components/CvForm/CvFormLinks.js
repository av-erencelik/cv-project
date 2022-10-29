import React from "react";
import Link from "./Link";

class Links extends React.Component {
  render() {
    return (
      <section className="links-input">
        <h3 className="input-title">SOCIAL LINKS</h3>
        <div className="links-input-groups">
          {this.props.links.map((link) => {
            return (
              <Link
                key={link.id}
                id={link.id}
                onDeleteLink={this.props.onDeleteLink}
                onChangeLink={this.props.onChangeLink}
              />
            );
          })}
        </div>
        <button className="add" onClick={this.props.onAddLink}>
          ADD
        </button>
      </section>
    );
  }
}
export default Links;
