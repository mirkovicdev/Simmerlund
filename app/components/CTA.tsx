"use client";
import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "./ui/MagicButton";
import { motion } from "framer-motion";

const CTA = () => (
  <motion.div
    className="text-center"
    variants={{
      hidden: { opacity: 0, y: 0 },
      show: { opacity: 1, y: 0 },
    }}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    transition={{ opacity: { duration: 1 }, y: { duration: 1 } }}
  >
    <section className="flexCenter marginY padding sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow">
      <div className="flex-1 flex flex-col text-center sm:text-left">
        <h2 className="heading2">La oss ta en samtale!</h2>
        <p className="paragraph max-w-[470px] mt-5 mx-auto sm:mx-0">
          Du er bare ett skritt unna å komme i gang. Start din reise mot suksess
          i dag
        </p>
      </div>

      <div className="flexCenter sm:ml-10 ml-0 sm:mt-0 mt-10">
        <a href="#about">
          <MagicButton
            title="Ta kontakt!"
            icon={<FaLocationArrow />}
            position="left"
            otherClasses="sm:mr-10 mr-0"
          />
        </a>
      </div>
    </section>
  </motion.div>
);

export default CTA;
