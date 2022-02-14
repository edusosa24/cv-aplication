import React from "react";
import "../styles/Form.css";

const ExperienceForm = (props) => {

  return (
    <section id="experienceForm">
      {props.formsNeeded.map((experience) => {
        return (
          <div id={experience.id}>
            <input
              type="text"
              placeholder="Position"
              onChange={(e) => props.handleExperienceChange(e, experience.id, "position")}
            />

            <input
              type="text"
              placeholder="Company name"
              onChange={(e) => props.handleExperienceChange(e, experience.id, "company")}
            />

            <div className="timeSpan">
              <label htmlFor="from">From:</label>
              <input
                type="date"
                id="from"
                placeholder="From"
                onChange={(e) => props.handleExperienceChange(e, experience.id, "from")}
              />

              <label htmlFor="until">Until:</label>
              <input
                type="date"
                id="until"
                placeholder="Until"
                onChange={(e) => props.handleExperienceChange(e, experience.id, "until")}
              />
            </div>
              <textarea
                placeholder="Job description"
                onChange={(e) => props.handleExperienceChange(e, experience.id, "jobDescription")}
              />
            <button
              type="button"
              className="delete" 
              onClick={ () => props.handleExperienceDelete(experience.id) }>
              Delete
            </button>
          </div>
        );
      })}
    </section>
  );
};

export default ExperienceForm;