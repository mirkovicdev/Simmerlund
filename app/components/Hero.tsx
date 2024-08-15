"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { slideIn } from "../styles/animations";
import { forside, forside2 } from "../../public";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="home" className="flex md:flex-row flex-col paddingY">
      <motion.div
        className="flex-1 flexStart flex-col xl:px-0 paddingX md:text-left text-center md:block hidden"
        variants={slideIn("left", "tween", 0.2, 1.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="flex flex-col md:flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[45px] text-white ss:leading-[100.8px] leading-[53px]">
            Gjør dine <br className="sm:block hidden" />{" "}
            <span className="text-gradient">treningsdrømmer</span>{" "}
          </h1>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[45px] text-white ss:leading-[100.8px] leading-[53px] w-full">
          til virkelighet
        </h1>

        <p className="paragraph max-w-[470px] mt-5 mx-auto md:mx-0 text-[10px]">
          Fra personlig tilpassede treningsøkter til balanserte ernæringsplaner, sørger jeg for at du får den støtten og veiledningen du trenger for å nå dine mål, uansett hvor du starter. Sammen bygger vi en sterkere, sunnere og mer energisk versjon av deg selv.
        </p>

        <a href="#about" className="md:self-start self-center">
          <MagicButton 
            title="Start i dag!"
            icon={<FaLocationArrow />}
            position="right"
            otherClasses="mt-10"
          />
        </a>
      </motion.div>

      <motion.div
        className="flex-1 flexCenter md:my-0 my-10 relative md:flex"
        variants={slideIn("right", "tween", 0.2, 1.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="relative md:w-[120%] w-[90%] md:h-[120%] h-[90%] md:block hidden z-[0] md:z-[0]">
          <Image
            src={forside}
            alt="billing"
            width={0}
            height={0}
            className="md:w-[100%] w-[90%] md:h-[100%] h-[90%] object-cover"
            priority={true}
          />
          <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient opacity-30 right-[-10px]" />
          <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40 opacity-30 right-[-20px]" />
          <div className="absolute z-[0] w-[50%] h-[50%] right-[10px] bottom-20 blue__gradient opacity-30" />
        </div>
      </motion.div>
      <motion.div
        className="flex-1 flexCenter md:my-0 my-10 relative md:flex"
        variants={{
          hidden: { opacity: 0, y: -50 },
          show: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ opacity: { duration: 1 }, y: { duration: 1 } }}
      >
        <div className="relative md:w-[120%] w-[90%] md:h-[120%] h-[90%] md:hidden flex justify-center items-center">
          <Image
            src={forside2}
            alt="billing"
            width={0}
            height={0}
            className="md:w-[100%] w-[90%] md:h-[100%] h-[90%] object-cover"
            priority={true}
          />
        </div>
      </motion.div>

    </section>
  );
};

export default Hero;
