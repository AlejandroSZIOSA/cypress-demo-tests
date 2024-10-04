import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";
import Table from "./components/Table";

const RECEPTS_DUMMY_DATA = [
  { id: 1, title: "r1", cocking_time: "10 min" },
  { id: 2, title: "r2", cocking_time: "20 min" },
  { id: 3, title: "r3", cocking_time: "30 min" },
];

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <h1>Cypress Basic Tests</h1>
      <h2>Test on Modal</h2>
      <button onClick={() => setIsModalOpen(true)}>Open The Modal</button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}></Modal>
      <h2>Test on render a list Obj</h2>
      <Table recepts={RECEPTS_DUMMY_DATA} />
    </div>
  );
}

export default App;
