import React, { useEffect, useState } from "react";
import Education from "./Education";
import { Helmet } from "react-helmet-async";

const Educations = () => {
  const [educations, setEducations] = useState([]);

  useEffect(() => {
    fetch("/educations.json") // ✅ add leading slash for public folder
      .then((res) => res.json())
      .then((data) => setEducations(data))
      .catch((err) => console.error("Failed to fetch educations:", err));
  }, []); // ✅ dependency array added

  return (
    <>
      <Helmet>
        <title>Education | Portfolio</title>
      </Helmet>

      <section className="bg-gray-200 py-8">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold underline py-8 text-center">
            Education
          </h2>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            {educations.length > 0 ? (
              educations.map((education) => (
                <Education
                  key={education.id || Math.random()}
                  education={education}
                />
              ))
            ) : (
              <p className="text-center text-gray-600 col-span-full">
                No education data available.
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Educations;
