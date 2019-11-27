//-----變數,函式與環境----------------------------------------------------------

b();  //Called b! 因為函式再創造階段就已經全部存入記憶體中，因此可以在他前面呼叫
console.log(a);  //undefine 因為變數在創造階段只會存入變數名稱，在執行階段才會賦值，如果在他之前呼叫，會得到'未定義'


var a = 'Hello World!';

console.log(a);  //Hello World! 

function b(){
	console.log('Called b!');
}



console.log('--------')
//-----關係鏈---------------------------------------------------------------------
//當<1><2>的 e()執行環境中找不到d,他會從詞彙環境的上一層開始找,也就是c()
//如果c()也找不到,才會到更高層全域環境中找

var d = 'something'; //這一行沒有功能，因為在全域變數中會被 d = false 覆蓋

function c(){
	function e(){
		console.log(d);
	}
	e();  //<1> undefined:因為在呼叫e()之後才指定d,因此JS只存了d = undefined而還沒有賦值
	var d = true;
	e();  //<2> true:已經執行了 var d = true
}

c();  //undefine true / 如果把C()裡面的 var d = true 刪掉，就會變成something something。因為something還沒被false覆蓋 

var d = false;  //這一行也沒有功能，因為<1>在關係鏈中會先去找上一層c()中有沒有d變數
//結果是有，但是在下面，所以只要c()裡面有d變數，就不會在往更上一層(全域變數)去找

c();  //undefine true / 但是如果把C()裡面的 var d = true 刪掉，就會變成false false



console.log('--------')
//-----物件與函式-----------------------------------------------------------------
//使用'物件實體語法'創造object是比new更好的方法
//用大括號去定義，用冒號區隔名稱和值，用逗號分開每個變數

var victor = {
	firstName: 'Victor',
	lastName: 'Kuo',
	address: {
		street: '1st street',
		city: 'New York',
		state: 'NY',
	} ,
}

console.log(victor);


//前面創造的victor已經在全域變數中，現在把它傳入函式中
function greet(person){
	console.log('Hi ' + person.firstName);
}

greet(victor);  //Hi Victor


//雖然有點奇怪，但是物件可以在任何地方被建立
//JS遇到大括號，就認為在這裡要建立一個物件
//在這邊greet()直接把新建立的物件讀入函式，所以在這裡建立物件也是可行的
greet({firstName: 'Mary',lastName: 'Doe'});  //Hi Marry


//另外可以利用'點'運算子增加物件的值
victor.nickName = 'Cia';  //直接新增一個值

victor.address2 = {
	street: '2st street',
		city: 'New York',
		state: 'NY',
}  //或是再新增一個物件



console.log('----------');
//------利用物件創造'偽裝命名空間'-----------------------------------------------

//如果現在以下兩個變數的名稱相同，後會覆蓋前
var greet = 'Hello!';
var greet = 'Hola!';

console.log(greet); //Hola!  因為前一個greet被後面覆蓋


//但是許多框架會使用偽裝'命名空間'的方式來確保變數名稱不會被覆蓋
var EnglishGreet = {
	greet: 'Hello'
}

var SpanishGreet = {
	greet: 'Hola'
}

console.log(EnglishGreet.greet);  //Hello!



console.log('----------');
//------一級函式--------------------------------------------------------------------
//"函數就是物件"
//任何你可以對其他的型別(物件、布林、字串、數值....)作的事情，都可以對函式做


function greeting() {
	console.log('Hello')
}

greeting.language = 'English';  //函數就是物件，所以他也可以用點運算子傳入變數
console.log(greeting.language);  //English 函數也可以使用物件可使用的功能



console.log('----------')
//--------
function log(a){
	a();
}  //假設傳入的值是函數，這個函數的功能是呼叫該函數

var anonymousGreet = function(){
	console.log('Hi');
}  //建立匿名函數

log(anonymousGreet);  //把函數傳入另一個函數，在這裡是用變數名稱呼叫匿名函數


//這次直接把整個函數塞進去，為什麼可以執行?
//因為函數就是物件。既然變數名加上()括號可以呼叫；物件(函數)直接加上()當然也可以呼叫
log(function(){
	console.log('Hola');
})  //Hola  




console.log('----------');


//------by value & by reference---------------------------------------------------

//by value  一般的變數是by value
var testValue = 3;
var testValue2;

testValue2 = testValue;  //當相等時，JS會創造出一個"複製的純值"，而testValue2是指向這個複製的值
console.log(testValue2);  //3

testValue = 5;  //因此當記憶體中原始位置的值改變時，並不會改到複製位置的值
console.log(testValue2);  //3


//by reference  物件都是採用by reference的方式
var testObj = {
	name: 'Victor',
}
var testObj2;

testObj2 = testObj;  //跟一般變數不同，物件相等時，會指向記憶體中同一個位置的值
console.log(testObj2);  //Victor

testObj.name = 'Ikea';  //因此原始位置的值改變時 testObj2的值跟著一起改變了
console.log(testObj2);  //Ikea


function changeName(obj){
	obj.name = 'Mr.Stupid';  
}
changeName(testObj2);  //就算是用函數改變物件內的值，因為記憶體參照的位置是一樣的，所以值也會跟著改變

console.log(testObj);  //Mr.Stupid


testObj = {
	name: 'Dodo',  //但是如果用等號運算子創造一個新的值，則會新設定一個記憶體空間，就不會和原本共用同一個值了
}
console.log(testObj);
console.log(testObj2);




console.log('----------')
//------函式練習1---------------------------------------------------

function greet2(firstName, lastName , language){
	//設定初始值為en
	language = language || 'en';

	if(language === 'en'){
		console.log(`Hello! ${firstName} ${lastName}.`);
	} ;
	if(language === 'es'){
		console.log(`Hola! ${firstName} ${lastName}.`);
	} ;
}

greet2('Victor' , 'Kuo' )


function greetEnglish(firstName , lastName){
	greet2(firstName , lastName , 'en')
}
function greetSpanish(firstName , lastName){
	greet2(firstName , lastName , 'es')
}

greetSpanish('Victor' , 'Kuo');



console.log('----------');
//------立即呼叫的函數表達式(IIFE)---------------------------------------------------

var greet3 = function(name){
	return 'Hello ' + name
}('Victor');

console.log(greet3);

//另一種寫法

var name = 'Ikea';  //這裡的分號要小心一定要加，不然JS以為他是後面function的名字

(function (name){   //沒有名字的函數直接寫會出錯，所以把它包在括號裡。就算陳述式有名字沒有括號，也不會有功能
	console.log('Hola ' + name);
}(name));  //IIFE


function greet4(name){   //沒有功能，JS把這裡視作一個陳述式後面加上一個(參數)
	console.log('Hola ' + name);
}(name);



console.log('----------');
//------立即呼叫的函數表達式(IIFE)的應用---------------------------------------------------

var greeting2 = 'Hola ';  //使用IIFE的好處是在函數中的變數greeting2不會影響到全域變數的greeting2就可以執行函數

(function(name) {
	var greeting2 = 'HI ';
	console.log(greeting2 + name);
}('Ikea'));


//如果想要在IIFE中影響全域的變數?(這邊在sublime text跑不出來會出錯，但是在瀏覽器可以看)
(function(global , name){
	global.greeting2 = 'Yo '   //他會覆蓋'Hola '
    console.log(greeting2 + name)
}(window , 'Ikea'));

console.log(greeting2)