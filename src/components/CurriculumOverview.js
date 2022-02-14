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
          return(
          <div className="cvEducation">
            <p className="degree">{education.degree}</p>
            <p className="institute">{education.institute}</p>
            <p className="fromUntil">From: {education.from}  Until: {education.until}</p>
          </div>
          )
        })}
        </div>
        <hr />
        <div className="cvExperienceSection">
          <h3>EXPERIENCE</h3>
          {props.experienceList.map((experience) => {
            return(
            <div className="cvExperience">
              <p className="position">{experience.position}</p>
              <p className="company">{experience.company}</p>
              <p className="fromUntil">From:{experience.from} Until: {experience.until}</p>
              <h4>Tasks done:</h4>
              <p className="description">{experience.jobDescription}</p>
            </div>
            )
          })}
        </div>
    </section>
  );
};

export default CurriculumOverview;