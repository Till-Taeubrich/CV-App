import React from "react";
import InfoBlock from "./InfoBlock";

class CVEdit extends React.Component {
    render() {
        return (
            <div className="CVEdit">
                <InfoBlock blocktitle='Personal Details' />
                <InfoBlock blocktitle='Education' />
                <InfoBlock blocktitle='Work Experience' />
            </div>
        )
    }
}

export default CVEdit