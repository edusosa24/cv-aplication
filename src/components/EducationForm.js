import React from "react";
import "../styles/Form.css";

const EducationForm = (props) => {

  return (
    <section id="educationForm">
      {props.formsNeeded.map((education) => {
        return (
          <div id={education.id}>
            <input
              type="text"
              placeholder="Degree/Course"
              onChange={(e) => props.handleEducationChange(e, education.id, "degree")} />

            <input
              type="text"
              placeholder="Institute/Online Course/College name"
              onChange={(e) => props.handleEducationChange(e, education.id, "institute")} />

            <div className="timeSpan">
              <label htmlFor="from">From:</label>
              <input
                type="date"
                id="from"
                placeholder="From"
                onChange={(e) => props.handleEducationChange(e, education.id, "from")} />

              <label htmlFor="until">Until:</label>
              <input
                type="date"
                id="until"
                placeholder="Until"
                onChange={(e) => props.handleEducationChange(e, education.id, "until")} />
            </div>
            <button 
              type="button" 
              className="delete" 
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