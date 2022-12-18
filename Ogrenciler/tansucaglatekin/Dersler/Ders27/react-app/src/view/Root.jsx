import React from "react";
import { Link } from "react-router-dom";

export default function Root() {
  return (
    <div>
      Root
      <Link to="/">Root</Link>
      <Link to="about">About</Link>
      <Link to="dashboard">Dashboard</Link>
    </div>
  );
}
