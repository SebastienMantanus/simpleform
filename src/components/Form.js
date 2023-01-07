import { useState } from "react";

const Form = (props) => {
  const handleSubmit = (event) => {
    props.setConfirmationBox(true);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        value={props.name}
        onChange={(event) => {
          props.setName(event.target.value);
        }}
      />
      <label htmlFor="email">Email adress</label>
      <input
        type="email"
        id="email"
        value={props.email}
        onChange={(event) => {
          props.setEmail(event.target.value);
        }}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={props.password}
        onChange={(event) => {
          props.setPassword(event.target.value);
        }}
      />
      <label htmlFor="passwordconfirm">Password confirmation</label>

      <input
        type="password"
        id="passwordconfirm"
        value={props.passwordValidation}
        onChange={(event) => {
          props.setPasswordValidation(event.target.value);
        }}
      />

      <input type="submit" value="Envoyer" />
    </form>
  );
};

export default Form;
