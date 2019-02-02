import findBy from '../js/fun-findBy';

test('Find "урон" by name', () => {
  const inputArr = [
    { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
    { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
    { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
  ];
  const inputField = 'name';
  const inputName = 'урон';

  const expected = [
    { description: 'Страница описания элемента интерфейса', name: 'урон', type: 'help' },
  ]; // ожидает
  const received = findBy(inputArr, inputField, inputName); // получает
  expect(received).toEqual(expected); // сравнивает
});

test('Find "attack" by type', () => {
  const inputArr = [
    { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
    { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
    { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
  ];
  const inputField = 'type';
  const inputName = 'attack';

  const expected = [
    { description: 'Атака магическим заклинанием', name: 'заклинание', type: 'attack' },
  ]; // ожидает
  const received = findBy(inputArr, inputField, inputName); // получает
  expect(received).toEqual(expected); // сравнивает
});

test('Find "элемента" by description', () => {
  const inputArr = [
    { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
    { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
    { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
  ];
  const inputField = 'description';
  const inputName = 'элемента';

  const expected = [
    { description: 'Страница описания элемента интерфейса', name: 'урон', type: 'help' },
  ]; // ожидает
  const received = findBy(inputArr, inputField, inputName); // получает
  expect(received).toEqual(expected); // сравнивает
});
