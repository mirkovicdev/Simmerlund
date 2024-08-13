import { stars } from "@/public";

import Image from "next/image";

const Clients = () => {
  return (
    <section className="flexCenter my-2">
      <div className="flexCenter flex-wrap w-full">
        <Image
          src={stars}
          alt="client"
          width={0}
          height={0}
          className="sm:w-[192px] w-[100px] object-contain"
        />
      </div>
    </section>
  );
};

export default Clients;
