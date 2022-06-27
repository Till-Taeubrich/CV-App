import React from "react";
import Infoblock from "./Infoblock";

class CVEdit extends React.Component {
    render() {
        return (
            <div className="CVEdit">
                <Infoblock blocktitle='Personal Details' />
                <Infoblock blocktitle='Education' />
                <Infoblock blocktitle='Work Experience' />
            </div>
        )
    }
}

export default CVEdit