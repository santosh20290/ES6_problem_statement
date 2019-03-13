//problem statement 1:
var computers = [
  {name: 'dell', ram: 12},
  {name: 'acer', ram: 5},
  {name: 'apple', ram: 16}
];

var allComputersCanRunProgram = true;
var onlySomeComputersCanRunProgram = false;

for(var i = 0; i < computers.length; i++){
  var computer = computers[i];
	if(computer.ram < 8){
    allComputersCanRunProgram = false;
  } else {
  	onlySomeComputersCanRunProgram = true;
  }
}

"================="
allComputersCanRunProgram
onlySomeComputersCanRunProgram
"============="
computers.every(function(computer){
	return computer.ram > 4
})

computers.some(function(computer){
	return computer.ram > 16
})

//problem statement 2
//want to know if all names length is more than 4
var names = [
"ganesh",
"Ahsan",
"izak"  
];
names.every(function(name){
	return name.length > 4;
})

names.some(function(name){
	return name.length > 4;
})

//problem statement 3

function Field(value){
	this.value = value
}
Field.prototype.validate = function(){
	return this.value.length > 0;
};

var username = new Field("test");
var password = new Field("blablabla");
var DOB = new Field("20/02/1990");

username.validate();
"================="
var fields = [username, password, DOB];
var isFormValid = fields.every(function(field){
	field.length > 0
})

isFormValid
if(isFormValid){
//submit form
}else{
//through exceptions
}


