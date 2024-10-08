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

export const activitiesCardData = [
  {
    title: "Disneyland Paris",
    description: [
      "Situé à seulement 15 minutes en voiture du Gîte Les Iris, Disneyland Paris est une destination incontournable.",
      "Venez profiter des attractions et de la magie de Disney dans ce parc à thème mondialement connu.",
    ],
    image: "/src/assets/pictures/around_crecy/disney.jpg",
    link: "https://www.disneylandparis.com/fr-fr/destinations/parc-disneyland/",
  },
  {
    title: "Le Parc Astérix",
    description: [
      "Le Parc Astérix est un détonnant mélange de 50 attractions et spectacles mis en scène dans 7 univers retraçant les aventures du célèbre gaulois.",
    ],
    image: "/src/assets/pictures/activities/parc_asterix.jpg",
    link: "https://www.parcasterix.fr/",
  },
  {
    title: "La Vallée Village",
    description: [
      "Ce village de marques haut de gamme vous propose une expérience shopping inédite et en plein air avec les plus belles marques de créateurs.",
    ],
    image: "/src/assets/pictures/activities/vallee_village.jpg",
    link: "https://www.thebicestercollection.com/la-vallee-village/fr",
  },
  {
    title: "La mer de Sable",
    description: [
      `De la Vallée des Mississi'Ptits au Canyon du Colorado en passant par le Désert du Nouveau-Mexique, 
plongez toute votre tribu au cœur de l'Epouvantable Mer de Sable !`,
    ],
    image: "/src/assets/pictures/activities/mer_de_sable.jpg",
    link: "https://www.merdesable.fr/",
  },
  {
    title: "Les parcs zoologiques de Lumigny",
    description: [
      `Avec le Parc des Félins, vous découvrirez plus de 300 animaux, avec 26 espèces de félins différentes, dont des tigres blancs, des panthères et des lynx.`,
      `Dans le deuxième parc, Terre de Singes, vous pourrez y observer environ une cinquantaine de macaques et de nombreux autres primates d'Afrique, d'Amérique du Sud, ou bien d'Asie.`,
    ],
    image: "/src/assets/pictures/activities/lumigny_park.jpg",
    link: "https://lumigny-safari-reserve.com/",
  },
  {
    title: "Musée de la Grande Guerre",
    description: [
      `A Meaux, musée de référence, découvrez une riche collection d'objets dans un musée rénové.`,
      `Le musée de la Grande Guerre, qui a ouvert ses portes le 11 novembre 2011 sur le territoire de la Première bataille de la Marne à Meaux, est le plus grand musée d’Europe sur la Première Guerre mondiale.`,
    ],
    image: "/src/assets/pictures/activities/musee-grande-guerre-meaux-2021.jpg",
    link: "https://www.museedelagrandeguerre.com/",
  },
  {
    title: "Ferra Botanica",
    description: [
      `Embarquez pour une aventure complète, émerveillez-vous dans la nature et transformez-vous en éco-citoyen.`,
      `Vous empruntez l’ancienne voie de chemin de fer reliant Paris à Sézanne, fermée au milieu du siècle dernier, sur un tronçon de 7 kilomètres environ.`,
    ],
    image:
      "/src/assets/pictures/activities/veloraildefrance_velo-rail-la-ferte-gaucher-seine-et-marne-77.jpg",
    link: "https://www.ferrabotanica.com/",
  },
  {
    title: "Koezio",
    description: [
      `Koezio est un parc de loisir, idéal pour vivre une expérience insolite en famille, entre amis ou entre collègues.`,
    ],
    image:
      "/src/assets/pictures/activities/animations-koezio-au-centre-commercial-carre-senart.jpg",
    link: "https://koezio.co/senart/",
  },
  {
    title: "aquarium sea life",
    description: [
      `Préparez vous à un voyage fascinant dans les profondeurs de l'océan à travers 9 zones thématiques.`,
    ],
    image: "/src/assets/pictures/activities/sea_life.jpg",
    link: "https://www.visitsealife.com/paris/",
  },
];

export const navItems = [
  { name: "accueil", path: "/" },
  { name: "à propos", path: "/about" },
  { name: "contact", path: "/contact" },
  { name: "Activités", path: "/activities" },
  { name: "galerie", path: "/gallery" },

  {
    name: "Réserver maintenant",
    isButton: true,
    path: "https://www.booking.com/hotel/fr/gite-les-iris.fr.html?aid=385785&label=metakayak-linkdsk-corefr-hotel-53810_los-05_bw-028_curr-EUR_nrm-01_gstadt-03_gstkid-01_lang-fr_sat-0_dow-sat_aff-0_mcid-10_clkid-OO9Eg6Edt5HiSydub2K5XQ&sid=bb7ff456fef040781ad50ef677b82f43&dest_id=663128;dest_type=hotel;dist=0;group_adults=2;group_children=0;hapos=1;hpos=1;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1727301921;srpvid=4be69b5370e70506;type=total;ucfs=1&",
  },
];
const imagesStudio = Object.keys(
  import.meta.glob("/src/assets/pictures/studio_pictures/*.{jpg,png,jpeg}")
);
const imagesAround = Object.keys(
  import.meta.glob("/src/assets/pictures/around_crecy/*.{jpg,png,jpeg}")
);

const imagesCommerce = Object.keys(
  import.meta.glob("/src/assets/pictures/commerces/*.{jpg,png,jpeg}")
);

const imagesCity = Object.keys(
  import.meta.glob("/src/assets/pictures/crecy/*.{jpg,png,jpeg}")
);
const imagesParis = Object.keys(
  import.meta.glob("/src/assets/pictures/paris/*.{jpg,png,jpeg}")
);
const imagesTransport = Object.keys(
  import.meta.glob("/src/assets/pictures/transport/*.{jpg,png,jpeg}")
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
