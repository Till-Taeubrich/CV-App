import React from "react";

class InputField extends React.Component {
  render() {
    return (
      <div>
        <input
          name={this.props.name}
          onChange={this.props.handleUpdate}
          className="input-field"
          defaultValue={this.props.defaultValue}
          placeholder={this.props.placeholder}
        />
      </div>
    );
  }
}

export default InputField;