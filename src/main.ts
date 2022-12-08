/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import './style/style.scss';

// Data contains all the arrays needed for the game
import data from './script/storage';

console.log(data.suspectsArray);
console.log(data.weaponsArray);
console.log(data.roomsArray);

// const containerRoom = document.querySelector('.container-room');
const diceButton = document.querySelector('#dice');
const counts = document.querySelector('#counter span');
const rolls = document.querySelector('#rolled span');

const getRoomId = document.querySelectorAll('[class^=room]');
let startingRoom = null;
let suspect = null;
let weapon = null;
let room = null;
let playerCards = null;
let gameCards: any[] = [];
const playerCardsArray: any[] = [];
const computer1CardsArray: any[] = [];
const computer2CardsArray: any[] = [];

let count = 0;
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

  // return { suspect, weapon, room };
};

pickMysteryCards();

/**
 *Combine remaining cards into one array.
 */

gameCards = data.suspectsArray.concat(data.weaponsArray, data.roomsArray); // 19 cards left

/**
 *Hand out 3 cards to the players.
 */

const pickPlayerCards = (arrayName: any[]) => {
  for (let i = 0; i < 3; i += 1) {
    playerCards = gameCards[Math.floor(Math.random() * gameCards.length)];
    const cardIndex: number = gameCards.indexOf(playerCards);
    arrayName.push(playerCards);
    gameCards.splice(cardIndex, 1);
  }
};

pickPlayerCards(playerCardsArray);
pickPlayerCards(computer1CardsArray);
pickPlayerCards(computer2CardsArray);

/**
 * Generate a starting location for player
 */

const selectRandomStartingRoom = () => {
  startingRoom = Math.floor(Math.random() * 9) + 1; // random number between 1-9
  switch (startingRoom) {
    case 0:
      getRoomId[0].classList.add('active');
      break;
    case 1:
      getRoomId[1].classList.add('active');
      break;
    case 2:
      getRoomId[2].classList.add('active');
      break;
    case 3:
      getRoomId[3].classList.add('active');
      break;
    case 4:
      getRoomId[4].classList.add('active');
      break;
    case 5:
      getRoomId[5].classList.add('active');
      break;
    case 6:
      getRoomId[6].classList.add('active');
      break;
    case 7:
      getRoomId[7].classList.add('active');
      break;
    case 8:
      getRoomId[8].classList.add('active');
      break;
    default:
      getRoomId[0].classList.add('active');
      break;
  }
};
selectRandomStartingRoom();

/**
 *Check if move is possible/ increase counter
 */

const checkNumber = (random: number) => {
  if (random > 3) {
    // const rooms = document.querySelectorAll('button');
    // rooms.forEach((roomSelected) => {
    //   roomSelected.addEventListener('click', makeRoomActive);
    // });
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

  if (randomDiceNumber > 3 && rolls !== null) {
    rolls.textContent = `You rolled a ${randomDiceNumber} and may move to another location!`;
  } else if (randomDiceNumber <= 3 && rolls !== null) {
    rolls.textContent = `You rolled a ${randomDiceNumber} and you are stuck!`;
  }

  checkNumber(randomDiceNumber);
};
diceButton?.addEventListener('click', generateRandomNumber);

// console.log('Solutuion ->', suspect.name, weapon.name, room.name);
