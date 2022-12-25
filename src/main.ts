/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import './style/style.scss';

// Data contains all the arrays needed for the game
import data from './script/storage';

// const declaration
const diceButton = document.querySelector('#dice');
const counts = document.querySelectorAll('.counter span');
const rolls = document.querySelector('#rolled span');
const info = document.querySelector('#info span');
const PlayerCardsdisplay = document.querySelector('#player');
const ComputerCardsdisplay = document.querySelectorAll('.computer');
const getRoomId = document.querySelectorAll('[class^=room]');
const mainPage = document.querySelector('main');
const nameInput = document.querySelector('.intro');
const resultSection = document.querySelector('#result');
const helpSection = document.querySelector('#help');
const highScoreSection = document.querySelector('#high-score');

const resultText = document.querySelector('#accuse-reveal');
const smallScreen = document.querySelector('#mobile');
const solutionDisplay = document.querySelector('#solution');

const playBtn = <HTMLButtonElement>document.querySelector('#play');
const guessBtn = <HTMLButtonElement>document.querySelector('#guess');
const highScoreBtn = <HTMLButtonElement>document.querySelector('#high-score-toggle');
const resulthighScoreBtn = <HTMLButtonElement>document.querySelector('#result-high-score-toggle');
const accuseBtn = <HTMLButtonElement>document.querySelector('#accuse');
const helpBtn = <HTMLButtonElement>document.querySelector('#help-toggle');
const playAgainBtn = <HTMLButtonElement>document.querySelector('#play-again');

const playerCardsArray: any[] = [];
const computer1CardsArray: any[] = [];
const computer2CardsArray: any[] = [];
const computer1RevealArray: any[] = [];
const computer2RevealArray: any[] = [];

const accusedSuspect = <HTMLInputElement>document.querySelector('#suspects');
const accusedWeapon = <HTMLInputElement>document.querySelector('#weapon');
const accusedRoom = <HTMLInputElement>document.querySelector('#locations');
const nameInputValue = <HTMLInputElement>document.querySelector('#nickname');

resultSection?.classList.toggle('hidden');
helpSection?.classList.toggle('tot-hidden');
highScoreSection?.classList.toggle('tot-hidden');
smallScreen?.classList.toggle('tot-hidden');
mainPage?.classList.toggle('tot-hidden');
highScoreBtn.classList.add('tot-hidden');
helpBtn.classList.add('tot-hidden');

// let declaration
let userName = 'Homer'; // placeholder
let guess = false;
let startingRoom = null;
let highScoreEndingScene = false;
let suspect: { name: string; className: string; imgPath: string; alt: string; } | null = null;
let weapon: { name: string; className: string; imgPath: string; alt: string; } | null = null;
let room: { name: string; className: string; imgPath: string; alt: string; } | null = null;
let playerCards = null;
let gameCards: any[] = [];
let randomDiceNumber = 0;
let count = 0;
let matchString = 0;

/**
 *Start Game.
 */

const startGame = () => {
  if (nameInputValue !== undefined && nameInputValue.value.length !== 0) {
    mainPage?.classList.toggle('tot-hidden');
    nameInput?.classList.toggle('intro-out');
    highScoreBtn.classList.toggle('tot-hidden');
    helpBtn.classList.toggle('tot-hidden');
    userName = nameInputValue.value;
  } else {
    nameInputValue.value = 'IsThatYouHomer?';
  }
};

/**
 *Draws a random card from each array and add to solution.
 */

const pickMysteryCards = () => {
  suspect = data.suspectsArray[Math.floor(Math.random() * data.suspectsArray.length)];
  const suspectIndex: number = data.suspectsArray.indexOf(suspect);
  data.suspectsArray.splice(suspectIndex, 1); // remove index so it can't be picked by players

  weapon = data.weaponsArray[Math.floor(Math.random() * data.weaponsArray.length)];
  const weaponIndex: number = data.weaponsArray.indexOf(weapon);
  data.weaponsArray.splice(weaponIndex, 1);

  room = data.roomsArray[Math.floor(Math.random() * data.roomsArray.length)];
  const roomIndex: number = data.roomsArray.indexOf(room);
  data.roomsArray.splice(roomIndex, 1);
  gameCards = data.suspectsArray.concat(data.weaponsArray, data.roomsArray); // Combine remaining cards into one array
  return { suspect, weapon, room };
};
pickMysteryCards();

