import React from "react";

class InputField extends React.Component {
  render() {
    return (
      <input className="input-field" placeholder={ this.props.content } />
    );
  }
}

export default InputField;