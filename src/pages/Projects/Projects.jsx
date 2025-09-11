import React, { useEffect, useState } from "react";
import Project from "./Project";
import { Helmet } from "react-helmet-async";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/projects.json") // ✅ leading slash for public folder
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Failed to fetch projects:", err));
  }, []); // ✅ run only once

  return (
    <>
      <Helmet>
        <title>Projects | Portfolio</title>
      </Helmet>

      <section className="bg-gray-200 py-8">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold underline py-8 text-center">
            Projects
          </h2>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            data-aos="fade-right"
          >
            {projects.length > 0 ? (
              projects.map((project, index) => (
                <Project
                  key={project.id || index} // ✅ fallback key
                  project={project}
                />
              ))
            ) : (
              <p className="text-center text-gray-600 col-span-full">
                No projects available.
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
