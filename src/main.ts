/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import './style/style.scss';

// Data contains all the arrays needed for the game
import data from './script/storage';

const diceButton = document.querySelector('#dice');
const counts = document.querySelectorAll('.counter span');
const rolls = document.querySelector('#rolled span');
const info = document.querySelector('#info span');
const PlayerCardsdisplay = document.querySelector('#player');
const ComputerCardsdisplay = document.querySelectorAll('.computer');
const getRoomId = document.querySelectorAll('[class^=room]');
const guessBtn = document.querySelector('#guess');
const mainPage = document.querySelector('main');
const resultSection = document.querySelector('#result');
const resultText = document.querySelector('#accuse-reveal');
const solutionDisplay = document.querySelector('#solution');
const accuseBtn = document.querySelector('#accuse');
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
let gameCards: any[] = [];
const playerCardsArray: any[] = [];
const computer1CardsArray: any[] = [];
const computer2CardsArray: any[] = [];
const computer1RevealArray: any[] = [];
const computer2RevealArray: any[] = [];
let randomDiceNumber = 0;
let count = 0;
let matchString = 0;

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

const pickPlayerCards = (arrayName: unknown[]) => {
  for (let i = 0; i < 6; i += 1) {
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
 *Generate HTML for player card.
 */

const renderCardMarkup = (arrayToRender: any[], elementToDisplay: Element | null | undefined) => {
  let cartItemsToRender = '';
  const element = elementToDisplay;
  // eslint-disable-next-line no-restricted-syntax
  for (const card of arrayToRender) {
    const cardElement = /* html */ `
      <li class ="card">${card.name as string}</div>`;
    cartItemsToRender += cardElement;
    if (element !== null && element !== undefined) {
      element.innerHTML = cartItemsToRender;
    }
  }
};

/**
 *Compare guess with AI cards and reveal if it's a match.
 */

const guessCompare = (arrayName: any[]) => {
  if (info !== null) {
    for (let i = 0; i < arrayName.length; i++) {
      if (accusedSuspect.value === arrayName[i].name
      || accusedWeapon.value === arrayName[i].name
      || accusedRoom.value === arrayName[i].name) {
        matchString += 1;
        const matchIndex = i;
        const matchIndexTest = arrayName[i];

        if (computer1RevealArray.length < 6) {
          computer1RevealArray.push(matchIndexTest);
        } else {
          computer2RevealArray.push(matchIndexTest);
        }

        arrayName.splice(matchIndex, 1);
        i = 0; // fixes re-index after splice
        // console.log(`array length! ${arrayName.length}`);
        // console.log('array 1');
        // console.log(computer1RevealArray);
        // console.log(computer1CardsArray);
        // console.log('array 2');
        // console.log(computer2RevealArray);
        // console.log(computer2CardsArray);
        if (computer1RevealArray.length < 6) {
          renderCardMarkup(computer1RevealArray, ComputerCardsdisplay[0]);
        } else {
          renderCardMarkup(computer2RevealArray, ComputerCardsdisplay[1]);
        }
      }
    }
    info.textContent = `Your guess resulted in ${matchString}/3 matches!`;
  }
};
console.log(ComputerCardsdisplay.item(1));
/**
 *Setup for guessCompare().
 */

const guessCompareInit = () => {
  matchString = 0;
  // must guess right in barts cards first
  if (computer1CardsArray.length !== 0) {
    console.log('array 1 running');
    guessCompare(computer1CardsArray);
  } else {
    console.log('array 2 running');
    guessCompare(computer2CardsArray);
  }
  guessBtn?.removeEventListener('click', guessCompareInit);
  guessBtn?.classList.remove('active-btn');
};

/**
 *Toggle accusation button depending on diceroll/player has moved.
 */

const makeGuess = () => {
  if (guess && guessBtn !== null) {
    guessBtn?.classList.add('active-btn');
  } else {
    guessBtn?.classList.remove('active-btn');
    guessBtn?.removeEventListener('click', guessCompareInit);
  }
};

/**
 *Move player to new room
 */

function makeRoomActive(e: any) {
  guessBtn?.addEventListener('click', guessCompareInit);
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
  makeGuess();
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
    for (let i = 0; i < counts.length; i++) {
      counts[i].textContent = String(count);
    }
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
 *Accuse Suspect and compare solution to accusation.
 */

const accuseCompare = () => {
  if (suspect !== null && weapon !== null && room !== null && resultText !== null && solutionDisplay !== null) {
    if (
      (accusedSuspect.value === suspect.name)
    && (accusedWeapon.value === weapon.name)
    && (accusedRoom.value === room.name)
    ) {
      mainPage?.classList.toggle('tot-hidden');
      resultSection?.classList.toggle('hidden');
      resultText.innerHTML = 'You win!';
      solutionDisplay.innerHTML = `${suspect.name} killed Mr Burns at ${room.name} with a ${weapon.name}!`;
      console.log('you win!');
    } else {
      mainPage?.classList.toggle('tot-hidden');
      resultSection?.classList.toggle('hidden');
      resultText.innerHTML = 'You loose!';
      solutionDisplay.innerHTML = `${suspect.name} killed Mr Burns at ${room.name} with a ${weapon.name}!`;
      console.log('you loose!');
    }
  }
};

accuseBtn?.addEventListener('click', accuseCompare);

// Run initial functions
pickMysteryCards();
pickPlayerCards(playerCardsArray);
pickPlayerCards(computer1CardsArray);
pickPlayerCards(computer2CardsArray);
selectRandomStartingRoom();
renderCardMarkup(playerCardsArray, PlayerCardsdisplay);

// only for development
// if (suspect !== null && weapon !== null && room !== null) {
//   console.log('Solutuion ->', suspect.name, weapon.name, room.name);
// }
