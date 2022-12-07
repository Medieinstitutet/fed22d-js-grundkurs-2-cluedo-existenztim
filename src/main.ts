/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import './style/style.scss';

// Data contains all the arrays needed for the game
import data from './script/storage';

console.log(data.suspectsArray);
console.log(data.weaponsArray);
console.log(data.roomsArray);

const containerRoom = document.querySelector('.container-room');
const diceButton = document.querySelector('#dice');
const counts = document.querySelector('#counter');
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

let gameCards: any[] = [];
gameCards = data.suspectsArray.concat(data.weaponsArray, data.roomsArray); // 19 cards left
console.log(gameCards);

/**
 *Hand out 3 cards to the players.
 */
const playerCardsArray: any[] = [];
const computer1CardsArray: any[] = [];
const computer2CardsArray: any[] = [];

let playerCards = null;

const pickPlayerCards = (arrayName: any[]) => {
  for (let i = 0; i < 3; i += 1) {
    playerCards = gameCards[Math.floor(Math.random() * gameCards.length)];
    const cardIndex: number = gameCards.indexOf(playerCards);
    arrayName.push(playerCards);
    gameCards.splice(cardIndex, 1);
  }
  console.log(gameCards);
  console.log(playerCardsArray);
};

pickPlayerCards(playerCardsArray);
pickPlayerCards(computer1CardsArray);
pickPlayerCards(computer2CardsArray);

let count = 0;
const checkNumber = (random: number) => {
  if (random >= 3) {
    // make a move
  }
  count += 1;
  counts.textContent = count;
  console.log(count);
};

/**
 *Generate a random number between 1-6
 */
const generateRandomNumber = () => {
  const randomDiceNumber = Math.floor(Math.random() * 6) + 1; // +1 so 0 cant be picked, math.floor so 7 cant be picked
  checkNumber(randomDiceNumber);
};
diceButton?.addEventListener('click', generateRandomNumber);

console.log('Solutuion ->', suspect.name, weapon.name, room.name);
