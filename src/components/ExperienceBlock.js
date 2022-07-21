import React from "react";
import InputField from "./InputField";

class ExperienceBlock extends React.Component {

  
  render() {
    console.log(this.props.data);
    return (
       <div className="input-block">
          <InputField defaultValue={this.props.data[0].company}/>
          <InputField defaultValue={this.props.data[0].position}/>
          <InputField defaultValue={this.props.data[0].employmentFrom}/>
          <InputField defaultValue={this.props.data[0].employmentTo}/>
          <InputField defaultValue={this.props.data[0].description}/>
        </div>
    );
  }
}

export default ExperienceBlock;