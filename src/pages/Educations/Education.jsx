import React from "react";
import { Calendar, MapPin, GraduationCap, Building2 } from "lucide-react";

const Education = ({ education }) => {
  if (!education) {
    return null;
  }

  return (
    <div className="bg-white border-l-4 border-indigo-600 rounded-r-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6">
      {/* Graduation Title */}
      <h3 className="text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
        <GraduationCap className="text-indigo-600" size={22} />
        {education?.title || "Untitled Program"}
      </h3>

      {/* Duration */}
      <p className="flex items-center gap-2 text-gray-600 mb-2">
        <Calendar size={18} className="text-indigo-500" />
        <span className="font-medium">Duration:</span>{" "}
        {education?.period || "N/A"}
      </p>

      {/* Institute */}
      <p className="flex items-center gap-2 text-gray-600 mb-2">
        <Building2 size={18} className="text-indigo-500" />
        <span className="font-medium">Institute:</span>{" "}
        {education?.university_name || "Unknown Institute"}
      </p>
    </div>
  );
};

export default Education;
