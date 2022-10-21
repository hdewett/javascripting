const pets = ['cat', 'dog', 'rat'];
// .length will give me 3 because there are 3 elements in array, it doesnt start at 0 even thought the first element in array is [0]
for (let i = 0;i < pets.length; i++ ) {
  pets[i] = pets [i] + 's';
}
console.log(pets);