//prototype

var a = {};
var b = function(){};
var c = [];

console.log(a)

//__proto__

var person = {
	firstName: 'defult',
	lastName: 'defult',
	getFullName(){
		return this.firstName + ' ' + this.lastName;
	}
}

var john = {
	firstName: 'John',
	lastName: 'Doe',
}

//不要使用這個方法 範例用(請使用函數建構式↓↓↓)
john.__proto__ = person;   //設定john的原型是person

console.log(john.getFullName())  //John Doe


//使用for in方法 迭代所有在物件中的屬性
for(var prop in john){
	//使用hasOwnProperty物件方法確認prop是只存在於john裡面的屬性
	//不然他會到原型鍊裡面去找，會多一個getFullName()
	if (john.hasOwnProperty(prop)){  

		//john[prop] 這裡一定要用中括號 使用.會出現undefined
		console.log( prop + ': ' + john[prop]);  //firstName: John  lastName: Doe
	}
}


console.log('----------');
//使用函數建構式 建立物件與其原型

//函數建構式就是一般的函數 其中的this會在被調用後變成新物件的屬性與變數
//習慣上 函數建構式的開頭大寫
var PersonConstructer = function(firstName , lastName){
	console.log(this);
	//一般在函數中的this不會指向函數本身 在這裡是用做函數建構物件才會這樣寫
    this.firstName = firstName;  
    this.lastName = lastName;
    console.log('This function is invoked!')  //表示函數真的有被調用
}

//事實上 所有的函數在創建時都有一個prototype屬性 但是平常不會用到
//只有當他在做為函數建構式使用時 這個屬性才有意義
//而此時函數的.prototype不會指向函數本身的原型屬性(函數的原型可使用__proto__來調用)
//而是新創建物件的原型
//好處是就算有一千個新物件 但僅有一個getFullName方法位於物件原型中 
//用以節省記憶體及提升效能 因此習慣是屬性寫在物件中 方法寫在prototype裡
PersonConstructer.prototype.getFullName = function(){
	return this.firstName + ' ' + this.lastName;
}

//注意:在這裡一定要記得寫new 不然他會不知道victor是物件 會出錯而且不容易除錯(所以要大寫)
var victor = new PersonConstructer('Victor' , 'Kuo')
console.log(victor);
console.log(victor.getFullName());

var ikea = new PersonConstructer('Ikea' , 'Chiu')
console.log(ikea);
console.log(ikea.getFullName());


console.log('----------');
//測試一下如果在函數中寫this 他的指向會是在哪裡? A:會指向其外部環境 在這裡是全域變數
var testA = function(){
	this.nemae = 'A';
	console.log(this);  //this會指向window 也就是全域變數
}

var B = new testA();  //使用new方法 此時的testA是一個函數建構式 因此this會指向物件本身

console.log(B)  //testA { nemae: 'A' }
console.log(B.nemae)  //A



console.log('----------');
//Stirng,Date,Number等內建的功能 其實也都是函數建構式
var aa = new String('aaaaa');

//在內建函數建構式的原型中新增方法
//許多資源庫也用這種方法新增功能
String.prototype.isLengthGreaterThen = function(limit){
	return this.length > limit;
}

console.log(aa.isLengthGreaterThen(3))  //true



console.log('----------');
//原型繼承 Object.create()

var personObj = {
	firstName: 'default',
	lastName: 'default',
	sayHi: function(){
		return 'Hi! ' + this.firstName;
	}
}

personObj.sayBye = function(){
	return 'Bye! ' + this.firstName;
}

var jonny = Object.create(personObj);  //利用原型繼承 jonny會繼承personObj為他的原型


console.log(jonny);  //object
console.log(jonny.sayHi());  //Hi! default
console.log(jonny.sayBye());  //Bye! default



console.log('----------');
//Polyfill: 如果舊瀏覽器不支援 Object.create()

//如果Object.create不存在(undefined) 則執行以下
if(!Object.create){   
	//Object.create 為一個函數 他帶入的變數為新物件的原型
	Object.create = function(proto){
		//只能取用第一個變數作為新物件的原型
		if (arguments > 1 ){
			throw new Error('Only accept one argument')
		}
		//創造一個空函數作為函數建構式
        function F(){};
        //而這個函數建構式所建立新物件的原型是剛剛帶入的變數proto
        F.prototype = proto;
        //創建新物件並返回
        return new F();	
	}  
}  //等於是用函數建構式去定義原本Object.create應該做的事情



console.log('----------');
//ES6以後有class和constructor的用法

//class實際上仍然是創造出一個物件 用來做為其他物件的原型使用
//功能和Object.create一樣 只是JS的語法糖
//詳細操作class請去看codacademy
class Person {
	constructor( firstName , lastName ){
		this.firstName = firstName;
		this.lastName = lastName;
	}
	greet(){
		return 'Hi! ' + this.firstName;
	}
}

var marry = new Person( 'Marry' , 'Rose' );

console.log(marry);  //Person { firstName: 'Marry', lastName: 'Rose' }
console.log(marry.greet())  //Hi! Marry