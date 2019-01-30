import findBy from '../js/app';

test('Find magic', () => {
  const inputArr = [
    { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
    { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
    { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
  ];
  const inputName = 'урон';

  const expected = [{"description": "Страница описания элемента интерфейса", "name": "урон", "type": "help"}]; // ожидает
  const received = findBy(inputArr, inputName); // получает
  expect(received).toEqual(expected); // сравнивает
});
