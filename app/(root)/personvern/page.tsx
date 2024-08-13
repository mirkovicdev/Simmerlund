"use client";
import React from "react";

const Page = () => {
  return (
    <section className="flex flex-col md:flex-row text-white font-poppins py-12 px-8 md:px-16">
      <div className="flex-1 flex flex-col justify-center items-start md:items-start md:text-left text-center space-y-8 md:pl-16 lg:pl-24">
        <div className="flex flex-col md:flex-row justify-between items-center w-full">
          <h1 className="font-poppins font-semibold text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight">
            Personvernerklæring for <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Simmerlund Coaching</span>
          </h1>
        </div>
        <p className="text-sm md:text-base lg:text-lg max-w-2xl mx-auto md:mx-0">
          Velkommen til vår personvernerklæring. Denne erklæringen forklarer hvordan vi samler inn, bruker, deler og beskytter dine personopplysninger. Vi forplikter oss til å sikre personvernet ditt og behandler kun nødvendige data for å gi deg de beste tjenestene.
        </p>
      </div>

      <div className="flex-1 flex flex-col justify-start space-y-4 mt-4 md:mt-0 md:pr-16 lg:pr-24">
        <ol className="list-decimal pl-6 space-y-3">
          <li>
            <h2 className="text-xl font-semibold">Innsamling av personopplysninger</h2>
            <ul className="list-disc pl-6 pr-12 space-y-2 text-dimWhite">
              <li>
                <p>
                  Vi samler kun inn nødvendige personopplysninger fra våre kunder når de registrerer seg for våre tjenester. Personopplysninger som kan bli samlet inn inkluderer:
                </p>
                <ul className="list-disc pl-6 text-dimWhite">
                  <li>Navn og kontaktinformasjon (telefonnummer, e-postadresse)</li>
                  <li>Helseinformasjon og treningshistorikk (kun relevant informasjon)</li>
                  <li>Betalingsinformasjon (kun for behandling av betalinger)</li>
                </ul>
              </li>
            </ul>
          </li>

          <li>
            <h2 className="text-xl font-semibold">Bruk av personopplysninger</h2>
            <ul className="list-disc pl-6 pr-12 space-y-2 text-dimWhite">
              <li>
                <p>
                  Vi bruker personopplysninger for følgende formål:
                </p>
                <ul className="list-disc pl-6 text-dimWhite">
                  <li>Administrasjon av kundekontoer og tilpasning av tjenester</li>
                  <li>Tilpasning av trenings- og kostholdsplaner basert på individuelle behov og preferanser</li>
                  <li>Kommunikasjon med kunder angående deres mål, fremgang og eventuelle spørsmål</li>
                  <li>Behandling av betalinger og fakturering</li>
                  <li>Forbedring av våre tjenester basert på tilbakemeldinger</li>
                </ul>
              </li>
            </ul>
          </li>

          <li>
            <h2 className="text-xl font-semibold">Deling av personopplysninger</h2>
            <ul className="list-disc pl-6 pr-12 space-y-2 text-dimWhite">
              <li>
                <p>
                  Vi deler ikke dine personopplysninger med tredjeparter med mindre det er nødvendig for å levere tjenestene våre eller for å oppfylle juridiske forpliktelser. Dette kan inkludere:
                </p>
                <ul className="list-disc pl-6 text-dimWhite">
                  <li>Overholdelse av juridiske krav og forespørsel fra myndigheter</li>
                </ul>
              </li>
            </ul>
          </li>

          <li>
            <h2 className="text-xl font-semibold">Lagring og sikkerhet</h2>
            <ul className="list-disc pl-6 pr-12 space-y-2 text-dimWhite">
              <li>
                <p>
                  Vi tar rimelige tiltak for å sikre at dine personopplysninger blir behandlet sikkert. Dette inkluderer tekniske, organisatoriske og fysiske sikkerhetstiltak for å beskytte mot uautorisert tilgang, endring eller sletting. Personopplysninger vil kun bli lagret så lenge det er nødvendig for å oppfylle formålene de ble samlet inn for.
                </p>
              </li>
            </ul>
          </li>

          <li>
            <h2 className="text-xl font-semibold">Dine rettigheter</h2>
            <ul className="list-disc pl-6 pr-12 space-y-2 text-dimWhite">
              <li>
                <p>
                  Som kunde har du rettigheter knyttet til dine personopplysninger, inkludert:
                </p>
                <ul className="list-disc pl-6 text-dimWhite">
                  <li>Rett til å få tilgang til og kopiere dine personopplysninger</li>
                  <li>Rett til å korrigere eller oppdatere unøyaktige opplysninger</li>
                  <li>Rett til å be om sletting av dine personopplysninger når det er relevant</li>
                  <li>Rett til å begrense behandlingen av dine personopplysninger under visse omstendigheter</li>
                  <li>Rett til å trekke tilbake samtykke til behandling av personopplysninger</li>
                </ul>
              </li>
            </ul>
          </li>

          <li>
            <h2 className="text-xl font-semibold">Endringer i personvernerklæringen</h2>
            <ul className="list-disc pl-6 pr-12 space-y-2 text-dimWhite">
              <li>
                <p>
                  Vi forbeholder oss retten til å oppdatere eller endre denne personvernerklæringen etter behov. Eventuelle endringer vil bli publisert på våre nettsider eller kommunisert direkte til våre kunder. Vi oppfordrer deg til å gjennomgå personvernerklæringen regelmessig for å holde deg oppdatert om våre praksiser.
                </p>
              </li>
            </ul>
          </li>

          <li>
            <h2 className="text-xl font-semibold">Kontaktinformasjon</h2>
            <ul className="list-disc pl-6 pr-12 space-y-2 text-dimWhite">
              <li>
                <p>
                  Hvis du har spørsmål, bekymringer eller ønsker å utøve dine rettigheter knyttet til personopplysninger eller denne personvernerklæringen, kan du kontakte oss på:
                </p>
                <ul className="list-disc pl-6 text-dimWhite">
                  <li>E-post: kontakt@simmerlund.com</li>
                  <li>Instagram: Hermansimmerlund</li>
                </ul>
              </li>
            </ul>
          </li>
        </ol>
      </div>
    </section>
  );
};

export default Page;
