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
                defaultValue={this.props.name}
                placeholder='Name'
              />
              <InputField defaultValue={this.props.job} placeholder='Title' />
              <InputField defaultValue={this.props.telefon} placeholder='Phone'/>
              <InputField defaultValue={this.props.email} placeholder='Email' />
              <InputField defaultValue={this.props.location} placeholder='Location' />
              <InputField defaultValue={this.props.description} placeholder='Description...' />
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