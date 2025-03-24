"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; 
import Image from 'next/image';
import project1 from '@/public/project1.PNG';

const projects = [
  {
    id: 1,
    year: 2025,
    title: "clicks.ge",
    description: "I developed a website for a small business that offers IT services. It is mobile responsive and user friendly and has very good performance. In local states it is ranked top 2 in Google search results.",
    image: project1,
  },
  {
    id: 2,
    year: 2025,
    title: "clicks.ge",
    description: "I developed a website for a small business that offers IT services. It is mobile responsive and user friendly and has very good performance. In local states it is ranked top 2 in Google search results.",
    image: project1,
  },
  {
    id: 3,
    year: 2025,
    title: "clicks.ge",
    description: "I developed a website for a small business that offers IT services. It is mobile responsive and user friendly and has very good performance. In local states it is ranked top 2 in Google search results.",
    image: project1,
  },
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  const colors = [
    `radial-gradient(125% 125% at 50% 0%, #000 50%, #13FFAA)`, 
    `radial-gradient(125% 125% at 50% 0%, #000 50%, #1E40AF)`,
    `radial-gradient(125% 125% at 50% 0%, #000 50%, #8B5CF6)`, 
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  const backgroundImage = colors[backgroundIndex];

  return (
    <motion.section
      id="portfolio"
      className="py-32 text-white"
      style={{
        backgroundImage,
      }}
      animate={{
        backgroundImage: backgroundImage, 
      }}
      transition={{
        backgroundImage: { duration: 1.5, ease: "easeInOut" }, 
      }}
    >
      <div className="max-w-[1200px] mx-auto px-4 grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-6xl font-bold mb-10">
            Selected <span className="text-gray-400">Projects</span>
          </h2>
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer mb-8 group"
            >
              <p className="text-gray-400 text-lg mb-2">{project.year}</p>
              <h3
                className={`text-3xl font-semibold group-hover:text-gray-400 transition-colors ${
                  selectedProject.id === project.id ? 'text-gray-200' : ''
                } duration-300`}
              >
                {project.title}
              </h3>
              {selectedProject.id === project.id && (
                <div className="border-b-2 border-gray-200 my-4"></div>
              )}
              {selectedProject.id === project.id && (
                <p className="text-gray-400 transition-all duration-500 ease-in-out">
                  {project.description}
                </p>
              )}
            </div>
          ))}
        </div>

        <Image
          src={selectedProject.image.src}
          alt={selectedProject.title}
          width={800}
          height={450}
          className="rounded-xl shadow-lg transition-opacity duration-500 ease-in-out"
        />
      </div>
    </motion.section>
  );
};

export default Portfolio;
