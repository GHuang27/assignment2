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

// MAP //
Array.prototype.myMap = function(callbackFn) {
	const bob = [];
	for(let i = 0; i < this.length; i++) {
		if(this[i] === undefined) {
			bob.length++;
		}
		else {
			bob.myPush(callbackFn(this[i],i, this));
		};
	};
	return bob;
};

// FILTER //
Array.prototype.myFilter = function(callbackFn) {
	const bob = [];
	for(let i = 0; i < this.length; i++) {
		if(callbackFn(this[i], i, this) == true) {
			bob.myPush(this[i]);
		};
	};
	return bob;
};

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
Array.prototype.myEvery = function(callbackFn) {
	for(let i = 0; i < this.length; i++) {
		if(this[i] === undefined) continue;
		if(callbackFn(this[i], i, this) == false) {
			return false;
		}
	}
	return true;
};

// REDUCE //
Array.prototype.myReduce = function(callbackFn, start) {
	let isEmpty = true;
	for(let q = 0; q < this.length; q++) {
		if(this[q] != undefined) {
			isEmpty = false;
		}
	}
	if((isEmpty == true) && (start === undefined)) {
		throw TypeError("Reduce of empty array with no initial value");
	}
	let temp;
	let i = 0;
	
	if(start != undefined) {
		temp = start;
		for(; (i < this.length) && (temp === undefined); i++) {
			if(this[i] != undefined) {
				temp = this[i];
				temp = callbackFn(start, temp);
			};
		};
	}
	else {
		for(; (i < this.length) && (temp === undefined); i++) {
			if(this[i] != undefined) {
				temp = this[i];
			};
		};
	};
	for(; i < this.length; i++) {
		if(this[i] === undefined) continue;
		temp = callbackFn(temp, this[i]);
	};
	return temp;
};

// INCLUDES //
Array.prototype.myIncludes = function(item, start) {
	if((start === undefined) || (start <= 0)) {
		for(let i = 0; i < this.length; i++) {
			if(this[i] === item) {
				return true;
			};
		};
		return false;
	}
	else {
		if(start >= this.length) {
			return false;
		}
		else {
			for(; start < this.length; start++) {
				if(this[start] === item) {
					return true;
				};
			};
			return false;
		};
	};
};

/*
let arr = ['Bob', '2', '3'];
console.log("Inbuilt");
console.log(arr.includes('Bob'));
console.log(arr.includes('Bob',3));
console.log("Mine");
console.log(arr.myIncludes('Bob'));
console.log(arr.myIncludes('Bob',3));
*/

// INDEXOF //
Array.prototype.myIndexOf = function(item, start) {
	if(start === undefined) {
		for(let i = 0; i < this.length; i++) {
			if(this[i] === item) {
				return i;
			};
		}
		return -1;
	}
	else if(start >= this.length) {
		return -1;
	}
	else if(start < 0) {
		start = this.length + start;
		if(start < 0) {
			start = 0;
		};
		for(; start < this.length; start++) {
			if(this[start] === item) {
				return start;
			};
		};
		return -1;
	}
	else {
		for(; start < this.length; start++) {
			if(this[start] === item) {
				return start;
			};
		}
		return -1;
	};
};

/*
let arr = [2, 9, 9];
console.log("Inbuilt");
console.log(arr.indexOf(2));     // 0
console.log(arr.indexOf(7));     // -1
console.log(arr.indexOf(9, 2));  // 2
console.log(arr.indexOf(2, -1)); // -1
console.log(arr.indexOf(2, -44)); // 0
console.log("Mine");
console.log(arr.myIndexOf(2));     // 0
console.log(arr.myIndexOf(7));     // -1
console.log(arr.myIndexOf(9, 2));  // 2
console.log(arr.myIndexOf(2, -1)); // -1
console.log(arr.myIndexOf(2, -44)); // 0
*/

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(item, start) {
	if((start === undefined) || (start >= this.length)) {
		for(let i = this.length -1; i >= 0; i--) {
			if(this[i] === item) {
				return i;
			};
		};
		return -1;
	}
	else if(start < 0) {
		start = this.length + start;
		if(start < 0) {
			return -1;
		};
		for(; start >= 0; start--) {
			if(this[start] === item) {
				return start;
			};
		};
		return -1;
	}
	else {
		for(; start >= 0; start--) {
			if(this[start] === item) {
				return start;
			};
		};
		return -1;
	};
};

/*
let numbers = [2, 5, 9, 2];
console.log(numbers.lastIndexOf(2));     // 3
console.log(numbers.lastIndexOf(7));     // -1
console.log(numbers.lastIndexOf(2, 30));  // 3
console.log(numbers.lastIndexOf(2, 2));  // 0
console.log(numbers.lastIndexOf(2, -47)); // 0
console.log(numbers.lastIndexOf(2, -1)); // 3
console.log("Mine");
console.log(numbers.myLastIndexOf(2));     // 3
console.log(numbers.myLastIndexOf(7));     // -1
console.log(numbers.myLastIndexOf(2, 30));  // 3
console.log(numbers.myLastIndexOf(2, 2));  // 0
console.log(numbers.myLastIndexOf(2, -47)); // 0
console.log(numbers.myLastIndexOf(2, -1)); // 3
*/

// KEYS //
Object.grabKeys = function(item) {
	let keys = [];
	for(let prop in item) {
		keys.myPush(prop);
	};
	return keys;
};

/*
const obj = { 0: 'a', 1: 'b', 2: 'c' };
const anObj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.keys(obj)); // console: ['0', '1', '2']
console.log(Object.keys(anObj)); // console: ['2', '7', '100']
console.log(Object.keys('foo'));
console.log("Mine");
console.log(Object.grabKeys('foo'));
console.log(Object.grabKeys(obj)); // console: ['0', '1', '2']
console.log(Object.grabKeys(anObj)); // console: ['2', '7', '100']
*/

// VALUES //
Object.grabValues = function(item) {
	let values = [];
	for(let prop in item) {
		values.myPush(item[prop]);
	};
	return values;
};

/*
const obj = { foo: 'bar', baz: 42 };
console.log(Object.values(obj)); // ['bar', 42]
const arrayLikeObj1 = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.values(arrayLikeObj1 )); // ['a', 'b', 'c']
const arrayLikeObj2 = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.values(arrayLikeObj2 )); // ['b', 'c', 'a']
const my_obj = Object.create({}, { getFoo: { value: function() { return this.foo; } } });
my_obj.foo = 'bar';
console.log(Object.values(my_obj)); // ['bar']
console.log(Object.values('foo')); // ['f', 'o', 'o']
console.log("Mine");
console.log(Object.grabValues(obj)); // ['bar', 42]
console.log(Object.grabValues(arrayLikeObj1 )); // ['a', 'b', 'c']
console.log(Object.grabValues(arrayLikeObj2 )); // ['b', 'c', 'a']
my_obj.foo = 'bar';
console.log(Object.grabValues(my_obj)); // ['bar']
console.log(Object.grabValues('foo')); // ['f', 'o', 'o']
*/