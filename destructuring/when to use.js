//use case 1
function signup(email,password,dob,city,username){
//create user
}

signup("abc@gmail.com","test","1/1/1900","latur","sandy")

//use case
//here sequence is not important.we can have a list in any sequence

function signup({email,password,dob,city,username}){
//create user
}

const user = {
email : "abc@gmail.com",
  password : "global",
  dob : "1/1/1900",
  city : "latur",
  username : "sandy"
}
signup(user)


//use case2

const points = [
	[4, 5],
	[7, 8],
	[2, 1]
];

//what we want

[
  {x:4, y:5},
  {x:7, y:8},
  {x:2, y:1}
]
"----------------"
points.map(function(pair){
	const x = pair[0];
  const y = pair[1];
  return {x:x, y:y}
})

"---------------------"
points.map(function([x,y]){
  return {x, y}
})
