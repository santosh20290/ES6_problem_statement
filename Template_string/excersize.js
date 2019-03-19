//example 1

function getMessage(){
let date = new Date().getFullYear();
	//return "The year is = " + date;
  return `The year is ${date}`;
}

getMessage()


//excersize 1
//Template Strings in Practice
//Refactor the function to use template strings

function doubleMessage(number) {
  return "Your number doubled is " + (2 * number);
}


//excersize 2
//Name Helpers
//Refactor the function to use template strings


function fullName(firstName, lastName) {
  return firstName + lastName;
}
