import React from "react";

class BlockTitle extends React.Component {
    render() {
        return (
            <div>
                <h2 className="blocktitle">{ this.props.content }</h2>
            </div>
        )
    }
}

export default BlockTitle;