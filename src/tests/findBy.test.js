import findBy from '../js/findBy';

test('Find "урон" by name', () => {
  const inputArr = [
    { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
    { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
    { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
  ];
  const inputFinder = findBy('name', 'урон');

  const expected = [
    { description: 'Страница описания элемента интерфейса', name: 'урон', type: 'help' },
  ]; // ожидает

  const received = inputArr.filter(inputFinder); // получает
  expect(received).toEqual(expected); // сравнивает
});

test('Find "attack" by type', () => {
  const inputArr = [
    { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
    { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
    { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
  ];
  const inputFinder = findBy('type', 'attack');

  const expected = [
    { description: 'Атака магическим заклинанием', name: 'заклинание', type: 'attack' },
  ]; // ожидает
  const received = inputArr.filter(inputFinder); // получает
  expect(received).toEqual(expected); // сравнивает
});

test('Find "элемента" by description', () => {
  const inputArr = [
    { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
    { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
    { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
  ];
  const inputFinder = findBy('description', 'Страница описания элемента интерфейса');

  const expected = [
    { description: 'Страница описания элемента интерфейса', name: 'урон', type: 'help' },
  ]; // ожидает
  const received = inputArr.filter(inputFinder); // получает
  expect(received).toEqual(expected); // сравнивает
});
