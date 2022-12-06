import './style/style.scss';

// Data contains all the arrays needed for the game
import data from './script/storage';

console.table(data.suspectsArray);
console.table(data.weaponsArray);
console.table(data.roomsArray);

const containerRoom = document.querySelector('.container-room');

// Print out the room layout

const generateHtml = (containerVariable: Element | null, arrayName: string) => {
  for (const objectIdentifier of arrayName) {
    containerVariable.innerHTML += /* HTML */`
      <div class ="room-${objectIdentifier.className}">${objectIdentifier.name}</div>`;
  }
};

generateHtml(containerRoom, data.roomsArray);
