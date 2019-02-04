const findBy = (searchField, searchName) => item => item[searchField] === searchName;

// const findBy = function (searchField, searchName) {
//   return function (item) { // = элементу массива (name: 'маг', type ...)
//     return item[searchField] === searchName;
//   };
// };
// <= расшифровка стрелочной функции

export default findBy;