/**
 *Hand out 6 cards to the players.
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
  let cardItemsToRender = '';
  const element = elementToDisplay;
  // eslint-disable-next-line no-restricted-syntax
  for (const card of arrayToRender) {
    const cardElement = /* html */ `
      <li class ="card">${card.name as string}
      <img src = ${card.imgPath as string} alt = ${card.alt as string}><li>`;
    cardItemsToRender += cardElement;
    if (element !== null && element !== undefined) {
      element.innerHTML = cardItemsToRender;
    }
  }
};

/**
 *Compare guess with AI cards and reveal if it's a match.
 */

const guessCompare = (arrayName: any[]) => {
  if (info !== null) {
    for (let i = arrayName.length - 1; i >= 0; i--) {
      if (accusedSuspect.value === arrayName[i].className
      || accusedWeapon.value === arrayName[i].className
      || accusedRoom.value === arrayName[i].className) {
        matchString += 1;
        const matchIndexTransfer = arrayName[i];

        if (computer1RevealArray.length < 6) {
          computer1RevealArray.push(matchIndexTransfer);
          renderCardMarkup(computer1RevealArray, ComputerCardsdisplay[0]);
        } else {
          computer2RevealArray.push(matchIndexTransfer);
          renderCardMarkup(computer2RevealArray, ComputerCardsdisplay[1]);
        }
        arrayName.splice(i, 1);
      }
    }
    info.textContent = `Your guess resulted in ${matchString}/3 matches!`;
  }
};

/**
 *Setup for guessCompare().
 */

const guessCompareInit = () => {
  matchString = 0;
  if (computer1CardsArray.length !== 0) { // must guess right on barts cards first
    guessCompare(computer1CardsArray);
  } else {
    guessCompare(computer2CardsArray);
  }
  guessBtn?.removeEventListener('click', guessCompareInit);
  guessBtn?.classList.remove('active-btn');
};

/**
 *Toggle guess button depending on diceroll/player has moved.
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
 *Toggle visibility for help window.
 */

const helpToggle = () => {
  if (helpBtn !== null && helpSection !== null && mainPage !== null) {
    helpSection.classList.toggle('tot-hidden');
    highScoreBtn.classList.toggle('tot-hidden');
    mainPage.classList.toggle('tot-hidden');
    if (helpBtn.innerHTML === 'Return') {
      helpBtn.innerHTML = 'HELP!';
    } else {
      helpBtn.innerHTML = 'Return';
    }
  }
};

/**
 *Toggle visibility for highscore.
 */

