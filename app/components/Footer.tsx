"use client"
import Link from "next/link";
import { logo, platelogo } from "../../public";
import { footerLinks, socialMedia } from "../constants";
import Image from "next/image";
import { motion } from "framer-motion";

const Footer = () => (
  <motion.div
    className=""
    variants={{
      hidden: { opacity: 0, y: 50 },
      show: { opacity: 1, y: 0 },
    }}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    transition={{ opacity: { duration: 1 }, y: { duration: 1 } }}
  >
    <section className="flexCenter paddingY flex-col">
        <div className="flex md:flex-row flex-col mb-8 w-full">
          {/* Logo Section */}
          <div className="flex-[1] flex flex-col justify-center items-center md:items-start md:justify-start mb-10 md:mb-0">
            <Image
              src={platelogo}
              alt="hoobank"
              priority={true}
              className="object-contain w-36 h-36 md:w-44 md:h-44 lg:w-52 lg:h-52"
            />
          </div>

          {/* Links Section */}
          <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
            {footerLinks.map((footerlink) => (
              <div
                key={footerlink.title}
                className="flex flex-col ss:my-0 my-4 min-w-[150px] items-center sm:items-start"
              >
                <h1 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                  {footerlink.title}
                </h1>
                <ul className="list-none mt-4">
                  {footerlink.links.map((link, index) => (
                    <li
                      key={link.name}
                      className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary transition-colors delay-150 cursor-pointer md:text-start text-center ${
                        index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                      }`}
                    >
                      <a href={`#${link.link}`}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
          <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
            Copyright Ⓒ 2024 Simmerlund Coaching. Alle rettigheter reservert.
          </p>

          <div className="flex flex-row md:mt-0 mt-6">
            {socialMedia.map((social, index) => (
              <Link
              key={index}
              href={social.link}
              target="_blank">
                <Image
                  key={social.id}
                  src={social.icon}
                  alt={social.id}
                  width={21}
                  height={21}
                  priority={true}
                  className={`object-contain cursor-pointer hover:opacity-75 ${
                    index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
                  }`}
                />
              </Link>
            ))}
          </div>
        </div>

        <Link href="https://mirkovic.no" target="_blank">
          <p className="font-normal text-dimWhite text-[14px] mt-10 text-center">
            MirkovicDev™
          </p>
        </Link>
    </section>
  </motion.div>
);

export default Footer;
