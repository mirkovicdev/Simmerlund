"use client";
import Image from "next/image";
import { feedback } from "../constants";
import FeedbackCard from "./FeedbackCard";
import { stars } from "@/public";
import { motion } from "framer-motion";
import { slideIn } from "../styles/animations";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const Testimonials = () => (
  <section id="resultater" className="paddingY flexCenter flex-col relative">
    <motion.div
      className="text-center"
      variants={{
        hidden: { opacity: 0, y: -50 },
        show: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      transition={{ opacity: { duration: 1 }, y: { duration: 1 } }}
    >
      <div className="relative z-[1] flex flex-col items-center text-center">
        <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40 opacity-50" />

        <div className="w-full flex flex-col items-center text-center sm:mb-16 mb-6">
          <h2 className="heading2">
          <span className="text-gradient">Resultater</span>{" "} som taler <br className="block sm:hidden" /> for seg selv
          </h2>
          <div className="w-full md:mt-6 mt-4 justify-center items-center mx-5">
            <p className="paragraph mx-auto max-w-[450px]">
              Oppdag hvordan jeg har hjulpet andre med å nå sine mål- La deres suksesshistorier inspirere deg på din egen reise.
            </p>
          </div>
        </div>

        <div className="relative flex flex-wrap justify-center w-full gap-6 feedback-container">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full max-w-xs lg:max-w-full"
          >
            <CarouselContent>
              {feedback.map((card, index) => (
                <CarouselItem key={index} className="md:basis-1/3 basis-full">
                  <div className="md:p-4 p-1 flex justify-center items-center">
                    <FeedbackCard key={card.id} {...card} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

        </div>


        <div className="flex justify-center mt-6">
          <Image
            src={stars}
            alt="client"
            width={0}
            height={0}
            className="sm:w-[192px] w-[100px] object-contain"
          />
        </div>
      </div>
    </motion.div>
  </section>
);

export default Testimonials;
