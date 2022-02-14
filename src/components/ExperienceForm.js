import React from "react";
import "../styles/Form.css";

const ExperienceForm = (props) => {

  return (
    <section id="experienceForm">
      {props.formsNeeded.map((experience) => {
        return (
          <div id={experience.id}
               key={experience.id}>
            <input
              type="text"
              placeholder="Position"
              key={experience.id}
              onChange={(e) => props.handleExperienceChange(e, experience.id, "position")}
            />

            <input
              type="text"
              placeholder="Company name"
              key={experience.id}
              onChange={(e) => props.handleExperienceChange(e, experience.id, "company")}
            />

            <div className="timeSpan">
              <label>From:</label>
              <input
                type="date"     
                placeholder="From"
                key={experience.id}
                onChange={(e) => props.handleExperienceChange(e, experience.id, "from")}
              />

              <label>Until:</label>
              <input
                type="date"
                placeholder="Until"
                key={experience.id}
                onChange={(e) => props.handleExperienceChange(e, experience.id, "until")}
              />
            </div>
              <textarea
                placeholder="Job description"
                key={experience.id}
                onChange={(e) => props.handleExperienceChange(e, experience.id, "jobDescription")}
              />
            <button
              type="button"
              className="delete" 
              key={experience.id}
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