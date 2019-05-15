let cars = ["Ford", "Volvo", "BMW", "Chevy"];
console.log("The Length of cars is " + cars.length)
//document.getElementById("demo").innerHTML = cars;

var moreCars = ["Mercedes","Ford","Lexus","Toyota", "Honda"];

// Merges both arrays and gets unique items
let totalCars = cars.concat(moreCars); 
console.log(totalCars);

//     Use the indexOf method to console.log the index of Honda.
console.log (moreCars.indexOf("Honda"));

//Use the lastIndexOf method to console.log the index of Ford.
console.log(totalCars.lastIndexOf("Ford"));

//Use the join method to covert the array totalCars into a string called stringOfCars.
const stringOfCars = totalCars.join();
console.log(stringOfCars);

//Use the split method to convert stringOfCars back intro an array called totalCars.
const carsSplit = stringOfCars.split();
console.log(carsSplit);

//Use the reverse method to create an array carsInReverse which is the array totalCars in reverse.
const carsInReverse = totalCars.reverse();


//Use the sort method to put the array carsInReverse into alphabetical order.
const alphaOrder = carsInReverse.sort();
console.log(alphaOrder);

//Based on the types of cars you used, predict which item in the array should be at index 0
 //Honda

//Use the following code to confirm or reject your prediction:
//alert(carsInReverse.indexOf('honda'));

//Use the slice method to remove Ford and Honda from the carsInReverse array and move them into a new array called removedCars.
const removedCars = carsInReverse.slice(3, 5)

//Use the splice method to remove the 2nd and 3rd items in the array carsInReverse and add Ford and Honda in their place.
carsInReverse.splice(1, 2, 'Ford', 'Honda');

//Use the push method to add the types of cars that you removed using the splice method to the carsInReverse array.
carsInReverse.push('bmw', 'chevy');
console.log(carsInReverse);

//Use the pop method to remove and console.log the last item in the array carsInReverse.
 const deletedItem = carsInReverse.pop();
 console.log(deletedItem);
//     
// Use the shift method to remove and console.log the first item in the array carsInReverse.
const shiftedItem = carsInReverse.shift();
console.log(shiftedItem);
//     
//Use the unshift method to add a new type of car to the array carsInReverse. 
carsInReverse.unshift('Tesla');
console.log(carsInReverse);
//     

//     Create an array called numbers with the following items: 23, 45, 0, 2 Write code that will add 2 to each item in the array numbers.
//     .forEach() requires a function to be passed into it as its first argument. Build a function that will add 2 and then use .forEach() to pass each number into your freshly built function. const numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34]

const numbers = [23,45,0,2];
numbers.forEach((item, index)=>{
  numbers[index] = item + 2;
  
});

console.log(numbers);