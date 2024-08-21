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
      "En utrolig dyktig coach som leverer skreddersydde mat- og treningsplaner, tilpasset mine behov. Han fulgte opp hele veien og var flink til å finne løsninger som hjalp meg å se fremgang.",
    name: "Anonym",
    title: "Kunde i 3 måneder",
    rating: 5,
  },
  {
    id: "feedback-3",
    content:
      "En PT som leverer artige matplaner som funker, med treningsopplegg som motiverer. Alltid tid for en prat og gir gode råd når man står fast.",
    name: "Christian S",
    title: "Kunde i 4 måneder",
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
