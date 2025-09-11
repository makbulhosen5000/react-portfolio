import React from "react";
import { Link } from "react-router-dom";
import { Briefcase, Calendar, Building2, MapPin, Globe } from "lucide-react";

const Experience = ({ experience }) => {
  if (!experience) return null; // ✅ safeguard if prop is missing

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6">
      {/* Title */}
      <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
        <Briefcase className="text-indigo-600" size={20} />
        {experience?.title || "Untitled Role"}
      </h3>

      {/* Duration */}
      <p className="flex items-center gap-2 text-gray-600 mb-2">
        <Calendar size={18} className="text-indigo-500" />
        <span className="font-medium">Duration:</span> {experience?.period || "N/A"}
      </p>

      {/* Company */}
      <p className="flex items-center gap-2 text-gray-600 mb-2">
        <Building2 size={18} className="text-indigo-500" />
        <span className="font-medium">Company:</span> {experience?.company_name || "Unknown Company"}
      </p>

      {/* Address */}
      <p className="flex items-center gap-2 text-gray-600 mb-2">
        <MapPin size={18} className="text-indigo-500" />
        <span className="font-medium">Address:</span> {experience?.company_address || "Not Provided"}
      </p>

      {/* Job Type */}
      <p className="flex items-center gap-2 text-gray-600 mb-2">
        <Briefcase size={18} className="text-indigo-500" />
        <span className="font-medium">Job Type:</span> {experience?.job_type || "N/A"}
      </p>
    </div>
  );
};

export default Experience;
