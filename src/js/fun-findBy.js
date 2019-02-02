export default function findBy(arr, searchName) {
  return arr.filter(function (item) {
    return (item.name === searchName);
  });
}
