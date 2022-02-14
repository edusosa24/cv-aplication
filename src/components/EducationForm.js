import React from "react";
import "../styles/Form.css";

const EducationForm = (props) => {

  return (
    <section id="educationForm">
      {props.formsNeeded.map((education) => {
        return (
          <div id={education.id}
               key={education.id}>
            <input
              type="text"
              placeholder="Degree/Course"
              key={education.id}
              onChange={(e) => props.handleEducationChange(e, education.id, "degree")} />

            <input
              type="text"
              placeholder="Institute/Online Course/College name"
              key={education.id}
              onChange={(e) => props.handleEducationChange(e, education.id, "institute")} />

            <div className="timeSpan">
              <label>From:</label>
              <input
                type="date"
                placeholder="From"
                key={education.id}
                onChange={(e) => props.handleEducationChange(e, education.id, "from")} />

              <label>Until:</label>
              <input
                type="date"
                placeholder="Until"
                key={education.id}
                onChange={(e) => props.handleEducationChange(e, education.id, "until")} />
            </div>
            <button 
              type="button" 
              className="delete" 
              key={education.id}
              onClick={() => props.handleEducationDelete(education.id)}>
                Delete
            </button>
          </div>
        );
      })}
    </section>
  );
};

export default EducationForm;