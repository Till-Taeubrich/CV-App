import React from "react";

class DisplayField extends React.Component {
  render() {
    return (
      <div>
        <div className="display-field">{this.props.content}</div>
      </div>
    );
  }
}

export default DisplayField;