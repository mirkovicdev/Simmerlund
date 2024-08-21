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
              Hva er online coaching, og hvordan fungerer det?
            </AccordionTrigger>
            <AccordionContent className="text-dimWhite font-normal">
              Online coaching handler om å gi deg personlig tilpassede programmer og matplaner. 
              Jeg er her for å hjelpe deg med å nå målene dine og fungerer som din personlig motivator. 
              Hver uke har vi en check in dag der du fyller ut et skjema om hvordan uken har vært. 
              Basert på det gir jeg deg tilbakemelding via tekst eller videomelding, 
              hvor jeg går over alt og foreslår justeringer.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-white font-semibold">
              Hva kan jeg forvente fra et program og matplan?
            </AccordionTrigger>
            <AccordionContent className="text-dimWhite font-normal">
              Du kan forvente en plan som er helt skreddersydd for deg, med fokus på det du liker 
              og hva som funker i din hverdag. Ingen merkelige dietter, bare sunne valg som gjør 
              at du kan trives!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-white font-semibold">
              Hvordan fungerer check-in prosessen?
            </AccordionTrigger>
            <AccordionContent className="text-dimWhite font-normal">
              På check in dagen fyller du ut et skjema som gir meg innsikt i hvordan uken din har vært. 
              Annenhver check in ber jeg deg også om å sende et bilde for å følge med på fremgangen din. 
              Dette hjelper oss å se endringene i fysikken din, siden vekten kan gå opp eller ned uten at det 
              nødvendigvis er noe negativt. Jeg sender deg tilbakemelding via tekst eller videomelding der jeg 
              gjennomgår alt og gir deg tips for veien videre.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-white font-semibold">
              Hvor mye tid må jeg bruke på programmet og matplanen?
            </AccordionTrigger>
            <AccordionContent className="text-dimWhite font-normal">
              Tiden du må bruke vil variere, men jeg sørger for at programmet er realistisk og 
              passer inn i din hverdag. Målet er at du skal kunne følge det uten stress!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-white font-semibold">
              Hvordan sikrer du at programmet fungerer for meg?
            </AccordionTrigger>
            <AccordionContent className="text-dimWhite font-normal">
              Jeg tilpasser planene basert på tilbakemeldingene du gir meg i skjemaene.
              Hvis det er noe som ikke funker, justerer vi det sammen. Jeg er tilgjengelig 24/7,
              så hvis du trenger motivasjon eller har spørsmål underveis, er jeg alltid her for å hjelpe!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger className="text-white font-semibold">
              Hva koster online coaching programmet ditt?
            </AccordionTrigger>
            <AccordionContent className="text-dimWhite font-normal">
              Kostnaden varierer avhengig av hvilken pakke du velger og hvor lenge du vil binde deg. 
              Jeg har fleksible alternativer, så ta gjerne kontakt for mer informasjon om prisene og hva 
              som passer best for deg!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger className="text-white font-semibold">
              Kan jeg få coaching for spesifikke mål, som vekttap eller muskelbygging?
            </AccordionTrigger>
            <AccordionContent className="text-dimWhite font-normal">
              Ja, absolutt! Enten målet ditt er vekttap, muskelbygging, eller bare en sunnere livsstil, 
              lager vi en plan som passer til dine behov. Jeg er her for å gi deg motivasjonen og støtten 
              du trenger for å nå målene dine!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8">
            <AccordionTrigger className="text-white font-semibold">
              Hvorfor bør jeg velge online coaching fremfor <br /> tradisjonell
              personlig trener?
            </AccordionTrigger>
            <AccordionContent className="text-dimWhite font-normal">
              Online coaching gir deg fleksibilitet til å trene når og hvor det
              passer deg, samtidig som du får tilpassede trenings og
              kostholdsplaner, regelmessig oppfølging og støtte fra din
              dedikerte coach. Det er også mer kostnadseffektivt og praktisk
              sammenlignet med tradisjonell personlig trener.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-9">
            <AccordionTrigger className="text-white font-semibold">
              Er du utdannet coach?
            </AccordionTrigger>
            <AccordionContent className="text-dimWhite font-normal">
              Ja, jeg har PT utdanning.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-10">
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
