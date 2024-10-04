import React from "react";

export default function Table({ recepts }) {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h2>Recipes Table</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Cooking Time</th>
          </tr>
        </thead>
        <tbody>
          {recepts.map((r) => (
            <tr key={r.id}>
              <td>{r.id}</td>
              <td>{r.title}</td>
              <td>{r.cocking_time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
