import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useState } from "react";
import Form from "./components/Form";

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
        <Form />
      </main>
      <Footer />
    </div>
  );
}

export default App;
