import React from "react";
import BlockTitle from "./BlockTitle";
import InputField from "./InputField";

class CVEdit extends React.Component {
    render() {
        return (
            <form className="CVEdit">
                <BlockTitle content='Personal Details' />
                <InputField/>
                <BlockTitle content='Education' />
                <BlockTitle content='Work Experience' />
            </form>
        )
    }
}

export default CVEdit