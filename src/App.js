import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useState } from "react";
import Form from "./components/Form";
import StepTwo from "./components/StepTwo";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordValidation, setPasswordValidation] = useState("");

  const [confirmationBox, setConfirmationBox] = useState(false);

  return (
    <div className="App">
      <Header />
      <main>
        <Form
          name={name}
          email={email}
          password={password}
          passwordValidation={passwordValidation}
          setName={setName}
          setEmail={setEmail}
          setPassword={setPassword}
          setPasswordValidation={setPasswordValidation}
          setConfirmationBox={setConfirmationBox}
        />
        <div>{name}</div>
        <div>{email}</div>
        <div>{password}</div>
        <div>{passwordValidation}</div>
        <div>{confirmationBox ? "VRAI" : "FAUX"}</div>
      </main>
      <StepTwo name={name} email={email} password={password} />

      <Footer />
    </div>
  );
}

export default App;
