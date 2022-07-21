import React from "react";
import CVEdit from "./components/CVEdit";
import CVPreview from "./components/CVPreview";
import "./styles/style.css";

class App extends React.Component {

state = {
  name: 'John Doeman',
  job: 'Software Developer',
  telefon: '01234 567890',
  email: 'doeman@gmail.com',
  location: 'Bristol, UK',
  description: 'Cupidatat sunt anim incididunt nisi labore sunt nulla Lorem elit irure. Aliquip quis excepteur et nostrud enim irure nostrud officia. Et deserunt et aliquip voluptate elit cupidatat. Adipisicing enim minim do anim eiusmod est. Irure laboris anim voluptate proident. Cillum reprehenderit est magna minim. Nostrud ex aute laborum ea irure amet ea ipsum ut non minim anim nisi.',
  // company: 'A Software Company',
  // position: 'Software Engineer',
  // employmentFrom: '2018',
}

updateName = (e) => {
  this.setState({
    name: e.target.value,
  })
}

updateJob = (e) => {
  this.setState({
    job: e.target.value,
  })
}

updateTelefon = (e) => {
  this.setState({
    telefon: e.target.value,
  })
}

updateEmail = (e) => {
  this.setState({
    email: e.target.value,
  })
}

updateLocation = (e) => {
  this.setState({
    location: e.target.value,
  })
}

updateDescription = (e) => {
  this.setState({
    description: e.target.value,
  })
}

  render() {
    return (
      <div id="body">
        <CVEdit
          name={this.state.name}
          job={this.state.job}
          telefon={this.state.telefon}
          email={this.state.email}
          location={this.state.location}
          description={this.state.description}
          updateName={this.updateName}
          updateJob={this.updateJob}
          updateTelefon={this.updateTelefon}
          updateEmail={this.updateEmail}
          updateLocation={this.updateLocation}
          updateDescription={this.updateDescription}
          />
        <CVPreview 
          name={this.state.name}
          job={this.state.job}
          telefon={this.state.telefon}
          email={this.state.email}
          location={this.state.location}
          description={this.state.description}/>
      </div>
    )
  }
}

export default App;
