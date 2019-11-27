//typeof 用來檢查變數的型別

var a = 3;
console.log( typeof a );  //number

var b = 'john';
console.log( typeof b);  //string

var c = {};
console.log( typeof c );  //object

var d = [];
console.log( typeof d );  //object(?)
console.log(Object.prototype.toString.call(d));  //[object Array]

//函數建構式
function Person(name){
	this.name = name;
}

var e = new Person('jane');
console.log( typeof e );  //object
//instanceof會在原型鏈上找 如果e的原型鏈上包含Person 則回傳true
console.log( e instanceof Person );  //true

console.log(undefined);  //undefined

console.log(null);  //null 原本是object 在ES7裡面修正為null

var f = function(){};
console.log( typeof f )