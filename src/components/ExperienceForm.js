import React from "react";
import "../styles/Form.css";

const ExperienceForm = (props) => {

  return (
    <section id="experienceForm">
      {props.formsNeeded.map((experience) => {
        return (
          <Experience 
            key={experience.id}
            experience={experience}
            handleExperienceChange={props.handleExperienceChange}
            handleExperienceDelete={props.handleExperienceDelete}
          />
        );
      })}
    </section>
  );
};

const Experience = (props) => {
  return (
    <div id={props.experience.id}>
      <input
        type="text"
        placeholder="Position"
        onChange={(e) => props.handleExperienceChange(e, props.experience.id, "position")}
      />

      <input
        type="text"
        placeholder="Company name"
        onChange={(e) => props.handleExperienceChange(e, props.experience.id, "company")}
      />

      <div className="timeSpan">
        <label>From:</label>
        <input
          type="date"
          placeholder="From"
          onChange={(e) => props.handleExperienceChange(e, props.experience.id, "from")}
        />

        <label>Until:</label>
        <input
          type="date"
          placeholder="Until"
          onChange={(e) => props.handleExperienceChange(e, props.experience.id, "until")}
        />
      </div>
      <textarea
        placeholder="Job description"
        onChange={(e) => props.handleExperienceChange(e, props.experience.id, "jobDescription")}
      />
      <button
        type="button"
        className="delete"
        onClick={() => props.handleExperienceDelete(props.experience.id)}>
        Delete
      </button>
    </div>
  );
};

export default ExperienceForm;