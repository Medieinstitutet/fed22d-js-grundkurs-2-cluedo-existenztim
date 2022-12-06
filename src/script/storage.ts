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
const cellar = {
  name: 'Cellar',
  className: 'cellar',
};
const diningRoom = {
  name: 'Dining-Room',
  className: 'dining-room',
};
const kitchen = {
  name: 'Kitchen',
  className: 'kitchen',
};
const ballroom = {
  name: 'Ballroom',
  className: 'ballroom',
};
const conservatory = {
  name: 'Conservatory',
  className: 'conservatory',
};
const billiardRoom = {
  name: 'Billiard-Room',
  className: 'billiard-room',
};
const library = {
  name: 'Library',
  className: 'library',
};
const study = {
  name: 'Study',
  className: 'study',
};
const hall = {
  name: 'Hall',
  className: 'hall',
};
const lounge = {
  name: 'Lounge',
  className: 'lounge',
};

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
  cellar,
  diningRoom,
  kitchen,
  ballroom,
  conservatory,
  billiardRoom,
  library,
  study,
  hall,
  lounge,
];
export default { suspectsArray, weaponsArray, roomsArray };
