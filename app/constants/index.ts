import {
  instagram,
  // facebook,
  tiktok,
} from "../../public";

export const navLinks = [
  {
    id: "coaching",
    title: "Coaching",
  },
  {
    id: "ommeg",
    title: "Om meg",
  },
  {
    id: "komigang",
    title: "Kom i gang",
  },
  {
    id: "qna",
    title: "Spørsmål",
  },
  {
    id: "resultater",
    title: "Kunderesultater",
  },
];

export interface Feedback {
  id: string;
  content: string;
  name: string;
  title: string;
  rating: number;
}

export const feedback: Feedback[] = [
  {
    id: "feedback-1",
    content:
      "Strålende!! Seriøs PT som vil at du skal nå målene dine og er med å pushe deg! Lager gode program som passer meg og mine mål. Får tilrettelagt både trening og matplan som ikke er kjedelig men som faktisk smaker godt. Appen er genial og gjør det enkelt for oss å holde kontakt og planlegge videre progresjon. 10/10 :)",
    name: "Anonym",
    title: "Kunde i 4 måneder",
    rating: 5,
  },
  {
    id: "feedback-2",
    content:
      "Før jeg begynte å trene med Herman, hadde jeg problemer med å holde meg motivert. Hans personlige tilnærming og kontinuerlige oppfølging har hjulpet meg med å nå mål jeg aldri trodde var mulig. Jeg føler meg sterkere og mer energisk enn noen gang!",
    name: "Ola Normann",
    title: "Kunde i 1 år",
    rating: 4,
  },
  {
    id: "feedback-3",
    content:
      "Herman er ikke bare en coach, han er en mentor. Han har ikke bare hjulpet meg med trening, men også med kosthold og livsstil. Jeg har opplevd betydelige forbedringer i min helse og velvære. Jeg setter stor pris på hans kunnskap og dedikasjon.",
    name: "Anne Larsen",
    title: "Kunde i 1 år",
    rating: 4.5,
  },
  {
    id: "feedback-4",
    content:
      "Jeg hadde aldri trent før, og var usikker på hvor jeg skulle begynne. Herman gjorde prosessen enkel og morsom. Han har hjulpet meg med å endre livsstilen min, og jeg er så takknemlig for det. Jeg har mer energi og føler meg sunnere.",
    name: "Marius Andersen",
    title: "Kunde i 6 måneder",
    rating: 5,
  },
];

export const footerLinks = [
  {
    title: "Nyttige lenker",
    links: [
      {
        name: "Coaching",
        link: "coaching",
        useHash: true,
      },
      {
        name: "Om meg",
        link: "ommeg",
        useHash: true,
      },
      {
        name: "Kom i gang",
        link: "komigang",
        useHash: true,
      },
      {
        name: "Spørsmål",
        link: "qna",
        useHash: true,
      },
      {
        name: "Kunderesultater",
        link: "resultater",
        useHash: true,
      },
    ],
  },
  {
    title: "Annet",
    links: [
      {
        name: "Til toppen",
        link: "",
        useHash: false,
      },
      {
        name: "Kjøpsvilkår",
        link: "kjopsvilkaar",
        useHash: false,
      },
      {
        name: "Personvern",
        link: "personvern",
        useHash: false,
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/hermansimmerlund/",
  },
  {
    id: "social-media-2",
    icon: tiktok,
    link: "https://www.tiktok.com/@simmerlund",
  },
  // {
  //   id: "social-media-3",
  //   icon: facebook,
  //   link: "https://www.tiktok.com/@simmerlund",
  // },
];

export const navItems = [
  { name: "Coaching", link: "#Coaching" },
  { name: "Kunderesultater", link: "#Kunderesultater" },
  { name: "Om meg", link: "#Ommeg" },
  { name: "Start nå", link: "#Start" },
];

export const velgMeg = [
  {
    id: 1,
    title: "Jeg er med deg hele veien, fra start til mål.",
    desc: "Få en coach som virkelig ser deg og dine behov. Jeg gir deg individuell oppfølging og tilpasser treningsopplegget etter din livsstil, dine mål, og ditt utgangspunkt.",
    className: "md:col-span-2",
  },
  {
    id: 2,
    title: "Din suksess er mitt fagområde.",
    desc: "Med flere års erfaring innen trening og helse, vet jeg hva som skal til for å oppnå resultater. Jeg kombinerer vitenskapelig kunnskap med praktisk erfaring for å gi deg de beste verktøyene for suksess.",
    className: "md:col-span-2", // change to md:col-span-2
  },
  {
    id: 3,
    title: "Trening og kosthold i perfekt balanse.",
    desc: "Jeg tilbyr en helhetlig tilnærming som ikke bare fokuserer på trening, men også på kosthold, restitusjon, og mental helse. Dette gir deg en bærekraftig vei til bedre helse og velvære.",
    className: "md:col-span-2", // change to md:col-span-2
  },
  {
    id: 4,
    title: "Din personlige motivator når du trenger det mest.",
    desc: "Alle trenger en dytt i riktig retning av og til. Jeg er her for å gi deg den støtten og motivasjonen du trenger for å holde kursen mot dine mål, selv når det blir tøft.",
    className: "md:col-span-2",
  },
];
