/*press ctrl + B to open console */

//.forEach 把所有內容都執行一次
let fruits =  ['Apple' , 'Banana' , 'Pineapple' , 'Orange' , 'Tomato'];

fruits.forEach( function(fruit){
	console.log('I like to eat ' + fruit);
});

console.log('----');


//Arrow function
//.map* 把所有內容都執行一次，並回傳一個陣列
let bigNumbers = [ 100 , 200 , 300 , 400 , 500 ];

let smallNumbers = bigNumbers.map( number => number / 100)

console.log(smallNumbers);

console.log('----');


//.filter 把內容做出篩選，並回傳一個陣列
let randomNumber = [ 1000 , 5000 , 5500 , 6000 , 8000 , 10000 ];

let biggerThenFiveK = randomNumber.filter( number => number > 5000);

console.log(biggerThenFiveK);

console.log('----');


//.every 如果全部符合條件則回傳true
let names = [ 'David' , 'Victor' , 'Christna' , 'Gordan' , 'Olivor' ];

console.log( names.every( name => names.length >= 5));

console.log('----');


//.some 如果其中有一個符合條件則回傳true
let randomObject = [ 'Tomato' , 'Victor' , 500 , true , 'Pug' , 1234];

let isNumber = randomObject.some( numbered => typeof numbered === 'number');

let numberInRandomObject = randomObject.filter( numbers => typeof numbers === 'number');

console.log(isNumber);

console.log(numberInRandomObject);


//其他迭代器https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array 