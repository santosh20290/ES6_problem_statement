//Excersize 1
//A Constant Exercise of Letting Variables Be Variables
Imagine that you are building an application to manage a user's Facebook profile.  A profile might have a 'name', 'age', and 'dateOfBirth'.
Declare three variables with these same names, making sure to use 'const' or 'let' depending on whether you expect the value to change over time.
Declare three variables with these same names, making sure to use 'const' or 'let' depending on whether you expect the value to change over time.

//Excersize 2
Const/Let Refactoring
The following code uses 'var' instead of 'const' and 'let'. Refactor the function to use the new keywords.  Be sure to consider whether the variable should be declared using 'const' or 'let' depending on whether the variable gets reassigned or not.


var statuses = [ 
  { code: 'OK', response: 'Request successful' },
  { code: 'FAILED', response: 'There was an error with your request' },
  { code: 'PENDING', response: 'Your reqeust is still pending' }
];
var message = '';
var currentCode = 'OK';

for (var i = 0; i < statuses.length; i++) {
  if (statuses[i].code === currentCode) {
    message = statuses[i].response;
  }
}


