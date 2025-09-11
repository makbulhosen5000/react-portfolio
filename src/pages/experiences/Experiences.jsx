import React, { useEffect, useState } from "react";
import Experience from "../experiences/Experience";
import { Helmet } from "react-helmet-async";

const Experiences = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    fetch("/experiences.json") // ✅ leading slash for public folder
      .then((res) => res.json())
      .then((data) => setExperiences(data))
      .catch((err) => console.error("Failed to fetch experiences:", err));
  }, []); // ✅ run only once

  return (
    <>
      <Helmet>
        <title>Experience | Portfolio</title>
      </Helmet>

      <section className="bg-gray-200 py-8">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold underline py-8 text-center">
            Experiences
          </h2>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            {experiences.length > 0 ? (
              experiences.map((experience, index) => (
                <Experience
                  key={experience.id || index} // ✅ fallback to index if no id
                  experience={experience}
                />
              ))
            ) : (
              <p className="text-center text-gray-600 col-span-full">
                No experiences available.
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Experiences;
