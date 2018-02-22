//1.
//Create a JavaScript file and 
//name it assignment-1.js. 
//Inside this file,

//2.
//Create a variable named `numbers`
//and assign an empty array to it.
var numbers = [];

//3.
//Using a for-loop and the Array push() method,
//insert the integers (numbers) 0 to 9 
//into the array you named numbers.
for (i = 0; i <= 9; i = i + 1)
  numbers.push(i);

//4.
//Test that you used the array push method correctly
//by console logging the first item in the array.
console.log(numbers);

//5.
//Console log the last item in the array.
console.log(numbers[numbers.length - 1]);

//6.
//Create another variable named car and 
//assign an empty object to it.
var car = {};

//7.
//Give the object a property called colour and 
//assign it the value of "blank".
car.colour = 'blank';