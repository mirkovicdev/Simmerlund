"use client";
import { motion } from "framer-motion";
import { zoomIn } from "../styles/animations";
import { quotes } from "../../public";
import Image from "next/image";
import { IonIcon } from "@ionic/react";
import { star, starHalf, starOutline } from "ionicons/icons";

interface feedbackCardPropTypes {
  content: string;
  name: string;
  title: string;
  rating: number;
}

const FeedBackCard = ({
  content,
  name,
  title,
  rating,
}: feedbackCardPropTypes) => {
  const fullStars = Math.floor(rating);
  const halfStars = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStars;

  return (
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
      <p className="font-poppins font-normal md:text-[18px] text-[16px] leading-[32px] text-white my-10">
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
          <div className="flex flex-row">
            {Array.from({ length: fullStars }).map((_, i) => (
              <IonIcon
                key={`full-${i}`}
                icon={star}
                className="text-yellow-500"
              />
            ))}
            {halfStars === 1 && (
              <IonIcon key="half" icon={starHalf} className="text-yellow-500" />
            )}
            {Array.from({ length: emptyStars }).map((_, i) => (
              <IonIcon
                key={`empty-${i}`}
                icon={starOutline}
                className="text-yellow-500"
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeedBackCard;
