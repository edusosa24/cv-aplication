import React from "react";
import "../styles/Form.css";

const PersonalInfoForm = (props) => {

  return (
    <section id="personalInfoForm">
      <input
        type="text"
        placeholder="First name"
        onChange={(e) => props.handlePersonalInfoChange(e, "fName")}
      />
      <input
        type="text"
        placeholder="Last name"
        onChange={(e) => props.handlePersonalInfoChange(e, "lName")}
      />

      <input
        type="email"
        placeholder="Email address"
        onChange={(e) => props.handlePersonalInfoChange(e, "email")}
      />

      <input
        type="tel"
        placeholder="Phone number"
        onChange={(e) => props.handlePersonalInfoChange(e, "phoneNum")}
      />

      <textarea
        placeholder="Introduction"
        onChange={(e) => props.handlePersonalInfoChange(e, "introduction")}
      />
    </section>
  );
};

export default PersonalInfoForm;