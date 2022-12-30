/**
 * This file contains all the items needed in the game
 */

// Suspects
const flanders = {
  name: 'Ned Flanders',
  className: 'ned-flanders',
  imgPath: 'img/person.webp',
  alt: 'Category icon represented as a suspicious figure',
};

const bob = {
  name: 'Sideshow Bob',
  className: 'sideshow-bob',
  imgPath: 'img/person.webp',
  alt: 'Category icon represented as a suspicious figure',
};

const edna = {
  name: 'Edna Krabappel',
  className: 'edna-krabappel',
  imgPath: 'img/person.webp',
  alt: 'Category icon represented as a suspicious figure',
};

const krusty = {
  name: 'Krusty The Clown',
  className: 'krusty-the-clown',
  imgPath: 'img/person.webp',
  alt: 'Category icon represented as a suspicious figure',
};

const agnes = {
  name: 'Agnes Skinner',
  className: 'agnes-skinner',
  imgPath: 'img/person.webp',
  alt: 'Category icon represented as a suspicious figure',
};

const lovejoy = {
  name: 'Helen Lovejoy',
  className: 'helen-lovejoy',
  imgPath: 'img/person.webp',
  alt: 'Category icon represented as a suspicious figure',
};

// Weapons
const rope = {
  name: 'rope',
  className: 'rope',
  imgPath: 'img/sword.webp',
  alt: 'Category icon represented by a sword/spear',
};

const revolver = {
  name: 'revolver',
  className: 'revolver',
  imgPath: 'img/sword.webp',
  alt: 'Category icon represented by a sword/spear',
};

const candlestick = {
  name: 'candlestick',
  className: 'candlestick',
  imgPath: 'img/sword.webp',
  alt: 'Category icon represented by a sword/spear',
};

const knife = {
  name: 'knife',
  className: 'knife',
  imgPath: 'img/sword.webp',
  alt: 'Category icon represented by a sword/spear',
};

const wrench = {
  name: 'wrench',
  className: 'wrench',
  imgPath: 'img/sword.webp',
  alt: 'Category icon represented by a sword/spear',
};

const baseballBat = {
  name: 'baseball bat',
  className: 'baseball-bat',
  imgPath: 'img/sword.webp',
  alt: 'Category icon represented by a sword/spear',
};

// Rooms
// const gameHub = {
//   name: 'Game Hub',
//   className: 'game-hub',
// };

const krustyBurger = {
  name: 'Krusty Burger',
  className: 'krusty-burger',
  imgPath: 'img/map.webp',
  alt: 'Category icon represented by a map',
};
const moesTavern = {
  name: 'Moes Tavern',
  className: 'moes-tavern',
  imgPath: 'img/map.webp',
  alt: 'Category icon represented by a map',
};
const townHall = {
  name: 'Town Hall',
  className: 'town-hall',
  imgPath: 'img/map.webp',
  alt: 'Category icon represented by a map',
};
const burnsManor = {
  name: 'Burns Manor',
  className: 'burns-manor',
  imgPath: 'img/map.webp',
  alt: 'Category icon represented by a map',
};
const simpsonsHouse = {
  name: 'Simpsons House',
  className: 'simpsons-house',
  imgPath: 'img/map.webp',
  alt: 'Category icon represented by a map',
};
const kwikEmart = {
  name: 'Kwik-E-Mart',
  className: 'kwik-e-mart',
  imgPath: 'img/map.webp',
  alt: 'Category icon represented by a map',
};
const nuclearPowerPlant = {
  name: 'Nuclear Power Plant',
  className: 'nuclear-power-plant',
  imgPath: 'img/map.webp',
  alt: 'Category icon represented by a map',
};
const townSquare = {
  name: 'Town Square',
  className: 'town-square',
  imgPath: 'img/map.webp',
  alt: 'Category icon represented by a map',
};
const elementarySchool = {
  name: 'Elementary School',
  className: 'elementary-school',
  imgPath: 'img/map.webp',
  alt: 'Category icon represented by a map',
};

// highscore people by default

const highScore1 = {
  name: 'Apu',
  rounds: 91,
};

const highScore2 = {
  name: 'Comic Guy',
  rounds: 48,
};

const highScore3 = {
  name: 'Barney',
  rounds: 123,
};

const highScore4 = {
  name: 'Willie',
  rounds: 56,
};

const highScore5 = {
  name: 'Milhouse',
  rounds: 86,
};

const highScore6 = {
  name: 'Lenny',
  rounds: 104,
};

const highScore7 = {
  name: 'Quimby',
  rounds: 39,
};

const highScore8 = {
  name: 'Fat Tony',
  rounds: 69,
};

const highScore9 = {
  name: 'Smithers',
  rounds: 75,
};

// declaring arrays
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
// only 9 spots filled, so the first correct solution will always fit into highscore no matter rounds.
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
