"use client";
import { slideIn } from "../styles/animations";
import { motion } from "framer-motion";
import { Compare } from "./ui/Compare";

const Transformasjon = () => (
  <section id="coaching" className="sectionReverse">
    <motion.div
      className="sectionImgReverse md:mt-0 mt-0"
      variants={slideIn("left", "tween", 0.2, 1.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <div className="compare-container">
        <Compare
          firstImage="/foor1.jpeg"
          secondImage="/etter1.jpg"
          firstImageClassName="object-cover object-left-top"
          secondImageClassname="object-cover object-left-top"
          className="h-[400px] w-[250px] md:h-[700px] md:w-[500px]"
          slideMode="hover"
        />
      </div>

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </motion.div>

    <motion.div
      className="sectionInfo md:text-left text-center ml-0 sm:ml-20"
      variants={slideIn("right", "tween", 0.2, 1.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <h2 className="heading2">
        Min <span className="text-gradient">transformasjon</span>{" "}
      </h2>
      <p className="paragraph max-w-[470px] mt-5 mx-auto md:mx-0">
        Fra min personlige transformasjon, vet jeg at en helhetlig tilnærming
        til trening gir best resultater. Ved å kombinere praktisk erfaring med
        faglig kunnskap, kan jeg guide deg mot en sunnere, sterkere fremtid hvor
        dine mål er innen rekkevidde.
      </p>
    </motion.div>
  </section>
);

export default Transformasjon;
