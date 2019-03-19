function createBookShop(inventory){
return {
	inventory : inventory,
  inventoryValue: function(){
  return this.inventory.reduce(function(sum,book){
  	return sum + book.price;
  },0);
  },
  priceForTitle: function(title){
    return this.inventory.find(function(book){
        return book.title === title;
		}).price;
  } 
}
}

const inventory = [
  {title: "Harry Potter", price: 10},
  {title: "Eloquent Javascript", price: 15}
];

const bookshop = createBookShop(inventory);

bookshop.inventoryValue();
"--------------"
bookshop.priceForTitle("Eloquent Javascript");



//after object literal
function createBookShop(inventory){
return {
	inventory,
  inventoryValue(){
  return this.inventory.reduce(function(sum,book){
  	return sum + book.price;
  },0);
  },
  priceForTitle(title){
    return this.inventory.find(function(book){
        return book.title === title;
		}).price;
  } 
}
}

const inventory = [
  {title: "Harry Potter", price: 10},
  {title: "Eloquent Javascript", price: 15}
];

const bookshop = createBookShop(inventory);

bookshop.inventoryValue();
"--------------"
bookshop.priceForTitle("Eloquent Javascript");




///////////////
Excersize 1
Multiple Properties with Enhanced Notation
Refactor to use enhanced literal notation

const red = '#ff0000';
const blue = '#0000ff';

const COLORS = { red: red, blue: blue };

/////////////////
Excersize 2
Condensing Code with Enhanced Literals
Refactor the following to use enhance object literal syntax

const fields = ['firstName', 'lastName', 'phoneNumber'];
      
const props = { fields: fields };


//solution
const fields = ['firstName', 'lastName', 'phoneNumber'];
      
const props = { fields };


//Excersize 3
Literals in Functions
Refactor to use enhanced literal notation

const canvasDimensions = function(width, initialHeight) {
  const height = initialHeight * 9 /16;
  return { 
    width: width, 
    height: height 
  };
}

//solution
const canvasDimensions = function(width, initialHeight) {
  const height = initialHeight * 9 /16;
  return { 
    width,
    height
  };
}

//Excersize 4
Refactor to use enhanced literal notation
const color = 'red';

const Car = {
  color: color,
  drive: function() {
    return 'Vroom!';
  },
  getColor: function() {
    return this.color;
  }
};

//solution
const color = 'red';

const Car = {
  color,
  drive() {
    return 'Vroom!';
  },
  getColor() {
    return this.color;
  }
};
