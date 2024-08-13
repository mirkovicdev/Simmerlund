"use client";
import React from "react";

const Page = () => {
  return (
    <section className="flex flex-col md:flex-row text-white font-poppins py-12 px-8 md:px-16">
      <div className="flex-1 flex flex-col justify-center items-start md:items-start md:text-left text-center space-y-8 md:pl-16 lg:pl-24">
        <div className="flex flex-col md:flex-row justify-between items-center w-full">
          <h1 className="font-poppins font-semibold text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight">
            Kjøpsvilkår for <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Simmerlund Coaching</span>
          </h1>
        </div>
        <p className="text-sm md:text-base lg:text-lg max-w-2xl mx-auto md:mx-0">
          Velkommen til våre kjøpsvilkår. Disse vilkårene regulerer ditt kjøp og bruk av våre tjenester, 
          og er utformet for å sikre en rettferdig og gjensidig fordelaktig avtale mellom deg som kunde og oss som leverandør. <br />
          I våre kjøpsvilkår finner du informasjon om tjenestebeskrivelser, betalingsvilkår, bindingstid, oppgradering eller 
          nedgradering av tjenester, angrerett, oppstartsgebyr, refusjoner og avbestillinger, samt dine ansvarsområder som kunde. 
          Vi legger stor vekt på å sikre at du har all nødvendig informasjon og klarhet når du velger å benytte deg av våre tjenester. 
          Vårt mål er å gi deg en positiv og tilpasset opplevelse som hjelper deg med å nå dine mål på en trygg og effektiv måte. <br />
          Vi oppfordrer deg til å lese nøye gjennom våre kjøpsvilkår og ta kontakt med oss hvis du har spørsmål eller trenger 
          ytterligere informasjon. Vi er her for å hjelpe deg med å forstå og få mest mulig ut av våre tjenester. <br />
          Takk for at du valgte oss som din leverandør, og vi ser frem til å være en del av din helse- og treningsreise.
        </p>
      </div>

      <div className="flex-1 flex flex-col justify-start space-y-4 mt-4 md:mt-0 md:pr-16 lg:pr-24">
        <ol className="list-decimal pl-6 space-y-3">
          <li>
            <h2 className="text-xl font-semibold">Introduksjon</h2>
            <ul className="list-disc pl-6 pr-12 space-y-2 text-dimWhite">
              <li>
                <p>
                  Disse kjøpsvilkårene gjelder for alle kjøp av tjenester fra Simmerlund Coaching. Ved å kjøpe tjenester fra meg, godtar du å overholde disse vilkårene.
                </p>
              </li>
            </ul>
          </li>

          <li>
            <h2 className="text-xl font-semibold">Pris og betaling</h2>
            <ul className="list-disc pl-6 pr-12 space-y-2 text-dimWhite">
              <li>
                <p>
                  Alle priser er oppgitt i NOK og med avgifter inkludert. Betaling må skje før tjenesten starter/tjenesten blir levert. Ved manglende betaling kan Simmerlund Coaching holde tilbake tjenester/produkt og avslutte samarbeidet.
                </p>
              </li>
            </ul>
          </li>

          <li>
            <h2 className="text-xl font-semibold">Refusjon av tjenester og binding</h2>
            <ul className="list-disc pl-6 pr-12 space-y-2 text-dimWhite">
              <li>
                <p>
                  Jeg tilbyr ikke refusjon for allerede betalte tjenester. Angrerettsloven paragraf §22 bokstav C kan ikke benyttes etter at trening/og eller kostholdsanbefalinger er levert til kunden. Bindingstid på tjenester varierer fra ulike tilbud. Kunden blir informert om bindingstid før tjenesten starter gjennom betingelser i software jeg bruker til oppfølging.
                </p>
              </li>
            </ul>
          </li>

          <li>
            <h2 className="text-xl font-semibold">Ansvarsfraskrivelse</h2>
            <ul className="list-disc pl-6 pr-12 space-y-2 text-dimWhite">
              <li>
                <p>
                  Mine coaching-tjenester er ment som støtte og veiledning og resultater kan variere fra person til person basert på faktorer som alder, kjønn, genetikk, mm.
                </p>
              </li>
              <li>
                <p>
                  Simmerlund Coaching tar avstand fra alt av dopingmidler og andre ting som er forbudt. Kunden er pliktig til å informere coach om dette, og Simmerlund Coaching kan avslutte samarbeidet ved brudd på disse reglene, ingen refusjon vil bli gitt ved dette.
                </p>
              </li>
              <li>
                <p>
                  Simmerlund Coaching forbeholder retten til å avstå fra alle kundeforhold som jeg anser som upassende.
                </p>
              </li>
              <li>
                <p>
                  Alt av dokumenter/produkter som er delt eies av Simmerlund Coaching og kan ikke deles videre eller selges uten skriftlig samtykke.
                </p>
              </li>
              <li>
                <p>
                  Kunden er selv ansvarlig for at du tåler maten og eventuelle kosttilskudd som tas.
                </p>
              </li>
              <li>
                <p>
                  All trening som gjøres er på egen risiko og Simmerlund Coaching kan ikke holdes ansvarlig for hendelser som eventuelt oppstår under eller i forbindelse med trening.
                </p>
              </li>
              <li>
                <p>
                  All rådgivning gitt fra Simmerlund Coaching er å anse som generell kunnskap, ved sykdom eller andre helserelaterte problemer vil jeg alltid anbefale deg å ta kontakt med din fastlege for oppfølging.
                </p>
              </li>
              <li>
                <p>
                  Linker til eksterne ressurser og nettsider følges på eget ansvar og Simmerlund Coaching er ikke ansvarlig for påstander eller informasjon gitt av tredjeparter.
                </p>
              </li>
              <li>
                <p>
                  All innhold levert av Simmerlund Coaching og tilhørende software er publisert som informasjonsmateriale og kan ikke ansees som medisinsk rådgivning.
                </p>
              </li>
            </ul>
          </li>

          <li>
            <h2 className="text-xl font-semibold">Konfidensialitet</h2>
            <ul className="list-disc pl-6 pr-12 space-y-2 text-dimWhite">
              <li>
                <p>
                  All informasjon delt mellom coach og klient vil bli behandlet konfidensielt. Jeg vil ikke dele din informasjon med tredjeparter uten ditt samtykke, med mindre dette er påkrevd ved lov. Simmerlund Coaching lagrer informasjon om deg så lenge du er kunde hos meg, og du vil til enhver tid ha tilgang til å både endre og slette data.
                </p>
              </li>
            </ul>
          </li>

          <li>
            <h2 className="text-xl font-semibold">Endringer</h2>
            <ul className="list-disc pl-6 pr-12 space-y-2 text-dimWhite">
              <li>
                <p>
                  Jeg forbeholder meg retten til å endre disse kjøpsvilkårene når som helst. Endringer vil bli publisert på min nettside, og det er ditt ansvar å holde deg oppdatert om mine vilkår.
                </p>
              </li>
            </ul>
          </li>

          <li>
            <h2 className="text-xl font-semibold">Kontaktinformasjon</h2>
            <ul className="list-disc pl-6 pr-12 space-y-2 text-dimWhite">
              <li>
                <p>
                  Hvis du har spørsmål angående mine kjøpsvilkår, vennligst kontakt meg på kontakt@simmerlund.com eller på instagram Hermansimmerlund.
                </p>
              </li>
            </ul>
          </li>
        </ol>
      </div>
    </section>
  );
};

export default Page;
