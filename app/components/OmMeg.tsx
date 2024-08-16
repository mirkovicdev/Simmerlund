"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { slideIn } from "../styles/animations";
import { ommeg } from "@/public";

const OmMeg = () => (
  <section
    id="ommeg"
    className="section flex flex-col md:flex-row items-center md:items-start"
  >
    <motion.div
      className="sectionInfo flex-1 md:text-left text-center"
      variants={slideIn("left", "tween", 0.2, 1.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <h2 className="heading2">
        Om <span className="text-gradient">meg</span>{" "}
      </h2>
      <p className="paragraph max-w-[800px] mt-5 mx-auto md:mx-0">
        Hei, jeg er Herman! Jeg er 21 år gammel og konkurrerer i styrkeløft på
        nasjonalt nivå. Jeg er utdannet online coach, og jeg brenner for å
        hjelpe deg med å nå dine mål, uansett om du vil forbedre styrken din
        eller ta dine første skritt mot en sunnere livsstil. La oss jobbe sammen
        for å nå nye høyder!
      </p>
    </motion.div>

    <motion.div
      className="flex-1 flex justify-center items-center md:ml-10 mt-10 md:mt-0"
      variants={{
        hidden: { opacity: 0, y: -50 },
        show: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      transition={{ opacity: { duration: 1 }, y: { duration: 1 } }}
    >
      <Image
        src={ommeg}
        alt="billing"
        width={0}
        height={0}
        className="sm:w-[80%] w-[70%] sm:h-[80%] h-[70%] md:w-[70%] md:h-[70%] object-contain"
        priority={true}
      />
    </motion.div>
  </section>
);

export default OmMeg;
