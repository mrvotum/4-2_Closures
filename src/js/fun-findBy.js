export default function findBy(arr, searchField, searchName) {
  // в каком поле искать, что искать
  return arr.filter((item) => {
    if (searchField === 'name') {
      return (item.name === searchName);
    }
    if (searchField === 'type') {
      return (item.type === searchName);
    }
    if (searchField === 'description' && item.description.indexOf(searchName) + 1) {
      return searchName;
    }
  });
}
