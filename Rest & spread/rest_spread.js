//problem statement REST operator
function addNumbers(numbers){
	return numbers.reduce(function(sum,number){
  	return sum + number;
  },0)
}

addNumbers([1,2,3,4]);

//what if i call addNumbers(1,2,3,4)

//solution
function addNumbers(...numbers){
	return numbers.reduce(function(sum, number){
  	return sum + number;
  },0)
}

addNumbers(1,2,3,4)


//problem statement Spread operator

const defaultColors = ["black","white"];
const usersFavorateColors = ["red","orage"];

defaultColors.concat(usersFavorateColors);

//we can achive same result with spread operator

[...defaultColors, ...usersFavorateColors]

//even we can add new item in array that is not possible through concat i.e.
["blue", "blabla", ...defaultColors, ...usersFavorateColors]



//example

function validateShoppingList(...items){
	if(items.indexOf("mill") < 0){
  	return ["milk",...items];
  }
  return items;
}

validateShoppingList("apple","chicken","eggs","bread")



//Excersize 1

Many, Many Arguments
Refactor the following function to use the rest operator.  Remember, an argument using the rest operator does *not* need to be called 'rest'.
function product(a, b, c, d, e) {
  var numbers = [a,b,c,d,e];
  
  return numbers.reduce(function(acc, number) {
    return acc * number;
  }, 1)
}

//solution

function product(...numbers) {
  return numbers.reduce(function(acc, number) {
    return acc * number;
  }, 1)
}


//Excersize 2

Spreadin' Arrays

Refactor the following to use the spread operator.

function join(array1, array2) {
  return array1.concat(array2);
}

//solution

function join(array1, array2) {
  return [...array1, array2];
}

//Excersize 3

Mixing Rest and Spread
Refactor the following to use the only the rest operator

function unshift(array, a, b, c, d, e) {
  return [a, b, c, d, e].concat(array);
}

//solution
function unshift(array, ...numbers) {
  return [...numbers,...array];
}



