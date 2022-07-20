import React from "react";

class InputField extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor={ this.props.id }>
          <input onChange={this.props.handleUpdate} className="input-field" id={ this.props.id } defaultValue={ this.props.defaultValue } placeholder={this.props.placeholder} />
        </label>
      </div>
    );
  }
}

export default InputField;