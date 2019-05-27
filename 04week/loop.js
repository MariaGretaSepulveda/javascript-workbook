// Use a do...while loop to console.log the numbers from 1 to 1000.
 var counter = 0
 do{
//    console.log("This is number " + counter + " of the count");
 counter = counter + 1;
  } while (counter <=1000);
// Create an object (an array with keys and values) called person with the following data:
// firstName: "Jane"
// lastName: "Doe"
// birthDate: "Jan 5, 1925"
// gender: "female"
let person = [{firstName: 'Jane', lastName: 'Doe', birthDate: 'Jan 5, 1925', gender: 'female' },
{
    firstName: 'Marky', lastName: 'Topete', birthDate: 'Jan 5, 1987', gender: 'Male'},
{
    firstName: 'Greta', lastName: 'Sepulveda', birthDate: 'Jan 12, 1987', gender: 'Female'
}];
// Use a for...in loop and if statement to console.log the value associated with the key birthDate if the birth year is an odd number.
let text = '';
let x;
for (let x in person){
    // console.log(person[x].birthDate)
    let k=new Date(person[x].birthDate);
    // console.log(k)
    let year = k.getFullYear();
    // console.log(year)
    if (year%2!=0)

{
    console.log(person[x].birthDate);
}   
}
// Create an arrayOfPersons that contains mulitiple objects. You can simply copy/paste the person object you made above multiple times. Feel free to change the values to reflect multiple people you might have in your database.
// Use .map() to map over the arrayOfPersons and console.log() their information.
var arrayOfPerson = [{
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female"
  },
  {
    firstName: "Pierre",
    lastName: "Vigues",
    birthDate: "Feb 6, 1932",
    gender: "male"
  },
  {
    firstName: "Bella",
    lastName: "Martin",
    birthDate: "May 12, 1891",
    gender: "female"
  }
];

// console.log(person.map(x => x.firstName + ' '+ x.lastName + ' born on '+ x.birthDate));
console.log(arrayOfPerson.map(x => x.firstName + x.lastName));
// Use .filter() to filter the persons array and console.log only males in the array.
// console.log(person.filter(x => x.gender !== 'Male'));
console.log(person.filter(x => x.gender !=='male'));
// Use .filter() to filter the persons array and console.log only people that were born before Jan 1, 1990.
console.log(person.filter(x => new Date(x.birthDate ) > new Date('Jan 1, 1990')));

