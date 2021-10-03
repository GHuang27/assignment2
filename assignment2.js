// FOR EACH //
Array.prototype.myEach = function(callbackFn) {
	for(let i = 0; i < this.length; i++) {
		if(this[i] === undefined) continue;
		//Element
		//Element, index
		//element, index, Array
		callbackFn(this[i], i, this);
	};
};

/*
const arr = [1,2,,7];
console.log("myEach: ")
arr.myEach( (x, i, arr) => console.log(x, i, arr) );

console.log("forEach: ")
arr.forEach( (x, i, arr) => console.log(x, i, arr) );
*/

// MAP //
Array.prototype.myMap = function(callbackFn) {
	const bob = [];
	for(let i = 0; i < this.length; i++) {
		if(this[i] === undefined) {
			bob.length++;
		}
		else {
			bob.push(callbackFn(this[i],i, this));
		};
	};
	return bob;
};

/*
const arr = [1,2,,4];
let why = [];
why = arr.myMap(x => x + 1);
console.log("Mine");
console.log(why);
why = arr.map(x => x + 1);
console.log("Inbuilt");
console.log(why);
*/



// FILTER //
Array.prototype.myFilter = function(callbackFn) {
	const bob = [];
	for(let i = 0; i < this.length; i++) {
		if(callbackFn(this[i], i, this) == true) {
			bob.push(this[i]);
		};
	};
	return bob;
};

/*
const arr = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
console.log(arr);
const result = arr.myFilter(word => word.length > 6);
console.log("Mine");
console.log(result);
const result2 = arr.filter(word => word.length > 6);
console.log("Inbuilt");
console.log(result2);
*/

// SOME //
Array.prototype.mySome = function(callbackFn) {
	for(let i = 0; i < this.length; i++) {
		if(callbackFn(this[i], i, this) == true) {
			return true;
		};
	};
	return false;
};

/*
const arr = ["spray", "limit", "elite", "exuberant", "destruction", "present", , , , , ];
const even = (element) => element % 2 === 0;
console.log(arr.mySome(word => word.length > 6));
console.log(arr.some(word => word.length > 6));
*/

// EVERY //
Array.prototype.myEvery = function(callbackFn) {
	for(let i = 0; i < this.length; i++) {
		if(this[i] === undefined) continue;
		if(callbackFn(this[i], i, this) == false) {
			return false;
		}
	}
	return true;
};

/*
const arr = [, 2, 2, 4, , 2,];
const even = (element) => element % 2 === 0;
console.log(arr.myEvery(even));
console.log(arr.every(even));	
*/

// REDUCE //
Array.prototype.myReduce = function(callbackFn, start) {
	if((this.length == 0) && (start === undefined)) {
		throw TypeError("Reduce of empty array with no initial value");
	}
	let temp;
	let i = 0;
	
	if(start != undefined) {
		for(; (i < this.length) && (temp === undefined); i++) {
			if(this[i] != undefined) {
				temp = this[i];
			};
		};
		temp = callbackFn(start, temp);
	}
	else {
		temp = this[0];
	};
	for(; i < this.length; i++) {
		if(this[i] === undefined) continue;
		temp = callbackFn(temp, this[i]);
	}
	return temp;
};

const array1 = [1,3,4,];
const reducer = (previousValue, currentValue) => previousValue + currentValue;
// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
console.log(array1.myReduce(reducer, 5));
// expected output: 10
// 5 + 1 + 2 + 3 + 4
// expected output: 15
/*
console.log("Inbuilt");
console.log(array1.reduce(reducer));
// expected output: 10
// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15
console.log("That was weird");
*/

// INCLUDES //
Array.prototype.myIncludes = function() {

};

// INDEXOF //
Array.prototype.myIndexOf = function() {

};

// PUSH //
Array.prototype.myPush = function (...args) {
	let arg_i = 0;
	let length = this.length;
	//last element of 'this' is at length - 1
	for(let i = length; i < length + args.length; i++) {
		this[i] = args[arg_i];
		arg_i++;
	}
	return this.length;
}

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function() {

};

// KEYS //
Object.grabKeys = function() {

};

// VALUES //
Object.grabValues = function() {

};