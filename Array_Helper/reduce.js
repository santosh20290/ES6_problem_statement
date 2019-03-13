//reduce problem statement
var numbers = [10,20,30];
var sum = 0;
for (var i = 0;i< numbers.length; i++){
	sum += numbers[i];
}
"-------"
sum

numbers.reduce(function(sum,number){
	return sum + number;
},0);


//problem statement 2

var primaryColors = [
{color: 'red'},
{color: 'yellow'},
{color: 'blue'}
];

//["red",'yellow','blue']


primaryColors.reduce(function(previous, primaryColor){
	previous.push(primaryColor.color);
},[])



//problem statement - interview questions
//calculate paranthesis of string

//()()()
//((((
//(())))))



