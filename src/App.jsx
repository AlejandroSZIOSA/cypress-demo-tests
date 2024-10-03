import { useState } from "react";
import Modal from "./components/Modal";

import "./App.css";

const RECEPTS = [
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
      <button onClick={() => setIsModalOpen(open)}>Open The Modal</button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}></Modal>
    </div>
  );
}

export default App;
