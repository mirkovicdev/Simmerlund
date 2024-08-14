"use client";
import { motion } from "framer-motion";
import { zoomIn } from "../styles/animations";
import { quotes } from "../../public";
import Image from "next/image";

interface FeedbackCardPropTypes {
  content: string;
  name: string;
  title: string;
}

const FeedBackCard = ({ content, name, title }: FeedbackCardPropTypes) => (
  <motion.div
    className="flex flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card bg-gray-800"
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
      className="object-contain mb-6"
      priority={true}
    />
    <div className="flex-1 flex flex-col">
      <p className="font-poppins font-normal text-[18px] leading-[32px] text-white mb-6 flex-grow">
        {content}
      </p>
      <div className="flex flex-col mt-auto">
        <h1 className="font-poppins font-semibold text-[20px] leading-[32px] text-white mb-2">
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
