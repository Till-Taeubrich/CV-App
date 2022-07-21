import React from "react";

class InputField extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor={ this.props.id }>
          <input name={ this.props.name } onChange={this.props.handleUpdate} className="input-field" defaultValue={ this.props.defaultValue } placeholder={this.props.placeholder} />
        </label>
      </div>
    );
  }
}

export default InputField;