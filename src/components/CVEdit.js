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
                id="name"
                defaultValue={this.props.name}
                placeholder="Name"
                handleUpdate={this.props.updateName}
              />
              <InputField
                id="job"
                defaultValue={this.props.job}
                placeholder="Title"
                handleUpdate={this.props.updateJob}
              />
              <InputField
                id="telefon"
                defaultValue={this.props.telefon}
                placeholder="Phone"
                handleUpdate={this.props.updateTelefon}
              />
              <InputField
                id="email"
                defaultValue={this.props.email}
                placeholder="Email"
                handleUpdate={this.props.updateEmail}
              />
              <InputField
                id="location"
                defaultValue={this.props.location}
                placeholder="Location"
                handleUpdate={this.props.updateLocation}
              />
              <InputField
                id="description"
                defaultValue={this.props.description}
                placeholder="Description..."
                handleUpdate={this.props.updateDescription}
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