'user strict'

//2. closure

function createCounter() {
	   let currentValue = 0;

	   return function() {
	     return currentValue ++;
	   }	
}

let counter = createCounter();

console.log(counter()); 
console.log(counter()); 
console.log(counter()); 
console.log(counter()); 

let counter2 = createCounter();
console.log('--------------'); 
console.log(counter2()); 
console.log(counter2()); 
console.log(counter2()); 
console.log(counter2());
console.log('--------------'); 

console.log('count with object:'); 

//2.2 closure return object

function createCounterWithObject(){
	let currentValue = 1;
	
	return{
		getNext: function(){
			return currentValue ++;
		},
		setValue: function(value){
			currentValue = value;
		},
		reset: function(){
			currentValue = 1;
		}	
	}	
}

let objectCounter = createCounterWithObject();

console.log(objectCounter.getNext()); 
console.log(objectCounter.getNext());
console.log(objectCounter.getNext()); 
console.log(objectCounter.getNext());
objectCounter.setValue(-10);
console.log(objectCounter.getNext());
console.log(objectCounter.getNext()); 
console.log(objectCounter.getNext());
console.log(objectCounter.getNext()); 
console.log(objectCounter.getNext());
objectCounter.reset();
console.log(objectCounter.getNext());
console.log(objectCounter.getNext()); 
console.log(objectCounter.getNext());
console.log(objectCounter.getNext()); 
console.log(objectCounter.getNext());

console.log('--------------'); 
console.log('count with function:'); 

//2.3 closure return function

function createCounterWithFunction(){
	let currentValue = 1;
	
	function creator(){
		return currentValue ++;
	}
	
	creator.setValue = function(value){
		currentValue = value;
	}
	
	creator.reset = function(){
		currentValue = 1;
	}
	
	return creator;	
}

objectCounter = createCounterWithFunction();

console.log(objectCounter()); 
console.log(objectCounter()); 
console.log(objectCounter()); 
console.log(objectCounter()); 
objectCounter.setValue(-10);
console.log(objectCounter()); 
console.log(objectCounter()); 
console.log(objectCounter()); 
console.log(objectCounter()); 
objectCounter.reset();
console.log(objectCounter()); 
console.log(objectCounter()); 
console.log(objectCounter()); 
console.log(objectCounter()); 
console.log(objectCounter()); 

console.log('--------------'); 











