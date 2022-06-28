import React from "react";
import InputField from "./InputField";

class InputBlock extends React.Component {
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

export default InputBlock;