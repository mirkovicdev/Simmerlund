import React from "react";


import { Button } from "./ui/MovingBorders";
import { velgMeg } from "../constants";

const VelgMeg = () => {
  return (
    <div className="sm:py-20 py-0" id="testimonials">
      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {velgMeg.map((card) => (
          <Button
            key={card.id}
            borderRadius="1.75rem"
            className="flex-1 text-white border-neutral-200 dark:border-slate-800"
            duration={Math.floor(Math.random() * 10000) + 10000}
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-10 md:p-5 lg:p-10 gap-2">
              <div className="">
                <h1 className="text-start text-xl md:text-2xl font-bold w-full">
                  {card.title}
                </h1>
                <p className="text-start text-dimWhite mt-3 font-normal">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default VelgMeg;
