import React from "react";
import "../styles/Form.css";

const EducationForm = (props) => {

  return (
    <section id="educationForm">
      {props.formsNeeded.map((education) => {
        return (
          <Education
            key={education.id}
            education={education}
            handleEducationChange={props.handleEducationChange}
            handleEducationDelete={props.handleEducationDelete}
          />
        );
      })}
    </section>
  );
};

const Education = (props) => {
  return (
    <div id={props.education.id}>
      <input
        type="text"
        placeholder="Degree/Course"
        onChange={(e) => props.handleEducationChange(e, props.education.id, "degree")} />

      <input
        type="text"
        placeholder="Institute/Online Course/College name"
        onChange={(e) => props.handleEducationChange(e, props.education.id, "institute")} />

      <div className="timeSpan">
        <label>From:</label>
        <input
          type="date"
          placeholder="From"
          onChange={(e) => props.handleEducationChange(e, props.education.id, "from")} />

        <label>Until:</label>
        <input
          type="date"
          placeholder="Until"
          onChange={(e) => props.handleEducationChange(e, props.education.id, "until")} />
      </div>
      <button
        type="button"
        className="delete"
        onClick={() => props.handleEducationDelete(props.education.id)}>
        Delete
      </button>
    </div>
  );
};

export default EducationForm;