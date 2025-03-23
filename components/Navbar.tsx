"use client";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Portfolio", path: "#portfolio" },
  { title: "Stack", path: "#stack" },
  { title: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle)
  };

  const handleClose = () => {
    setToggle(false)
  };

  return (
    <header className="z-50 fixed flex justify-center w-full text-white font-bold">
      <nav className="border border-white/20 mt-8 backdrop-blur-3xl rounded-3xl hidden md:flex items-center justify-center p-2 max-w-[400px] mx-auto">
        <ul className="flex flex-row p-2 space-x-8">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.path}
                className="transform hover:text-white/50 transition-all duration-300 ease-in-out"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <button
        onClick={handleToggle}
        className="md:hidden absolute top-5 right-4 border rounded z-50 text-white/70 border-white/70 p-2"
        aria-label="Toggle menu"
      >
        {toggle ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </button>

      <div
        className={`fixed left-0 top-0 w-full h-full bg-black/90 backdrop-blur-lg transform transition-transform duration-300 ${
          toggle ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex flex-col items-center justify-center space-y-8 h-full">
          {navLinks.map((link, index) => (
            <li key={index} onClick={handleClose}>
              <Link
                href={link.path}
                className="transform hover:text-white/50 transition-all duration-300 ease-in-out text-4xl"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
