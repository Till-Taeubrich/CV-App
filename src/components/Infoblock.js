import React from "react";
import InputField from "./InputField";

class InfoBlock extends React.Component {
    render() {
        return (
            <div>
                <h2 className="blocktitle">{ this.props.blocktitle }</h2>
                <InputField />
            </div>
        )
    }
}

export default InfoBlock;