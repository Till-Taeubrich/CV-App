import React from "react";
import CVEdit from "./components/CVEdit";
import CVPreview from "./components/CVPreview";

class App extends React.Component {
  render() {
    return (
      <div id="root">
        <CVEdit className="CV-Edit" />
        <CVPreview className="CV-Preview" />
      </div>
    )
  }
}

export default App;
