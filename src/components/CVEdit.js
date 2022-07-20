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
              <InputField content={this.props.name}/>
              <InputField content={this.props.job}/>
              <InputField content={this.props.telefon}/>
              <InputField content={this.props.email}/>
              <InputField content={this.props.location}/>
              <InputField content={this.props.description}/>
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