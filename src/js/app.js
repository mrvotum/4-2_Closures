import findBy from './fun-findBy.js';

const characterDescription = [
  { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
  { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
  { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
];

const results = findBy(characterDescription, 'description', 'магическими');
// массив где искать, в каком поле искать, что искать

console.log(results);
