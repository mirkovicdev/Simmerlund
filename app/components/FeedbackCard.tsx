"use client";
import { motion } from "framer-motion";
import { zoomIn } from "../styles/animations";
import { quotes } from "../../public";
import Image, { StaticImageData } from "next/image";

interface feedbackCardPropTypes {
  content: string;
  name: string;
  title: string;
}

const FeedBackCard = ({ content, name, title}: feedbackCardPropTypes) => (
  <motion.div
    className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card"
    variants={zoomIn}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
  >
    <Image
      src={quotes}
      alt="quotes"
      width={42}
      height={27}
      className="object-contain"
      priority={true}
    />
    <p className="font-poppins font-normal text-[18px] leading-[32px] text-white my-10">
      {content}
    </p>
    <div className="flex justify-center md:justify-start w-full">
      <div className="flex flex-col md:ml-4 w-full text-center md:text-left items-center md:items-start">
        <h1 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
          {name}
        </h1>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
          {title}
        </p>
      </div>
    </div>
  </motion.div>
);

export default FeedBackCard;
