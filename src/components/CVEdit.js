import React from "react";
import BlockTitle from "./BlockTitle";
import InputField from "./InputField";
import InputBlock from './InputBlock';

class CVEdit extends React.Component {
    render() {
        return (
          <form className="CV-Edit">
            <BlockTitle content="Personal Details" />
            <div className="input-block">
              <InputField
                name="name"
                defaultValue={this.props.name}
                placeholder="Name"
                handleUpdate={this.props.handleInputChange}
              />
              <InputField
                name="job"
                defaultValue={this.props.job}
                placeholder="Title"
                handleUpdate={this.props.handleInputChange}
              />
              <InputField
                name="telefon"
                defaultValue={this.props.telefon}
                placeholder="Phone"
                handleUpdate={this.props.handleInputChange}
              />
              <InputField
                name="email"
                defaultValue={this.props.email}
                placeholder="Email"
                handleUpdate={this.props.handleInputChange}
              />
              <InputField
                name="location"
                defaultValue={this.props.location}
                placeholder="Location"
                handleUpdate={this.props.handleInputChange}
              />
              <InputField
                name="description"
                defaultValue={this.props.description}
                placeholder="Description..."
                handleUpdate={this.props.handleInputChange}
              />
            </div>
            <BlockTitle content="Education" />
            <InputBlock />
            <BlockTitle content="Work Experience" />
            <InputBlock />
          </form>
        );
    }
}

export default CVEdit