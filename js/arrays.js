/**** Random neat resources:
 * https://www.freecodecamp.org/news/the-javascript-array-handbook/
****/

const arr = [1, 2, 3];

// ⭐ Push method - Add an element to the end of and array and increment index for it
arr.push(4);
console.log(`Array after pushing integer 4 in array: ${arr}`);

// ⭐ length is the amount of elements in an Array
console.log(`Length of Array: ${arr.length}`);

// ⭐ Clone an Array (this is not a reference but a new Array)
const cloneArray = [...arr];
console.log(`Cloned array: ${cloneArray}`);

// ⭐ Let's loop through an Array
for (let i=0; i < arr.length; i++) {
	console.log(`Yay looping: ${arr[i]}`)
}

//⭐ Remove last element from Array
arr.pop();
console.log(`Array after 'popped' element: ${arr}`);

//⭐ Array destructioring
let [first, second, house] = ["😊", "🍄", "🏠"];
console.log(`using variables to return Array elements: ${first}, ${second} and ${house}`);

// ⭐ Getting the second element from a nested Array (first index from nested Array)
let nestedArray = [0, 1, 2, [3, 4, 5]];
console.log(`The second element from the nested Array is number ${nestedArray[3][1]}`);

// ⭐ Using the rest parameter instead of spread
const restArray = ["first", "second", ...arr];
console.log(`Add another array as 'the rest' at the end: ${restArray}`);

// ⭐ Merging two Arrays
let Array1 = ["Hey", "Hello", "Ola"];
let Array2 = ["Hoe gaat het?", "How are you?", "Commo estas?"];

const mergedArray = [...Array1, ...Array2];
console.log(mergedArray);

// I think there is no difference between the .concat method and merging Arrays via ...spread
Array1 = [1, 2];
Array2 = [3, 4];
Array3 = [5, 6];

const merge1 = Array1.concat(Array2, Array3);
const merge2 = [...Array1, ...Array2, ...Array3];

console.log("Two ways of merging an Array",
	"1: ", merge1,
	"2: ", merge2
	)

// shift (add to beginning) and unshift (remove from beginning) methods
Array1.shift()
console.log("shift (remove) index 0 ", Array1);


Array2.unshift("Alles goed?")
console.log("Add to index 0 ", Array2);

// "Slice" a piece out of the Array
const SlicingTheArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(SlicingTheArray.slice(4)); // should slice and return index 4 until last one (index 10)

