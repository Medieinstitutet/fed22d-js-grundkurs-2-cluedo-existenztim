/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import './style/style.scss';

// Data contains all the arrays needed for the game
import data from './script/storage';

// const containerRoom = document.querySelector('.container-room');
const diceButton = document.querySelector('#dice');
const counts = document.querySelector('.counter span');
const rolls = document.querySelector('#rolled span');
const info = document.querySelector('#info span');
const PlayerCardsdisplay = document.querySelector('#player');
const getRoomId = document.querySelectorAll('[class^=room]');
const guessBtn = document.querySelector('#guess');
const mainPage = document.querySelector('main');
const options = document.querySelector('#guess-accuse-options');
const resultSection = document.querySelector('#result');
const resultText = document.querySelector('#accuse-reveal');
const accuse = document.querySelector('#accuse');
const accuseBtn = document.querySelector('#submit-accuse');

options?.classList.toggle('hidden');
resultSection?.classList.toggle('hidden');

const accusedSuspect = <HTMLInputElement>document.querySelector('#suspects');
const accusedWeapon = <HTMLInputElement>document.querySelector('#weapon');
const accusedRoom = <HTMLInputElement>document.querySelector('#locations');
// const computer1Card = document.querySelector('#computer1');
// const computer2Card = document.querySelector('#computer2');

let guess = false;
let startingRoom = null;
let suspect: { name: string; } | null = null;
let weapon: { name: string; } | null = null;
let room: { name: string; className?: string; } | null = null;
let playerCards = null;
let gameCards: unknown[] = [];
const playerCardsArray: string[] = [];
const computer1CardsArray: string[] = [];
const computer2CardsArray: string[] = [];
let randomDiceNumber = 0;
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

  return { suspect, weapon, room };
};

gameCards = data.suspectsArray.concat(data.weaponsArray, data.roomsArray); // Combine remaining cards into one array

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

/**
 *Toggle accusation button depending on roll/player has moved.
 */

const makeAccusation = () => {
  if (guess) {
    guessBtn?.classList.add('active-btn');
  } else {
    guessBtn?.classList.remove('active-btn');
  }
};

/**
 *Move player to new room
 */

function makeRoomActive(e: any) {
  getRoomId.forEach((roomSelected) => {
    if (roomSelected.getAttribute('id') === e.currentTarget.id && info !== null) {
      roomSelected.classList.add('active');
      console.log(e);
      info.textContent = 'You may make a guess.';
    } else {
      roomSelected.classList.remove('active');
    }
  });
  randomDiceNumber = 0; // So you can only move once per round.
  makeAccusation();
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  checkNumber(randomDiceNumber);
}

/**
 *Check if move is possible/ increase counter
 */

const checkNumber = (random: number) => {
  if (random > 3) {
    guess = true;
    getRoomId.forEach((roomSelected) => {
      roomSelected.addEventListener('click', makeRoomActive);
    });
  } else {
    guess = false;
    getRoomId.forEach((roomSelected) => {
      roomSelected.removeEventListener('click', makeRoomActive);
    });
  }
  count += 1;
  if (counts != null) {
    counts.textContent = String(count);
  }

  console.log(count);
};

/**
 *Generate a random number between 1-6
 */

const generateRandomNumber = () => {
  randomDiceNumber = Math.floor(Math.random() * 6) + 1; // +1 so 0 cant be picked, math.floor so 7 cant be picked

  if (randomDiceNumber > 3 && rolls !== null && info !== null) {
    rolls.textContent = `You rolled a ${randomDiceNumber}!`;
    info.textContent = 'You may move to another location!';
  } else if (randomDiceNumber <= 3 && rolls !== null && info !== null) {
    rolls.textContent = `You rolled a ${randomDiceNumber}!`;
    info.textContent = ' You are stuck!';
  }
  guessBtn?.classList.remove('active-btn'); // You can only guess if you have moved.
  checkNumber(randomDiceNumber);
};
diceButton?.addEventListener('click', generateRandomNumber);

console.log(playerCardsArray);
console.log(computer1CardsArray);
console.log(computer2CardsArray);

/**
 *Generate HTML for player card. //might change to loop
 */

const renderCardMarkup = () => {
  let cartItemsToRender = '';
  const cardElement = /* html */ `
      <div class ="card">${playerCardsArray[0].name}</div>
      <div class ="card">${playerCardsArray[1].name}</div>
      <div class ="card">${playerCardsArray[2].name}</div>`;
  cartItemsToRender += cardElement;
  if (PlayerCardsdisplay !== null) {
    PlayerCardsdisplay.innerHTML = cartItemsToRender;
  }
};
/**
 *Accuse Suspect and compare solution to accusation.
 */
const accuseCompare = () => {
  if (
    (suspect !== null && accusedSuspect.value === suspect.name)
    && (weapon !== null && accusedWeapon.value === weapon.name)
    && (room !== null && accusedRoom.value === room.name)
  ) {
    mainPage?.classList.toggle('tot-hidden');
    resultSection?.classList.toggle('hidden');
    if (resultText !== null) {
      resultText.innerHTML = 'You win!';

      console.log('you win!');
    }
  } else {
    mainPage?.classList.toggle('tot-hidden');
    resultSection?.classList.toggle('hidden');
    if (resultText !== null) {
      resultText.innerHTML = 'You loose!';
      console.log('you loose!');
    }
  }
};

/**
 *Initialize Accusation window.
 */

const accuseInit = () => {
  if (accusedSuspect !== null && info !== null) {
    options?.classList.toggle('hidden');
    info.textContent = 'Press submit to send your accusation.';
  }
};
accuse?.addEventListener('click', accuseInit);
accuseBtn?.addEventListener('click', accuseCompare);
// Run initial functions
pickMysteryCards();
pickPlayerCards(playerCardsArray);
pickPlayerCards(computer1CardsArray);
pickPlayerCards(computer2CardsArray);
selectRandomStartingRoom();
renderCardMarkup();

// only for development
// if (suspect !== null && weapon !== null && room !== null) {
//   console.log('Solutuion ->', suspect.name, weapon.name, room.name);
// }
