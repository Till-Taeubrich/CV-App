import React from "react";
import BlockTitle from "./BlockTitle";
import InputField from "./InputField";
import InputBlock from './InputBlock';

class CVEdit extends React.Component {
    render() {
        return (
            <form className="CVEdit">
                <BlockTitle content='Personal Details' />
                <InputField/>
                <InputField/>
                <InputField/>
                <InputField/>
                <InputField/>
                <InputField/>
                <BlockTitle content='Education' />
                <InputBlock/>
                <BlockTitle content='Work Experience' />
                <InputBlock/>
            </form>
        )
    }
}

export default CVEdit