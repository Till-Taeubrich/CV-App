import React from "react";
import DisplayField from "./DisplayField";



class CVPreview extends React.Component {
    render() {
        return (
            <div className="CV-Preview">
                <div className="header">
                    <DisplayField content={this.props.name} />
                </div>
            </div>
        );
    }
}

export default CVPreview;