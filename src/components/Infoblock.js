import React from "react";

class Infoblock extends React.Component {
    render() {
        return (
            <h2 className="blocktitle">{ this.props.blocktitle }</h2>
        )
    }
}

export default Infoblock;