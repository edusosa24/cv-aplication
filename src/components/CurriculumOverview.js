import React from "react";
import "../styles/Overview.css"

const CurriculumOverview = (props) => {

  return (
    <section id="curriculum">
      <div className="cvPersonalInfoSection">
        <div className="cvHeader">
          <p className="fullName">{props.personalInfo.fName} {props.personalInfo.lName}</p>
          <p className="email">Email: {props.personalInfo.email}</p>
          <p className="phoneNum">Tel.: {props.personalInfo.phoneNum}</p>
        </div>
        <div className="cvIntroduction">
          <p>{props.personalInfo.introduction}</p>
        </div>
        <hr />
      </div>
      <div className="cvEducationSection">
        <h3>STUDIES</h3>
        {props.educationList.map((education) => {
          return (
            <Education
              key={education.id}
              education={education}
            />
          )
        })}
      </div>
      <hr />
      <div className="cvExperienceSection">
        <h3>EXPERIENCE</h3>
        {props.experienceList.map((experience) => {
          return (
            <Experience
              key={experience.id}
              experience={experience}
            />
          )
        })}
      </div>
    </section>
  );
};

const Education = (props) => {
  return (
    <div className="cvEducation">
      <p className="degree">{props.education.degree}</p>
      <p className="institute">{props.education.institute}</p>
      <p className="fromUntil">From: {props.education.from}  Until: {props.education.until}</p>
    </div>
  );
};

const Experience = (props) => {
  return (
    <div className="cvExperience">
      <p className="position">{props.experience.position}</p>
      <p className="company">{props.experience.company}</p>
      <p className="fromUntil">From:{props.experience.from} Until: {props.experience.until}</p>
      <h4>Tasks done:</h4>
      <p className="description">{props.experience.jobDescription}</p>
    </div>
  );
};

export default CurriculumOverview;