//閉包closures---------------------------------

function greet1(whatToSay) {
	return function(name){
		console.log(whatToSay + ' ' + name);
	}
};

greet1('Hola')('Ikea')   //這樣可以安全的執行greet1


//閉包的特性
var sayHi = greet1('Hi');   //在這邊greet1('Hi')已經執行完了，理論上Hi應該在greet1執行完之後就跟著執行堆一起清除了

sayHi('Victor');   //Hi Victor 但是Hi卻留到這邊



console.log('----------');
//閉包範例---------------------------------

function buildFunctions(){
	
	var arr = []

    for(var i = 0 ; i < 3 ; i++){
    	arr.push(
            function() {
            	console.log(i);  //此時console.log並沒有log出數字，只有在arr陣列中填入三個function
            }
            )
    }
    return arr;
}

var fs = buildFunctions();  //在這邊用括號呼叫buildFunctions，並且執行完了。for迴圈跑到'3'停下，存在記憶體中的值是'3'

fs[0]();   //3
fs[1]();   //3
fs[2]();   //3 此時執行fs，在記憶體的位置中找到的值只有3(自由變數---指可以在function外取用的變數) 



console.log('----------');
//如果再ES6我想要得到0 1 2

function buildFunctions2(){
	
	var arr = []

    for(var i = 0 ; i < 3 ; i++){
    	let j = i;  //let的特性: j的取用範圍只有在{}中，他在記憶體中產生三個位置0 1 2
    	arr.push(
            function() {
            	console.log(j);  //此時console.log並沒有log出數字，只有在arr陣列中填入三個function
            }
            )
    }
    return arr;
}

var fs2 = buildFunctions2();  

fs2[0]();   //0
fs2[1]();   //1
fs2[2]();   //2 



console.log('----------');
//在ES5我想要得到0 1 2

function buildFunctions3(){
	
	var arr = []

    for(var i = 0 ; i < 3 ; i++){
    	arr.push(
            (function(j){
            	return function(){
            		console.log(j);
            	}
            }(i))   //利用IIFE立即執行三次函數，創造了三個執行環境，存入三個j在不同的記憶體位置。而範例一因為沒有執行所以沒有執行環境可以儲存
        )
    }
    return arr;
}

var fs3 = buildFunctions3();  

fs3[0]();   //0
fs3[1]();   //1
fs3[2]();   //2 



console.log('----------');
//測試1

function factory(x){
	return function(y){
		console.log(x + y);
	}
}

var add5 = factory(5);

var add7 = factory(7);

add5(2)
add7(10)



//測試2

function sayHiLater(){
	var greeting = 'Hi!';
	setTimeout(function(){
		console.log('----------');
		console.log(greeting);
	},3000);
}

sayHiLater();  //執行sayHiLater函數，0.2秒左右就執行完了，因為閉包，計時器在三秒後仍可以取用到外部的greeting



console.log('----------');
//回呼含數Callback Function------------------------------

function tellMeWhenDone(callback){
	console.log('Not done yet')   //隨便一些程式
	callback();
}

tellMeWhenDone(function(){
	console.log('Done!');
})



console.log('----------');
//callback 測試

function addB ( a, b , cb){
	return cb(a , b)
}

function callbackTest( a , b ){
	console.log( a + b );
}

addB(3,5,callbackTest)


console.log('----------');
//.bind() .call() .apply()------------------------------
//註:因為this方法是物件的方法，如果在function中使用，會參照到該函數的外部物件
//除非function外部是一個物件 否則會參照到全域變數
//因此可以使用bind call apply方法來解決這個問題

//.bind()
var testObj1 = {
	firstName : 'Victor',
	lastName : 'Kuo',
	fullName : function(){
		return this.firstName + ' ' + this.lastName;   //在這個函數裡的this是參照到外部物件的參數
	}
}   

console.log(testObj1.fullName());  //Victor Kuo


var logNameAndGender = function(gender){
	console.log(this.fullName() + ' is a ' + gender)   //這裡的this如果直接寫會參照到全域的變數
}.bind(testObj1 , 'boy')   //如果使用.bind方法，該函數的this會傳遞到.bind的第一個參數

logNameAndGender();  //Victor Kuo is a boy

var copyOfLogNameAndGender = logNameAndGender.bind(testObj1);   //另一種方法，複製一個原本的函數
copyOfLogNameAndGender();


//.call()
var logFirstNameAndTwoFriend = function( friendA, friendB ){
	console.log(this.firstName + ',' + friendA + ' and ' + friendB + ' are friends.');  //這個函數直接執行會出現undefined
}

logFirstNameAndTwoFriend.call(testObj1, 'Ikea' , 'Dodo');  //使用.call()方法可以帶入this的值


//.call另一種方法，加上括號讓陳述式變成表達式，並且用.call()直接執行他
(function(gender){
	console.log(this.fullName() + ' is a ' + gender)   
}).call(testObj1 , 'boy')


//.apply()
var logLastNameAndTwoFamilies = function( familyA , familyB ){
	console.log(`${this.lastName} is ${this.firstName}, ${familyA} and ${familyB}'s last name. `)  //這個函數直接執行會出現undefined
}

logLastNameAndTwoFamilies.apply(testObj1 , ['Celine' , 'Mr.Stupid'] )  //.apply方法和.call幾乎一樣，除了第二個以後的參數必須要以'陣列的形式寫入'



//實際使用例子--函式借用

var testObj2 = {
	firstName : 'Celine',
	lastName : 'Kuo',
	//和第一個物件不同的是這個物件沒有fullName函式
	}

console.log(testObj1.fullName.call(testObj2));  //利用第一個物件裡的函式中的this，把第二個函式指定給他