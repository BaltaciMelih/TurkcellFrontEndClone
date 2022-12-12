import React from "react";

export default function LiComponent() {
  const students = ["Varol", "Erdem", "Şafak", "Enes"];
  return (
    <ul>
      {students.map((student, index) => (
        <li key={index}>{student}</li>
      ))}
    </ul>
  );
}
