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

updateName = () => {
  this.setState({
    name: document.querySelector('#name').value,
  })
}

updateJob = () => {
  this.setState({
    job: document.querySelector('#job').value,
  })
}

updateTelefon = () => {
  this.setState({
    telefon: document.querySelector('#telefon').value,
  })
}

updateEmail = () => {
  this.setState({
    email: document.querySelector('#email').value,
  })
}

updateLocation = () => {
  this.setState({
    location: document.querySelector('#location').value,
  })
}

updateDescription = () => {
  this.setState({
    description: document.querySelector('#description').value,
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
