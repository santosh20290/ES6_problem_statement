Distance Traveled
Use the 'reduce' helper to find the sum of all the distances traveled.  Assign the result to the variable 'totalDistance'

var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];

var totalDistance;


/////
totalDistance = trips.reduce(function(sum,trip){
    return sum + trip.distance;
},0);




//second excersize
Reducing Properties
Use the 'reduce' helper to create an object that tallies the number of sitting and standing desks.  The object returned should have the form '{ sitting: 3, standing: 2 }'.  The initial value has been provided to you.

var desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' }
];

var deskTypes = desks.reduce(function() {
    
}, { sitting: 0, standing: 0 });


//solution

var deskTypes = desks.reduce(function(result,desk) {
    if(desk.type == "sitting") ++result.sitting;
    if(desk.type == "standing") ++result.standing;
    return result;
}, { sitting: 0, standing: 0 });


//excersize 3
Hardmode: Custom 'Unique' Helper
Another really hard one!  Write a function called 'unique' that will remove all the duplicate values from an array.
For example, given the following array:
var numbers = [1, 1, 2, 3, 4, 4];
Your function should return
[1, 2, 3, 4]

Hint: Use the 'reduce' and 'find' helpers.  

function unique(array) {
  
}
