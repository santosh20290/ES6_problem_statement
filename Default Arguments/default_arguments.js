function makeAjaxRequest(url, method){
if(!method){
	method = "GET"
}
  return method;
}

makeAjaxRequest("google.com")

makeAjaxRequest("google.com","POST")


//solution

function makeAjaxRequest(url, method = "GET"){
  return method;
}

makeAjaxRequest("google.com")

makeAjaxRequest("google.com","POST")


//Excersize 1

Using Default Arguments
Refactor the following code to use default function arguments.  Be sure to remove any unused code after you refactor it.
function sum(a, b) {
  if (a === undefined) {
    a = 0; 
  }
  
  if (b === undefined) {
    b = 0; 
  }
  
  return a + b;
}

//solution
function sum(a = 0, b = 0) {
    return a + b;
}

//Excersize 2

Dumping Unused Code
Refactor the following code to use default function arguments.  Be sure to remove any unused code after you refactor it.
function addOffset(style) {
  if (!style) {
    style = {}; 
  }
  
  style.offset = '10px';
  
  return style;
}

//solution
function addOffset(style = {}) {
  style.offset = '10px';
  return style;
}
