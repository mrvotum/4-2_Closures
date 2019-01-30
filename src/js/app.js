const playersArr = [
  { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
  { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
  { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
];

export default function findBy(arr, searchName) {
  return arr.filter(function(item, i, arr){
    return (item.name === searchName);
  });
}

let results = findBy(playersArr, 'заклинание');

console.log(results);
