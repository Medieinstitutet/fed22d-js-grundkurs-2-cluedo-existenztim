/**
 * This file contains all the items needed in the game
 */

// Suspects
const flanders = {
  name: 'Ned Flanders',
};

const bob = {
  name: 'Sideshow Bob',
};

const edna = {
  name: 'Edna Krabappel',
};

const krusty = {
  name: 'Krusty The Clown',
};

const agnes = {
  name: 'Agnes Skinner',
};

const lovejoy = {
  name: 'Helen Lovejoy',
};

// Weapons
const rope = {
  name: 'rope',
};

const revolver = {
  name: 'revolver',
};

const candlestick = {
  name: 'candlestick',
};

const knife = {
  name: 'knife',
};

const wrench = {
  name: 'wrench',
};

const baseballBat = {
  name: 'baseball bat',
};

// Rooms
// const gameHub = {
//   name: 'Game Hub',
//   className: 'game-hub',
// };
const krustyBurger = {
  name: 'Krusty Burger',
  className: 'krusty-burger',
};
const moesTavern = {
  name: 'Moes Tavern',
  className: 'moes-tavern',
};
const townHall = {
  name: 'Town Hall',
  className: 'town-hall',
};
const burnsManor = {
  name: 'Burns Manor',
  className: 'burns-manor',
};
const simpsonsHouse = {
  name: 'Simpsons House',
  className: 'simpsons-house',
};
const kwikEmart = {
  name: 'Kwik-E-Mart',
  className: 'kwik-e-mart',
};
const nuclearPowerPlant = {
  name: 'Nuclear Power Plant',
  className: 'nuclear-power-plant',
};
const townSquare = {
  name: 'Town Square',
  className: 'town-square',
};
const elementarySchool = {
  name: 'Elementary School',
  className: 'elementary-school',
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
