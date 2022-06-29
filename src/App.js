import React from "react";
import CVEdit from "./components/CVEdit";
import CVPreview from "./components/CVPreview";
import "./styles/style.css";

class App extends React.Component {
  render() {
    return (
      <div id="body">
        <CVEdit />
        <CVPreview />
      </div>
    )
  }
}

export default App;
