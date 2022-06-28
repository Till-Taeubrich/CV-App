import React from "react";

class InputField extends React.Component {

  state = {
    input: '',
  };

  render() {
    return (
       <div className="input-field">{this.state.input}</div>
    );
  }
}

export default InputField;