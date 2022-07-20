import React from "react";
import DisplayField from "./DisplayField";



class CVPreview extends React.Component {
    render() {
        return (
            <div className="CV-Preview">
                <div className="header">
                    <DisplayField content={this.props.name} />
                    <DisplayField content={this.props.job} />
                    <DisplayField content={this.props.telefon} />
                    <DisplayField content={this.props.email} />
                    <DisplayField content={this.props.location} />
                    <DisplayField content={this.props.description} />
                </div>
            </div>
        );
    }
}

export default CVPreview;