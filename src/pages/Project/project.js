import React from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import "./project.css"; // Import CSS file for styling

export default function ProjectsLayout() {
  return (
    <>
      <div className="button-box">
        <Link to="https://main--outew.netlify.app/">Memory game</Link>
      </div>
      <div className="button-box">
        <Link to="https://6613310e4a79d11a684879c8--asddsd.netlify.app/">Bootstrap</Link>
      </div>
      <div className="button-box">
        <Link to="https://66133c8382510723ee02e79c--sadasd12.netlify.app/">Weather App</Link>
      </div>
    </>
  );
}

export function Projects() {
  return (
    <Routes>
      {/* Define routes here if needed */}
      <Route path="/" element={<ProjectsLayout />} />
    </Routes>
  );
}
