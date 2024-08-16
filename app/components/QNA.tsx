"use client";
import { slideIn } from "../styles/animations";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const QNA = () => (
  <section id="qna" className="sectionReverse">
    <motion.div
      className="sectionImgReverse"
      variants={slideIn("left", "tween", 0.2, 1.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <div>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-white font-semibold">
              Hvorfor bør jeg velge online coaching fremfor <br /> tradisjonell
              personlig trener?
            </AccordionTrigger>
            <AccordionContent className="text-dimWhite font-normal">
              Online coaching gir deg fleksibilitet til å trene når og hvor det
              passer deg, samtidig som du får tilpassede trenings- og
              kostholdsplaner, regelmessig oppfølging og støtte fra din
              dedikerte coach. Det er også mer kostnadseffektivt og praktisk
              sammenlignet med tradisjonell personlig trener.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-white font-semibold">
              Er du utdannet coach?
            </AccordionTrigger>
            <AccordionContent className="text-dimWhite font-normal">
              Ja, jeg har PT utdanning.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-white font-semibold">
              Hva salgs oppfølging får jeg som kunde?
            </AccordionTrigger>
            <AccordionContent className="text-dimWhite font-normal">
              Jeg legger vekt på regelmessig oppfølging og støtte for å sikre at
              du holder deg på rett spor og oppnår dine mål. Dette innebærer at
              jeg vil svare på spørsmål, gi veiledning om teknikker,
              kostholdsveiledning, motivasjon og generell støtte underveis. Jeg
              ønsker også å holde kontakten med deg jevnlig for å følge opp
              hvordan det går med treningen og kostholdet ditt samt høre om
              eventuelle utfordringer eller behov du måtte ha.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </motion.div>

    <motion.div
      className="sectionInfo"
      variants={{
        hidden: { opacity: 0, y: -50 },
        show: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      transition={{ opacity: { duration: 1 }, y: { duration: 1 } }}
    >
      <h2 className="heading2 text-center sm:text-left">
        Ofte stilte <span className="text-gradient">spørsmål</span>
      </h2>
      <p className="paragraph max-w-[470px] mt-5 text-center sm:text-left">
        Ikke nøl med å ta kontakt om du har spørsmål som ikke er besvart her.
        Jeg er her for å hjelpe deg!
      </p>
    </motion.div>
  </section>
);

export default QNA;
