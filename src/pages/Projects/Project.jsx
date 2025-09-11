import React from "react";
import { Code, ExternalLink } from "lucide-react";

const Project = ({ project }) => {
  if (!project) return null; 

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 flex flex-col justify-between">
      {/* Title */}
      <h3 className="text-2xl font-bold text-gray-800 mb-3 hover:text-indigo-600 transition">
        {project?.title || "Untitled Project"}
      </h3>

      {/* Technologies */}
      <p className="mb-2 text-gray-600 text-sm">
        <span className="font-semibold text-gray-800">Technologies:</span>{" "}
        {project?.technology || "N/A"}
      </p>

      {/* Features */}
      <p className="mb-4 text-gray-600 text-sm leading-relaxed">
        <span className="font-semibold text-gray-800">Features:</span>{" "}
        {project?.features || "Not provided"}
      </p>

      {/* Action Links */}
      <div className="flex flex-wrap gap-3 mt-4">
        {project?.link ? (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-4 py-2 bg-indigo-600 text-white rounded-xl text-sm font-semibold hover:bg-indigo-700 transition"
          >
            <ExternalLink size={16} /> Preview
          </a>
        ) : null}

        {project?.client ? (
          <a
            href={project.client}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-4 py-2 bg-gray-100 text-gray-800 rounded-xl text-sm font-semibold hover:bg-gray-200 transition"
          >
            <Code size={16} /> Client
          </a>
        ) : null}

        {project?.server ? (
          <a
            href={project.server}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-4 py-2 bg-gray-100 text-gray-800 rounded-xl text-sm font-semibold hover:bg-gray-200 transition"
          >
            <Code size={16} /> Server
          </a>
        ) : null}
      </div>
    </div>
  );
};

export default Project;
