import React from "react";
import BlockTitle from "./BlockTitle";
import InputField from "./InputField";
import EducationBlock from "./EducationBlock";
import ExperienceBlock from "./ExperienceBlock";
import TextareaField from "./TextareaField";

class CVEdit extends React.Component {
    render() {
      console.log(this.props.experienceBlocks[0].company);
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
              <TextareaField
                name="description"
                defaultValue={this.props.description}
                placeholder="Description..."
                handleUpdate={this.props.handleInputChange}
              />
            </div>
            <BlockTitle content="Work Experience" />
            <ExperienceBlock data={this.props.experienceBlocks}/>
            <BlockTitle content="Education" />
            <EducationBlock />
          </form>
        );
    }
}

export default CVEdit