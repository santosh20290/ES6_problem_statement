//example 1

let double = function(number){
return 2 * number;
}

double(2);


//example 2

let numbers = [1,2,3];

numbers.map(function(number){
	return 2 * number
});

numbers.map(number => 2 * number);


//example 3

const team = {
	members : ["pankaj","ganesh"],
	teamName : "pune warrior",
	teamSummary : function(){
		return this.members.map(function(member)  {
			return `${member} is of ${this.teamName}`;
    });
	}
}

team.teamSummary();
team.teamSummary();

-------------
lexical this
-------------


//excersize 1
//Refactoring Keyword Functions
//The function below uses the 'function' keyword.  There's nothing wrong with using the 'function' keyword here, but it might look a bit nicer if we refactor it to use the fat arrow syntax instead.
//Refactor the code below to use a fat arrow function.  Remember the rules of fat arrow functions:
//1.If the function has a single expression in its body, the curly braces and 'return' keyword can be removed
//2.If the function has a single argument, the parentheses around the argument list can be removed

spconst fibonacci = function(n) {
  if (n < 3) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
