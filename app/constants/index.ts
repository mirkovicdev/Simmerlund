import {
    people01,
    people02,
    people03,
    facebook,
    instagram,
    linkedin,
    twitter,
    airbnb,
    binance,
    coinbase,
    dropbox,
    send,
    shield,
    star,
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
  
  export const features = [
    {
      id: "feature-1",
      icon: star,
      title: "Rewards",
      content:
        "The best credit cards offer some tantalizing combinations of promotions and prizes",
    },
    {
      id: "feature-2",
      icon: shield,
      title: "100% Secured",
      content:
        "We take proactive steps make sure your information and transactions are secure.",
    },
    {
      id: "feature-3",
      icon: send,
      title: "Balance Transfer",
      content:
        "A balance transfer credit card can save you a lot of money in interest charges.",
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
  
  export const stats = [
    {
      id: "stats-1",
      title: "User Active",
      value: "3800+",
    },
    {
      id: "stats-2",
      title: "Trusted by Company",
      value: "230+",
    },
    {
      id: "stats-3",
      title: "Transaction",
      value: "$230M+",
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
  