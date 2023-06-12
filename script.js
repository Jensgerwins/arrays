const fruits = ["Watermelone", "Banane", "Cherry", "Kiwi", "Pineapple", "Apple"];
const animals = ["Dog", "Cat", "Lion"];
function removeItem(item, index) {
  const arraySlice = item.slice();
  arraySlice.splice(index, 1);
  return arraySlice;


}
console.log(removeItem(animals, 1));
console.log(animals);

console.log(removeItem(fruits, 3));
console.log(fruits);

const arr2 = [
  "Code is",
  "like humor",
  ".",
  "When you have",
  "to explain it, it's bad!",
];

const arr1 = ["Luke", "Anakin", true, "Obi Wan", 333];
function sumOfCharacters(arr) {

  let count = 0;
  for (let index = 0; index < arr.length; index++) {
    const lowercase = arr[index];
    if (typeof lowercase === "string") {
      count += lowercase.length;

    }

  }
  return count;

}

console.log(sumOfCharacters(arr1));
console.log(sumOfCharacters(arr2));


