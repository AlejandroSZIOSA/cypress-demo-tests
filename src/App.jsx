import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";
import Table from "./components/Table";
import recipesAPI from "./services/recipesAPI.json";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <h1>Cypress Basic Tests</h1>
      <h2>Test on Modal</h2>
      <button onClick={() => setIsModalOpen(true)}>Open The Modal</button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}></Modal>
      <h2>Test on render a list Obj</h2>
      <Table recepts={recipesAPI} />
    </div>
  );
}

export default App;
