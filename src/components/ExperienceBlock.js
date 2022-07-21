import React from "react";
import InputField from "./InputField";

class ExperienceBlock extends React.Component {
  render() {
    return (
       <div className="input-block">
          <InputField/>
          <InputField/>
          <InputField/>
          <InputField/>
          <InputField/>
        </div>
    );
  }
}

export default ExperienceBlock;