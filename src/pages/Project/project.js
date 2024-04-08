import React from "react";
import { NavLink, Outlet, Route, Routes } from "react-router-dom";
import "./project.css";

export default function ProjectsLayout() {
  return (
    <>
      <div className="button-box">
        <NavLink to="https://main--outew.netlify.app/" target="_blank">Memory game</NavLink>
      </div>
      <div className="button-box">
        <NavLink to="https://6613310e4a79d11a684879c8--asddsd.netlify.app/" target="_blank">Bootstrap</NavLink>
      </div>
      <div className="button-box">
        <NavLink to="https://66133c8382510723ee02e79c--sadasd12.netlify.app/" target="_blank">Weather App</NavLink>
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
