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

let suspect = '';
let weapon = '';
let room = '';

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

pickMysteryCards(); // Who killed Mr. Boddy with what in which room...
console.log(suspect, weapon, room);
console.table(data.suspectsArray);
console.table(data.weaponsArray);
console.table(data.roomsArray);
