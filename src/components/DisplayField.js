import React from "react";

class DisplayField extends React.Component {
  render() {
    return (
      <div>
        <h2 className="display-field">{this.props.content}</h2>
      </div>
    );
  }
}

export default DisplayField;