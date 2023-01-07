import { useState } from "react";

const Form = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" id="name"></input>
      <button>Envoyer</button>
    </form>
  );
};

export default Form;
