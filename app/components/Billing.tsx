"use client";
import { slideIn } from "../styles/animations";
import Image from "next/image";
import { motion } from "framer-motion";
import VelgMeg from "./VelgMeg";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";

const Billing = () => (
  <section id="coaching" className="sectionReverse">
    <motion.div
      className="sectionImgReverse md:mt-0 mt-0"
      variants={slideIn("left", "tween", 0.2, 1.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <VelgMeg />

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
        Hvorfor <span className="text-gradient">velge</span>{" "} <br className="sm:block hidden" /> akkurat meg?
      </h2>
      <p className="paragraph max-w-[470px] mt-5 mx-auto md:mx-0">
        Med personlig oppfølging, solid erfaring, og en helhetlig tilnærming til både trening og kosthold, tilbyr jeg deg den støtten og ekspertisen du trenger for å nå dine mål. Jeg er din dedikerte motivator og veileder, og sammen skaper vi varige resultater.
      </p>
      <a href="#about" className="md:self-start self-center">
        <MagicButton 
          title="Ta kontakt!"
          icon={<FaLocationArrow />}
          position="left"
          otherClasses="mt-5 md:mt-10 hidden sm:block"  // Adjusted margin for better spacing on small devices
        />
      </a>
    </motion.div>
  </section>
);

export default Billing;
