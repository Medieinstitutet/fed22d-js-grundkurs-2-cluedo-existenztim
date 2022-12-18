/**
 * This file contains all the items needed in the game
 */

// Suspects
const flanders = {
  name: 'Ned Flanders',
  className: 'ned-flanders',
  imgPath: 'img/person.png',
};

const bob = {
  name: 'Sideshow Bob',
  className: 'sideshow-bob',
  imgPath: 'img/person.png',
};

const edna = {
  name: 'Edna Krabappel',
  className: 'edna-krabappel',
  imgPath: 'img/person.png',
};

const krusty = {
  name: 'Krusty The Clown',
  className: 'krusty-the-clown',
  imgPath: 'img/person.png',
};

const agnes = {
  name: 'Agnes Skinner',
  className: 'agnes-skinner',
  imgPath: 'img/person.png',
};

const lovejoy = {
  name: 'Helen Lovejoy',
  className: 'helen-lovejoy',
  imgPath: 'img/person.png',
};

// Weapons
const rope = {
  name: 'rope',
  className: 'rope',
  imgPath: 'img/sword.png',
};

const revolver = {
  name: 'revolver',
  className: 'revolver',
  imgPath: 'img/sword.png',
};

const candlestick = {
  name: 'candlestick',
  className: 'candlestick',
  imgPath: 'img/sword.png',
};

const knife = {
  name: 'knife',
  className: 'knife',
  imgPath: 'img/sword.png',
};

const wrench = {
  name: 'wrench',
  className: 'wrench',
  imgPath: 'img/sword.png',
};

const baseballBat = {
  name: 'baseball bat',
  className: 'baseball-bat',
  imgPath: 'img/sword.png',
};

// Rooms
// const gameHub = {
//   name: 'Game Hub',
//   className: 'game-hub',
// };
const krustyBurger = {
  name: 'Krusty Burger',
  className: 'krusty-burger',
  imgPath: 'img/map.png',
};
const moesTavern = {
  name: 'Moes Tavern',
  className: 'moes-tavern',
  imgPath: 'img/map.png',
};
const townHall = {
  name: 'Town Hall',
  className: 'town-hall',
  imgPath: 'img/map.png',
};
const burnsManor = {
  name: 'Burns Manor',
  className: 'burns-manor',
  imgPath: 'img/map.png',
};
const simpsonsHouse = {
  name: 'Simpsons House',
  className: 'simpsons-house',
  imgPath: 'img/map.png',
};
const kwikEmart = {
  name: 'Kwik-E-Mart',
  className: 'kwik-e-mart',
  imgPath: 'img/map.png',
};
const nuclearPowerPlant = {
  name: 'Nuclear Power Plant',
  className: 'nuclear-power-plant',
  imgPath: 'img/map.png',
};
const townSquare = {
  name: 'Town Square',
  className: 'town-square',
  imgPath: 'img/map.png',
};
const elementarySchool = {
  name: 'Elementary School',
  className: 'elementary-school',
  imgPath: 'img/map.png',
};

// highscore people by default

const highScore1 = {
  name: 'Apu',
  rounds: 121,
};

const highScore2 = {
  name: 'Comic Guy',
  rounds: 78,
};

const highScore3 = {
  name: 'Barney',
  rounds: 153,
};

const highScore4 = {
  name: 'Willie',
  rounds: 86,
};

const highScore5 = {
  name: 'Milhouse',
  rounds: 86,
};

const highScore6 = {
  name: 'Lenny',
  rounds: 134,
};

const highScore7 = {
  name: 'Quimby',
  rounds: 69,
};

const highScore8 = {
  name: 'Fat Tony',
  rounds: 99,
};

const highScore9 = {
  name: 'Smithers',
  rounds: 105,
};
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

const highScoresArray = [
  highScore1,
  highScore2,
  highScore3,
  highScore4,
  highScore5,
  highScore6,
  highScore7,
  highScore8,
  highScore9,
];

export default {
  suspectsArray, weaponsArray, roomsArray, highScoresArray,
};
