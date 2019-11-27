/*
prototype

All JavaScript objects inherit the properties and methods from their prototype.

Objects created using an object literal, or with new Object(), inherit from a prototype called Object.prototype.

Objects created with new Date() inherit the Date.prototype.

The Object.prototype is on the top of the prototype chain.

All JavaScript objects (Date, Array, RegExp, Function, ....) inherit from the Object.prototype.
*/

//用function產生新的prototype 習慣上class的字首大寫
function Person(name , lastName, age ){
	this.name = name;
	this.lastName = lastName;
	this.age = age;
	this.logName = function(){
		console.log(this.name + ' ' + this.lastName);
	}
};

//把log這個method抽出來 可以避免新的object多產生新的method
Person.prototype.logAge = function(){
	console.log(`${this.name}'s age is ${this.age} years old`);
};

const nick = new Person('Nick', 'Doe', 18);
const dolly = new Person('Dolly', 'Doe', 21);

nick.logAge();
dolly.logAge();

nick.logName();
dolly.logName();

//新增新的property至object很簡單 直接寫就可以了 也只會新增至該object
nick.height = 180;

console.log(`Nick's height is ${nick.height} cm`);


//但是要新增property至protype就不能直接寫 因為protopype不是一個存在的物件 所以要加上.protype方法
Person.prototype.nationality = 'American';

console.log(`Nick is an ${nick.nationality}`);


//-----------------------

/*有些人會直接在 Array.prototype 上面加一些函式，讓自己可以更方便地做一些操作，原理也是這樣。
可是一般來說，不推薦直接去修改不屬於你的 Object。
*/

Array.prototype.last = function () {
    return this[this.length - 1];
};
  
console.log([1,2,3].last()) // 3