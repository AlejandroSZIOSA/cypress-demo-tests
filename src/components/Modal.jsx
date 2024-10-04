import React from "react";
import "./Modal.css";

export default function Modal(props) {
  if (!props.isOpen) return null; // Do not render modal if it's not open
  return (
    <div className="modal-overlay">
      <div className="modal">
        <p className="paragraph">I am a Modal!</p>
        <button onClick={props.onClose}>Close</button>
      </div>
    </div>
  );
}
