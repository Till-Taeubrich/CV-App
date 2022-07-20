import React from "react";

class InputField extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="input-field">
          <input className="input-field" id="input-field" defaultValue={ this.props.defaultValue } placeholder={this.props.placeholder} />
        </label>
      </div>
    );
  }
}

export default InputField;