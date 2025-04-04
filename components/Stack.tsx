import React from "react";
import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import { SiTypescript, SiMongodb } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
//st
const stackItems = [
  {
    id: 1,
    name: "React",
    icon: <FaReact />,
    color: "#61DAFB",
  },
  {
    id: 2,
    name: "Next.js",
    icon: <TbBrandNextjs />,
    color: "#000000",
  },
  {
    id: 3,
    name: "TypeScript",
    icon: <SiTypescript />,
    color: "#007ACC",
  },
  {
    id: 4,
    name: "Node.js",
    icon: <IoLogoNodejs />,
    color: "#339933",
  },
  {
    id: 5,
    name: "MongoDB",
    icon: <SiMongodb />,
    color: "#4DB33D",
  },
];

const Stack = () => {
  return (
    <section className="py-16 glass" id="stack">
      <div className="max-w-[1200px] mx-auto py-4 text-center">
        <h2 className="sm:text-6xl text-5xl text-gray-200 font-bold mb-4">My Tech Stack</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
          {stackItems.map((item) => (
            <div key={item.id} className="flex items-center justify-center flex-col rounded-xl p-4">
              <div className="mb-4 bg-white/10 p-6 rounded-xl">
                {item.icon && React.cloneElement(item.icon, { className: "sm:w-32 sm:h-32 w-24 h-24", style: { color: item.color } })}
              </div>
              <p className="text-gray-400 font-semibold">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stack;
