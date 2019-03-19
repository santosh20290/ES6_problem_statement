/////////////////////////introduction to classes
function Car(options){
	this.title = options.title;
}

Car.prototype.review = function(){
	return "bakwas";
}
const car = new Car({title:"nano"});

car
car.review();



/////////////////////////prototyping inheritance

function Car(options){
	this.title = options.title;
}

Car.prototype.review = function(){
	return "bakwas";
}
const car = new Car({title:"nano"});

car
car.review();

function Toyota(options){
  Car.call(this, options);
	this.color = options.color;
}

Toyota.prototype = Object.create(Car.prototype);
Toyota.prototype.constructor = Toyota;

Toyota.prototype.look = function(){
	return "sexy";
}

const toyota = new Toyota({title:"new toyota",color:"red"})
"---------------"
toyota
toyota.review();
toyota.look();

//ES6 code
class Car{
  constructor(options){
    this.title = options.title;
  }
  review(){
    return "bakwas";
  }
}

const car = new Car({title:"nano"});

car
car.review()

////////////////

class Car{
  constructor(options){
    this.title = options.title;
  }
  review(){
    return "bakwas";
  }
}

const car = new Car({title:"nano"});

car
car.review()

class Toyota extends Car{
	constructor(options){
  	super(options);
    this.color = options.color;
  }
  
  drive(){
  	return "smooth";
  }
}
"======================="
const toyota = new Toyota({title:"new toyota",color:"blue"})
toyota
toyota.drive();
toyota.review();

