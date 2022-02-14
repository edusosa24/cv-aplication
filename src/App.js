import React, { Component } from "react";
import uniqid from "uniqid";
import "./styles/App.css";
import "./styles/Form.css";
import Header from "./components/Header";
import PersonalInfoForm from "./components/PersonalInfoForm";
import EducationForm from "./components/EducationForm";
import ExperienceForm from "./components/ExperienceForm";
import CurriculumOverview from "./components/CurriculumOverview";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      personalInfo: {
        fName: null,
        lName: null,
        email: null,
        phoneNum: null,
        introduction: null
      },
      educationArr: [],
      experienceArr: []
    };

  }


  // State handle

  handleEducationChange = (e, id, input) => {
    switch (input) {
      case "degree":
        this.setState(prevState => ({
          educationArr: prevState.educationArr.map(
            education => (education.id === id ? Object.assign(education, { degree: e.target.value }) : education)
          )
        }));
        break;
      case "institute":
        this.setState(prevState => ({
          educationArr: prevState.educationArr.map(
            education => (education.id === id ? Object.assign(education, { institute: e.target.value }) : education)
          )
        }));
        break;
      case "from":
        this.setState(prevState => ({
          educationArr: prevState.educationArr.map(
            education => (education.id === id ? Object.assign(education, { from: e.target.value }) : education)
          )
        }));
        break;
      case "until":
        this.setState(prevState => ({
          educationArr: prevState.educationArr.map(
            education => (education.id === id ? Object.assign(education, { until: e.target.value }) : education)
          )
        }));
        break;
      default: break;
    }
  };

  handleEducationDelete = (id) => {
    this.setState({
      personalInfo: this.state.personalInfo,
      educationArr: this.state.educationArr.filter(education => (education.id !== id)),
      experienceArr: this.state.experienceArr
    });
  }


  handleExperienceChange = (e, id, input) => {
    switch (input) {
      case "position":
        this.setState(prevState => ({
          experienceArr: prevState.experienceArr.map(
            experience => (experience.id === id ? Object.assign(experience, { position: e.target.value }) : experience)
          )
        }));
        break;
      case "company":
        this.setState(prevState => ({
          experienceArr: prevState.experienceArr.map(
            experience => (experience.id === id ? Object.assign(experience, { company: e.target.value }) : experience)
          )
        }));
        break;
      case "from":
        this.setState(prevState => ({
          experienceArr: prevState.experienceArr.map(
            experience => (experience.id === id ? Object.assign(experience, { from: e.target.value }) : experience)
          )
        }));
        break;
      case "until":
        this.setState(prevState => ({
          experienceArr: prevState.experienceArr.map(
            experience => (experience.id === id ? Object.assign(experience, { until: e.target.value }) : experience)
          )
        }));
        break;
      case "jobDescription":
        this.setState(prevState => ({
          experienceArr: prevState.experienceArr.map(
            experience => (experience.id === id ? Object.assign(experience, { jobDescription: e.target.value }) : experience)
          )
        }));
        break;
      default: break;
    }
  };

  handleExperienceDelete = (id) => {
    this.setState({
      personalInfo: this.state.personalInfo,
      educationArr: this.state.educationArr,
      experienceArr: this.state.experienceArr.filter(experience => (experience.id !== id))
    });
  }

  handlePersonalInfoChange = (e, input) => {
    switch (input) {
      case "fName":
        this.setState({
          personalInfo: {
            fName: e.target.value,
            lName: this.state.personalInfo.lName,
            email: this.state.personalInfo.email,
            phoneNum: this.state.personalInfo.phoneNum,
            introduction: this.state.personalInfo.introduction
          }
        });
        break;
      case "lName":
        this.setState({
          personalInfo: {
            fName: this.state.personalInfo.fName,
            lName: e.target.value,
            email: this.state.personalInfo.email,
            phoneNum: this.state.personalInfo.phoneNum,
            introduction: this.state.personalInfo.introduction
          }
        });
        break;
      case "email":
        this.setState({
          personalInfo: {
            fName: this.state.personalInfo.fName,
            lName: this.state.personalInfo.lName,
            email: e.target.value,
            phoneNum: this.state.personalInfo.phoneNum,
            introduction: this.state.personalInfo.introduction
          }
        });
        break;
      case "phoneNum":
        this.setState({
          personalInfo: {
            fName: this.state.personalInfo.fName,
            lName: this.state.personalInfo.lName,
            email: this.state.personalInfo.email,
            phoneNum: e.target.value,
            introduction: this.state.personalInfo.introduction
          }
        });
        break;
      case "introduction":
        this.setState({
          personalInfo: {
            fName: this.state.personalInfo.fName,
            lName: this.state.personalInfo.lName,
            email: this.state.personalInfo.email,
            phoneNum: this.state.personalInfo.phoneNum,
            introduction: e.target.value
          }
        });
        break;
      default:
        break;
    }
  }

  addEducationForm = () => {
    this.setState(
      {
        educationArr: this.state.educationArr.concat(
          {
            degree: null,
            institute: null,
            from: null,
            until: null,
            id: uniqid()
          })
      }
    );
  }

  addExperienceForm = () => {
    this.setState(
      {
        experienceArr: this.state.experienceArr.concat(
          {
            position: null,
            company: null,
            from: null,
            until: null,
            jobDescription: null,
            id: uniqid()
          })
      }
    );
  }

  render() {
    return (
      <div className="container">
        <Header />
        <div id="formContainer">
          <form>
            <h2>Personal information</h2>
            <PersonalInfoForm
              handlePersonalInfoChange={this.handlePersonalInfoChange}
            />
            <h2>Education</h2>
            <EducationForm
              formsNeeded={this.state.educationArr}
              handleEducationChange={this.handleEducationChange}
              handleEducationDelete={this.handleEducationDelete}
            />
            <button type="button" onClick={this.addEducationForm}>Add</button>
            <h2>Experience</h2>
            <ExperienceForm
              formsNeeded={this.state.experienceArr}
              handleExperienceChange={this.handleExperienceChange}
              handleExperienceDelete={this.handleExperienceDelete}
            />
            <button type="button" onClick={this.addExperienceForm}>Add</button>
          </form>
        </div>
        <CurriculumOverview
          personalInfo={this.state.personalInfo}
          educationList={this.state.educationArr}
          experienceList={this.state.experienceArr}
        />
      </div>
    );
  }
}

export default App;

