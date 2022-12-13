import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      Dashboard
      <Link to="/">Root</Link>
      <Link to="about">About</Link>
      <Link to="dashboard">Dashboard</Link>
    </div>
  );
}