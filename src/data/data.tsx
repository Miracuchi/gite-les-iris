export const cardData = [
  {
    title: "Crecy La Chapelle",
    description: [
      "Le Gîte Les Iris se situe à 1 km du centre de Crécy-la-Chapelle, à 15 minutes en voiture de Disneyland Paris et à 750 mètres de la gare SNCF et routière de Crécy-la-Chapelle.",
      "Vous pourrez rejoindre Paris gare de l'Est en train ou la gare de Chessy Marne la vallée (Disney, TGV, RER) en bus...",
    ],
    image: "/src/assets/pictures/crecy/crecy1.jpg",
  },
];

const imagesStudio = Object.keys(
  import.meta.glob("/src/assets/pictures/studio_pictures/*.{jpg,png,jpeg}"),
);
const imagesAround = Object.keys(
  import.meta.glob("/src/assets/pictures/around_crecy/*.{jpg,png,jpeg}"),
);

const imagesCommerce = Object.keys(
  import.meta.glob("/src/assets/pictures/commerces/*.{jpg,png,jpeg}"),
);

const imagesCity = Object.keys(
  import.meta.glob("/src/assets/pictures/crecy/*.{jpg,png,jpeg}"),
);
const imagesParis = Object.keys(
  import.meta.glob("/src/assets/pictures/paris/*.{jpg,png,jpeg}"),
);
const imagesTransport = Object.keys(
  import.meta.glob("/src/assets/pictures/transport/*.{jpg,png,jpeg}"),
);
export const studioSliderData = {
  title: "Le studio",
  slides: imagesStudio,
};

export const aroundCrecyData = {
  title: "autour de Crécy",
  slides: imagesAround,
};

export const commercesCrecyData = {
  title: "Commerces",
  slides: imagesCommerce,
};

export const cityCrecyData = {
  title: "La ville",
  slides: imagesCity,
};
export const transportCrecyData = {
  title: "Les transports",
  slides: imagesTransport,
};
export const parisData = {
  title: "Paris",
  slides: imagesParis,
};

export const activities = {
  sectionName: "Activitie",
  card: [
    {
      image: "/src/assets/pictures/around_crecy/disney.jpg",
      link: "https://lumigny-safari-reserve.com/",
    },
    {
      image: "/src/assets/pictures/commerces/intermarché.jpg",
      link: "https://www.parcasterix.fr/",
    },
    {
      image: "/src/assets/pictures/around_crecy/disney.jpg",
      link: "https://lumigny-safari-reserve.com/",
    },
    {
      image: "/src/assets/pictures/commerces/intermarché.jpg",
      link: "https://www.parcasterix.fr/",
    },
    {
      image: "/src/assets/pictures/around_crecy/disney.jpg",
      link: "https://lumigny-safari-reserve.com/",
    },
    {
      image: "/src/assets/pictures/commerces/intermarché.jpg",
      link: "https://www.parcasterix.fr/",
    },
    {
      image: "/src/assets/pictures/around_crecy/disney.jpg",
      link: "https://lumigny-safari-reserve.com/",
    },
    {
      image: "/src/assets/pictures/commerces/intermarché.jpg",
      link: "https://www.parcasterix.fr/",
    },
    {
      image: "/src/assets/pictures/around_crecy/disney.jpg",
      link: "https://lumigny-safari-reserve.com/",
    },
    {
      image: "/src/assets/pictures/commerces/intermarché.jpg",
      link: "https://www.parcasterix.fr/",
    },
  ],
};

export const giteAdress = "44 bis rue de Montbarbin";
export const gitePostalCode = "77580 CRECY LA CHAPELLE";
