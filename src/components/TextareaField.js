import React from "react";

class TextareaField extends React.Component {
  render() {
    return (
      <div>
        <textarea
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

export default TextareaField;