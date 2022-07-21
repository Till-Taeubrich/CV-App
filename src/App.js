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

  experienceBlocks: [
    {
      company: 'A Software Company',
      position: 'Software Engineer',
      employmentFrom: '2018',
      employmentTo: 'Present',
      description: 'Ut fugiat minim qui voluptate culpa. Elit nostrud ex ad incididunt incididunt eiusmod. Officia cupidatat culpa commodo nisi nostrud.'
    },
    {
      company: 'My First Company',
      position: 'Graduate Engineer',
      employmentFrom: '2017',
      employmentTo: '2018',
      description: 'Irure dolor incididunt sint et ullamco. Commodo laboris amet aliquip incididunt do ut est exercitation reprehenderit magna sit laboris est mollit.'
    },
    {
      company: 'University',
      position: 'Tutor',
      employmentFrom: '2015',
      employmentTo: '2017',
      description: 'Enim elit aliquip fugiat anim proident.'
    }
  ],

  educationBlocks: [
    {
      course: 'CS50: Introduction to Computer Science', 
      university: 'Harvard University',
      startDate: '2020',
      endDate: 'Present',
      description: 'Nullam inceptos sociosqu congue commodo consectetur integer vivamus amet sagittis',
    },
    {
      course: 'Fullstack JavaScript', 
      university: 'The Odin Project',
      startDate: '2019',
      endDate: 'Present',
      description: 'Fames gravida a vivamus augue facilisi dictum varius feugiat nibh natoque sit commodo',
    }
  ]
}

handleInputChange = (e) => {
  this.setState({
    [e.target.name]: e.target.value,
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
          handleInputChange={this.handleInputChange}
          experienceBlocks={this.state.experienceBlocks}
        />
        <CVPreview
          name={this.state.name}
          job={this.state.job}
          telefon={this.state.telefon}
          email={this.state.email}
          location={this.state.location}
          description={this.state.description}
        />
      </div>
    );
  }
}

export default App;
