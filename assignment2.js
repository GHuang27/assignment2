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

// EVERY //
Array.prototype.myEvery = function() {

};

// REDUCE //
Array.prototype.myReduce = function() {

};

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