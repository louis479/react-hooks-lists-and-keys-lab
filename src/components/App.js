import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import ProjectList from "./ProjectList";
import user from "../data/user";

function App() {
  // Define the projects array
  const projects = [
    {
      id: 1,
      name: "Portfolio Website",
      description: "A personal portfolio website built with React.",
      technologies: ["React", "CSS", "JavaScript"],
    },
    {
      id: 2,
      name: "Weather App",
      description: "A weather app that fetches data from an API.",
      technologies: ["React", "Node.js", "API"],
    },
  ];

  // Log the projects for debugging
  console.log(projects);

  return (
    <div>
      <NavBar />
      <Home name={user.name} city={user.city} color={user.color} />
      <About bio={user.bio} links={user.links} />
      <ProjectList projects={projects} />
    </div>
  );
}

export default App;
export default App;