const highScoreToggle = () => {
  if (highScoreBtn !== null && highScoreSection !== null && mainPage !== null) {
    highScoreSection.classList.toggle('tot-hidden');
    helpBtn.classList.toggle('tot-hidden');
    mainPage.classList.toggle('tot-hidden');
    if (highScoreBtn.innerHTML === 'Return') {
      highScoreBtn.style.right = '120px';
      highScoreBtn.innerHTML = 'Highscore';
    } else {
      highScoreBtn.style.right = '10px';
      highScoreBtn.innerHTML = 'Return';
    }
  }
  // highscore toggle from result scene
  if (highScoreEndingScene === true && highScoreBtn !== null && highScoreSection !== null && mainPage !== null) {
    helpBtn.classList.add('tot-hidden');
    mainPage.classList.add('tot-hidden');
    resultSection?.classList.toggle('hidden');
    playAgainBtn?.classList.remove('hidden');
    highScoreBtn.classList.toggle('tot-hidden');
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
      // console.log(e);
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
};

/**
 *Generate a random number between 1-6
 */

const generateRandomNumber = () => {
  randomDiceNumber = Math.floor(Math.random() * 6) + 1; // +1 so 0 cant be picked, math.floor so 7 cant be picked
  if (randomDiceNumber > 3 && rolls !== null && info !== null) {
    rolls.textContent = `You rolled a ${randomDiceNumber}!`;
    info.textContent = 'Woho! You may move to another location!';
  } else if (randomDiceNumber <= 3 && rolls !== null && info !== null) {
    rolls.textContent = `You rolled a ${randomDiceNumber}!`;
    info.textContent = ' D"oh! You are stuck!';
  }
  guessBtn?.classList.remove('active-btn'); // You can only guess if you have moved.
  checkNumber(randomDiceNumber);
};

/**
 *Generate HTML for highscore.
 */

const renderHighscore = () => {
  const highScoreTable = document.querySelector('#high-score-table');
  data.highScoresArray.sort((a, b) => ((a.rounds > b.rounds) ? 1 : -1)); // lowest to highest
  if (data.highScoresArray.length > 10) {
    data.highScoresArray.splice(10, 1); // only top 10
  }
  let cardItemsToRender = /* html */`

  <tr>
    <th>Name</th>
    <th>Rounds</th>
  </tr>
  `;

  const element = highScoreTable;
  // eslint-disable-next-line no-restricted-syntax
  for (const card of data.highScoresArray) {
    const cardElement = /* html */ `
      <tr>
      <td>${card.name}</td>
      <td> ${card.rounds}</td>
      </tr>`;
    cardItemsToRender += cardElement;
    if (element !== null && element !== undefined) {
      element.innerHTML = cardItemsToRender;
    }
  }
};

/**
 *Initial highscore.
 */

const checkHighscores = () => {
  // Retrive HighscoresArray OR empty array (parse requires a string, not null)
  data.highScoresArray = JSON.parse(localStorage.getItem('highScorePlayers') || '[]');
  renderHighscore();
};

/**
 *Accuse Suspect and compare solution to accusation.
 */

const accuseCompare = () => {
  if (suspect !== null && weapon !== null && room !== null
    && resultText !== null && solutionDisplay !== null
    && helpSection !== null && highScoreSection !== null) {
    const suspectValueString = accusedSuspect.value.replaceAll('-', ' ');
    const roomValueString = accusedRoom.value.replaceAll('-', ' ');
    const weaponValueString = accusedWeapon.value.replaceAll('-', ' ');

    highScoreEndingScene = true;

    highScoreBtn.classList.add('tot-hidden');
    helpBtn.classList.add('tot-hidden');
    helpSection.classList.add('tot-hidden');
    mainPage?.classList.toggle('tot-hidden');
    resultSection?.classList.toggle('hidden');

    solutionDisplay.innerHTML = `Your accused ${suspectValueString} for killing Mr Burns at 
      ${roomValueString} with a ${weaponValueString}.<br><br>`;
    // correct accusation
    if (
      (accusedSuspect.value === suspect.className)
    && (accusedWeapon.value === weapon.className)
    && (accusedRoom.value === room.className)
    ) {
      resultText.innerHTML = `You win ${userName}!<br><br>`;
      solutionDisplay.innerHTML += `Chief Wiggum will take over from here, ${suspect.name} will
      be taken into custody.<br><br>`;
      const newHighscore = {
        name: userName,
        rounds: count,
      };
      data.highScoresArray.push(newHighscore);
      localStorage.setItem('highScorePlayers', JSON.stringify(data.highScoresArray));
      // wrong accusation
    } else {
      resultText.innerHTML = `You loose ${userName}!<br><br>`;
      solutionDisplay.innerHTML += ` The truth is that ${suspect.name} killed Mr Burns at ${room.name} 
      with a ${weapon.name}!<br><br> Unfortunately only correct solutions reaches the highscore.<br><br>`;
    }
  }
  checkHighscores();
};

/**
 *Replay the game.
 */

const refreshPage = () => {
  window.location.reload();
};

// Add event listeners to buttons
playBtn?.addEventListener('click', startGame);
playAgainBtn?.addEventListener('click', refreshPage);
diceButton?.addEventListener('click', generateRandomNumber);
helpBtn?.addEventListener('click', helpToggle);
highScoreBtn?.addEventListener('click', highScoreToggle);
resulthighScoreBtn?.addEventListener('click', highScoreToggle);
accuseBtn?.addEventListener('click', accuseCompare);

// Run initial functions
pickPlayerCards(playerCardsArray);
pickPlayerCards(computer1CardsArray);
pickPlayerCards(computer2CardsArray);
selectRandomStartingRoom();
renderCardMarkup(playerCardsArray, PlayerCardsdisplay);
checkHighscores();

// only for development
// if (suspect !== null && weapon !== null && room !== null) {
//   console.log('Solutuion ->', suspect.name, weapon.name, room.name);
// }

// console.log(playerCardsArray);
// console.log(computer1CardsArray);
// console.log(computer2CardsArray);
