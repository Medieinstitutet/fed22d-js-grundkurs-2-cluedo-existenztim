import './style/style.scss';

// Data contains all the arrays needed for the game
import data from './script/storage';

console.log(data.suspectsArray);
console.log(data.weaponsArray);
console.log(data.roomsArray);

const containerRoom = document.querySelector('.container-room');

// Print out the room layout

const generateRooms = (containerVariable: Element | null, arrayName: string) => {
  for (const objectIdentifier of arrayName) {
    containerVariable.innerHTML += /* HTML */`
      <div class ="room-${objectIdentifier.className}">${objectIdentifier.name}</div>`;
  }
};

generateRooms(containerRoom, data.roomsArray);

let suspect = null;
let weapon = null;
let room = null;

/**
 *Draws a random card from each array and add to solution.
 */
const pickMysteryCards = () => {
  suspect = data.suspectsArray[Math.floor(Math.random() * data.suspectsArray.length)];
  const suspectIndex: number = data.suspectsArray.indexOf(suspect);
  data.suspectsArray.splice(suspectIndex, 1);

  weapon = data.weaponsArray[Math.floor(Math.random() * data.weaponsArray.length)];
  const weaponIndex: number = data.weaponsArray.indexOf(weapon);
  data.weaponsArray.splice(weaponIndex, 1);

  room = data.roomsArray[Math.floor(Math.random() * data.roomsArray.length)];
  const roomIndex: number = data.weaponsArray.indexOf(room);
  data.roomsArray.splice(roomIndex, 1);

  return { suspect, weapon, room };
};

pickMysteryCards();

/**
 *Combine remaining cards into one array.
 */

let gameCards = [];
gameCards = data.suspectsArray.concat(data.weaponsArray, data.roomsArray);
console.log(gameCards);

let count = 0;
const checkNumber = (random) => {
  if (random >= 3) {
    // make a move
  }
  count++;
  counts.textContent = count;
  console.log(count);
};

const diceButton = document.querySelector('#dice');
const counts = document.querySelector('#counter');

/**
 *Generate a random number between 1-6
 */
const generateRandomNumber = () => {
  const randomDiceNumber = Math.floor(Math.random() * 6) + 1; // +1 so 0 cant be picked, math.floor so 7 cant be picked
  checkNumber(randomDiceNumber);
};
diceButton.addEventListener('click', generateRandomNumber);

console.log('Solutuion ->', suspect.name, weapon.name, room.name);
console.table(data.suspectsArray);
console.table(data.weaponsArray);
console.table(data.roomsArray);
