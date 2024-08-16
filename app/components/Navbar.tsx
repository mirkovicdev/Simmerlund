"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { navVariants } from "../styles/animations";
import Image from "next/image";
import { close, logo, menu } from "../../public";
import { navLinks } from "../constants";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
  const [active, setActive] = useState<string>("Home");
  const [toggle, setToggle] = useState<boolean>(false);

  // Function to handle click and navigate to the main page or scroll to section
  const handleClick = (navId: string) => {
    setActive(navId);
    // Get the current path
    const currentPath = window.location.pathname;

    // Check if we are on the main page
    if (currentPath === "/") {
      // If on the main page, scroll to the section
      window.location.hash = `#${navId}`;
    } else {
      // If on another page, navigate to the main page and scroll to the section
      window.location.href = `/#${navId}`;
    }
  };

  return (
    <motion.nav
      className="w-full flex py-6 justify-between items-center navbar"
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <Link href="/">
        <Image
          src={logo}
          alt="Simmerlund Logo"
          width={200}
          height={80}
          loading="eager"
          className="cursor-pointer"
        />
      </Link>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] hover:text-secondary ${
              active === nav.title ? "text-secondary" : "text-white"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => handleClick(nav.id)}
          >
            <a>{nav.title}</a>
          </li>
        ))}
        <li>
          <a href="#about">
            <MagicButton
              title="Kom i gang!"
              icon={<FaLocationArrow />}
              position="right"
              otherClasses="md:ml-10"
            />
          </a>
        </li>
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <Image
          src={toggle ? close : menu}
          alt="menu"
          width={28}
          height={28}
          priority={true}
          className="object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-50`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-secondary" : "text-white"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => handleClick(nav.id)}
              >
                <a>{nav.title}</a>
              </li>
            ))}
            <li>
              <a href="#about">
                <MagicButton
                  title="Kontakt!"
                  icon={<FaLocationArrow />}
                  position="right"
                  otherClasses="mt-10"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
