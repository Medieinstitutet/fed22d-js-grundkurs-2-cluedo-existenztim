/**
 * This file contains all the items needed in the game
 */

// Suspects
const flanders = {
  name: 'Ned Flanders',
  imgPath: '/img/person.png',
};

const bob = {
  name: 'Sideshow Bob',
  imgPath: '/img/person.png',
};

const edna = {
  name: 'Edna Krabappel',
  imgPath: '/img/person.png',
};

const krusty = {
  name: 'Krusty The Clown',
  imgPath: '/img/person.png',
};

const agnes = {
  name: 'Agnes Skinner',
  imgPath: '/img/person.png',
};

const lovejoy = {
  name: 'Helen Lovejoy',
  imgPath: '/img/person.png',
};

// Weapons
const rope = {
  name: 'rope',
  imgPath: '/img/sword.png',
};

const revolver = {
  name: 'revolver',
  imgPath: '/img/sword.png',
};

const candlestick = {
  name: 'candlestick',
  imgPath: '/img/sword.png',
};

const knife = {
  name: 'knife',
  imgPath: '/img/sword.png',
};

const wrench = {
  name: 'wrench',
  imgPath: '/img/sword.png',
};

const baseballBat = {
  name: 'baseball bat',
  imgPath: '/img/sword.png',
};

// Rooms
// const gameHub = {
//   name: 'Game Hub',
//   className: 'game-hub',
// };
const krustyBurger = {
  name: 'Krusty Burger',
  className: 'krusty-burger',
  imgPath: '/img/map.png',
};
const moesTavern = {
  name: 'Moes Tavern',
  className: 'moes-tavern',
  imgPath: '/img/map.png',
};
const townHall = {
  name: 'Town Hall',
  className: 'town-hall',
  imgPath: '/img/map.png',
};
const burnsManor = {
  name: 'Burns Manor',
  className: 'burns-manor',
  imgPath: '/img/map.png',
};
const simpsonsHouse = {
  name: 'Simpsons House',
  className: 'simpsons-house',
  imgPath: '/img/map.png',
};
const kwikEmart = {
  name: 'Kwik-E-Mart',
  className: 'kwik-e-mart',
  imgPath: '/img/map.png',
};
const nuclearPowerPlant = {
  name: 'Nuclear Power Plant',
  className: 'nuclear-power-plant',
  imgPath: '/img/map.png',
};
const townSquare = {
  name: 'Town Square',
  className: 'town-square',
  imgPath: '/img/map.png',
};
const elementarySchool = {
  name: 'Elementary School',
  className: 'elementary-school',
  imgPath: '/img/map.png',
};

// AI Lägg guess accuse vid rull listorna, tärning i mitten

// const computer1 = {
//   guess: 0, //the likelyhood of AI to accuse goes up by number of guesses.
// }

// const computer2 = {
//   guess: 0, //the likelyhood of AI to accuse goes up by number of guesses.
// }

const suspectsArray = [
  flanders,
  bob,
  edna,
  krusty,
  agnes,
  lovejoy,
];

const weaponsArray = [
  rope,
  revolver,
  candlestick,
  knife,
  wrench,
  baseballBat,
];

const roomsArray = [
  // gameHub,
  krustyBurger,
  moesTavern,
  townHall,
  burnsManor,
  simpsonsHouse,
  kwikEmart,
  nuclearPowerPlant,
  townSquare,
  elementarySchool,
];

export default { suspectsArray, weaponsArray, roomsArray };
